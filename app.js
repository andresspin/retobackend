const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

let students = {
    version_top: 26,
    students: 10,
    names: [
        "Felipe", 
        "Laura", 
        "Jailer", 
        "Jaime", 
        "Juan", 
        "Andrés",
        "Nicolas",
        "Carlos",
        "Ivan",
        "Diana",
        "Eustaquio",
        "Hermeregildo"
    ]
}

app.post('/My-first-endpoint', (req, res) => {
    const {}

    if(!students) {
        res.status(200).json({message: "Curso encontrado satisfactoriamente", top: students })
    } else {
        res.status(400).json({message: "Curso no encontrado"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
