
import { cvData } from '../data';

export default function Perfil() {
  const { profile } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Perfil</h2>
      <p className="text-gray-800 text-lg leading-relaxed">
        {profile}
      </p>
    </section>
  );
}
