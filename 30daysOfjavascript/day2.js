/**
    Day 2 - Operations
    Task
    Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
    and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. 
    Round the result to the nearest integer.

    Example
    The coast of 100, a tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function.
    
 */

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}

// Complete the solve function below.
function solve(mealCost, tipPercent, taxPercent) {
    var tip = (mealCost * tipPercent)/100; 
    var tax = (mealCost * taxPercent)/100;
    var total = Math.round(mealCost + tip + tax);
    
    console.log(total);

}

