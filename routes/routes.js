const Router = require("express").Router();

const passport = require("../config/passport")

const datosController = require("../controllers/datosControllers");
const { ObtenerTodosLosDatos, ObtenerItinerario, ObtenerContinentes, ObtenerContinentario, likeDisLike } = datosController; // desestructuración del controlador

const usersControllers = require("../controllers/usersControllers");
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarCesion, verificarToken } = usersControllers;

const comentControllers = require("../controllers/comentControllers");
const { cargarComentario, obtenerComentario, borrarComentario, modificarComentario } = comentControllers;

const validator = require("../controllers/validator");


Router.route("/datos") // "datos" parte de la url de la consulta
    .get(ObtenerTodosLosDatos)

Router.route("/itinerarios/:city")
    .get(ObtenerItinerario)

Router.route("/datosContinentes")
    .get(ObtenerContinentes)

Router.route("/continentarios/:contynente")
    .get(ObtenerContinentario)

Router.route("/cardSignUp")
    .post(validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
    .get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarCesion)

Router.route("/coment")
    .post(cargarComentario)

Router.route("/coment/:id")
    .get(obtenerComentario)
    .delete(borrarComentario)
    .put(modificarComentario)

Router.route("/signInToken")
    .get(passport.authenticate("jwt", { session: false }), verificarToken) // jwt: tipo de token

Router.route("/likeDisLike/:id")
    .put(passport.authenticate("jwt", { session: false }), likeDisLike)

module.exports = Router
