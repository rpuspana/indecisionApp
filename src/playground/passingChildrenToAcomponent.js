const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

// render IndecisionApp component 
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'));
