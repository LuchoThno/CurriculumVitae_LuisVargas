
import { cvData } from '../data';

export default function Certificaciones() {
  const { certifications } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Certificaciones</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="bg-indigo-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-indigo-900">{cert.title}</h3>
          <p className="text-indigo-700 font-semibold text-lg">{cert.issuer}</p>
          <p className="text-gray-800 mt-4 text-lg leading-relaxed">{cert.description}</p>
        </div>
      ))}
    </section>
  );
}
