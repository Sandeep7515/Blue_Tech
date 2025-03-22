export interface WaterQualityData {
  id: string;
  sourceId: string;
  timestamp: string;
  pH: number;
  turbidity: number;
  tds: number;
  temperature: number;
  isSafe: boolean;
  alerts: string[];
}

export interface Industry {
  id: string;
  name: string;
  location: string;
  products: string[];
  industryCode: string;
  wasteWaterData: WaterQualityData[];
}

export interface User {
  id: string;
  type: 'common' | 'industry';
  industryDetails?: Industry;
}