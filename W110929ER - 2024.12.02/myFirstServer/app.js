const http = require("node:http");
const url = require("node:url");

function getBody(stream) {
  return new Promise((resolve, reject) => {
    let chunks = "";

    stream.on("data", (chunk) => (chunks += chunk));
    stream.on("end", () => resolve(chunks));
  });
}

const server = http.createServer();

server.on("request", (req) => {
  const { search, pathname, searchParams } = new URL(
    "http://localhost" + req.url
  );
  req.path = pathname;
  req.query = Object.fromEntries(searchParams.entries());
  req.queryRaw = search;
});

server.on("request", (req) => {
  console.log(new Date(), req.method, req.path);
});

server.on("request", async (req, res) => {
  // Request
  console.log("httpVersion: ", req.httpVersion);
  console.log("method: ", req.method);
  console.log("url: ", req.url);

  console.log("headers: ", req.headers);
  console.log("body: ", await getBody(req));

  // Response
  //   res.statusCode = 404;

  //   res.setHeader("my header", "my header value");
  //   res.setHeaders({
  //     header1: "value1",
  //     header2: "value2",
  //   });

  if (req.path === "/users") {
    console.log("users page");
  }

  res.writeHead(404, {
    "my-header": "my header value",
    header1: "value1",
    header2: "value2",
    "content-type": "text/html",
  });

  res.write("hello\r\n");
  res.end("I finsihed");
});

// server.on("request", (req, res) => {
//   console.log(req, res);
// });

// server.on("listening", () => {
//   console.log("listenting");
// });

server.listen(3000, () => {
  console.log("listenting");
});
