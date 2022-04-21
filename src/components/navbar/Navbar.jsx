import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getPostsCategories } from "../../functions/PostsCategories";;

export default function Navbar() {

    //creo array da collegare al caricamento e per raccogliere le categorie dei post
    const [hasLoaded, setHasLoaded] = useState(false);
    const [postsCategories, setpostsCategories] = useState([]);
    const {categoryId} = useParams();

    if (!hasLoaded) {
        getPostsCategories(categoryId).then(postsCategories => {
            setpostsCategories(postsCategories);
            setHasLoaded(true);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Aria Condizionata</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            postsCategories.map(postsCategory => (
                                // Passo una key con un valore univoco, l'ho ottenuta dal Json
                                <li key={postsCategory.id} className="nav-link text-dark">
                                    <Link className="nav-link text-light" to={`posts-categories/${postsCategory.id}/posts`}>{postsCategory.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Link className="nav-link text-light" to="/contact/:pageId">Contact</Link>
                    <Link className="nav-link text-light" to="/about-us/:pageId">About Us</Link>
                </div>
            </div>
        </nav>
    );
}