"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/shopping-lists
router.get('/', (req, res) => {
    res.json({
        message: 'Shopping lists - Coming soon!',
        lists: []
    });
});
exports.default = router;
