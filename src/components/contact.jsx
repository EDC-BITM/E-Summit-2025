// src/components/ContactUs.jsx
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const service_ID = "service_okd22ng";
    const template_ID = "template_5nv8jld";
    const user_ID = "2APikPfV0dHkUmski";

    emailjs
      .send(
        service_ID,
        template_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          to_name: "TEAM EDC",
          subject: formData.subject,
          message: formData.message,
        },
        user_ID
      )
      .then((response) => {
        console.log("Message sent successfully:", response);
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        alert("Failed to send the message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <section className="contact min-h-screen text-primaryText flex justify-center items-center px-4">
      <div data-aos="fade-down" data-aos-duration="1000" className="max-w-5xl w-full p-6 rounded-lg ">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="font-semibold md:text-5xl text-3xl text-white">Contact Us</h1>
          <div className="h-1 w-36 bg-primaryGreen rounded-md mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-primaryGrey p-6 rounded-lg shadow-inner border border-borderColor">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base font-medium text-primaryText"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-primaryText"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-primaryText"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  required
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-primaryText"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="4"
                  required
                  className="mt-2 w-full font-normal px-4 py-2 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                ></textarea>
              </div>
              <button 
                disabled={loading}
                type="submit" onClick={handleSubmit}
                className={`px-8 lg:px-20 mx-auto block py-2 bg-primaryGreen text-white rounded-lg font-medium hover:bg-secondaryGreen hover:scale-105 transition ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primaryGreen hover:bg-secondaryGreen"
                  }`}
                {...loading ? "Sending..." : "Send message"} > Send Message
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="space-y-6">
            <div className="bg-primaryGrey p-6 rounded-lg shadow-inner border border-borderColor">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/edcbitmesra/"
                  className="w-12 h-12 flex justify-center items-center text-primaryGreen rounded-lg hover:text-secondaryGreen bg-[#303030] transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.instagram.com/edcbitmesra/"
                  className="w-12 h-12 flex justify-center items-center bg-[#303030] rounded-lg text-primaryGreen hover:text-secondaryGreen  transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://in.linkedin.com/company/edcbitmesra"
                  className="w-12 h-12 flex justify-center items-center bg-[#303030] text-primaryGreen rounded-lg hover:text-secondaryGreen hover:border-primaryGreen transition"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
            <div className="p-6 bg-primaryGrey rounded-lg shadow-inner border border-borderColor">
              <h2 className="text-2xl font-semibold mb-4">Women in Entrepreneurship</h2>
              <p className="text-secondaryText leading-6 font-normal">
                The Entrepreneurship Development Cell (EDC) at our college is committed
                to empowering women in entrepreneurship by providing resources, mentorship,
                and opportunities for success. This year’s E Summit, themed 'Women in Entrepreneurship',
                aligns with EDC’s mission to inspire and support women aspiring to be entrepreneurs.
                Through workshops and networking, EDC fosters an inclusive environment where women can
                access the tools and knowledge needed to overcome challenges and build successful ventures.
                The summit highlights women’s achievements, encouraging more to pursue their entrepreneurial
                dreams and contribute to a diverse business ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ContactUs;