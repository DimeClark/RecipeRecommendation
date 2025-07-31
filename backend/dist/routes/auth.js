"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// POST /api/auth/login
router.post('/login', (req, res) => {
    res.json({
        message: 'Login - Coming soon!',
        token: null
    });
});
// POST /api/auth/register
router.post('/register', (req, res) => {
    res.json({
        message: 'Register - Coming soon!',
        user: null
    });
});
exports.default = router;
