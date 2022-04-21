// importo la classe che ho costruito nel model
import { PostsCategory } from "../models/PostsCategory"

export const getPostsCategories = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/categories`)
        .then(resp => resp.json())
        .then(postsCategories => postsCategories.map(postsCategory => postsCategoryConstructed(postsCategory)));
};

export const postsCategoryConstructed = postsCategory => new PostsCategory(
    postsCategory.id, 
    postsCategory.name, 
    postsCategory.count);