import { CarDao } from "../dao/carDao.js";
export class CarService {
  constructor() {
    this.CarDao = new CarDao();;
  }
  async ShowAllCars() {
    try {
      const cars = await this.CarDao.showAll();
      return cars;
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw  new Error;
    }
  }
  async showCar(id) {
    try {
      const car = await this.CarDao.showById(id)
      return car
    } catch (error) {
     console.log('not possible effective the query',error)
    }
  }

  async create(...data) {
    try {
      const car = await this.CarDao.create(...data);
      return car;
    } catch (error) {
      throw error;
    }
  }
  async update(id,...data) {
    try {
      const car = await this.CarDao.update(id,...data);
      return car;
    } catch (error) {
      throw error;
    }
  }
  async delete(id) {
    try {
      const deleted = await this.CarDao.delete(id);
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}
