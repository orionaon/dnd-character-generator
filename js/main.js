// function to fetch random race and class from api
document.querySelector('#char').addEventListener('click', fetchChar)

function fetchChar() {
fetch("https://api.open5e.com/races/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        let randomRace = Math.floor(Math.random() * 9)
        // console.log(randomRace)
       document.querySelector('#race').innerText = data.results[randomRace].name
       
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

fetch("https://api.open5e.com/classes/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let randomClass = Math.floor(Math.random() * 12)
        // console.log(randomClass)
        document.querySelector('#class').innerText = data.results[randomClass].name

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}    

// function to roll stats and display them on the page
document.querySelector('#roll').addEventListener('click', fetchDice)

function fetchDice() {
    let stats = []
    // loop through the API to roll 4d6 six times, drop the lowest, and push the values into an array
    for(let i = 0; i < 6; i++) {
        fetch("https://www.dejete.com/api?nbde=4&tpde=6")
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                const roll = [data[0].value, data[1].value, data[2].value, data[3].value]
                // console.log(roll)
                const sortedRoll = roll.sort((a, b) => a - b)
                // console.log(sortedRoll)
                const dropLowest = sortedRoll.reduce((a, c) => a + c, 0) - sortedRoll[0]
                console.log(dropLowest)
                stats.push(dropLowest)

                const li = document.createElement('li')
                // add rolled values to li
                li.textContent = dropLowest
                // append the li to the ul
                document.querySelector('#getStats').appendChild(li)
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    }
    // console.log(stats)  
}

// want to take the 6 values from the festchDice function, sort them, and assign them based on the randomly chosen class. maybe also add the race bonus  to the values after assigning them