const express = require('express');
const router = express.Router();
const Person = require('../models/Person'); // ✅ Fixed relative path

// 🔹 POST: Create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('✅ Data saved:', response);
        res.status(201).json({ message: 'Person created successfully', person: response });
    } catch (err) {
        console.error('❌ Error saving Person:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 🔹 GET: Retrieve all people
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log(`✅ Data fetched: ${data.length} people`);
        res.status(200).json(data);
    } catch (err) {
        console.error('❌ Error fetching people:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 🔹 GET: Retrieve people by workType
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType.toLowerCase(); // Normalize case

        const validWorkTypes = ['chef', 'manager', 'waiter'];
        if (validWorkTypes.includes(workType)) {
            const response = await Person.find({ work: workType });
            console.log(`✅ ${response.length} ${workType}(s) fetched`);
            res.status(200).json(response);
        } else {
            console.warn(`⚠️ Invalid work type requested: ${workType}`);
            res.status(400).json({ error: 'Invalid work type. Must be one of: chef, manager, waiter' });
        }
    } catch (err) {
        console.error('❌ Error fetching people by work type:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.put('/:id', async(req,res)=>{
    try{
const personId = req.params.id;
const updatedPersonData= req.body;

const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true,
    runValidators:true,
})
if(!response){
    return res.status(404).json({error:'person not found'});
}
console.log('data updated');
res.status(200).json(response);
    }catch(err){
 console.error('❌ Error fetching people by work type:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        
        const response = await Person.findByIdAndDelete(personId); // ✅ Correct method

        if (!response) {
            console.warn(`⚠️ Person with ID ${personId} not found`);
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log(`✅ Person with ID ${personId} deleted successfully`);
        res.status(200).json({ message: 'Person deleted successfully' }); // ✅ Fixed syntax

    } catch (err) {
        console.error('❌ Error deleting person:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
