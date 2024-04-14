const http = require("http");
const path = require("path");
const mimeTypes = require( './appModules/http-utils/mime-types');
import staticFile from './appModules/http-utils/static-file';


const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
      break;
        case "/":
        res.statusCode = 200;
        staticFile(res, "/index.html", ".html");
        break;
        case "/game":
            gameRouteController(res);
      break;
      case "/vote":
        voteRouteController(req, res);
  break;
        default:
            defaultRouteController(res, url);
          }
}); 
  