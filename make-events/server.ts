import * as express from 'express';

const app: express.Application = express();
const port: string | number = process.env.PORT || 4200;

app.use('/', express.static(__dirname + 'dist/make-events'));

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
