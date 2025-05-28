const index = (req, res) => {
    console.log('elenco post')
};

const show = (req, res) => {
    console.log('post con id' + req.params.id)
};

module.exports = { index, show };