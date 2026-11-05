import { Router } from 'express';

const router = Router();

router.get('/api/tracks/:id/snapshot', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.put('/api/tracks/:id/snapshot', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

export default router;
