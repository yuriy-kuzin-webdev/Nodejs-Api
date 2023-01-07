const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")
require("dotenv").config();

connectDb()
const app = express();

const contactsRouter = require("./routes/contacts");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", contactsRouter);

app.listen(PORT, () => console.log(`App listening at :${PORT} PORT`));
