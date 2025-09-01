import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { cvData } from '../data';

export default function Contact() {
  const { personal } = cvData;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Contacto</h2>
      <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-indigo-600 mr-3" size={24} />
            <div>
              <p className="font-semibold text-indigo-900">Ubicación</p>
              <p className="text-gray-700">{personal.location}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-indigo-600 mr-3" size={24} />
            <div>
              <p className="font-semibold text-indigo-900">Email</p>
              <a href={`mailto:${personal.email}`} className="text-gray-700 hover:text-indigo-600">
                {personal.email}
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-indigo-600 mr-3" size={24} />
            <div>
              <p className="font-semibold text-indigo-900">Teléfono</p>
              <a href={`tel:${personal.phone}`} className="text-gray-700 hover:text-indigo-600">
                {personal.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
