const jwt = require("jsonwebtoken")
const { token } = require("morgan")

const generetaJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h',
        }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}