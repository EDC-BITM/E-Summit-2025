import React from 'react';
import logo from '../assets/esummitlogo.png';

const Footer = () => {
  return (
    <footer className="text-white pt-8 px-4 border-t border-borderColor">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="flex-1">
          <img src={logo}  className="md:h-16 h-10 ml-1 sm:p-0" />
          <p className="text-secondaryText px-4">
          Scale Your Story – Where ambitions rise, ideas thrive, and your journey to impact begins!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:pl-40">
          <div className="grid grid-cols-2 gap-4 text-primaryText">
            <h2 className="text-xl font-semibold mb-2 col-span-2 text-center lg:ml-[-11rem]">Contacts</h2>
            <div>
              <h3 className="font-semibold text-primaryText mb-4">For Official</h3>
              <ul>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:drie@bitmesra.ac.in">Dean of RIE</a></li>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:vishalhshah@bitmesra.ac.in">Faculty Advisor</a></li>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:president.edc@bitmesra.ac.in">President</a></li>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:team.edc@bitmesra.ac.in">EDC Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primaryText mb-4">For Queries</h3>
              <ul>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:btech10947.22@bitmesra.ac.in">Pranav Raj Srivastav</a></li>
                <li className="text-secondaryText hover:text-primaryGreen"><a href="mailto:btech10731.22@bitmesra.ac.in">Anshuman Tomar</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-12 mb-2">
        © 2025 EDC, BIT Mesra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;