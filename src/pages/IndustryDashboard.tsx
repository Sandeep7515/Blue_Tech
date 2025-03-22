import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

// Mock data - in a real application, this would come from your backend
const mockData = {
  industry: {
    name: "Example Industries Ltd.",
    location: "Industrial Zone A, City",
    products: ["Chemical A", "Chemical B"],
    industryCode: "IND123456"
  },
  wasteWaterData: Array.from({ length: 24 }, (_, i) => ({
    time: format(new Date(Date.now() - i * 3600000), 'HH:mm'),
    pH: 6.5 + Math.random(),
    tds: 500 + Math.random() * 100,
    turbidity: 2 + Math.random()
  })).reverse()
};

function IndustryDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{mockData.industry.name}</h1>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold">Location:</span> {mockData.industry.location}
          </div>
          <div>
            <span className="font-semibold">Industry Code:</span> {mockData.industry.industryCode}
          </div>
          <div>
            <span className="font-semibold">Products:</span> {mockData.industry.products.join(", ")}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Real-time Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="text-yellow-500 w-6 h-6 mr-3" />
              <div>
                <p className="font-medium">pH Level Warning</p>
                <p className="text-sm text-gray-600">pH level is approaching upper limit</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
              <div>
                <p className="font-medium">TDS Levels Normal</p>
                <p className="text-sm text-gray-600">All parameters within acceptable range</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Current Readings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">pH Level</p>
              <p className="text-2xl font-semibold">7.2</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">TDS (ppm)</p>
              <p className="text-2xl font-semibold">542</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Turbidity (NTU)</p>
              <p className="text-2xl font-semibold">2.4</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Temperature (°C)</p>
              <p className="text-2xl font-semibold">25.6</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">24-Hour Monitoring</h2>
        <LineChart width={800} height={400} data={mockData.wasteWaterData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pH" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="tds" stroke="#82ca9d" />
          <Line yAxisId="left" type="monotone" dataKey="turbidity" stroke="#ffc658" />
        </LineChart>
      </div>
    </div>
  );
}

export default IndustryDashboard;