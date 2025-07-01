import express from "express";
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Clothes")
})

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});