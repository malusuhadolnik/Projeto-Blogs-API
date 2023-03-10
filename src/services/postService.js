const { BlogPost, User, Category } = require('../models');

// const createPost = async ({ title, content, categoryIds }) ={ 

// };

// a resposta da req de get deve incluir dados das tabelas blog_posts, user e categories:
// todos os atributos do model BlogPost;
// do model User vem id, displayName, email e image, excluir password;
// e do model Categories, vem ID e Name
// user e categories devem ser objetos
// preicisamos fazer uma espécie de JOIN com o sequelize! achei esse tutorial no stackoverflow:
// https://stackoverflow.com/questions/36050524/sequelize-complex-join-query-to-use-a-findall

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
      include: [
      {
        model: User,
        as: 'user', // o retorno esperado é de uma chave chamada 'user'
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories', // o retorno esperado é de uma chave chamada 'categories'
      },
    ],
    });
    return allPosts;
  };

module.exports = {
    getAllPosts,
};