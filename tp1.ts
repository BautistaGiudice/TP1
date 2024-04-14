//Comienzo del trabajo
import * as rls from "readline-sync";

let products: string[] = new Array();
let prices: number[] = new Array();

let end = true;

let optionsMenu = function (): void {
  //Funcion para mostrar el menú de opciones
  console.log("===== Menu de Opciones =====");
  console.log("1) Agregar un producto a la lista.");
  console.log("2) Total de la compra.");
  console.log("3) Mostrar los productos de la lista.");
  console.log("4) Mostrar el producto más caro.");
  console.log(
    "5) Mostrar los productos ordenados de menor precio a mayor precio."
  );
  console.log("6) Mostrar los productos ordenados de mayor a menor(opcional).");
  console.log("7) Salir y guardar.");
  console.log("============================");
};

function menuSelector(): void {
  let askOption: any;

  while (true) {
    askOption = rls.question("Ingrese una de las siguientes opciones: ");

    if (!askOption.trim()) {
      console.log("No ingresaste ningún valor, inténtalo de nuevo.");
    } else {
      if (isNaN(askOption) || askOption < 1 || askOption > 7) {
        console.log("Opción incorrecta, vuelve a intentarlo.");
      } else {
        askOption = parseInt(askOption);
        break; // Salir del bucle si askOption es un número válido entre 1 y 7
      }
    }
  }

  switch (askOption) {
    case 1:
      if (products.length == 7) {
        console.log("¡Maximo de productos en la lista alcanzados!.");
        console.log("");
        break;
      }
      addProduct();
      break;
    case 4:
      mostExpensiveProduct();
      break;
    case 7:
      console.log("Finalizando programa...");
      end = false;
      break;
  }
}

function addProduct() {
  //Esta funcion es para que el usuario ingrese el producto y su precio, en caso de usar valores no correctos, entrará en un bucle hasta que el usuario ingrese un valor valido.
  let product: string = rls.question("Ingrese el nombre del producto: ");
  let price: number = rls.questionInt("Ingrese el precio del producto: ");

  while (!isNaN(parseInt(product)) || product === undefined) {
    console.log("¡Valor erroneo!");
    product = rls.question("Ingrese el nombre del producto: ");
  }
  while (isNaN(price) || price === undefined) {
    console.log("¡Valor erroneo!");
    price = rls.questionInt("Ingrese el precio del producto: ");
  }

  products[products.length] = product;
  prices[prices.length] = price;

  console.log("Producto agregado correctamente a la lista.");
}

function mostExpensiveProduct() {
  let mostExpensive: number = 0;
  let moreExpensivePrice: number = 0;

  for (let i = 0; i < products.length; i++) {
    if (prices[i] > moreExpensivePrice) {
      mostExpensive = i;
      moreExpensivePrice = prices[i];
    }
  }

  console.log("");
  console.log(`El producto mas caro es:`);
  console.log(`- ${products[mostExpensive]}: ${prices[mostExpensive]}`);
  console.log("");
}

while (end) {
  optionsMenu();
  console.log("");
  menuSelector();
}
