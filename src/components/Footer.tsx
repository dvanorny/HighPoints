import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} My US Adventures</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:info@usadventures.com" 
              className="text-gray-300 hover:text-amber-400 transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/username" 
              className="text-gray-300 hover:text-amber-400 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;