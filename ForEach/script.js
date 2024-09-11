const users = [
  { name: "Carlos", idade: 49, number: "(99) 99196-2979" },
  { name: "Rodolfo", idade: 19, number: "(99) 99196-0000" },
  { name: "Pedro", idade: 29, number: "(99) 99196-1111" },
  { name: "Mauro", idade: 39, number: "(99) 99196-9999" }
];

users.forEach((item, index)=> {
 if(item.idade === 29){
  console.log(`o cliente chamado ${item.name} tem ${item.idade} anos`);
  console.log(index)
 }
});