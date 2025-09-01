
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { cvData } from '../data';

export default function Header() {
  const { personal } = cvData;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
      <div className="w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 flex items-center justify-center text-white text-6xl font-extrabold select-none">
        {personal.initials}
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-900">{personal.name}</h1>
        <p className="text-2xl text-indigo-700 font-semibold">{personal.title}</p>
        <div className="mt-3 flex justify-center md:justify-start space-x-6 text-indigo-600">
          <a href={personal.github} aria-label="GitHub" className="hover:text-indigo-900">
            <FaGithub size={24} />
          </a>
          <a href={personal.linkedin} aria-label="LinkedIn" className="hover:text-indigo-900">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-indigo-900">
            <FaEnvelope size={24} />
          </a>
          <a href={`tel:${personal.phone}`} aria-label="Phone" className="hover:text-indigo-900">
            <FaPhone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
