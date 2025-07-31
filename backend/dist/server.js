"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const recipes_1 = __importDefault(require("./routes/recipes"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const recommendations_1 = __importDefault(require("./routes/recommendations"));
const shoppingLists_1 = __importDefault(require("./routes/shoppingLists"));
const ingredients_1 = __importDefault(require("./routes/ingredients"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const logger_1 = require("./utils/logger");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Security middleware
app.use((0, helmet_1.default)());
// CORS configuration
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
// Body parsing middleware
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Compression middleware
app.use((0, compression_1.default)());
// Logging middleware
app.use((0, morgan_1.default)('combined', { stream: { write: (message) => logger_1.logger.info(message.trim()) } }));
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV
    });
});
// API routes
app.use('/api/auth', auth_1.default);
app.use('/api/users', users_1.default);
app.use('/api/recipes', recipes_1.default);
app.use('/api/recommendations', recommendations_1.default);
app.use('/api/shopping-lists', shoppingLists_1.default);
app.use('/api/ingredients', ingredients_1.default);
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Route ${req.originalUrl} not found`
    });
});
// Error handling middleware
app.use(errorHandler_1.default);
// Start server
app.listen(PORT, () => {
    logger_1.logger.info(`🚀 Server running on port ${PORT}`);
    logger_1.logger.info(`📊 Environment: ${process.env.NODE_ENV}`);
    logger_1.logger.info(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN}`);
});
exports.default = app;
