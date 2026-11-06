import { Router } from 'express';
import { loops } from '../arrayData/loops.js';

const router = Router();

router.get('/api/loops/:id', (req, res) => {
    const id = Number(req.params.id);
    const loop = loops.find((loop) => loop.id === id);

    if (!loop) {
        return res.status(404).send({ errorMessage: `Loop with ID ${id} not found` });
    }

    res.send({ data: loop });
});

router.get('/api/loops/:id/results', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.post('/api/loops/:id/results', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.patch('/api/loops/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.delete('/api/loops/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

export default router;
