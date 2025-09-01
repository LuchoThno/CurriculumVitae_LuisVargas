
import { cvData } from '../data';

export default function Experiencia() {
  const { experience } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Experiencia</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="bg-indigo-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900">{exp.title}</h3>
            <p className="text-indigo-700 font-semibold text-lg">{exp.company}</p>
            <p className="text-gray-700">{exp.period}</p>
            <p className="text-gray-800 mt-4 text-lg leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
