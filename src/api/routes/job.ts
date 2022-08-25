import express, { Router, Request, Response, NextFunction } from 'express'
const router: Router = express.Router();


router.get( '/', ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status(200).send({message:"get job"})
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post job" } )
} )

router.get( '/:jobId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.jobId;

} )

router.patch( '/:jobId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.jobId;

} )

router.delete( '/:jobId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.jobId;

} )


export default router
