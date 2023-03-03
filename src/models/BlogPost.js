// um blog post pertence a um único usuário = belongs to models.User,
// foreignKey é a mesma , as 'users' (que é nome da tabela)

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        user_id: DataTypes.INTEGER,
      },
      {
        timestamps: false,
        tableName: 'blog_posts',
      },
    );
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
        foreignKey: 'user_id', 
        as: 'users',
      });
    };
    return BlogPost;
  };