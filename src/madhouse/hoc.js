// Higher order components (HOC) A component that renders another component.
// Reuse code, Render hijacking, Prop manipulation, Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// Use this are an argument in the function below.
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info stuff and strange text: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // return JSX as HOC.
    // Use { } to create a JS expressionand  add ...props as spread operator to the WrappedComponent.
    return (props) => (
        <div>
            { props.isAdmin && <p>Private info, please don't read this sentence if you are not admin!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in. You are not authenticated.</p>
            )}
        </div>
    );
};

// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAuthenticated ? <p>You are authenticated!</p> : <p>You are not authenticated.</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// Save function into variable with Info from above.
const AdminInfo  = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// AdminInfo is the component inside withAdminWarning 
//ReactDOM.render(<AdminInfo isAdmin={true} info="There is a secret message above if you are admin" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here  is a message if you are admin" />, document.getElementById('app'));

