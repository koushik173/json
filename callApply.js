const normalPerson = {
    firstName: 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary; 
    }
}

const heroPerson = {
    firstName: "hero",
    lastName: "Uddin",
    salary: 20000
}

// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonChargeBill(1200)
// heroPersonChargeBill(1000)
// console.log(heroPerson.salary);


//console.log(normalPerson.getFullName());
// normalPerson.chargeBill(150);
// console.log(normalPerson);

// normalPerson.chargeBill.call(heroPerson, 900);
// normalPerson.chargeBill.call(heroPerson, 1000);
// console.log(heroPerson.salary);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[1000])
console.log(heroPerson.salary);
