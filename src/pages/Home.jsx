import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Out & Beyond
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience culinary excellence beyond boundaries
            </p>
            <a
              href="#reservation"
              className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
            >
              Reserve a Table
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Out & Beyond was born from a passion for creating extraordinary dining experiences.
                Our innovative approach to cuisine combines traditional flavors with modern techniques,
                taking you on a culinary journey that transcends ordinary boundaries.
              </p>
              <p className="text-gray-600">
                Every dish tells a story, every meal creates a memory, and every visit promises
                an adventure in taste and ambiance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Restaurant interior"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;