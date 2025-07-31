"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/ingredients
router.get('/', (req, res) => {
    res.json({
        message: 'Ingredients - Coming soon!',
        ingredients: []
    });
});
exports.default = router;
