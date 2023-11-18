const express = require('express');


const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/send-email", require("./router"));
app.get('/',(req,res)=>{
    res.send("Send-Email API")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
