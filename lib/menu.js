// Edit menu items and prices from this single file.
// Prices in Indian Rupees (₹).

export const CATEGORIES = [
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  { id: 'pizza', name: 'Pizza (8-inch)', emoji: '🍕' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝' },
  { id: 'fries', name: 'French Fries', emoji: '🍟' },
  { id: 'wraps', name: 'Wraps', emoji: '🌯' },
  { id: 'nuggets', name: 'Cheese Burst Nuggets', emoji: '🍗' },
  { id: 'combos', name: 'Combos', emoji: '🥤' },
];

export const MENU = [
  // BURGERS
  { id: 'b1', category: 'burgers', name: 'Crispy Veg Patty Burger', price: 69, veg: true, desc: 'Golden crispy veg patty, lettuce, and Mezbaan sauce.', image: 'https://images.pexels.com/photos/11354487/pexels-photo-11354487.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'b2', category: 'burgers', name: 'Paneer Crunch Burger', price: 139, veg: true, desc: 'Crunchy paneer patty layered with tangy mayo.', image: 'https://images.pexels.com/photos/10296492/pexels-photo-10296492.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'b3', category: 'burgers', name: 'Classic Chicken Burger', price: 129, veg: false, desc: 'Juicy chicken patty with fresh veggies and cheese.', image: 'https://images.pexels.com/photos/6850423/pexels-photo-6850423.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'b4', category: 'burgers', name: 'Chicken Zinger Burger', price: 149, veg: false, desc: 'Fiery spiced zinger fillet, extra crunch, extra flavour.', popular: true, image: 'https://images.pexels.com/photos/12664796/pexels-photo-12664796.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // PIZZA
  { id: 'p1', category: 'pizza', name: 'Veg Classic Corn & Cheese', price: 149, veg: true, desc: 'Sweet corn, gooey mozzarella on a hand-tossed base.', image: 'https://images.pexels.com/photos/11975887/pexels-photo-11975887.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'p2', category: 'pizza', name: 'Farmhouse Delight', price: 169, veg: true, desc: 'Onion, capsicum, tomato, mushroom & mozzarella.', image: 'https://images.pexels.com/photos/5640020/pexels-photo-5640020.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'p3', category: 'pizza', name: 'Mezbaan Royal Paneer', price: 189, veg: true, desc: 'Tandoori paneer, onion, capsicum on rich cheesy base.', image: 'https://images.pexels.com/photos/19081127/pexels-photo-19081127.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'p4', category: 'pizza', name: 'Mezbaan Chicken Supreme', price: 249, veg: false, desc: 'Loaded chicken, onion & extra cheese pull.', popular: true, image: 'https://images.pexels.com/photos/35123984/pexels-photo-35123984.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'p5', category: 'pizza', name: 'Mezbaan Loaded Chicken Feast', price: 299, veg: false, desc: 'Triple chicken toppings — for the true carnivore.', image: 'https://images.pexels.com/photos/33457529/pexels-photo-33457529.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // PASTA
  { id: 'pa1', category: 'pasta', name: 'Creamy White Sauce Pasta', price: 129, veg: true, desc: 'Silky Alfredo sauce with herbs and cheese.', image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'pa2', category: 'pasta', name: 'Classic Red Sauce Pasta', price: 129, veg: true, desc: 'Tangy tomato-basil sauce, Italian herbs.', image: 'https://images.pexels.com/photos/5419339/pexels-photo-5419339.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'pa3', category: 'pasta', name: 'Creamy Chicken White Sauce Pasta', price: 179, veg: false, desc: 'Grilled chicken chunks in creamy Alfredo.', image: 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'pa4', category: 'pasta', name: 'Creamy Chicken Red Sauce Pasta', price: 179, veg: false, desc: 'Chicken tossed in spicy red arrabiata.', image: 'https://images.pexels.com/photos/10165780/pexels-photo-10165780.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // FRIES
  { id: 'f1', category: 'fries', name: 'French Fries', price: 69, veg: true, desc: 'Golden salted classic — crispy outside, fluffy inside.', image: 'https://images.pexels.com/photos/29150162/pexels-photo-29150162.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'f2', category: 'fries', name: 'Peri Peri Fries', price: 89, veg: true, desc: 'Fiery peri peri seasoning tossed to perfection.', image: 'https://images.pexels.com/photos/35123981/pexels-photo-35123981.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'f3', category: 'fries', name: 'Loaded Fries', price: 130, veg: true, desc: 'Cheese, jalapeños, sauces — fully loaded.', popular: true, image: 'https://images.pexels.com/photos/20535802/pexels-photo-20535802.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // WRAPS
  { id: 'w1', category: 'wraps', name: 'Chicken Wrap', price: 69, veg: false, desc: 'Tender chicken, veggies and creamy sauce wrapped tight.', image: 'https://images.pexels.com/photos/16022887/pexels-photo-16022887.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'w2', category: 'wraps', name: 'Chicken Fry Wrap', price: 89, veg: false, desc: 'Crispy fried chicken strips in a warm wrap.', image: 'https://images.pexels.com/photos/14979832/pexels-photo-14979832.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // NUGGETS
  { id: 'n1', category: 'nuggets', name: 'Cheese Burst Nuggets — 6 Pieces', price: 109, veg: false, desc: 'Signature cheese burst nuggets. Molten centre.', image: 'https://images.pexels.com/photos/20535804/pexels-photo-20535804.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 'n2', category: 'nuggets', name: 'Cheese Burst Nuggets — 9 Pieces', price: 149, veg: false, desc: 'More cheesy goodness for sharing.', image: 'https://images.pexels.com/photos/11710530/pexels-photo-11710530.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'n3', category: 'nuggets', name: 'Cheese Burst Nuggets — 12 Pieces', price: 189, veg: false, desc: 'The full feast — 12 molten-cheese bombs.', image: 'https://images.pexels.com/photos/31300944/pexels-photo-31300944.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // COMBOS
  { id: 'c1', category: 'combos', name: 'Veg Burger + Fries + Drink', price: 119, veg: true, desc: 'The value combo — burger, fries & drink.', image: 'https://images.pexels.com/photos/31300948/pexels-photo-31300948.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'c2', category: 'combos', name: 'Chicken Patty Burger + Fries + Drink', price: 169, veg: false, desc: 'Classic chicken combo with all sides.', image: 'https://images.pexels.com/photos/11975899/pexels-photo-11975899.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'c3', category: 'combos', name: 'Chicken Zinger Burger + Fries + Drink', price: 199, veg: false, desc: 'Spicy zinger combo — hunger, meet fire.', popular: true, image: 'https://images.pexels.com/photos/35991523/pexels-photo-35991523.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'c4', category: 'combos', name: '6 Nuggets + Fries + Drink', price: 149, veg: false, desc: 'Cheese burst nuggets combo — snack heaven.', image: 'https://images.pexels.com/photos/18713430/pexels-photo-18713430.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const BRAND = {
  name: 'Mezbaan',
  tagline: 'Freshly Crafted. Honestly Served.',
  address: 'Abul Fazal Enclave, Jamia Nagar, New Delhi',
  phone: '+91 8595244548',
  phoneRaw: '918595244548', // for WhatsApp (no +)
  website: 'mezbaaan.in',
};
