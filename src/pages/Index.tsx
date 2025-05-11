
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to Successive</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Delivering innovation and digital transformation to businesses worldwide through modern technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/services" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center">
              Our Services
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
