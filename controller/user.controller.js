import pool from "../db.js";

const Register = (req, res) => {

    const Data = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            console.log(err);
        }

        const selectQuery = 'SELECT * FROM users WHERE email=?';
        con.query(selectQuery, Data.email, (error, result) => {
            if (error) {
                console.log(`Error in selecting user: ${error}`);
                con.release();
            } else {
                if (result.length > 0) {
                    console.log('User already exists.');
                    con.release();
                } else {
                    const insertQuery = 'INSERT INTO users SET ?';
                    con.query(insertQuery, Data, (err, results) => {
                        if (err) {
                            console.log(`Error in creating user: ${err}`);
                        } else {
                            console.log('User created successfully.');
                        }
                        con.release();
                    });
                }
            }
        });
    });
}

export { Register };



// const Register = (req, res) => {

//     // const { username, name, email, password } = req.body;

//     // console.log(req.body);
//     const Data = {
//         username: req.body.username,
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }

//     // console.log(req.body);
//     // username, name, email, password

//     pool.getConnection((err, con) => {
//         if (err) {
//             con.release();
//             console.log(err);
//         }

//         const query = 'SELECT * FORM users WHERE email=?';
//         con.query(query, Data.email, (eror, result) => {
//             if (eror) {
//                 console.log(`error in Email Find ${eror}`);
//             }

//             const query = 'INSERT INTO users SET ?'

//             con.query(query, Data, (error, results) => {
//                 if (error) {
//                     console.log(`error in creating user ${error}`);
//                 }

//                 con.release()
//             })
//         })
//     })
// }

// export { Register }


//userId , Username , Name , Email, Password
