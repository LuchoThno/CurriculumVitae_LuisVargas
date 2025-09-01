import { FaExternalLinkAlt } from 'react-icons/fa';
import { cvData } from '../data';

export default function Projects() {
  const { projects } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-900 font-medium"
              >
                Ver Proyecto <FaExternalLinkAlt className="ml-2" size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
