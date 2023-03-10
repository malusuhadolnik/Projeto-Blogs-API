// Tem relacionamento N:N com BlogPost e Category

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
    );
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId', // se refere ao id do post na tabela de `posts_categories`
        otherKey: 'categoryId', // se refere à outra chave da tabela de `posts_categories`
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'categoryId', 
        otherKey: 'postId', 
      });
    };
    return PostCategory;
  };