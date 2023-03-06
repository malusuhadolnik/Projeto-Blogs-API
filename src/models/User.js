module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        timestamps: false,
        tableName: 'users',
      },
    );
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'user_id', // é o nome da FK do migration blog_posts (a tabela blog_posts)
        as: 'blog_posts',
      });
    };
    return User;
  };