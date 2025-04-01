const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Room = require('./models/Room');

// Load environment variables
dotenv.config();

// Sample room data
const roomData = [
  {
    roomNumber: '101',
    type: 'Single',
    price: 89,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning'],
    description: 'Cozy single room with a view of the garden.',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    roomNumber: '102',
    type: 'Single',
    price: 95,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Fridge'],
    description: 'Standard single room with modern amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    roomNumber: '201',
    type: 'Double',
    price: 149,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Fridge', 'Coffee Maker'],
    description: 'Spacious double room with a queen-size bed.',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    roomNumber: '202',
    type: 'Double',
    price: 159,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Fridge', 'Coffee Maker', 'Safe'],
    description: 'Comfortable double room with a view of the city.',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    roomNumber: '301',
    type: 'Deluxe',
    price: 239,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Coffee Maker', 'Safe', 'Balcony'],
    description: 'Luxurious deluxe room with a king-size bed and a balcony.',
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    roomNumber: '302',
    type: 'Deluxe',
    price: 259,
    status: 'Available',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Coffee Maker', 'Safe', 'Jacuzzi'],
    description: 'Premium deluxe room with a jacuzzi and panoramic views.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB Atlas');
    
    try {
      // Clear existing data
      await Room.deleteMany({});
      console.log('Cleared existing room data');
      
      // Insert new room data
      const createdRooms = await Room.insertMany(roomData);
      console.log(`Added ${createdRooms.length} rooms to the database`);
      
      mongoose.connection.close();
      console.log('Database connection closed');
    } catch (err) {
      console.error('Error seeding database:', err);
    }
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  }); 