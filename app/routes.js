/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import {Link} from 'react-router-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import styles from './components/Home.css';
const routers = [
  {
    path: "/",
    exact: true,
    name: "HomePage",
    component: () => <HomePage />
  },
  {
    path: "/couter",
    name: "CouterPage",
    component: () => <CounterPage />
  }
];
export default () => (
  <div style={{ display: "flex", flexDirection:"column"}} className={styles.fullsize}>
  <ul style={{ listStyleType: "none", padding: 0,margin: 0, display: "flex", flexDirection: "row" }}>
  <li style={{padding: 5, backgroundColor: "#1ab31d"}}>
  {
                           routers.map((router, index)=>(
                            <Link key={index} to={router.path} >{router.name}</Link>
                           ))
                       }
  </li>
</ul>
  <App>
    <Switch>
    {
                             routers.map((router, index)=>(
                                 <Route key={index} path={router.path} exact={router.exact} component={router.component}/>
                             ))
                         }
    </Switch>
  </App>
  </div>
);
