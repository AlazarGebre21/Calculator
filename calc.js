const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/calc.html")
})
app.post('/submit',(req,res)=>{
    const number1 = Number(req.body.num1)
    const number2 = Number(req.body.num2)
    const op = req.body.operator
    let result
    if (op == '+'){
     result = number1 + number2
    }
    else if(op == '-'){
        result = number1 - number2
    }
    else if(op == '*'){
        result = number1 * number2
    }
    else if(op == '/'){
        if (number2 != 0){

            result = number1 / number2
        }
        else{
            res.send("Maths Error")
        }
    }
    res.send("The result of the " + op + " operation is " + result)
})
app.listen(port,()=>{
    console.log("Server is listening at port number 3000 only")
})
