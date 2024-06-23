import {Router } from 'express';
import { carRoutes } from './cars.Routes.js';
const router = Router()


router.use('/car',carRoutes)


export { router }