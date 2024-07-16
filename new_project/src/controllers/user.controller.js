import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import Users, { User } from '../models/user.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'
const registerUser = asyncHandler(async (req, res) => {
    // Get user details from the frontend
    const { fullName, email, password, username } = req.body;

    // Validation - not empty
    if ([fullName, username, email, password].some(field => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Further logic for checking user existence, uploading images, creating user, etc.
    console.log("Email:", email);

    // Dummy response for illustration
    res.status(200).json({ message: "User registration logic to be implemented." });
});

const existedUser = User.findOne({
    $or: [{username}, {email}]
})

if(existedUser){
    throw new ApiError(409, 'User with email or username already exists')
}
const avatarLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path

if(!avatarLocalPath){
    throw new ApiError(400, 'Avatar file is required')
}
const avatar = await uploadOneCloudinary(avatarLocalPath)
const image = await uploadOneCloudinary(coverImageLocalPath)

const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage:coverimage?.url || "",
    email,
    password,
    username:username.toLowerCase()
})

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
)

if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering the user")
}

return res.status(201).json(
    new ApiResponse(200, "User registered successfully")
)
export {registerUser}