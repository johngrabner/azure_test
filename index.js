"use strict";

const app = require("./app/app.js")

var port = process.env.PORT || 1337;

app.listen(port, function () {
    console.log('Express started on http://localhost:' + port + ' press Ctrl-C to terminate');
});