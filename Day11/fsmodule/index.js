var fs=require("fs");
var http=require("http");

var server=http.createServer(function (req,res) {

    if(req.url="/"){
        //Asynchronus Call back Function thakbe
        //Read File
        // fs.readFile("Home.html",function (error, data) {
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write(data);
        //     res.end();
        // });

       // Write File
       //  fs.writeFile("demo.txt","Hello", function (error) {
       //      if(error){
       //          res.writeHead(200,{"Content-Type":"text/html"});
       //          res.write("File write Fail");
       //          res.end();
       //      }
       //      else {
       //          res.writeHead(200,{"Content-Type":"text/html"});
       //          res.write("File write Success");
       //          res.end();
       //      }
       //  })

        //Rename File
        // fs.rename("demorename.txt","demornew.txt",function (error) {
        //
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Rename Fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Rename Success");
        //         res.end();
        //     }
        // })

        //Delete File
        // fs.unlink("demosync.txt", function (error) {
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Delete Fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Delete Success");
        //         res.end();
        //     }
        // })

        //File Exist

        fs.exists("Home1.html", function (result) {
            if(result){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("File Exist");
                res.end();
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("File Not Exist");
                res.end();
            }
        })



        //Synchronus Call back function thakbena
        // let data = fs.readFileSync("Home.html");
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write(data);
        //     res.end();

        // let error = fs.writeFileSync("demoSync.txt","This is Synchronus");
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File write Fail");
        //         res.end();
        //     }
        //     else {
        //         res.writeHead(200, {"Content-Type": "text/html"});
        //         res.write("File write Success");
        //         res.end();
        //     }

        // let error = fs.renameSync("demosyncre.txt","demosync.txt");
        //
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Rename Fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("File Rename Success");
        //         res.end();
        //     }

        //Delete

        // let error = fs.unlinkSync("demo.txt");
        //
        // if(error){
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("File Delete Fail");
        //     res.end();
        // }
        // else{
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("File Delete Success");
        //     res.end();
        // }

        // Exist

        // let result = fs.existsSync("Home1.html");
        //
        // if(result){
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("File Exist");
        //     res.end();
        // }
        // else{
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("File Not Exist");
        //     res.end();
        // }

    }
});

server.listen(5050);
console.log("Server Run Succesfully");