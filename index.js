const express = require("express");
require("dotenv").config();
const app = express();

const contactsRouter = require("./routes/contacts");

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", contactsRouter);

app.listen(PORT, () => console.log(`App listening at :${PORT} PORT`));
