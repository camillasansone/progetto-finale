//Qui mi creo una classe da richiamare nella funzione che richiamero' 
//nella navbar per mostrare le categorie dei post

export class PostsCategory {
    constructor(id, name, postsCount) {
        this.id = id;
        this.name = name;
        this.postsCount = postsCount;
    }
}