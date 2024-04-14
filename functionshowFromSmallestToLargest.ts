

function showFromSmallestToLargest():void{
    for(let i = 0; i < prices.length -1; i++){
        let minIndex = i;
        for(let j = i + 1; j < prices.length; j++ ){
            if (prices[j] < prices[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [prices[i], prices[minIndex]] = [prices[minIndex], prices[i]];
            [products[i], products[minIndex]] = [products[minIndex], products[i]]; 
        
    }
}
console.log("Productos ordenados de menor a mayor precio:");
for (let i = 0; i < prices.length; i++) {
    console.log(`${products[i]}: $${prices[i].toFixed(2)}`);
}

let mostExpensiveIndex = prices.length - 1;
console.log(`El producto más caro es ${products[mostExpensiveIndex]} con un precio de $${prices[mostExpensiveIndex].toFixed(2)}`);
}

showFromSmallestToLargest();





