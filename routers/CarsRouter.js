
const router = require('express').Router();

// import db
const db = require('../data/dbConfig');

// Read cars

router.get('/', async (req, res, next) => {
    try {
         const cars = await db('cars');
         res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
    
})

// get a single car

router.get('/:id', async (req, res, next) => {
    try {
        const car = await db('cars').where('id', req.params.id).first();
        res.status(200).json(car);
        
    } catch (error) {
        next(error)
}
})


// Create a car

router.post('/', async (req, res, next) => {
    try {
        const [id] = await db('cars').insert(req.body);

        res.status(201).json( await db('cars').where('id', id).first());

    } catch (error) {
        next(error);
    }
})

// Update a car

router.put('/:id', async (req, res, next) => {
    try {
        const car = await db('cars').where('id', req.params.id).update(req.body);
        res.status(200).json(await db('cars').where('id', req.params.id).first());
        
    } catch (error) {
        next(error);
    }
})

// Delete a car

router.delete('/:id', async (req, res, next) => {
    try {
        await db('cars').where('id', req.params.id).del();
        res.status(204).end();
        
    } catch (error) {
        next(error)
    }
})



module.exports = router;