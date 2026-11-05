import { Router } from 'express';
import { tracks } from '../arrayData/tracks.js';
import { loops } from '../arrayData/loops.js';

const router = Router();

let nextID = 5;

router.get('/api/tracks', (req, res) => {
    res.send({ data: tracks });
});

router.get('/api/tracks/:id', (req, res) => {
    const id = Number(req.params.id);
    const track = tracks.find((track) => track.id === id);

    if (!track) {
        return res.status(404).send({ errorMessage: `Track with Id ${id} not found` });
    }

    res.send({ data: track });
});

router.get('/api/tracks/:id/loops', (req, res) => {
    const id = Number(req.params.id);
    const track = tracks.find((track) => track.id === id);

    if (!track) {
        return res.status(404).send({ errorMessage: `Track with Id ${id} not found` });
    }

    const trackLoops = loops.filter((loop) => loop.trackId === id);
    res.send({ data: trackLoops });
});

router.post('/api/tracks/:id/loops', (req, res) => {
    const trackId = Number(req.params.id);
    const track = tracks.find((track) => track.id === trackId);

    if (!track) {
        return res.status(404).send({ errorMessage: `Track with Id ${trackId} not found` });
    }

    const body = req.body;
    if (!body) {
        return res.status(400).send({ errorMessage: 'Send data in body' });
    }

    const { name, startTime, endTime, workingSpeed } = body;

    if (!name || !String(name).trim()) {
        return res.status(400).send({ errorMessage: 'Loop name required' });
    }

    if (startTime === undefined || startTime === null || startTime === '' ||
        !endTime || !workingSpeed) {
        return res.status(400).send({ errorMessage: 'startTime (not 0), endTime and workingSpeed required' });
    }

    const start = Number(startTime);
    const end = Number(endTime);
    const speed = Number(workingSpeed);

    if (!(start >= 0 && start < track.duration)) {
        return res.status(400).send({ errorMessage: 'startTime must be within track duration' });
    }

    if (!(end > start && end <= track.duration)) {
        return res.status(400).send({ errorMessage: 'endTime must be after startTime and within track duration' });
    }

    if (!(speed > 0 && speed <= 2)) {
        return res.status(400).send({ errorMessage: 'workingSpeed must be greater than 0 and less than or equal to 2' });
    }

    const now = new Date();
    const loop = {
        id: nextID,
        trackId: trackId,
        name: String(name).trim(),
        startTime: start,
        endTime: end,
        workingSpeed: speed,
        createdAt: now,
        updatedAt: now
    };

    loops.push(loop);
    nextID++;
    res.status(201).send({ data: loop });
});

router.post('/api/tracks', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.patch('/api/tracks/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.delete('/api/tracks/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.get('/api/tracks/:id/audio', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

export default router;
