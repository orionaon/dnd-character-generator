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