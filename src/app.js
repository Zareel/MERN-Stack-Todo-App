import express from 'express'

const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Todo App</h1>")
})

export default app;