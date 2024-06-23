import { CarService } from "../services/car.Service.js";

const serviceCarIntance = new CarService();

export const showCars = async (req, res) => {
  const cars = await serviceCarIntance.ShowAllCars();
  res.
  status(200)
  .json({
   message: "query effective sucessful", cars 
  
  });
};

export const showCar = async (req, res) => {
  const { id } = req.params;
  const cars = await serviceCarIntance.showCar(id);
  res
  .status(200)
  .json({
          message: "query effective sucessful", cars 
    
      });
};

export const createCar = async (req, res) => {
  const { model, plate, automaker } = req.body;
  const car = await serviceCarIntance.create(model, plate, automaker);
  res.
status(200)
  .json({ 
          message: "Car create suscessful", car 
        });
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const { model, plate, automaker } = req.body;
  const car = await serviceCarIntance.update( id,model, plate, automaker);
  res
  .status(200)
  .json({ 
          message: "Car updated sucessful",car
   });
};
export const deleteCar = async (req, res) => {
  const { id } = req.params;
  const deletedCar = await serviceCarIntance.delete(id)
  res
  .status(200)
  .json({ 
          message: "Car deleted sucessful"
   });
};
