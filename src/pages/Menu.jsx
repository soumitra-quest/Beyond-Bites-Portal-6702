import { useState } from 'react';
import { motion } from 'framer-motion';

const menuCategories = {
  starters: [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with wild mushrooms and truffle oil",
      price: 14,
      image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ocean Fresh Ceviche",
      description: "Fresh seafood marinated in citrus with avocado",
      price: 16,
      image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  mains: [
    {
      name: "Aged Prime Ribeye",
      description: "28-day aged beef with roasted vegetables",
      price: 42,
      image: "https://images.unsplash.com/photo-1546833998-877b37c3e21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Wild Caught Salmon",
      description: "Pan-seared with herb butter sauce",
      price: 34,
      image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  desserts: [
    {
      name: "Dark Chocolate Soufflé",
      description: "With vanilla bean ice cream",
      price: 12,
      image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard",
      price: 10,
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-center mb-12">Our Menu</h1>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-4 px-6 py-2 rounded-full capitalize ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCategories[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-bold text-primary">${item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;