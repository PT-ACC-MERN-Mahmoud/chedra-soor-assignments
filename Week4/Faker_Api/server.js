const faker = require("faker")
const express = require("express");
const app = express();
const port = 8000;


const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
});

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
    },
});

app.get("/api/user/new", (req,res) => {
    const newUser = createUser();
    console.log(res.json(newUser));
});

app.get("/api/company/new", (req,res) => {
    const newCompany = createCompany();
    console.log(res.json(newCompany));
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    console.log(res.json(newUser));
    console.log(res.json(newCompany));
});
// this needs to be below the other code blocks
app.listen(port, () => console.log(`express server running on port ${port}`));
