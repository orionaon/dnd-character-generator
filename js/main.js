

fetch("https://api.open5e.com/races/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
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

    fetch("http://roll.diceapi.com/json/4d6/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // dice rolling API set to roll 4d6, code in the total of the values minus the lowest and repeat 6 times, one for each attribute stat. Consider auto assigning the stats based on class type.
        console.log(data)
        // document.querySelector('#class').innerText = data.results[randomClass].name

    })
    .catch(err => {
        console.log(`error ${err}`)
    });  