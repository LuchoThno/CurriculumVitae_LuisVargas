import { motion } from 'framer-motion';
import Certificaciones from './components/Certificaciones';
import Contact from './components/Contact';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Languages from './components/Languages';
import Perfil from './components/Perfil';
import Projects from './components/Projects';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center p-4 md:p-8">
      <motion.div
        className="max-w-4xl bg-white shadow-2xl rounded-3xl p-6 md:p-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}><Header /></motion.div>
        <motion.div variants={itemVariants}><Perfil /></motion.div>
        <motion.div variants={itemVariants}><Habilidades /></motion.div>
        <motion.div variants={itemVariants}><Experiencia /></motion.div>
        <motion.div variants={itemVariants}><Educacion /></motion.div>
        <motion.div variants={itemVariants}><Certificaciones /></motion.div>
        <motion.div variants={itemVariants}><Projects /></motion.div>
        <motion.div variants={itemVariants}><Languages /></motion.div>
        <motion.div variants={itemVariants}><Contact /></motion.div>
        <motion.div variants={itemVariants}><Footer /></motion.div>
      </motion.div>
    </div>
  );
}

export default App;
