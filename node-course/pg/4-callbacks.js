// setTimeout(() => {
//     console.log('two seconds are up.')
// }, 2000)

// const names = ['andrew', 'jen', 'jess']

// const shortnames = names.filter((name) => {
//     return name.length <= 4
// })

// shortnames.forEach(element => {
//     console.log(shortnames)
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
    
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })



const add = (numOne, numTwo, callback) => {
    setTimeout(() =>{
        callback(numOne + numTwo)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

