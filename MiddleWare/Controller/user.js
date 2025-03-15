export const register =(req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).json({
        success: true,
        message: "User registered successfully"
    })

}
export const login =(req, res) => {
    const { gmail, password } = req.body;
    console.log(gmail, password);
    res.status(200).json({
        success: true,
        message: "User login again successfully"
    })
}