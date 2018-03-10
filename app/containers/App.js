/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Tabs from '../components/Tabs';
import Overview from './overview';
import Bus from './bus';
import Catalogs from './catalog';
import Setttings from './setting';
const routers = [
  {
    path: "/",
    exact: true,
    name: "Overview",
    icon: require("../images/overview.png"),
    component: () => <Overview />
  },
  {
    path: "/bus",
    name: "Bus",
    icon: require("../images/bus.png"),
    component: () => <Bus />
  },
  {
    path: "/catalogs",
    name: "Catalogs",
    icon: require("../images/catalog.png"),
    component: () => <Catalogs />
  },
  {
    path: "/settings",
    name: "Setttings",
    icon: require("../images/setting.png"),
    component: () => <Setttings />
  }
]
export default () => (
    <Tabs
      routers={routers}
      icon="top"
      menuStyle={{ backgroundColor: "transparent", menuChooseColor: "white" }}
      mainStyle={{ backgroundColor: "black" }}
    />
);
