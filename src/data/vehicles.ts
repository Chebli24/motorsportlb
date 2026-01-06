export interface Vehicle {
  id: string;
  name: string;
  year: number;
  type: 'Sedan' | 'SUV';
  mileage: string;
  price: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Aston Martin Vantage',
    year: 2020,
    type: 'Sedan',
    mileage: '45,000 km',
    price: '$28,500',
    image: '/assets/cars/IMG_0749.jpg',
  },
  {
    id: '2',
    name: 'Range Rover Autobiography',
    year: 2024,
    type: 'SUV',
    mileage: '52,000 km',
    price: '$42,000',
    image: '/assets/cars/IMG_0750.jpg',
  },
  {
    id: '3',
    name: 'Mercedes GLE 400',
    year: 202018,
    type: 'SUV',
    mileage: '30,000 km',
    price: '$32,000',
    image: '/assets/cars/IMG_0751.jpg',
  },
  {
    id: '4',
    name: 'Range Rover Sport',
    year: 2023,
    type: 'SUV',
    mileage: '65,000 km',
    price: '$55,000',
    image: '/assets/cars/IMG_0752.jpg',
  },
  {
    id: '5',
    name: 'Mercedes C 300',
    year: 2022,
    type: 'Sedan',
    mileage: '40,000 km',
    price: '$22,000',
    image: '/assets/cars/IMG_0753.jpg',
  },
  {
    id: '6',
    name: 'Mercedes GLC 200',
    year: 2020,
    type: 'SUV',
    mileage: '48,000 km',
    price: '$58,000',
    image: '/assets/cars/IMG_0754.jpg',
  },
];

