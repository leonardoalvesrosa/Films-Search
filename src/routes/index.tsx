import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashborad from '../pages/Dashboard';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashborad} path='/' exact />
    </Switch>
  )
}