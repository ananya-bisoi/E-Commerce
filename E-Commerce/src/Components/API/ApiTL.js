import headphone from '../../Images/headphone.jpg'
import Tv from '../../Images/tv.jpg'
import shoes from '../../Images/shoes.jpg'
import mouse from '../../Images/mouse.jpg'
import speaker from '../../Images/speaker.jpg'
import wallet from '../../Images/wallet.jpg'
import kettle from '../../Images/kettle.jpg'
import traker from '../../Images/fitness.jpg'
import bottle from '../../Images/bottle.jpg'
import charger from '../../Images/charger.jpg'
import sunglass from '../../Images/sunglasses.jpg'
import stand from '../../Images/laptopStand.jpg'
import lamp from '../../Images/lamp.jpg'
import backpack from '../../Images/backpack.jpg'
import mat from '../../Images/mat.jpg'
import power from '../../Images/power.jpg'
import chair from '../../Images/chair.jpg'
import dryer from '../../Images/dryer.jpg'
import toothbrush from '../../Images/brush.jpg'
import coffee from '../../Images/coffee.jpg'

const Products = [
  // 🔝 Top Products
  {
    id: 1,
    productName: "Wireless Headphones",
    category: "Electronics",
    price: 5049,
    image:headphone,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 2,
    productName: "Smart LED TV",
    category: "Electronics",
    price: 41499,
    image: Tv,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 3,
    productName: "Running Shoes",
    category: "Footwear",
    price: 7469,
    image: shoes,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 4,
    productName: "Gaming Mouse",
    category: "Accessories",
    price: 4979,
    image: mouse,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 5,
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 3319,
    image: speaker,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 6,
    productName: "Leather Wallet",
    category: "Fashion",
    price: 2074,
    image: wallet,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 7,
    productName: "Electric Kettle",
    category: "Home Appliances",
    price: 2489,
    image: kettle,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 8,
    productName: "Fitness Tracker",
    category: "Wearables",
    price: 5819,
    image: traker,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 9,
    productName: "Water Bottle",
    category: "Fitness",
    price: 1244,
    image: bottle,
    isTopProducts: true,
    isLikedProducts: false
  },
  {
    id: 10,
    productName: "USB-C Charger",
    category: "Accessories",
    price: 1659,
    image: charger,
    isTopProducts: true,
    isLikedProducts: false
  },

  // ❤️ Liked Products
  {
    id: 11,
    productName: "Sunglasses",
    category: "Fashion",
    price: 2489,
    image: sunglass,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 12,
    productName: "Laptop Stand",
    category: "Office",
    price: 3319,
    image: stand,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 13,
    productName: "Desk Lamp",
    category: "Home",
    price: 2157,
    image: lamp,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 14,
    productName: "Travel Backpack",
    category: "Bags",
    price: 4564,
    image: backpack,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 15,
    productName: "Yoga Mat",
    category: "Fitness",
    price: 1908,
    image: mat,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 16,
    productName: "Power Bank",
    category: "Electronics",
    price: 2904,
    image: power,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 17,
    productName: "Office Chair",
    category: "Office",
    price: 10789,
    image: chair,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 18,
    productName: "Hair Dryer",
    category: "Beauty",
    price: 3817,
    image: dryer,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 19,
    productName: "Electric Toothbrush",
    category: "Personal Care",
    price: 3319,
    image: toothbrush,
    isTopProducts: false,
    isLikedProducts: true
  },
  {
    id: 20,
    productName: "Coffee Maker",
    category: "Kitchen",
    price: 4979,
    image: coffee,
    isTopProducts: false,
    isLikedProducts: true
  }
];

export default Products;