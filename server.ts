import express from "express";
import { Request, Response } from "express";

const app: express.Application = express();
const port: string | number = process.env.PORT || 4200;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello MakeEventsFE.");
});

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})
