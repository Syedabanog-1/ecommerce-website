import React from "react";


// Static Product Data - 12 Products
const productData = [

  {
    key: 1,
    img: "/stylish-Jacket.png",
    title: "Stylish Jacket",
    desc: "Perfect for all seasons, this jacket adds a modern touch to any outfit.",
    rating: 4.5,
    price: "$50",
  },
  {
    key: 2,
    img: "/modern-Shoes.png",
    title: "Modern Shoes",
    desc: "Comfortable and stylish shoes perfect for everyday wear.",
    rating: 4.8,
    price: "$70",
  },
  {
    key: 3,
    img: "/classic-Watch.png",
    title: "Classic Watch",
    desc: "A timeless accessory that adds elegance to your wrist.",
    rating: 4.7,
    price: "$120",
  },
  {
    key: 4,
    img: "/sunglasses.png",
    title: "Designer Sunglasses",
    desc: "Protect your eyes with these stylish and durable sunglasses.",
    rating: 4.6,
    price: "$80",
  },
  {
    key: 5,
    img: "/leather-Wallet.png",
    title: "Leather Wallet",
    desc: "Sleek and compact, this leather wallet fits all your essentials.",
    rating: 4.4,
    price: "$30",
  },
  {
    key: 6,
    img: "/bluetooth-Headphones.png",
    title: "Bluetooth Headphones",
    desc: "High-quality sound with noise cancellation for an immersive experience.",
    rating: 4.9,
    price: "$150",
  },
  {
    key: 7,
    img: "/sports-Sneakers.png",
    title: "Sports Sneakers",
    desc: "Lightweight and durable sneakers designed for maximum comfort.",
    rating: 4.3,
    price: "$95",
  },
  {
    key: 8,
    img: "/Smartphone.png",
    title: "Smartphone",
    desc: "Latest technology with high performance and an incredible display.",
    rating: 4.8,
    price: "$600",
  },
  {
    key: 9,
    img: "/laptopBag.png",
    title: "Laptop Bag",
    desc: "Spacious and sturdy, ideal for carrying your laptop and accessories.",
    rating: 4.2,
    price: "$45",
  },
  {
    key: 10,
    img: "/digitalCamera.png",
    title: "Digital Camera",
    desc: "Capture high-quality photos and videos with this advanced camera.",
    rating: 4.7,
    price: "$350",
  },
  {
    key: 11,
    img: "/wireless-Earbuds.png",
    title: "Wireless Earbuds",
    desc: "Compact and comfortable, perfect for listening on the go.",
    rating: 4.5,
    price: "$80",
  },
  {
    key: 12,
    img: "/tablets.png",
    title: "tablets",
    desc: "A powerful tablet with a large screen for both work and entertainment.",
    rating: 4.6,
    price: "$300",
  },

];

const NewProducts = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div
            key={product.key}
            className="flex flex-col justify-between items-center border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ height: "100%" }} // Ensures equal height
          >
            <img
              src={product.img}
              alt={product.title}
              width={300} // Set the width
              height={300} // Set the height
              className="rounded-lg"
            />
            <div className="flex flex-col items-center text-center mt-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.desc}</p>
              <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐</p>
              <p className="text-gray-900 mt-2 font-bold">{product.price}</p>
            </div>
            <button className="bg-blue-600 text-white mt-4 py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;