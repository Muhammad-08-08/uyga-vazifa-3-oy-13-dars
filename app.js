let data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Tom Hardy",
    age: 40,
    email: "tom@example.com",
    phone: "765-432-1098",
  },
  {
    id: 4,
    name: "Emily Blunt",
    age: 28,
    email: "emily@example.com",
    phone: "321-654-9870",
  },
  {
    id: 5,
    name: "Emily Blunt",
    age: 28,
    email: "emily@example.com",
    phone: "321-654-9870",
  },
];

//  ? 1-misol
function create(val){
  data.push(val);
}
create({
  id: 6,
  name: "Muhammad",
  age: 16,
  email: "muhammad@gmail.com",
  phone: "777-777-7777",

});
console.log(data);

// ? 1-misol tugadi

//? 2-misol

function reyt(email){
  return data.find((val)=>val.email.toLocaleLowerCase().includes(email.toLocaleLowerCase()));

}

console.log(reyt("emily@example.com"))

//? 2-misol tugadi

// ! 3-misol

function Update(id, arr){
  let index = data.findIndex((val)=>
  val.id= id)
  if(index== -1) return
  data[index]={
    ...data[index],
    ...arr,
  };
  return data
}
console.log(Update(1, {name:"Muhammad"}));

// ! 3-misol tugadi

// ! 4-misol

function deleteo(id) {
  let filter = data.filter((val) => val.id !== id);
  return filter;
}
console.log(deleteo(1));

// ! 4-misol tugadi

// CRUD
//  C => create
//  R => read
//  U => Update
//  D => delete
