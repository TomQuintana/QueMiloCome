import express from 'express';

const router = express.Router();

router.get('/registrar', (req, res) => {
  res.send('Desde comidas')
})

export default router 
