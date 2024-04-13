
let products:string[] = new Array();
let prices:number[] = new Array();



function showProducts():void{
    console.log("Producto  Precio:");
    for(let i:number = 0; i < products.length; i++){
        console.log(`${products[i]}: $${prices[i].toFixed(2)}`);


    }
}

showProducts();