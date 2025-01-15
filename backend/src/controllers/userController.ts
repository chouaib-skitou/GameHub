import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { CreateUserDTO, UpdateUserDTO, UserResponseDTO } from '../dtos/UserDTO';

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    const userResponse: UserResponseDTO[] = users.map((user) => {
      const { password, createdAt, updatedAt, ...userWithoutPassword } = user.toObject();
      return {
        ...userWithoutPassword,
        createdAt: createdAt.toISOString(), // Convert Date to string
        updatedAt: updatedAt.toISOString(), // Convert Date to string
      } as UserResponseDTO;
    });
    res.json(userResponse);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
};

// Get a single user by ID
export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { password, createdAt, updatedAt, ...userWithoutPassword } = user.toObject();
    res.json({
      ...userWithoutPassword,
      createdAt: createdAt.toISOString(),
      updatedAt: updatedAt.toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user' });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user: CreateUserDTO = req.body;
    const newUser: IUser = new User(user);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updates: UpdateUserDTO = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Error updating user' });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting user' });
  }
};
