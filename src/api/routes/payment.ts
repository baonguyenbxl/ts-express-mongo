import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();



router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get payment" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post payment" } )
} )

router.get( '/:paymentId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.paymentId;

} )

router.delete( '/:paymentId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.paymentId;

} )


export default router
