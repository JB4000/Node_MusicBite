import 'dotenv/config';
import express from 'express';
import tracksRouter from './routers/tracksRouter.js';
import trackSectionsRouter from './routers/trackSectionsRouter.js';
import sectionsRouter from './routers/sectionsRouter.js';
import loopsRouter from './routers/loopsRouter.js';
import practiceResultsRouter from './routers/practiceResultsRouter.js';
import practiceSnapshotsRouter from './routers/practiceSnapshotsRouter.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));

// api
app.use(tracksRouter);
app.use(trackSectionsRouter);
app.use(sectionsRouter);
app.use(loopsRouter);
app.use(practiceResultsRouter);
app.use(practiceSnapshotsRouter);


const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log('Error starting the server', error);
        return;
    }
    console.log('Server is running on port', server.address().port);
});
