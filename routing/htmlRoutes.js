// 3. Your `htmlRoutes.js` file should include two routes:

//   * A GET Route to `/survey` which should display the survey page.
//   * A default, catch-all route that leads to `home.html` which displays the home page.

function myHtmlRoutes(app) {
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");


    app.get('/survey', function(req, res) {
                res.sendFile(path.join(__dirname + '/../public/survey.html'));

                // If no matching route is found default to home
                app.use(function(req, res) {
                            res.sendFile(path.join(__dirname + '/../public/home.html'));


                        }
                        module.exports = htmlRoutes;
