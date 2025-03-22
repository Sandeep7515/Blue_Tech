import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Factory, QrCode } from 'lucide-react';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          BlueTech Water Monitoring
        </h1>
        <p className="text-xl text-gray-600">
          Advanced water quality monitoring and analytics platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          to="/water-quality"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <Droplets className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Water Analytics</h2>
            <p className="text-gray-600">
              Access real-time water quality data and analytics
            </p>
          </div>
        </Link>

        <Link
          to="/industry/login"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <Factory className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Industry Solutions</h2>
            <p className="text-gray-600">
              Enterprise-grade water quality management
            </p>
          </div>
        </Link>

        <Link
          to="/scan"
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <QrCode className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Quick Scan</h2>
            <p className="text-gray-600">
              Instant water quality information access
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          BlueTech Innovation
        </h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">
            BlueTech is revolutionizing water quality monitoring with cutting-edge technology. 
            Our platform combines advanced sensors, AI analytics, and real-time data processing 
            to provide comprehensive water quality insights. We help industries and communities 
            make data-driven decisions for better water management and environmental protection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;