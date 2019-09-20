/*While imperative code tells the machine, step-by-step, what it needs to do to solve the problem */
// create some objects to store the data.
var columbian = {
    name: 'columbian',
    basePrice: 5
};
var frenchRoast = {
    name: 'french roast',
    basePrice: 8
};
var decaf = {
    name: 'decaf',
    basePrice: 6
};

// we'll use a helper function to calculate the cost 
// according to the size and print it to an HTML list
function printPrice(coffee, size) {
    if (size == 'small') {
        var price = coffee.basePrice + 2;
    } else if (size == 'medium') {
        var price = coffee.basePrice + 4;
    } else {
        var price = coffee.basePrice + 6;
    }

    // create the new html list item
    var node = document.createElement("li");
    var label = coffee.name + ' ' + size;
    var textnode = document.createTextNode(label + ' price: $' + price);
    node.appendChild(textnode);
    document.getElementById('products').appendChild(node);
}

// now all we need to do is call the printPrice function
// for every single combination of coffee type and size
printPrice(columbian, 'small');
printPrice(columbian, 'medium');
printPrice(columbian, 'large');
printPrice(frenchRoast, 'small');
printPrice(frenchRoast, 'medium');
printPrice(frenchRoast, 'large');
printPrice(decaf, 'small');
printPrice(decaf, 'medium');
printPrice(decaf, 'large');