
import { cvData } from '../data';

export default function Habilidades() {
  const { skills } = cvData;

  const skillLevels = {
    'React': 90,
    'Next.js': 85,
    'Vue.js': 70,
    'JavaScript': 95,
    'TypeScript': 80,
    'Tailwind': 90,
    'CSS3': 85,
    'Sass': 75,
    'Git': 90,
    'Figma': 70,
    'Webpack': 60,
    'Vite': 80
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-indigo-800 text-xl mb-3">Frontend</h3>
          <ul className="text-gray-700 text-lg space-y-2">
            {skills.frontend.map(skill => (
              <li key={skill} className="flex items-center justify-between">
                <span>{skill}</span>
                <div className="w-24 bg-gray-200 rounded-full h-2 ml-4">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skillLevels[skill] || 50}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-indigo-100 p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-indigo-800 text-xl mb-3">Estilos & Herramientas</h3>
          <ul className="text-gray-700 text-lg space-y-2">
            {[...skills.styles, ...skills.tools].map(skill => (
              <li key={skill} className="flex items-center justify-between">
                <span>{skill}</span>
                <div className="w-24 bg-gray-200 rounded-full h-2 ml-4">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skillLevels[skill] || 50}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
