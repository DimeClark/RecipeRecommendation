"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/users/profile
router.get('/profile', (req, res) => {
    res.json({
        message: 'User profile - Coming soon!',
        user: null
    });
});
exports.default = router;
