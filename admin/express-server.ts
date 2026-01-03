import express, { Request, Response, NextFunction } from "express";

const app = express(); // <-- create the Express app
const isDev = process.env.NODE_ENV !== "production";

app.use((req: Request, res: Response, next: NextFunction) => {
  let csp =
    "default-src 'self'; " +
    "img-src 'self' data:; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self';";

  if (isDev) {
    csp += " script-src 'self' 'unsafe-inline' 'unsafe-eval';";
  } else {
    csp += " script-src 'self';"; // safer for production
  }

  res.setHeader("Content-Security-Policy", csp);
  next();
});
