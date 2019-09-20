// separate the data and logic from the interface

var printPrice = function (price, label) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(label + ' price: $' + price);
    node.appendChild(textnode);
    document.getElementById('products').appendChild(node);
}

//create a funcion objects for each type of coffe

var columbian = function () {
    this.name = 'columbian';
    this.basePrice = 5;
};
var frenchRoast = function () {
    this.name = 'french roast';
    this.basePrice = 8;
}

var decaf = function () {
    this.name = 'decaf';
    this.basePrice = 6;
}

//create object literals for the difference sizes

var small = {
    getPrice: function () {
        return this.basePrice + 2
    },
    getLabel: function () {
        return this.name + ' small'
    }
};

var medium = {
    getPrice: function () {
        return this.basePrice + 4
    },
    getLabel: function () {
        return this.name + ' medium'
    }
}

var large = {
    getPrice: function () {
        return this.basePrice + 6
    },
    getLabel: function () {
        return this.name + ' large'
    }
}

// put all the coffee types and sizes into arrays
var coffeeTypes = [columbian, frenchRoast, decaf];
var coffeeSizes = [small, medium, large];

// build new objects that are combinations of the above
// and put them into a new array
var plusMixin = function (oldObj, mixin) {
    var newObj = oldObj;
    newObj.prototype = Object.create(oldObj.prototype);
    for (var prop in mixin) {
        if (mixin.hasOwnProperty(prop)) {
            newObj.prototype[prop] = mixin[prop];
        }
    }
    return newObj;
};

var plusMixin1 = function (oldObj, mixin) {
    // Construct the [[Prototype]] for the new object
    var newObjPrototype = Object.create(Object.getPrototypeOf(oldObj));

    // Mix-in the mixin into the newly created object
    Object.keys(mixin).map(function (k) {
        newObjPrototype[k] = mixin[k];
    });
    // Use this newly created and mixed-in object as the [[Prototype]] for the result
    return Object.create(newObjPrototype);
};

//Another trick functional programming **is like
coffeeTypes.reduce(function (previus, current) {
    var newCoffee = coffeeSizes.map(function (mixin) {
        //plusMizin function for functioal mixins, see ch7
        var newCoffeObj = plusMixin(current, mixin);
        return new newCoffeObj();
    });
    return previus.concat(newCoffee);
}, []).forEach(function (coffee) {
    printPrice(coffee.getPrice(), coffee.getLabel());
});


/* ***this ****
var coffees = coffeeTypes.reduce(function (previous, current) {
    var newCoffee = coffeeSizes.map(function (mixin) {
        //pluxmix function for functional mixins, see ch7
        var newCoffeObj = plusMixin(current, mixin);
        return newCoffeObj();
    });
    return previous.concat(newCoffee);
}, []);


//We've now defined how to get the price and label for each coffe type
// and size combination, now we can just print them
coffees.forEach(function (coffe) {
    printPrice(coffees.getPrice(), coffe.getLabel());
});
*/
// Is more Modular. adding a new size or a new coffe type as simple as shown in the following code snippet

var peruvian = function () {
    this.name = 'peruvian';
    this.basePrice = 11;
};

var extraLarge = {
    getPrice: function () {
        return this.basePrice + 10
    },
    getLabel: function () {
        return this.name + '  extra large'
    }
};

coffeeTypes.push(peruvian);
coffeeSizes.push(peruvian);