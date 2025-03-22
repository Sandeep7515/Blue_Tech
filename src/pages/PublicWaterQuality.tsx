import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

// Mock data - in a real application, this would come from your backend
const waterSources = [
  {
    id: 'SRC001',
    name: 'Central Park Fountain',
    location: 'Central Park',
    status: 'safe',
    lastUpdated: '2024-03-15T10:30:00Z',
    readings: {
      pH: 7.2,
      tds: 150,
      turbidity: 1.2
    }
  },
  {
    id: 'SRC002',
    name: 'Community Well #1',
    location: 'North District',
    status: 'unsafe',
    lastUpdated: '2024-03-15T10:25:00Z',
    readings: {
      pH: 8.9,
      tds: 450,
      turbidity: 5.6
    },
    alerts: ['High pH levels detected', 'Turbidity above acceptable range']
  }
];

function PublicWaterQuality() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Public Water Quality Status
        </h1>
        <p className="text-xl text-gray-600">
          Real-time water quality information for public water sources
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {waterSources.map((source) => (
          <div key={source.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{source.name}</h2>
                <p className="text-gray-600">{source.location}</p>
              </div>
              <QRCodeSVG value={`/scan/${source.id}`} size={64} />
            </div>

            <div className="flex items-center mb-6">
              <Droplets className="w-6 h-6 mr-2 text-blue-500" />
              <div className="flex items-center">
                {source.status === 'safe' ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-500 font-medium">Safe to Use</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-500 font-medium">Unsafe - See Alerts</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">pH Level</p>
                <p className="text-xl font-semibold">{source.readings.pH}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">TDS (ppm)</p>
                <p className="text-xl font-semibold">{source.readings.tds}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Turbidity</p>
                <p className="text-xl font-semibold">{source.readings.turbidity}</p>
              </div>
            </div>

            {source.alerts && (
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">Alerts</h3>
                <ul className="list-disc list-inside text-red-600">
                  {source.alerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date(source.lastUpdated).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Water Quality</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-2">Key Parameters</h3>
          <ul className="space-y-2">
            <li>
              <strong>pH Level (6.5-8.5):</strong> Measures water's acidity or alkalinity
            </li>
            <li>
              <strong>TDS (&lt;500 ppm):</strong> Total Dissolved Solids indicate mineral content
            </li>
            <li>
              <strong>Turbidity (&lt;5 NTU):</strong> Measures water clarity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PublicWaterQuality;