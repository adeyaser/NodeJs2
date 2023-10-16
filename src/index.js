const express = require("express");

const router = require("./routes/route");

const middelwareLogRequest = require("./middleware/log");
const upload = require('./middleware/muter');

const app = express();
app.use(middelwareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/image'));
app.post('/upload',upload.single('file'),(req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})



app.use('/',router);
app.use('/users',router);


app.listen(4000,()=>{
    console.log("Server Berhasil Di Running di Port 4000");
});


