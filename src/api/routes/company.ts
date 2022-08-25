import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();


router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get company" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post company" } )
} )

router.get( '/:companyId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.companyId;

} )

router.patch( '/:companyId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.companyId;

} )

router.delete( '/:companyId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.companyId;

} )


export default router
