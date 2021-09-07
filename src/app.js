const { goodOrBad, movieInfo } = require("./utils")
const { catInfo } = require("./utils/catstore");


// const input = process.argv[2];
// console.log(`My favourite movie is ${input}`)


// const likeVar = process.argv[2];
// const movie = process.argv[3];
// const actor = process.argv[4];

// goodOrBad(likeVar, movie,actor)





// const movie = process.argv[2];
// const year = process.argv[3]
// const actor = process.argv[4]

// movieInfo(movie, year,actor)

const catBreed = process.argv[2];

catInfo(catBreed)
