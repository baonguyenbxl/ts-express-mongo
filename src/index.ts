import express, { Express,Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "./config";

import jobRoutes from "./api/routes/job"
import userRoutes from "./api/routes/user"
import locationRoutes from "./api/routes/location"
import addressRoutes from "./api/routes/address"
import companyRoutes from "./api/routes/company"
import technicianRoutes from "./api/routes/technician"
import paymentRoutes from "./api/routes/payment"
import sectorRoutes from "./api/routes/sector"

const port:number = config.port;

const app:Express = express();

app.use( express.json() );


// middlewares
app.use( '/job', jobRoutes )
app.use( '/user', userRoutes )
app.use( "/address", addressRoutes )
app.use( "/sector", sectorRoutes )
app.use( "/location", locationRoutes )
app.use( "/company", locationRoutes )
app.use( "/technician", technicianRoutes )
app.use( "/payment", paymentRoutes )

app.listen( port, () =>
{
  console.log('server is running on ',port);
})
