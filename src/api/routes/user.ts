import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();



router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get user" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post user" } )
} )

router.get( '/:userId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.userId;

} )

router.patch( '/:userId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.userId;

} )

router.delete( '/:userId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.userId;

} )


export default router
