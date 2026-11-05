import { Router } from 'express';

const router = Router();

router.get('/api/results/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.delete('/api/results/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

export default router;
