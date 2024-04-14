import * as rls from 'readline-sync'

let products:string[] = new Array()
let prices:number[] = new Array()

function addProduct() { //Esta funcion es para que el usuario ingrese el producto y su precio, en caso de usar valores no correctos, entrará en un bucle hasta que el usuario ingrese un valor valido.
  let product:string = rls.question("Ingrese el nombre del producto: ")
  if (!isNaN(parseInt(product)) || product === undefined) console.log("¡Valor erroneo!")

  let price:number = rls.question("Ingrese el precio del producto: ")
  if (isNaN(price) || price === undefined) console.log("¡Valor erroneo")

  while (!isNaN(parseInt(product)) || product === undefined) {
    console.log("¡Valor erroneo!")
    product = rls.question("Ingrese el nombre del producto: ")
  }
  while (isNaN(price) || price === undefined) {
    console.log("¡Valor erroneo!")
    price = rls.question("Ingrese el precio del producto: ")
  }

  products[products.length] = product
  prices[prices.length] = Number(price)
}

addProduct()

console.log(products)
console.log(prices)