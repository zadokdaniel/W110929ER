const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer();

server.on("request", require("./lib/logger"));
server.on("request", require("./lib/parseURL"));

/***
 * / or /home           home page
 * /info/about          about page
 * /contact-us          contact us page
 * /a/b/c/styles.css    stylesheet file
 * *                    page not found
 */

function sendFile(fileRelativePath, res) {
  const file = fs.createReadStream(path.resolve(__dirname, fileRelativePath));
  file.pipe(res);
}

server.on("request", (req, res) => {
  if (req.method === "GET" && ["/", "/home"].includes(req.path)) {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    sendFile("./public/home.html");

    return;
  }

  if (req.method === "GET" && req.path === "/info/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/about.html")
    );
    file.pipe(res);

    return;
  }

  if (req.method === "GET" && req.path === "/contact-us") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/contactUs.html")
    );
    file.pipe(res);

    return;
  }

  if (req.method === "GET" && req.path === "/a/b/c/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });

    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/styles/style.css")
    );
    file.pipe(res);

    return;
  }

  res.writeHead(404, {
    "content-type": "text/html",
  });

  const file = fs.createReadStream(
    path.resolve(__dirname, "./public/pageNotFound.html")
  );
  file.pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
