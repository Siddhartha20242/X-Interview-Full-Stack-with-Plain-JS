// We will import the auth.routes.js in this one becasue it any
// Of our files get's larger than it will be difficult to manage that.


export const signup = async (req, res) => {
    res.json({
        data: "You hit the signup endpoint"
    });
}

export const login = async (req, res) => {
    res.json({
        data: "You hit the login endpoint"
    });
}

export const logout = async (req, res) => {
    res.json({
        data: "You hit the logout endpoint"
    });
}


































