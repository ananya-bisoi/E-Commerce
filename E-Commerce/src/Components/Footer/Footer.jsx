import React from 'react';
import facebook from '../../Images/facebook.jpg';
import insta from '../../Images/instagram.jpg';
import youtube from '../../Images/youtube.jpg';
import twitter from '../../Images/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">MyShop</h2>
          <p>Your one-stop shop for everything awesome.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Men</li>
            <li>Women</li>
            <li>Electronics</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 items-center">
            <span><img src={facebook} alt="facebook" className="w-6 h-6 object-cover hover:scale-110 transition-transform duration-200" /></span>
            <span><img src={insta} alt="instagram" className="w-10 h-10 object-cover hover:scale-110 transition-transform duration-200" /></span>
            <span><img src={twitter} alt="twitter" className="w-6 h-6 object-cover hover:scale-110 transition-transform duration-200" /></span>
            <span><img src={youtube} alt="youtube" className="w-6 h-6 object-cover hover:scale-110 transition-transform duration-200" /></span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 MyShop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
