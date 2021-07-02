const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;

    console.log(q);
    console.log(filename);

    fs.readFile(filename, function (err, data) {
      if (err) {
        const error = fs.readFileSync("./404.html", "utf8");
        res.end(error);
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// var http = require("http");
// const url = require("url");
// var formidable = require("formidable");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     if (req.url == "/upload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         var oldpath = files.filetoupload.path;
//         var newpath = "./" + files.filetoupload.name;
//         fs.rename(oldpath, newpath, function (err) {
//             if (err) throw err;
//             console.log("Filed uploaded.");
//         });
//       });
//     } else {
//         const q = url.parse(req.url, true);
//         const filename = "." + q.pathname;
//         console.log(q);
//         console.log(filename);
//         fs.readFile(filename, function (err, data) {
//         if (err) {
//             const error = fs.readFileSync("./404.html", "utf8");
//             res.end(error);
//             return res.end();
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//         });
//     }
//   })
//   .listen(8080);