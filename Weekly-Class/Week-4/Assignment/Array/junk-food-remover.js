// Q. You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain "Burger".

// Problem Statement : Create afunction that removes unhelthy food items ( those containing "Burger" ) and returns the updated list.

// Hint : Use the methods that allows you to remove an specific item from an array.

// ANS : 

function filterHealthy(foodList) {
    // Removes unhealthy food and returns updated list
    updated_food_list = foodList.filter(food=> food !== "Burger");
    return updated_food_list;
}