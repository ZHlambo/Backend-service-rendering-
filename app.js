import Koa from "koa";
var fs = require('fs');
import Router from "koa-router";
import {renderToString} from "react-dom/server";
import React from "react";
import Home from "./src/views/home";

const port = 5000;
const app = new Koa();
const router = new Router();
var mine = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};

const initHtml = function(component) {
  console.log(renderToString(component));
  return `<html>
        <head>
          <title>title</title>
        </head>
        <script src="//localhost:8888/main.js"></script>
        <body>
          <div id="react-target">${renderToString(component)}</div>
        </body>
        </html>`;
}

router.get("/home", function(ctx) {
  console.log(ctx.url);
  ctx.body = initHtml(<Home/>);
  return;
});
// router.get("/*", async function(ctx) {
//   const path = require('path');
//   var realPath = path.resolve(__dirname,"/dist" + ctx.url)
//   var ext = path.extname(realPath);
//
//
//   var contentType = mine[ext] || "text/plain";
//   console.log(realPath,contentType);
//   ctx.set('Content-Type', contentType);
//   ctx.status = 200;
//   ctx.body = await new Promise(function(reso,reje){
//         fs.exists(realPath,function(err,data){
//             if(err) {
//               ctx.status = 404;
//               reso('error');
//             }
//             else
//              reso(data.toString());
//         })
//     }).then(function(data){
//         return data
//     });
//
//     return ;
//   fs.exists(realPath, function(exists) {
//   console.log(realPath,exists,ctx.url);
//     if (!exists) {
//       ctx.status = 404;
//       ctx.set('Content-Type', 'text/plain');
//       ctx.body = "This request URL was not found on this server.";
//     } else {
//       fs.readFile(realPath, "binary", function(err, file) {
//         if (err) {
//           ctx.status = 500;
//           ctx.set('Content-Type', 'text/plain');
//           ctx.body = "操作出错";
//         } else {
//         }
//       });
//     }
//     return;
//   });
// });

app.use(router.routes());

app.listen(port, function() {
  console.log(`App is running in localhost:${port}`);
});
