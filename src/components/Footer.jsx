import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Out & Beyond</h3>
            <p className="text-gray-300">
              123 Culinary Street<br />
              Foodie City, FC 12345
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <p className="text-gray-300">
              Monday - Friday: 11am - 10pm<br />
              Saturday - Sunday: 10am - 11pm
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Out & Beyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;