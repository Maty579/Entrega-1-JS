  const pizzas = [
    {
      id: 1,
      nombre: "Piripipi",
      ingredientes: ["Salsa", "Muzza", "Jamon crudo", "Rucula"],
      precio: "1200",
    },

    {
      id: 2,
      nombre: "Clabresa",
      ingredientes: ["Salsa", "Muzza", "Longaniza"],
      precio: 1100,
    },

    {
      id: 3,
      nombre: "Roquefort",
      ingredientes: ["Muzza", "Huevo", "Morrones"],
      precio: 1500,
    },

    {
      id: 4,
      nombre: "Napoleon",
      ingredientes: ["Muzza", "Tomates", "Albahaca", "Aceite de oliva"],
      precio: 1800,
    },

    {
      id: 5,
      nombre: "Fugazzeta",
      ingredientes: ["Salsa", "Muzza", "Cebolla"],
      precio: 2000,
    },

    {
      id: 6,
      nombre: "Clasica",
      ingredientes: ["Salsa", "Muzza", "Jamon cocido", "Morron Rojo"],
      precio: 1100,
    },
  ];

const idImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 > 0;
});

idImpares.forEach((pizza) => {
  console.log(`La variedad ${pizza.nombre} tiene un ID impar`);
});
  

const precioMenorA = pizzas.filter((pizza) => {
  if (pizza.precio < 600) {
    console.log(`Hay variedades con precio menor a 600` );
  } else {
    console.log(`Ninguna variedad tiene precio menor a $600 por el momento`);
  }
});


const nombreYprecio = pizzas.forEach((pizza) => {
  console.log(`El precio de ${pizza.nombre} es igual a $${pizza.precio}`);
  
});



const ingredientesDePizza = pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de ${pizza.nombre} son:${pizza.ingredientes}`);
});