// idea behind passing a children to a component
// 1. same Layout on every website page, different value for the var specificToPage on every page
// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.content}
//             <p>footer</p>
//         </div>
//     );
// };

// const specificToPage = (
//     <div>
//         <h1>Page title</h1>
//         <p>This is my page</p>
//     </div>
// );

// // pass the content prop to the Layout stateless component and render this component
// ReactDOM.render(<Layout content={specificToPage} />, document.getElementById('app'));

// HOW TO PASS CHILDREN TO COMPONENTS

// {props.children} = special built-in prop for receiving JSX from Layout tag
const Layout2 = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

// pass the JSX inside Layout tags to the Layout component
ReactDOM.render((
    <Layout2>
        <div>
            <h1>Page title</h1>
            <p>This is my page</p>
        </div>
    </Layout2>
), document.getElementById('app'));
