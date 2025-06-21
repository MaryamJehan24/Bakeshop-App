const bakeryItems = [
  'Chocolate Cake', 'Croissant', 'Blueberry Muffin', 
  'Cinnamon Roll', 'Apple Pie', 'Red Velvet Cupcake',
  'Cheesecake', 'Donut', 'Macaron', 'Baguette',
  'Sourdough Bread', 'Pumpkin Pie', 'Eclair',
  'Cannoli', 'Tiramisu', 'Fruit Tart',
  'Pound Cake', 'Danish Pastry', 'Pretzel',
  'Bagel', 'Pancake', 'Waffle',
  'Biscotti', 'Pecan Pie', 'Lemon Bar',
  'Palmier', 'Madeleine', 'Profiterole',
  'Stollen', 'Brioche'
];

// Manually mapped image URLs (make sure these are safe and accessible)
const imageLinks = {
  'Chocolate Cake': 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg',
  'Croissant': 'https://th.bing.com/th/id/R.b646fb97a40983872cad253a45961947?rik=8tEiNR8Zc9AOAQ&pid=ImgRaw&r=0',
  'Blueberry Muffin': 'https://th.bing.com/th/id/OIP.aRj4XsYYpG_MQ7hroIMaFwHaJ0?r=0&rs=1&pid=ImgDetMain',
  'Cinnamon Roll': 'https://bing.com/th?id=OSK.60fd50d9edbc9cc09387b68a94cc004f',
  'Apple Pie': 'https://images.unsplash.com/photo-1608759266161-bb49c7b36f0chttps://th.bing.com/th/id/OIP.xXtGJh85hhLVjc7xTQ4RnQHaLH?r=0&rs=1&pid=ImgDetMain',
  'Red Velvet Cupcake': 'https://th.bing.com/th/id/OIP.2jrRLUtL91zKubu1DwslEgHaLH?r=0&rs=1&pid=ImgDetMain',
  'Cheesecake': 'https://th.bing.com/th/id/R.903d84df91df3b8198035b762c16b608?rik=T74%2bWBwLJY8QAQ&pid=ImgRaw&r=0',
  'Donut': 'https://th.bing.com/th/id/OIP.A_0GlxTp0FqfKjoOORMFZQHaHa?r=0&rs=1&pid=ImgDetMain',
  'Macaron': 'https://th.bing.com/th/id/R.42c722dc1080a65d41502bdfb7458d46?rik=YpAa8twHE8CwQQ&riu=http%3a%2f%2fepicureandculture.com%2fwp-content%2fuploads%2f2014%2f12%2fMacaron-photo-3.jpg&ehk=69MPfzF2NgYnfXyYSnusIZzqICRutwkVijlyXnUIyB0%3d&risl=&pid=ImgRaw&r=0',
  'Baguette': 'hhttps://th.bing.com/th/id/R.72d39c0c3e842449cba0e74b26fd0d38?rik=X9YXWFQfYRTzsQ&pid=ImgRaw&r=0',
  'Sourdough Bread': 'https://cdn.momsdish.com/wp-content/uploads/2022/05/Whole-Wheat-Sourdough-Bread-07.jpg',
  'Pumpkin Pie': 'https://www.marthastewart.com/thmb/LLTqFw21NbnEESedR4oEeizpuT8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MSL-1511079-pumpkin-pie-hero-3x2-11511-c9c4b6f36f6544578ea9166ae998b1af.jpeg',
  'Eclair': 'https://sallysbakingaddiction.com/wp-content/uploads/2018/09/eclairs-pastry-cream-1024x1536.jpg',
  'Cannoli': 'https://bakerbynature.com/wp-content/uploads/2016/11/untitled-54-of-101.jpg',
  'Tiramisu': 'https://i0.wp.com/mediterraneantaste.com/wp-content/uploads/2023/11/tiramisu-4583.jpg?resize=1024%2C683&ssl=1',
  'Fruit Tart': 'https://hips.hearstapps.com/hmg-prod/images/fruit-tart-recipe-3-1650464619.jpg?crop=0.8888888888888888xw:1xh;0.0240xw,0.00641xh&resize=980:*',
  'Pound Cake': 'https://www.southernliving.com/thmb/5tbBkrEAu72yqsM2k2EPmNQOlzc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Grandbys_Sour_Cream_Pound_Cake_011-78f4d9b11677495bb598741549504292.jpg',
  'Danish Pastry': 'https://www.sugarsaltmagic.com/wp-content/uploads/2021/07/Custard-Danish-Pastry-Recipe-1FEAT-680x680.jpg',
  'Pretzel': 'https://handletheheat.com/wp-content/uploads/2021/09/soft-pretzel-recipe-SQUARE-1536x1536.jpg',
  'Bagel': 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipes%2F2020-08-how-to-make-bagels%2F2020_howto_bagels_shot14_197',
  'Pancake': 'https://th.bing.com/th/id/R.af28da1e81acbcce95736033f35f6862?rik=s1XvIjA098IMzg&pid=ImgRaw&r=0',
  'Waffle': 'https://th.bing.com/th/id/OIP.Ahjsg1iQp_mlRpornFHHhwHaEA?r=0&rs=1&pid=ImgDetMain',
  'Biscotti': 'https://th.bing.com/th/id/OIP.lpnaIb7StK8NYSEGIjGCEwHaJ4?r=0&rs=1&pid=ImgDetMain',
  'Pecan Pie': 'https://th.bing.com/th/id/OIP.N6HwdvQmYTcHEoODiW-vzwHaHa?r=0&rs=1&pid=ImgDetMain',
  'Lemon Bar': 'https://th.bing.com/th/id/R.cc717ecdae18f11268fee8b32d2f412e?rik=k3LdSJCmfyJrSg&pid=ImgRaw&r=0',
  'Palmier': 'https://images.unsplash.com/photo-1590080875962-799ba60be27a',
  'Madeleine': 'https://images.unsplash.com/photo-1638863185744-015168e19b4a',
  'Profiterole': 'https://images.unsplash.com/photo-1584270354949-bd84d5746aa6',
  'Stollen': 'https://images.unsplash.com/photo-1607703703565-ec121c30d518',
  'Brioche': 'https://images.unsplash.com/photo-1625819018022-8a5f5b9e2a53',
};

const products = bakeryItems.map((item, index) => ({
  id: index + 1,
  name: item,
  description: 'Delicious and freshly baked!',
  price: 250,
  image: `${imageLinks[item]}?auto=format&fit=crop&w=300&h=300&q=80`, // optimized
  category: index % 2 === 0 ? 'Bakery' : 'Pastry',
  rating: (Math.random() * 5).toFixed(1)
}));

export default products;
