import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
const port = 4000;
import "./database"
const app = express();


import {router} from "./routes"
app.use(express.json())
app.use(router)

app.use((err: Error, request:Request , response:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})


app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});

// foi..
