// Create web server

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.json({ message: 'Comments' });
});

router.get('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

router.post('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            const comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), 'utf8', (err) => {
                if (err) {
                    res.json({ message: 'Error' });
                } else {
                    res.json({ message: 'Success' });
                }
            });
        }
    });
});

module.exports = router;