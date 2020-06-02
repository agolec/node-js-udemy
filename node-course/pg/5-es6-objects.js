//object properry shorthand.

const name = "Andrew"

const userAge = 27

const user = {
    name,
    age:userAge,
    location: 'Philadelphia'
}

console.log(user)

//object destructuring.

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    rating: 4.0,
    salePrice: undefined
}

//the code below is considered destructured since it inserts the variables we plan to use in a product object by just referring to the 
//properties it wants in the function definition.

const transaction = (type, {label, stock}) => {
    console.log(type,label,stock)
}

//function passes in the product object.
transaction('order',product)