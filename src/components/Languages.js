import { cvData } from '../data';

export default function Languages() {
  const { languages } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Idiomas</h2>
      <ul className="bg-indigo-50 p-8 rounded-xl shadow-md space-y-4">
        {languages.map((lang, index) => (
          <li key={index} className="flex justify-between text-gray-800 text-lg font-semibold">
            <span>{lang.language}</span>
            <span className="text-indigo-700">{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
