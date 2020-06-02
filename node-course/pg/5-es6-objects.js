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

const transaction = (type, {label, stock}) => {
    console.log(type,label,stock)
}

transaction('order',product)