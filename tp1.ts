//Comienzo del trabajo
import * as fs from "fs";

let products:string[] = new Array();
let prices:number[] = new Array();

function showPrice():void{
    let total:number=0;
    for (let i:number=0;i<prices.length;i++){
        total+=prices[i]
    }
    console.log(`El total de su compra es $${total}`);
}

function generateRecipe():void{
    fs.writeFileSync("recibo.txt", showFromSmallestToLargest);
    console.log("Recibo guardado en recibo.txt")
}