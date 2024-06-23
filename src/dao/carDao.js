import { connection } from "../data/connection.js";

export class CarDao {
  async showAll() {
    try {
      const [cars] = await connection.query("SELECT * FROM Cars");
      return cars;
    } catch (error) {
      throw new Error();
    }
  };
  async showById(id) {
    try {
      const [car] = await connection.query(
        "SELECT * FROM Cars WHERE  id = ?", [
        id,
      ]);
      return car;
    } catch (error) {
      throw error;
    }
  };

  async create(...data) {
    try {
      const [car,fields] = await connection.query(
      "INSERT INTO Cars (model,plate,automaker) VALUES (?,?,?)", [...data]
    );
      return fields;
    } catch (error) {
      throw error;
    }
  };

  async update(id,...data) {
    try {
      const [car,fields] = await connection.query(
      "UPDATE Cars  SET model = ?,plate = ? ,automaker = ? WHERE  id = ? ", [...data,id]
    );
    
    const updatedCar = await connection.query(
     "SELECT * FROM Cars WHERE id = ?",[id]
    )
      return updatedCar[0];
    } catch (error) {
      throw error;
    }
  };
  async delete(id) {
    try {
      const deleted = await connection.query(
      "DELETE FROM Cars wHERE id  = ? ", [id]
    );
  
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}
