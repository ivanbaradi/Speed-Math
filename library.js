//Directs user to the math game
const homePage = (req, res) => {
    res.render('game')
}

//Directs user to add entry form if they beat at least 10th place user
const addEntryPage = (req, res) => {
    res.render('add-entry')
}

const errorPage = (req, res) => {
    res.render('error')
}

module.exports = {
    homePage,
    addEntryPage,
    errorPage
}
