
const getUser = (req, res) =>{
    res.json({
        "message": "Welcome"
    })
}

const postUser = (req, res) =>{
    res.status(403).json({
        "message": "Post Api"
    })
}

const delUser = (req, res) =>{
    res.status(403).json({
        "message": "delete Api"
    })
}

const upd = (req, res) =>{
    res.status(403).json({
        "message": "patch Api"
    })
}

module.exports = {
    getUser,
    postUser,
    delUser,
    upd
}