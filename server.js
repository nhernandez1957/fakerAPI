const express = require("express");
const {faker} = require("@faker-js/faker")
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const createUser = () => {
    const newFake = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber()
    };
    return newFake;
}

const createCompany = () => {
    const newFake = {
        name: faker.company.companyName(),
        buildingNumber: faker.address.buildingNumber(),
        phoneNumber: faker.phone.phoneNumber()
    };
    return newFake;
}

// const newFakeUser = createUser();
// console.log(newFakeUser);

// const newFakeCompany = createCompany();
// console.log(newFakeCompany);

app.get("/api/user/new", (req,res)=>{
    console.log(createUser());
    res.json({message:"we did it:)"});
})

app.get("/api/company/new", (req,res)=>{
    console.log(createCompany());
    res.json({message:"we did it... again:)"});
})

app.get("/api/user/company", (req,res)=>{
    console.log(createUser());
    console.log(createCompany());
    res.json({message:"lfgo"});
})

app.listen(port, ()=>console.log(`running on port ${port}, we out here!`));