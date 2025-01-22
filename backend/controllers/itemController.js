const Item = require('../models/Item');

// Create a new item
exports.createItem = async (req, res) => {
    const { name, description, price, quantity } = req.body;

    try {
        const item = new Item({ name, description, price, quantity });
        await item.save();
        res.status(201).json({ message: 'Item created successfully', item });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating item' });
    }
};

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching items' });
    }
};

// Get a single item
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching item' });
    }
};

// Update an item
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully', updatedItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating item' });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting item' });
    }
};
