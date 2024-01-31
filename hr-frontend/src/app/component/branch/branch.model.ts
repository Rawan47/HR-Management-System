
export interface Branch {
    id: number;
    name: string;
    building_number: string;
    street: string;
    area: string;
    city: string;
    country: string;
    manager: {
      id: number;
      
    } | null;
  }
  