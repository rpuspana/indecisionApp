import React from 'react';

// stateless functional component - they just render stuff
const Header = (props) => {

    // plays the role of render
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;