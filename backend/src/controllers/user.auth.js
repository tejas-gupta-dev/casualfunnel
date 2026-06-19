import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";

export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields required"
            });
        }

        const existingUser =
            await user.findOne({ email })
                .select("_id")
                .lean();

        if (existingUser) {
            return res.status(409).json({
                message: "user already exists"
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const newuser =
            await user.create({
                name,
                email,
                password: hashedPassword
            });

        const token =
            generateToken(newuser._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure:
                process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge:
                24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                id: newuser._id,
                name: newuser.name,
                email: newuser.email
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
            await user.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isPasswordCorrect =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isPasswordCorrect) {

            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token =
            generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure:
                process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge:
                24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const logout = (req, res) => {

    res.clearCookie("token");

    return res.status(200).json({
        success: true,
        message: "Logout successful"
    });
};