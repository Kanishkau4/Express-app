import express, { Application } from "express";
import greetingRouter from "./routes/greeting.route";

const app:Application = express();

app.use(express.json());
app.use("/greeting",greetingRouter);

app.get("/", (req, res) => {
    res.send("Hello World");    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
