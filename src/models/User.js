module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        timestamps: false,
        // tableName: 'users',
        underscored: true,
      },
    );
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId', // é o nome da FK do migration blog_posts (a tabela blog_posts)
        as: 'blogposts',
      });
    };
    return User;
  };