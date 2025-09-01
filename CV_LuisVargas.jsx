
export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center p-8">
      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-10">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full mr-8 flex items-center justify-center text-white text-6xl font-extrabold select-none">
            LV
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900">Luis Elías Vargas Vergara</h1>
            <p className="text-2xl text-indigo-700 font-semibold">Frontend Developer</p>
            <div className="mt-3">
              <a href="https://github.com/LuchoThno" className="text-indigo-600 hover:text-indigo-900 flex items-center font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub: LuchoThno
              </a>
            </div>
          </div>
        </div>

        {/* Perfil */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Perfil</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Desarrollador frontend con experiencia en React, TypeScript y Tailwind, 
            creando aplicaciones escalables y con excelente experiencia de usuario. 
            Profesional con 20 años de experiencia en Administración Marítima en la Armada de Chile, 
            actualmente pensionado y estudiando Ingeniería en Computación e Informática, con pasión por la tecnología y el desarrollo web.
          </p>
        </section>

        {/* Habilidades */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-indigo-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-indigo-800 text-xl mb-3">Frontend</h3>
              <ul className="text-gray-700 text-lg list-disc list-inside space-y-1">
                <li>React, Next.js, Vue.js</li>
                <li>JavaScript, TypeScript</li>
              </ul>
            </div>
            <div className="bg-indigo-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-indigo-800 text-xl mb-3">Estilos & Herramientas</h3>
              <ul className="text-gray-700 text-lg list-disc list-inside space-y-1">
                <li>Tailwind, CSS3, Sass</li>
                <li>Git, Figma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Experiencia</h2>
          <div className="space-y-8">
            <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-indigo-900">Frontend Developer</h3>
              <p className="text-indigo-700 font-semibold text-lg">Freelance</p>
              <p className="text-gray-700">2022 - Actualidad</p>
              <p className="text-gray-800 mt-4 text-lg leading-relaxed">Construcción de aplicaciones web modernas con React y Tailwind, enfocándome en la escalabilidad y experiencia de usuario.</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-indigo-900">Profesional de Administración Marítima</h3>
              <p className="text-indigo-700 font-semibold text-lg">Armada de Chile</p>
              <p className="text-gray-700">2003 - 2023 (Pensionado)</p>
              <p className="text-gray-800 mt-4 text-lg leading-relaxed">20 años de experiencia en administración marítima, gestión operativa y logística naval.</p>
            </div>
          </div>
        </section>

        {/* Educación */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Educación</h2>
          <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900">Ingeniería en Computación e Informática</h3>
            <p className="text-indigo-700 font-semibold text-lg">Universidad Gabriela Mistral</p>
            <p className="text-gray-700">2023 - Presente</p>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-indigo-700 pb-3 mb-6">Certificaciones</h2>
          <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-indigo-900">Backend Junior</h3>
            <p className="text-indigo-700 font-semibold text-lg">Bootcamp de ALura Latam</p>
            <p className="text-gray-800 mt-4 text-lg leading-relaxed">Certificación obtenida tras completar el bootcamp de desarrollo backend.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
