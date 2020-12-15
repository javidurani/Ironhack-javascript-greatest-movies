/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let array = array.slice(0).sort(function(a,b){
        if (a.year - b.year == 0 && a.title <b.title){
            return -1;
        }
        return a.year - b.year;
    });
    return array;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
    let array = array.filter((eachMovie) => {
        return (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama"));
    
    })
    return array.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    return array.slice(0, 20).map( x => x.title).sort();
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0){
        return 0;
    }

    let ratingTotal = array.reduce((a, c) => {
            return a + c.rate;
        }, 0)

    let average = ratingTotal / array.length
       
    return Number(average.toFixed(2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rates average
