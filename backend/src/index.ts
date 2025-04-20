import express, { Request, Response } from "express";
const app = express();
const port = 4242;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
app.listen(port, () => {
  console.log("App is lising on port", port);
});
