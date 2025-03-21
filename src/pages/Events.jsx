import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    date: "March 15, 2024",
    time: "7:00 PM",
    description: "Join us for an exclusive wine tasting featuring premium selections from renowned vineyards.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    title: "Chef's Special Dinner",
    date: "March 20, 2024",
    time: "6:30 PM",
    description: "Experience a unique 5-course tasting menu created by our award-winning chef.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    title: "Live Jazz Night",
    date: "March 25, 2024",
    time: "8:00 PM",
    description: "Enjoy smooth jazz performances while savoring our specially curated menu.",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const Events = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-center mb-12">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{event.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4 text-gray-600">
                  <span className="mr-4">{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-primary text-white py-2 rounded-full hover:bg-opacity-90 transition-colors">
                  Reserve Your Spot
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;