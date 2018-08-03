import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as cors from 'cors';
import * as helmet from 'helmet';

const app: express.Application = express();
const port = process.env.PORT || 4200;
const DIST_FOLDER = path.join(process.cwd(), 'dist/make-events');

app.use(compression());

app.use(cors());

app.use(helmet());

app.get('*', express.static(path.join(DIST_FOLDER)));

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
