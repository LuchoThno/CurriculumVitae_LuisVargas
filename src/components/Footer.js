import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { cvData } from '../data';

export default function Footer() {
  const { personal } = cvData;
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          © 2024 {personal.name}. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={personal.github} aria-label="GitHub" className="text-indigo-600 hover:text-indigo-900">
            <FaGithub size={24} />
          </a>
          <a href={personal.linkedin} aria-label="LinkedIn" className="text-indigo-600 hover:text-indigo-900">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="text-indigo-600 hover:text-indigo-900">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
