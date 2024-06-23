import { Router } from "express";
import { createCar, showCars,showCar,updateCar, deleteCar} from "../controller/carController.js";

const carRoutes = Router();

carRoutes.post('/create',createCar);
carRoutes.get('/show-all',showCars);
carRoutes.get('/show/:id',showCar);
carRoutes.put('/update/:id',updateCar);
carRoutes.delete('/delete/:id',deleteCar);

export {carRoutes}