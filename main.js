const Pizzas = [
  {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["albahaca", "queso mozzarella", "tomate"],
    precio: 700,
  },
  {
    id: 2,
    nombre: "Cuatro Quesos",
    ingredientes: [
      "queso mozzarella",
      "queso gorgonzola",
      "queso parmesano",
      "queso fontina",
    ],
    precio: 989,
  },
  {
    id: 3,
    nombre: "Pepperoni",
    ingredientes: ["pepperoni", "queso mozzarella", "tomate"],
    precio: 574,
  },
  {
    id: 4,
    nombre: "Hawaiana",
    ingredientes: ["ananá", "queso mozzarella", "tomate", "jamón"],
    precio: 980,
  },
  {
    id: 5,
    nombre: "Napolitana",
    ingredientes: ["queso mozzarella", "tomate", "anchoa", "alcaparra"],
    precio: 234,
  },
  {
    id: 6,
    nombre: "Fugazzeta",
    ingredientes: ["queso mozzarella", "cebolla", "aceituna"],
    precio: 756,
  },
];

// a) Las pizzas que tengan un id impar.
Pizzas.forEach((PizzaImpar) => {
  if (PizzaImpar.id % 2 !== 0) {
    console.log(
      `La pizza ${PizzaImpar.nombre} tiene id impar. Su ID es ${PizzaImpar.id}`
    );
  }
});

// b) ¿Hay alguna pizza que valga menos de $600?
console.log("Pizzas que valen menos de $600:");
Pizzas.forEach((PizzaBarata) => {
  if (PizzaBarata.precio < 600) {
    console.log(`La pizza ${PizzaBarata.nombre} vale $${PizzaBarata.precio}`);
  }
});

// c) Los nombres de todos las pizzas.
console.log("Los nombres de la pizzas son:");
Pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.nombre}`);
});

// d) Los precios de las pizzas.
console.log("Los precios de la pizzas son:");
Pizzas.forEach((pizza) => {
  console.log(`$${pizza.precio}`);
});

// e) El nombre de cada pizza con su respectivo precio.
console.log("Pizzas con sus respectivos precios:");
Pizzas.forEach((pizza) => {
  console.log(`La Pizza ${pizza.nombre}, tiene un valor de $${pizza.precio}`);
});
