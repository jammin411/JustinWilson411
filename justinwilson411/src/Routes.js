 import React from 'react';
 import { Switch, Route, Redirect } from 'react-router-dom';
 import WithLayout from './WithLayout';
 import { Main as MainLayout, Minimal as MinimalLayout } from './layouts'; 
 import {IndexView, NotFound as NotFoundView, NotFoundCover as NotFoundCoverView } from './views';
 
 const Routes = () => {
   return (
     <Switch>
       <Route
         exact
         path="/"
         render={matchProps => (
           <WithLayout
             {...matchProps}
             component={IndexView}
             layout={MainLayout}
           />
         )}
       />
       <Redirect to="/not-found-cover" />
     </Switch>
   );
 };
 
 export default Routes;
 