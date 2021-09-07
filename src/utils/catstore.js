let cats = [
    
    {name: "birman", url:"/images/birman.png", price: 500, quantity: 2, id:1},
    {name: "himalayan", url:"/images/himalayan.png", price: 800, quantity: 1, id:2},
    {name: "manx", url:"/images/manx.png", price: 600, quantity: 1, id:3},
    {name: "ragamuffin", url:"/images/ragamuffin.png", price: 600, quantity: 1, id:4},
    {name: "Burmese", url:"/images/Burmese.png", price: 500, quantity: 1, id:5},
    {name: "maine-coon", url:"/images/maine-coon.png", price: 800, quantity: 1, id:6},
    {name: "norwegian-forest-cat", url:"/images/norwegian-forest-cat.png", price: 600, quantity: 1, id:7},
    {name: "ragdoll-detail", url:"/images/ragdoll-detail.png", price: 600, quantity: 1, id:8},
    {name: "scottish-fold", url:"/images/scottish-fold.png", price: 500, quantity: 3, id:9},
    {name: "Selkirk-Rex", url:"/images/Selkirk-Rex.png", price: 800, quantity: 1, id:10},
    {name: "turkish-van", url:"/images/turkish-van.png", price: 600, quantity: 1, id:11},
    {name: "American-Bobtail", url:"/images/American-Bobtail.png", price: 500, quantity: 2, id:12},
    {name: "american-shorthair", url:"/images/american-shorthair.png", price: 800, quantity: 1, id:13},
    {name: "balinese", url:"/images/balinese.png", price: 600, quantity: 1, id:14},
    {name: "bombay", url:"/images/bombay.png", price: 400, quantity: 1, id:15},
    {name: "british-shorthair", url:"/images/british-shorthair.png", price: 500, quantity: 1, id:16},
    {name: "chartreux", url:"/images/chartreux.png", price: 800, quantity: 1, id:17},
    {name: "exotic-shorthair", url:"/images/exotic-shorthair.png", price: 600, quantity: 1, id:18},
    {name: "Japanese-Bobtail", url:"/images/Japanese-Bobtail.png", price: 600, quantity: 1, id:19},
    {name: "laperm", url:"/images/laperm.png", price: 500, quantity: 3, id:20},
    {name: "russian-blue", url:"/images/russian-blue.png", price: 800, quantity: 1, id:21},
    {name: "siamese", url:"/images/siamese.png", price: 600, quantity: 1, id:22},
    {name: "turkish-angora", url:"/images/turkish-angora.png", price: 600, quantity: 1, id:22}
 

]


exports.catInfo = (catBreed)=>{
    cats.filter(cat=>{cat.name == catBreed && console.log(`The cost of adopting ${catBreed} is £${cat.price}.`)})

}