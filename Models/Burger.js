module.exports = (sequelize, Model, DataTypes) => {
    class Burger extends Model { }
  
    Burger.init({
      burger: DataTypes.STRING,
      isDone: DataTypes.BOOLEAN
    }, { sequelize, modelName: 'burger'})
  
    return Item
  }