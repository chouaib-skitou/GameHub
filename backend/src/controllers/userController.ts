import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User, { IUser } from '../models/User';
import { CreateUserDTO, UpdateUserDTO, UserResponseDTO } from '../dtos/UserDTO';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    const userResponse: UserResponseDTO[] = users.map((user) => {
      const { password, ...userWithoutPassword } = user.toObject();
      return {
        ...userWithoutPassword,
        id: (user._id as mongoose.Types.ObjectId).toString(),
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      } as UserResponseDTO;
    });
    res.json(userResponse);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Error retrieving users' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { password, ...userWithoutPassword } = user.toObject();
    const userResponse: UserResponseDTO = {
      ...userWithoutPassword,
      id: (user._id as mongoose.Types.ObjectId).toString(),
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
    res.json(userResponse);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Error retrieving user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, name, email, password }: CreateUserDTO = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const derivedUsername = username || email.split('@')[0];

    const existingUser = await User.findOne({ $or: [{ email }, { username: derivedUsername }] });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email or username already exists' });
    }

    const newUser: IUser = new User({ username: derivedUsername, name, email, password });
    const savedUser = await newUser.save();

    const userResponse: UserResponseDTO = {
      id: (savedUser._id as mongoose.Types.ObjectId).toString(),
      username: savedUser.username,
      name: savedUser.name,
      email: savedUser.email,
      createdAt: savedUser.createdAt.toISOString(),
      updatedAt: savedUser.updatedAt.toISOString(),
    };

    res.status(201).json(userResponse);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user', details: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updates: UpdateUserDTO = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { password, ...userWithoutPassword } = updatedUser.toObject();
    const userResponse: UserResponseDTO = {
      ...userWithoutPassword,
      id: (updatedUser._id as mongoose.Types.ObjectId).toString(),
      createdAt: updatedUser.createdAt.toISOString(),
      updatedAt: updatedUser.updatedAt.toISOString(),
    };
    res.json(userResponse);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ error: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(400).json({ error: 'Error deleting user' });
  }
};