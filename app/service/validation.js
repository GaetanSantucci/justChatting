
// 1. j'appelle body
function validationBody(schemaCustom) {
    // body attend un paramètre qui est un schéma de Joi
    // 2. je termine body et express derrière continue sa route en faisant l'appel du middleware
    return (req, res, next) => {
        // je valide ma req.query avec Joi
        const { error } = schemaCustom.validate(req.body);
        if (error) {
            // une erreur est-elle présente ?
            // j'indique qu'il y a une erreur
            res.status(500).json(error.details)
            return;
        }

        next();
    };
}

export { validationBody };
