const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');  // ✅ Corrected import path

// 🔹 POST: Create a new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('✅ MenuItem saved:', response);
        res.status(201).json({ message: 'Menu item created successfully', item: response });
    } catch (err) {
        console.error('❌ Error saving MenuItem:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 🔹 GET: Fetch all menu items
router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste.toLowerCase(); // Normalize case

        const validTastes = ['sweet', 'spicy', 'bland', 'saur'];
        if (validTastes.includes(taste)) {
            const response = await MenuItem.find({ taste: taste });
            console.log(`✅ ${response.length} menu item(s) with taste "${taste}" fetched`);
            res.status(200).json(response);
        } else {
            console.warn(`⚠️ Invalid taste requested: ${taste}`);
            res.status(400).json({ error: 'Invalid taste. Must be one of: sweet, spicy, bland, saur' });
        }
    } catch (err) {
        console.error('❌ Error fetching menu items by taste:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        
        const response = await MenuItem.findByIdAndDelete(menuItemId); // ✅ Correct method

        if (!response) {
            console.warn(`⚠️ Menu item with ID ${menuItemId} not found`);
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log(`✅ Menu item with ID ${menuItemId} deleted successfully`);
        res.status(200).json({ message: 'Menu item deleted successfully' }); // ✅ Fixed response

    } catch (err) {
        console.error('❌ Error deleting menu item:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//sant
module.exports = router;
