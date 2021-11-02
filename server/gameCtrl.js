const games = require ('./games.json')
let globalId = games[games.length - 1].id + 1

module.exports   = {
    addGame: (req, res) => { 
        const {name} = req.body

        let newGame = {
            name,
            id: gloabId
        }
        games.push(newGame)
        globalId++

        res.status(200).send(games)

    }
}