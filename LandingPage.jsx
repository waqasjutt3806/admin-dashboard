import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const LandingPage = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700 text-white">
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-10 py-4 shadow-lg fixed top-0 w-full z-50 transition-all duration-500 ${
          navBg
            ? "bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-800"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl font-bold flex justify-center items-center">
          <img className="w-[50px]" src="/logo.png" alt="" />NexaWave
        </h1>

        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6">
            <ScrollLink to="home" smooth duration={500} offset={-80} className="cursor-pointer hover:text-gray-200">
              Home
            </ScrollLink>
            <ScrollLink to="features" smooth duration={500} offset={-80} className="cursor-pointer hover:text-gray-200 ">
              Features
            </ScrollLink>
            <ScrollLink to="about" smooth duration={500} offset={-80} className="cursor-pointer hover:text-gray-200">
              About
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-80} className="cursor-pointer hover:text-gray-200">
              Contact
            </ScrollLink>
          </div>
          {/* Login / Signup Buttons */}
          <div className="flex gap-3">
            <RouterLink to="/login">
              <button className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-md transition">
                Login
              </button>
            </RouterLink>
            <RouterLink to="/signup">
              <button className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md transition">
                Sign Up
              </button>
            </RouterLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Welcome to <span className="text-pink-400">NexaWave</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6"
        >
          A modern solution for your business needs. Explore features, learn more about us, and get in touch today.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6  bg-white text-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-12 "
        >
          Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Fast Performance", desc: "Optimized for speed and reliability." },
            { title: "Secure System", desc: "Advanced security ensures safe experience." },
            { title: "Modern UI/UX", desc: "User-friendly and responsive design." },
            { title: "Cloud Ready", desc: "Access your data from anywhere, anytime." },
            { title: "Customizable", desc: "Tailor the platform to your needs." },
            { title: "24/7 Support", desc: "We’re here to help you anytime." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-2xl shadow-lg cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/about.jpg"
            alt="About"
            className="rounded-2xl shadow-lg"
          />
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed">
              We are a passionate team building modern digital solutions. Our goal is to
              deliver high-quality services that help businesses grow in today’s world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white text-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-lg"
          >
            <input type="text" placeholder="Your Name" className="p-3 border rounded-lg outline-none" />
            <input type="email" placeholder="Your Email" className="p-3 border rounded-lg outline-none" />
            <textarea placeholder="Your Message" className="p-3 border rounded-lg outline-none h-32"></textarea>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition">
              Send Message
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 p-6"
          >
            <p className="flex items-center gap-3"><Mail className="text-purple-700" /> info@mybrand.com</p>
            <p className="flex items-center gap-3"><Phone className="text-purple-700" /> +92 300 1234567</p>
            <p className="flex items-center gap-3"><MapPin className="text-purple-700" /> Lahore, Pakistan</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">NexaWave</h3>
            <p className="text-gray-300">Delivering modern solutions for your digital journey.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:text-yellow-400">Home</ScrollLink></li>
              <li><ScrollLink to="features" smooth duration={500} className="cursor-pointer hover:text-yellow-400">Features</ScrollLink></li>
              <li><ScrollLink to="about" smooth duration={500} className="cursor-pointer hover:text-yellow-400">About</ScrollLink></li>
              <li><ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-400">Contact</ScrollLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-yellow-400" />
              <Twitter className="cursor-pointer hover:text-yellow-400" />
              <Instagram className="cursor-pointer hover:text-yellow-400" />
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-400">© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
