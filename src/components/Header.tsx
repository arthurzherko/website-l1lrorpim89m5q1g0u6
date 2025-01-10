import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-white">FitTrack</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-x-6"
          >
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Features
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Pricing
            </Button>
            <Button variant="secondary">Download App</Button>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;