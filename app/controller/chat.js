import { _500 } from "./errorController.js";

// ~ Controllers
async function renderChatPage(req, res) {
    try {
        res.render("chat", { title: "Chill Room", salon: "Room_1" });
    } catch (error) {
        _500(error, req, res);
    }
}

export { renderChatPage };
