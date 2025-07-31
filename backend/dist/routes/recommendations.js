"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// POST /api/recommendations
router.post('/', (req, res) => {
    res.json({
        message: 'Recipe recommendations - Coming soon!',
        recommendations: []
    });
});
exports.default = router;
