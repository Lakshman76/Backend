const PORT = process.env.PORT ||5000;

const app = require('./app');

app.listen(PORT,(req, res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})