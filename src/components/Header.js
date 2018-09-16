import React from 'react';

// stateless functional component - they just render stuff
const Header = (props) => (

    // return this div. This return plays the role of render
    <div className="header">
        <div className="container">
            <h1 className="header__h1">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;