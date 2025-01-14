"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
// Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        const userResponse = users.map((user) => {
            // Exclude password field
            const _a = user.toObject(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
            return userWithoutPassword;
        });
        res.json(userResponse);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});
exports.getUsers = getUsers;
// Get a single user by ID
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield User_1.default.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const _a = user.toObject(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
        res.json(userWithoutPassword);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
});
exports.getUser = getUser;
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = new User_1.default(user);
        const savedUser = yield newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});
exports.createUser = createUser;
// Update a user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedUser = yield User_1.default.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ error: 'Error updating user' });
    }
});
exports.updateUser = updateUser;
// Delete a user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedUser = yield User_1.default.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Error deleting user' });
    }
});
exports.deleteUser = deleteUser;
