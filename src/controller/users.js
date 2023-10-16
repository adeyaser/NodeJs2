const UserModel = require("../model/users");

const getAllUsers = async(req,res)=>{
    try {
        const [data]= await UserModel.getAllUsers();
        res.json({
            message :'Data All User success',
            data :data
        });
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            ServerMessage : error
        });
        
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.realname || !body.password){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang kurang tepat',
            data: null,
        })
    }

    try {
        await UserModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}