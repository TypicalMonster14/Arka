
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Arka</h1>
        <nav className="space-x-6">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Elevate Your Style with Arka</h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-6">
          Premium streetwear designed for bold, modern expression. Discover our latest drop.
        </p>
        <button className="text-black bg-white px-4 py-2 rounded hover:bg-gray-200">Shop Now</button>
      </section>

      <section id="shop" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-900 p-4 rounded">
            <div className="h-48 bg-gray-700 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
            <p className="text-gray-400 mb-2">$49.99</p>
            <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">Add to Cart</button>
          </div>
        ))}
      </section>

      <section id="about" className="p-6 text-center border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-4">About Arka</h3>
        <p className="max-w-2xl mx-auto text-gray-400">
          Arka is a lifestyle clothing brand inspired by urban energy and individualism. Every piece is crafted with care and designed to make a statement.
        </p>
      </section>

      <section id="contact" className="p-6 text-center border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-400">Email us at contact@arkabrand.com or follow us on Instagram @arka.clothing</p>
      </section>

      <footer className="p-4 text-center text-sm text-gray-600 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Arka. All rights reserved.
      </footer>
    </div>
  );
}
