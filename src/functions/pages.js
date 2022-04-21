import { Page } from "../models/Page"

export const getPageContact = () => {
    console.log('ciao')
    return fetch('http://wordpress.test/wp-json/wp/v2/pages')
        .then(resp => resp.json())
        // .then(page => pageConstructed(page));
        .then (resp => console.log(resp));
};

export const getPageAboutUs = () => {
    return fetch('http://wordpress.test/wp-json/wp/v2/pages')
        .then(resp => resp.json())
        .then(page => pageConstructed(page));
};

export const pageConstructed = page => new Page(
    page.id, 
    page.title.rendered, 
    page.content.rendered
);
