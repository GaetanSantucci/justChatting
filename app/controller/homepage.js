import { _500 } from "./errorController.js";

// 
async function renderHomepage(req, res) {
    try {
        res.render("homepage", { title: 'Home'});
    } catch (error) {
        _500(error, req, res);
    }
}

async function setPseudo(req, res) {
    try {
        req.session.user = req.body.pseudo;
        res.json(true);
    } catch (error) {
        _500(error, req, res);
    }
}

export { renderHomepage, setPseudo };
