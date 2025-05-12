const express = require("express");
const misfns = require("./funciones");
const misfns2 = require("./funciones2");

const app = express();

app.use(express.json());

app.post("/operaciones", (req, res) => {
  try {
    const resul = req.body.map((e) => {
      const objFuncion = misfns.find((f) => f.name == e.fn);
      if (!objFuncion) throw new Error("Operacion no soportada!!!");
      return { ...e, resultado: objFuncion.value(e.op1, e.op2) };
    });
    res.status(201).json(resul);
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
});

app.post("/operaciones2", (req, res) => {
  try {
    const resul = req.body.map((e) => {
      const objFuncion = misfns2[e.fn];
      if (!objFuncion) throw new Error("Operacion no soportada!!!");
      return { ...e, resultado: objFuncion(e.op1, e.op2) };
    });
    res.status(201).json(resul);
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
});

app.listen(5000, () => {
  console.log("app iniciada.");
});