import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();


router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get location" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post location" } )
} )

router.get( '/:locationId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.jobId;

} )

router.patch( '/:locationId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.locationId;

} )

router.delete( '/:locationId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.locationId;

} )


export default router
