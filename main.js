/* 
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
a)  Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 
 
Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 💸
*/


const Pizzas = [
    { 
        "id": 0,
        "nombre": "muzarella",
        "ingredientes": ["Tomate","Queso"],
        "precio": 650
    },
    {
        "id": 1,
        "nombre": "fugazzeta",
        "ingredientes": ["Cebolla","Queso"],
        "precio": 1500
    },
    {
        "id": 2,
        "nombre": "JamonMorron",
        "ingredientes": ["Jamon","Morrones","Queso"],
        "precio": 1550
    },
    {
        "id": 3,
        "nombre": "Margarita",
        "ingredientes": ["Tomate","Queso","Albahaca"],
        "precio": 1350
    },
    {
        "id": 4,
        "nombre": "Hawaiana",
        "ingredientes": ["Tomate","Queso","Anana"],
        "precio": 1450
    },
    {
        "id": 5,
        "nombre": "Palmitos",
        "ingredientes": ["Jamon","Queso","Palmitos"],
        "precio": 799
    }

]

//a)  Las pizzas que tengan un id impar.

        console.log("Id impares de pizzas: ")
        for(let i = 0; i < Pizzas.length ; i++){
            if(i%2===1){
                console.log("ID: " + Pizzas[i].id + " - Nombre: " + Pizzas[i].nombre);
            }
        }

//b) ¿Hay alguna pizza que valga menos de $600?


       console.log("\nPizzas menores a $600: ");
       const pizzaBarata = Pizzas.filter((Pizzas) => {

        if((Pizzas.precio < 600) == true){
            console.log("Si! hay pizzas mas barata de $600")
        }else{
            console.log("No! En estos momentos no hay pizzas mas baratas que $600")
        }

       })


//c) El nombre de cada pizza con su respectivo precio.

       console.log("\nLista de precios: ")
       Pizzas.forEach(({nombre, precio}) => {    
       console.log('Pizza:',nombre,'. Tiene un costo de:', precio)
       }) 
       

        
//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). 
//   Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

        console.log("\nPizza e ingredientes: ")
        for(let i = 0; i < Pizzas.length; i++){
            console.log("Nombre: " + Pizzas[i].nombre);
            for(let j = 0; j < Pizzas.length; j++){
                console.log("Ingredientes: " + Pizzas[i].ingredientes);
                
            }
            console.log("------------------------------------");
        }

