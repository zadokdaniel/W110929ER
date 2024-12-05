const express = require("express");

const app = express();

app.use(require("morgan")("dev"));

app.all(
  "*",
  (req, res, next) => {
    console.log("*");

    if (req.query.password === "1234") {
      next();
    } else {
      res.send("you are not autherized");
    }
  },
  (req, res, next) => {
    console.log("1");
    next();
  }
);

app.get("/home/my/room/bed", (req, res) => {
  //   res.write("hello\r\n");
  //   res.end("hello again!");
  //   res.json({ a: 5 });
  //   res.send("hello");
  //   res.send({ b: 5 }); // runs .json beacuse it is an object
  res.sendFile(require("path").resolve(__dirname, "./pnpm-lock.yaml"));
});

/**
 * Example of expresse's default 404
 *
 */
// app.all("*", (req, res) => {
//   res.status(404).send(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="utf-8">
//     <title>Error</title>
// </head>
// <body>
//     <pre>Cannot ${req.method} ${req.path}</pre>
// </body>
// </html>
// `);
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
