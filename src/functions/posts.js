//per i post della home

import { Post } from "../models/Post"

export const getPosts = (postId) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/posts`)
        .then(resp => resp.json())
        .then(posts => posts.map(post => postConstructed(post)));
};

export const postConstructed = post => new Post(
    post.id, 
    post.title.rendered, 
    post.content.rendered, 
    post.date, post.modified, 
    post.categories, 
    post.author
);