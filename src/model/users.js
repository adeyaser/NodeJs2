const dbPool = require('../config/database');
const md5    = require('md5');

const getAllUsers =()=>{
    const SQLQuery ="SELECT * FROM USERS";
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    let password = md5(body.password);
    
    const SQLQuery = `  INSERT INTO users (nama, realname, password)
                        VALUES ('${body.name}', '${body.realname}', '${password}')`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    let password = md5(body.password);
    const SQLQuery = `  UPDATE users 
                        SET nama='${body.name}',realname='${body.realname}', password='${password}' 
                        WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}