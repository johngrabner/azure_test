"use strict";

const app = require("./app/app.js")

app.listen(3000, function () {
    console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate');
});