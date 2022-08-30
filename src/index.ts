import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "./config";
import connectDB from "./api/mongoose";
import bodyParser from "body-parser";
//import morgan from "morgan";

import jobRoutes from "./api/routes/job"
import userRoutes from "./api/routes/user"
import locationRoutes from "./api/routes/location"
import addressRoutes from "./api/routes/address"
import companyRoutes from "./api/routes/company"
import technicianRoutes from "./api/routes/technician"
import paymentRoutes from "./api/routes/payment"
import sectorRoutes from "./api/routes/sector"

const port: number = config.port;

const app: Express = express();

//app.use( morgan( 'dev' ) );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( bodyParser.json() );
//app.use(express.json())

app.use( ( req: Request, res: Response, next: NextFunction ) =>
{
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Headers', "Origin, X-Request-With, Content-Type,Accept,Authorization" );
  if ( req.method === 'OPTIONS' )
  {
    res.header( 'Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,PATCH' );
    return res.status( 200 ).json( {} )
  }
  next();
} )

// middlewares
app.use( '/job', jobRoutes )
app.use( '/user', userRoutes )
app.use( "/address", addressRoutes )
app.use( "/sector", sectorRoutes )
app.use( "/location", locationRoutes )
app.use( "/company", locationRoutes )
app.use( "/technician", technicianRoutes )
app.use( "/payment", paymentRoutes )



app.use( ( req: Request, res: Response, next: NextFunction ) =>
{
  const error = new Error( "Invalid payload" )

  error.stack = "404"
  next( error )
} )
app.use( ( err: Error, req: Request, res: Response, next: NextFunction ) =>
{
  res.status( Number( err.stack ) || 500 )
  res.json( {
    error: {
      message: err.message,
    }
  } )
} )

app.listen( port, async () =>
{
  console.log( 'server is running on', port );
  await connectDB( config.mongoAtlas );
} )
