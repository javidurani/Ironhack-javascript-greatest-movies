/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let array = array.slice(0).sort(function(a,b){
        if (a.year - b.year == 0 && a.title < b.title){
            return undefined;
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
    let array = array.map((alphabeticArray) => {
        return alphabeticArray.title;
    })

    array.sort(function (a, c) {
        if(a < c){
            return -1;
        }

        else if(a > c){
            return 1;
        }

        return 0;
    })
    return array.splice(0,20)
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

function dramaMoviesRate(array) {
    let array = array.filter((dramaMovies) => {
        return (dramaMovies.genre.includes("Drama"));
    })

    if(dramaMovies.length === 0){
        return 0;
    }

    let totalRating = dramaMovies.reduce((a, c) => {
        return a + c.rate;
    }, 0)

    let dramaAverage = totalRating / dramaMovies.length

    return Number(dramaAverage.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){

    return array.map((minuteMovies) =>{
    
      let duration = minuteMovies.duration;
    
      let hour = 0;
      let min = 0;
    
      if(duration.indexOf('h') >= 0 && duration.indexOf('min') >= 0){
        hour = duration.substring(0, duration.indexOf('h'));
        min = duration.substring(duration.indexOf(" ") + 1, duration.indexOf("min"));
        console.log(hour, min)
      }
      else if(duration.indexOf('h') >= 0){
        hour = duration.substring(0, duration.indexOf('h'));
      }
      else if(duration.indexOf('min') >= 0){
        min = duration.substring(0, duration.indexOf("min"))
      }
    
      let newTime = Number(hour) * 60 + Number(min);
    
      return {
        title: eachMovie.title,
        year: eachMovie.year,
        duration: newTime,
      }
    
    })
    
    }
  
// BONUS Iteration: Best yearly rate average - Best yearly rates average
