import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface ProtectedProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

const Protected: React.FC<ProtectedProps> = ({
    isAuthenticated,
    authenticationPath,
    ...routeProps
}) => {
    if (isAuthenticated) {
        return <Route {...routeProps} />;
    } else {
        return <Redirect to={{ pathname: authenticationPath }} />;
    }
};

export default Protected;
