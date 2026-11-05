import { Router } from 'express';

const router = Router();

router.get('/api/sections/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.patch('/api/sections/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

router.delete('/api/sections/:id', (req, res) => {
    res.status(501).send({ errorMessage: 'Not implemented yet' });
});

export default router;
