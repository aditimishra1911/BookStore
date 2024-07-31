import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; // Corrected the typo here

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if the user is already registered
        const user = await User.findOne({ email });

        // f a user with the provided email exists, the user variable will contain that user's data. If no such user is found, user will be null.
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the user's password
        const hashPassword = await bcryptjs.hash(password, 10);

        // If the user is not registered, create a new user
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        });

        // Save the new user in the database
        await createdUser.save();
        res.status(201).json({ message: "User created successfully",user:{
            _id:createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        } });
        
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req,res) => {
    try{
        const{email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    }catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
