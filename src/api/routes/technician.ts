import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();


router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get technician" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post technician" } )
} )

router.get( '/:technicianId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.technicianId;

} )

router.patch( '/:technicianId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.technicianId;

} )

router.delete( '/:technicianId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.technicianId;

} )


export default router
