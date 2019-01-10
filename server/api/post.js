const { connection } = require("../connect");
const { transliterate } = require("../helper");

const getPosts = (request, response) => {
  const queryString = `SELECT post.id, name as category, title, subText, text, timeCreated FROM post 
  LEFT JOIN category on category.id = post.categoryId ORDER BY id ASC`;
  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getTrendingPosts = (request, response) => {
  const queryString = `Select id, title, slug from post order by timeCreated DESC limit 3`;
  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getPostBySlug = (request, response) => {
  const slug = request.params.slug;
  console.log(slug);
  const queryString =
    "SELECT post.id, name as category, views, title, subText, text, timeCreated FROM post LEFT JOIN category on category.id = post.categoryId WHERE post.slug = ?";

  connection.query(queryString, slug, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results[0]);
  });

  connection.query(
    `UPDATE post SET views = views + 1 WHERE slug = ?`,
    slug,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("views update success");
    }
  );
};

const createPost = (request, response) => {
  const { categoryId, title, subText, text, tags } = request.body;
  const slug = transliterate(title);
  const timeCreated = new Date();
  const queryString = "INSERT INTO post SET ?";

  connection.query(
    queryString,
    [
      {
        categoryId,
        title,
        subText,
        text,
        slug,
        tags,
        timeCreated
      }
    ],
    (error, results) => {
      if (error) {
        console.log("Failed to query for categoty: " + error);
        response.sendStatus(500);
        response.end();
        return;
      }
      response.status(201).send(`Post added`);
    }
  );
};

const updatePost = (request, response) => {
  //todo проверка категории
  const id = parseInt(request.params.id);
  const { categoryId, title, subText, text } = request.body;

  console.log(id, categoryId, title, subText, text);
  const queryString = "UPDATE post SET ? WHERE id = ?";

  connection.query(
    queryString,
    [
      {
        categoryId,
        title,
        subText,
        text
      },
      id
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Post modified with ID: ${id}`);
    }
  );
};

const deletePost = (request, response) => {
  const id = parseInt(request.params.id);
  const queryString = "DELETE FROM post WHERE id = ?";

  connection.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Post deleted with ID: ${id}`);
  });
};

const getMoreNews = (request, response) => {
  const queryString = `SELECT post.id, name as category, post.slug as postSlug, category.slug as categorySlug, image.path as imagePath, title, subText, post.timeCreated FROM post 
  LEFT JOIN category on category.id = post.categoryId 
  LEFT JOIN image on image.id = post.imageId
  ORDER BY post.timeCreated DESC limit 8`;

  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getPopularNews = (request, response) => {
  const queryString = `SELECT post.id, name as category, post.slug as postSlug, category.slug as categorySlug, image.path as imagePath, title, post.timeCreated FROM post 
  LEFT JOIN category on category.id = post.categoryId 
  LEFT JOIN image on image.id = post.imageId
  ORDER BY post.views DESC limit 4`;

  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getNewsByCategory = (request, response) => {
  const slug = request.params.slug;
  console.log("getNewsByCategory", slug);
  const queryString =
    "SELECT post.id, name as category, image.path as imagePath, title, subText, text, post.timeCreated FROM post LEFT JOIN category on category.id = post.categoryId LEFT JOIN image on image.id = post.imageId WHERE category.id = (Select id from category where slug = ?)";

  connection.query(queryString, slug, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results);
  });
};

module.exports = {
  getPosts,
  getTrendingPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  getMoreNews,
  getPopularNews,
  getNewsByCategory,
  
};
