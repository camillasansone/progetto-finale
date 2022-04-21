import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }


    // uso dangerouslySetInnerHTML per settare il contenuto e dire a react 
    //che deve essere un contenuto dinamico. Non e' molto sicuro e erende il codice suscettibile 
    //ad attacchi XXS

    render() {
        return (
            <div className="col justify-content-center ">
                <div className="card h-100 text-center justify-content-center d-flex mt-4 mb-4">
                    <p>
                        <span>{this.props.post.id}</span>
                        <h2 className="card-title"> {this.props.post.title}</h2>
                    </p>
                    <div className="card-body">
                        <p dangerouslySetInnerHTML={{ __html: this.props.post.content }}></p>
                        <p>{this.props.post.created_at}</p>
                        <p>{this.props.post.userdId}</p>
                        <p>{this.props.post.categories}</p>
                    </div>
                    <div className="card-footer"><Link className="btn btn-success" to={`/posts/${this.props.post.id}`} >Info</Link></div>
                </div>      
            </div>
        );
    }
}