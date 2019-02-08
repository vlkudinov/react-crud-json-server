const faker = require('faker');
const fs = require('fs');

module.exports = async () => {
  const data = {
    invoices: [...Array(100)].map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      date_created: faker.date.past(),
      name: faker.name.findName(),
      country: faker.address.country(),
      comment: faker.lorem.sentences(),
    }))
  };
  
  await fs.writeFileSync('./db.json', JSON.stringify(data));
};