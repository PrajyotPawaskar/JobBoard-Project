const jwt = require('jsonwebtoken');

const protectRoute = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get the token
            token = req.headers.authorization.split(' ')[1];
            // Verify the token
            const userVal = jwt.verify(token, '12345'); // Use a string secret
            // Attach the user value to the request object
            req.user = userVal;
            next(); // Call next to continue to the next middleware/route handler
        } catch (error) {
            res.status(401).json({ message: 'Not authorized' }); // Send JSON response
            return; // Ensure no further code is executed
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' }); // Send JSON response
        return; // Ensure no further code is executed
    }
};

module.exports = { protectRoute };
