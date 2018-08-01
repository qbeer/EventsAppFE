import * as express from 'express';
import * as path from "path";

const app: express.Application = express();
const port = process.env.PORT || 4200;
const DIST_FOLDER = path.join(process.cwd(), 'dist/make-events');

app.get('*', express.static(path.join(DIST_FOLDER)));

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
