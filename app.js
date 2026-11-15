const express = require('express');
const app = express();

// Middleware required to parse incoming form data from POST requests
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the EC2 Deployment Homepage Testing!');
});

// 1. GET route: Renders the HTML form to the user
app.get('/hobby', (req, res) => {
    res.send(`
        <form method="POST" action="/hobby">
            <label>Enter your Name: <input type="text" name="userName" required></label><br><br>
            <label>Enter your Hobby: <input type="text" name="userHobby" required></label><br><br>
            <button type="submit">Submit your details</button>
        </form>
    `);
});

// 2. POST route: Receives the form submission and extracts the variables
app.post('/hobby', (req, res) => {
    const { userName, userHobby } = req.body;
    res.send(`HI ${userName} your hobby is ${userHobby}`);
});

// 3. Dynamic wildcard route (must stay at the bottom)
app.get('/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`);
});

module.exports = app;

