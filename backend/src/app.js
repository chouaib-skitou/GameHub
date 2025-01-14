"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_docs_1 = require("./api-docs");
const mongo_1 = __importDefault(require("./config/mongo"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json()); // Parse incoming JSON requests
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded requests
// Swagger API Documentation
app.use('/api/docs', api_docs_1.swaggerUi.serve, api_docs_1.swaggerUi.setup(api_docs_1.swaggerSpec));
// MongoDB Connection
(0, mongo_1.default)();
// Routes
app.use('/users', userRoutes_1.default); // Mount user routes
// Default route for health check
app.get('/', (req, res) => {
    res.send('API is running...');
});
exports.default = app;
