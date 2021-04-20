const express = require('express')
const router = express.Router()

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, listAll, remove, read, update, } = require("../controllers/event");

// routes
router.post("/event", authCheck, adminCheck, create);
router.get("/event/:slug", read);
router.get("/events/:count", listAll); // products/100
router.delete("/event/:slug", authCheck, adminCheck, remove);

router.put("/event/:slug", authCheck, adminCheck, update);

module.exports = router;

// const { create, eventById, read, update, remove, getTypeEvents, getStatusValues, list, listEvents } = require('../controllers/event')
// const { userById } = require('../controllers/user')
// const { requireSignin, isAdmin, isAuth } = require('../controllers/auth')
// const { readClients } = require('../controllers/client')


// router.get("/event/:eventId", read)
// router.post("/event/create/:userId", requireSignin, isAuth, isAdmin, create)
// router.get('/event/:eventId/clients', readClients)
// router.put("/event/:eventId/:userId", requireSignin, isAuth, isAdmin, update)
// router.delete("/event/:eventId/:userId", requireSignin, isAuth, isAdmin, remove)
// router.get("/event/eventTypes/:userId", requireSignin, isAuth, isAdmin, getTypeEvents)
// router.get("/event/statusValues/:userId", requireSignin, isAuth, isAdmin, getStatusValues)
// router.get("/events", list)
// router.get("/events-list", listEvents)

// router.param("eventId", eventById)
// router.param("userId", userById)


// module.exports = router;