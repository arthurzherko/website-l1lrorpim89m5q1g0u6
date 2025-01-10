import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p className="text-gray-600">&copy; 2024 FitTrack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;