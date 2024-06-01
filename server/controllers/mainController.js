//GET homepage

exports.homepage = async (req, res) => {
        const locals = {
            title: 'Notes App',
            description: 'Free NodeJs Notes App'
        }
        res.render('index', {locals, 
        layout: '../views/layouts/front-page'});
}

//GET about
exports.about = async (req, res) => {
    const locals = {
        title: 'Notes - About',
        description: 'Free NodeJs Notes App'
    }
    res.render('about', locals);
}
