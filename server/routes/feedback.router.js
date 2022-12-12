const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//not sure if I even need a GET for base mode
router.get('/', (req, res) => {
    console.log('in router GET');
    pool.query('SELECT * from "feedback" ORDER BY "id" DESC;')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in GET', error);
        res.sendStatus(500);
    })
})

//TODO: add a post request to send all feedback data to the DB

router.post('/', (req, res) => {

    let feedback = (req.body)

    console.log('in router.POST', feedback);

    let queryText = (`INSERT INTO "feedback" ("feeling", "understanding", "supported", "comments")
    VALUES($1, $2, $3, $4)`)
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.supported, feedback.comments])
    .then ((response) => {
        console.log('POST to DB is:', response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error POSTing', queryText, 'error:', error);
        res.sendStatus(500);
    })
}) 

module.exports = router;