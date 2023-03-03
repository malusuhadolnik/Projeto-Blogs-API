// Tem relacionamento N:N com BlogPost e Category

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {},
      {
        timestamps: false,
        tableName: 'post_category',
      },
    );
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id', // se refere ao id do post na tabela de `posts_categories`
        otherKey: 'category_id', // se refere à outra chave da tabela de `posts_categories`
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'category_id', // se refere ao id do post na tabela de `posts_categories`
        otherKey: 'post_id', // se refere à outra chave da tabela de `posts_categories`
      });
    };
    return PostCategory;
  };