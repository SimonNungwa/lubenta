const express = require('express');
const router = express.Router();
const AuctionItem = require('../models/auctionItem');

router.get('/', async (req, res) => {
    try {
        const items = await AuctionItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const item = new AuctionItem({
        title: req.body.title,
        description: req.body.description,
        startingBid: req.body.startingBid,
        currentBid: req.body.currentBid,
        endTime: req.body.endTime
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/:id', getAuctionItem, (req, res) => {
    res.json(res.auctionItem);
});

router.patch('/:id', getAuctionItem, async (req, res) => {
    if (req.body.title != null) {
        res.auctionItem.title = req.body.title;
    }
    if (req.body.description != null) {
        res.auctionItem.description = req.body.description;
    }
    if (req.body.startingBid != null) {
        res.auctionItem.startingBid = req.body.startingBid;
    }
    if (req.body.currentBid != null) {
        res.auctionItem.currentBid = req.body.currentBid;
    }
    if (req.body.endTime != null) {
        res.auctionItem.endTime = req.body.endTime;
    }
    try {
        const updatedItem = await res.auctionItem.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getAuctionItem, async (req, res) => {
    try {
        await res.auctionItem.remove();
        res.json({ message: 'Auction item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getAuctionItem(req, res, next) {
    let auctionItem;
    try {
        auctionItem = await AuctionItem.findById(req.params.id);
        if (auctionItem == null) {
            return res.status(404).json({ message: 'Cannot find auction item' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.auctionItem = auctionItem;
    next();
}

module.exports = router;
