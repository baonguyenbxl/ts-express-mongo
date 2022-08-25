import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();



router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "get sector" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post sector" } )
} )

router.get( '/:sectorId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.sectorId;

} )

router.patch( '/:sectorId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.sectorId;

} )

router.delete( '/:sectorId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.sectorId;

} )


export default router
