import React from 'react';
import { useParams } from 'react-router-dom';
import { Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

function QRScanner() {
  const { sourceId } = useParams();

  // Mock data - in a real application, this would fetch from your backend based on sourceId
  const waterData = {
    sourceName: "Central Park Fountain",
    location: "Central Park",
    status: "safe",
    readings: {
      pH: 7.2,
      tds: 150,
      turbidity: 1.2
    },
    lastUpdated: new Date().toISOString()
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">{waterData.sourceName}</h1>
          <p className="text-gray-600">{waterData.location}</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          {waterData.status === 'safe' ? (
            <div className="flex items-center text-green-500">
              <CheckCircle className="w-8 h-8 mr-2" />
              <span className="text-xl font-medium">Water is Safe to Use</span>
            </div>
          ) : (
            <div className="flex items-center text-red-500">
              <AlertTriangle className="w-8 h-8 mr-2" />
              <span className="text-xl font-medium">Water is Unsafe</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">pH Level</p>
            <p className="text-xl font-semibold">{waterData.readings.pH}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">TDS (ppm)</p>
            <p className="text-xl font-semibold">{waterData.readings.tds}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Turbidity</p>
            <p className="text-xl font-semibold">{waterData.readings.turbidity}</p>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Last updated: {new Date(waterData.lastUpdated).toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default QRScanner;