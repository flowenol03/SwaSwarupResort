import React, { forwardRef } from 'react';

// Example luxurious menu data with correct image paths
const menuData = {
  appetizers: [
    {
      name: 'Caviar on Toasted Brioche',
      description: 'Delicately smoked salmon roe served on a crispy toasted brioche with a hint of dill and crème fraîche.',
      price: '$25.99',
      image: 'image/Brioche1.jpg' // Path from the public folder
    },
    {
      name: 'Foie Gras with Truffle Sauce',
      description: 'A rich, velvety foie gras seared to perfection and complemented by an exquisite black truffle sauce.',
      price: '$34.99',
      image: 'image/Brioche2.jpg' // Path from the public folder
    }
  ],
  mainCourses: [
    {
      name: 'Lobster Thermidor',
      description: 'Succulent lobster tail baked in a creamy mustard and cheese sauce, a perfect balance of richness and freshness.',
      price: '$59.99',
      image: 'image/Thermidor1.jpg' // Path from the public folder
    },
    {
      name: 'Wagyu Beef Filet',
      description: 'Premium Wagyu beef, expertly grilled and paired with a red wine reduction sauce, served with seasonal vegetables.',
      price: '$75.99',
      image: 'image/Thermidor2.jpg' // Path from the public folder
    }
  ],
  desserts: [
    {
      name: 'Chocolate Soufflé',
      description: 'A decadent, airy chocolate soufflé topped with a dusting of powdered sugar and served with vanilla bean ice cream.',
      price: '$19.99',
      image: 'image/Chocolate1.jpg' // Path from the public folder
    },
    {
      name: 'Golden Lemon Tart',
      description: 'A buttery crust filled with tangy lemon custard, garnished with edible gold leaf for a touch of luxury.',
      price: '$18.99',
      image: 'image/Chocolate2.jpg' // Path from the public folder
    }
  ]
};

const Menu = forwardRef((props, ref) => {
  return (
    <section id="menu" ref={ref} style={{ backgroundColor: '#1d1d1d', padding: '60px 20px', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', fontFamily: 'Garamond, serif', color: '#FFD700', marginBottom: '30px' }}>Our Exquisite Menu</h2>
      <p style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#fff', marginBottom: '50px' }}>
        Indulge in a culinary journey crafted with the finest ingredients by our world-renowned chefs.
      </p>

      <div className="menu-categories" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {Object.keys(menuData).map((category) => (
          <div className="category" key={category} style={{ width: '30%', margin: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'Garamond, serif', color: '#FFD700', marginBottom: '20px' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            {menuData[category].map((item, index) => (
              <div className="menu-item" key={index} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '5px', marginRight: '20px' }} />
                <div className="item-details" style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', color: '#FFD700' }}>{item.name}</h4>
                  <p style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', color: '#bbb', marginBottom: '10px' }}>{item.description}</p>
                  <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', color: '#FFD700' }}>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Menu;
