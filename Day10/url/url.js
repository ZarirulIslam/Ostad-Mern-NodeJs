var http = require("http");
var URL = require("url");

var server = http.createServer(function (req,res) {

    var myURL="http://rabbil.com/blog.html?year=2020&month=july";

    var myURLObj = URL.parse(myURL,true);

    var myHostName = myURLObj.host;

    var myPathName = myURLObj.path;

    var mySearchQuery = myURLObj.search;

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(myHostName);
    res.write(myPathName);
    res.write(mySearchQuery);
    res.end();
});

server.listen(5080);
console.log("Run Successfully");