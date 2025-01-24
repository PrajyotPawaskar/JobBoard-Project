const User = require('../models/userModel');

const roleAuth = async (req, res, next) => {
    try {
        const userId = req.user.id;

        // Validate userId format (optional, depends on your app's logic)
        if (!userId) {
            return res.status(400).json({ message: "User ID is missing" });
        }

        const userDetails = await User.findById(userId).select('role');

        // If user doesn't exist
        if (!userDetails) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the user has the "employer" role
        if (userDetails.role === "employer") {
            return next();  // Proceed to the next middleware or route handler
        } else {
            return res.status(403).json({
                message: "User is not authorized"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while checking user role",
            error: error.message
        });
    }
};

module.exports = { roleAuth };
