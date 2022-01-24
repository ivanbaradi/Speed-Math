//Redirects user back to the math game
const redirectToMathGame = (req, res) => {
    res.redirect('game')
}

//Directs user to the math game
const directToMathGame = (req, res) => {
    res.render('game')
}

module.exports = {
    directToMathGame,
    redirectToMathGame
}