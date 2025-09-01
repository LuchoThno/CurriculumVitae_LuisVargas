
import { cvData } from '../data';

export default function Educacion() {
  const { education } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Educación</h2>
      {education.map((edu, index) => (
        <div key={index} className="bg-indigo-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-indigo-900">{edu.degree}</h3>
          <p className="text-indigo-700 font-semibold text-lg">{edu.institution}</p>
          <p className="text-gray-700">{edu.period}</p>
        </div>
      ))}
    </section>
  );
}
