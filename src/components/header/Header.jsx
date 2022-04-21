import React from "react";
import react from '../../images/react.png';
import wp from '../../images/wp.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className='d-flex flex-row header p-2'>
                <div><img src={react} alt="react" height="100px" /></div>
                <div><img src={wp} alt="wapuu" height="100px" /></div>
            </div>
        );
    }
}