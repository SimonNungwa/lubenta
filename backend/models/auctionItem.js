const mongoose = require('mongoose');

const auctionItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startingBid: { type: Number, required: true },
    currentBid: { type: Number, required: true },
    endTime: { type: Date, required: true },
});

const AuctionItem = mongoose.model('AuctionItem', auctionItemSchema);

module.exports = AuctionItem;
