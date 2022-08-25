import express, {Router, Request,Response,NextFunction} from 'express'
const router:Router = express.Router();


router.get( '/', ( req:Request, res:Response, next:NextFunction ) =>
{
  res.status( 200 ).send( { message: "get address" } )
} );
router.post( "/", ( req: Request, res: Response, next: NextFunction ) =>
{
  res.status( 200 ).send( { message: "post address" } )
} )

router.get( '/:addressId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.addressId;

} )

router.patch( '/:addressId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.addressId;

} )

router.delete( '/:addressId', ( req: Request, res: Response, next: NextFunction ) =>
{
  const id = req.params.addressId;

} )

export default router
