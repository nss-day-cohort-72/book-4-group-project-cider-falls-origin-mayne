const database = {
  guests: [
    { id: 1, name: 'John Smith', areaId: 1 },
    { id: 2, name: 'Emma Johnson', areaId: 5 },
    { id: 3, name: 'Michael Davis', areaId: 2 },
    { id: 4, name: 'Samantha Lee', areaId: 7 },
    { id: 5, name: 'Christopher White', areaId: 4 },
    { id: 6, name: 'Avery Rodriguez', areaId: 6 },
    { id: 7, name: 'Olivia Martin', areaId: 1 },
    { id: 8, name: 'Ryan Wilson', areaId: 8 },
    { id: 9, name: 'Sophia Turner', areaId: 10 },
    { id: 10, name: 'Daniel Hernandez', areaId: 9 },
    { id: 11, name: 'Isabella Brown', areaId: 11 },
    { id: 12, name: 'Matthew Perez', areaId: 13 },
    { id: 13, name: 'Emily Jackson', areaId: 14 },
    { id: 14, name: 'Ethan Thompson', areaId: 12 },
    { id: 15, name: 'Madison Garcia', areaId: 15 },
    { id: 16, name: 'Nicholas Hill', areaId: 1 },
    { id: 17, name: 'Chloe Flores', areaId: 3 },
    { id: 18, name: 'David Green', areaId: 6 },
    { id: 19, name: 'Mia Collins', areaId: 4 },
    { id: 20, name: 'Jacob Stewart', areaId: 7 },
    { id: 21, name: 'Avery Sanchez', areaId: 8 },
    { id: 22, name: 'Victoria Carter', areaId: 1 },
    { id: 23, name: 'William Brown', areaId: 9 },
    { id: 24, name: 'Natalie Hall', areaId: 12 },
    { id: 25, name: 'Andrew Scott', areaId: 10 },
    { id: 26, name: 'Grace Wright', areaId: 11 },
    { id: 27, name: 'Christopher Evans', areaId: 14 },
    { id: 28, name: 'Sofia Phillips', areaId: 13 },
    { id: 29, name: 'James Martinez', areaId: 15 },
    { id: 30, name: 'Hailey Perez', areaId: 5 },
  ],
  areas: [
    { id: 1, region: 'Northeast', mainAttraction: 'Chamfort River' },
    { id: 2, region: 'North', mainAttraction: 'Lost Wolf Hiking Trail' },
    { id: 3, region: 'Northwest', mainAttraction: 'Lodge' },
    { id: 4, region: 'Southwest', mainAttraction: 'Gander River' },
    { id: 5, region: 'South', mainAttraction: 'Campgrounds' },
    { id: 6, region: 'Southeast', mainAttraction: 'Pine Bluffs Trails' },
  ],
  // Additional arrays will follow...
  services: [
    { id: 1, name: 'Rafting' },
    { id: 2, name: 'Canoeing' },
    { id: 3, name: 'Fishing' },
    { id: 4, name: 'Hiking' },
    { id: 5, name: 'Picnicking' },
    { id: 6, name: 'Rock Climbing' },
    { id: 7, name: 'Lodging' },
    { id: 8, name: 'Parking' },
    { id: 9, name: 'Information' },
    { id: 10, name: 'Zip Lines' },
    { id: 11, name: 'Hotel' },
    { id: 12, name: 'Restaurant' },
    { id: 13, name: 'Office Park' },
    { id: 14, name: 'Playground' },
    { id: 15, name: 'Food Vendors' },
  ],

  ParkAreaServices: [
    { id: 1, areaId: 1, serviceId: 1 }, // Chamfort River offers Rafting
    { id: 2, areaId: 1, serviceId: 2 }, // Chamfort River offers Canoeing
    { id: 3, areaId: 2, serviceId: 4 }, // Lost Wolf Hiking Trail offers Hiking
    { id: 4, areaId: 2, serviceId: 6 }, // Lost Wolf Hiking Trail offers Rock Climbing
    { id: 5, areaId: 3, serviceId: 7 }, // Lodge offers Lodging
    { id: 6, areaId: 3, serviceId: 8 }, // Lodge offers Parking
    { id: 7, areaId: 4, serviceId: 3 }, // Gander River offers Fishing
    { id: 8, areaId: 4, serviceId: 4 }, // Gander River offers Hiking
    { id: 9, areaId: 5, serviceId: 7 }, // Campgrounds offer Lodging
    { id: 10, areaId: 5, serviceId: 9 }, // Campgrounds offer Information
    { id: 11, areaId: 6, serviceId: 4 }, // Pine Bluffs Trails offer Hiking
    { id: 12, areaId: 6, serviceId: 10 }, // Pine Bluffs Trails offer Zip Lines
    { id: 13, areaId: 7, serviceId: 1 }, // Sunset Canyon offers Rafting
    { id: 14, areaId: 8, serviceId: 5 }, // Maple Creek offers Picnicking
    { id: 15, areaId: 9, serviceId: 4 }, // Bear Ridge offers Hiking
    { id: 16, areaId: 9, serviceId: 8 }, // Bear Ridge offers Parking
    { id: 17, areaId: 9, serviceId: 11 }, // Bear Ridge offers Hotel
    { id: 18, areaId: 10, serviceId: 2 }, // Oakwood Meadows offers Canoeing
    { id: 19, areaId: 10, serviceId: 8 }, // Oakwood Meadows offers Parking
    { id: 20, areaId: 11, serviceId: 2 }, // silver lake offers canoeing
    { id: 21, areaId: 11, serviceId: 14 }, // silver lake offers Playground
    { id: 22, areaId: 12, serviceId: 3 }, // golden valley offers fishing
    { id: 23, areaId: 12, serviceId: 8 }, // golden valley offersparking
    { id: 22, areaId: 13, serviceId: 11 }, // cedar grove offers Hotel
    { id: 23, areaId: 13, serviceId: 7 }, // cedar grove offers Lodging
    { id: 24, areaId: 14, serviceId: 3 }, // mossy hollow offers fishing
    { id: 25, areaId: 14, serviceId: 6 }, // mossy hollow offers rock climbing
    { id: 26, areaId: 15, serviceId: 12 }, // highland peaks offers restaurant
    { id: 27, areaId: 15, serviceId: 5 }, // highland peaks offers picnicking
  ],
};

export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};

export const getAreas = () => {
  return database.areas.map((area) => ({ ...area }));
};

export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};

export const getParkAreaServices = () => {
  return database.ParkAreaServices.map((areaService) => ({ ...areaService }));
};
