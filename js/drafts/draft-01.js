const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};
  
const entries = Object.entries(hotel)

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

console.log(`${key}: ${value}`);
}