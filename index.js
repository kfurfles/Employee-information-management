const app = require('./config/express')();

app.listen(3000, () => {
    console.log('The is running on the port: 3000');
});