import React, { Component } from 'react';
import props from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    menuRender(flexDirection = "row", menu = 'top') {
        const { icon } = this.props;
        let width = 100, height=50;
        if (icon) {
            if (icon === 'top') {

            }
        }
         const styleChoose = {};
        return (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0,overflow: "hidden", backgroundColor:"transparent" }}>
                <li style={{ paddingTop: 5, display: "flex", flexDirection, borderBottomStyle:"solid", borderBottomWidth:1, borderBottomColor:"#DADBDC", height:50}}>
                    {
                        this.props.routers.map((router, index) => (
                                <Link
                                    key={index}
                                    to={router.path}
                                    style={{
                                        width, height: height+1,
                                        backgroundColor: this.state.index === index ? "white" : "transparent",
                                        border: `solid 1px ${this.state.index === index ?  "#DADBDC" : "transparent"}`,
                                        borderBottom: this.state.index === index ? "solid 1px white" : null,
                                        textDecoration: "none", color: "black", textAlign: 'center'
                                    }}
                                    onClick={() => { this.setState({ index }) }}>
                                    <div>
                                        {router.name}
                                    </div>
                                    
                                </Link>
                        ))
                    }
                </li>
            </ul>
        );
    }
    renderMain(menu = 'top') {
        let flexDirection = "column";
        if (menu === 'left' || menu === "right") flexDirection = 'row';
        const flexDirectionMenu = flexDirection === "column" ? "row" : "column";
        return (
            <div style={{ flexDirection, display: "flex", width: "100%", height: "100%", backgroundColor: "#F5F6F7" }}>
                {this.menuRender(flexDirectionMenu, menu)}
                <div style={{ flex: 1, width: "100%", height: "100%", backgroundColor:"white" }}>
                    <Switch>
                        {
                            this.props.routers.map((router, index) => (
                                <Route key={index} path={router.path} exact={router.exact} component={router.component} />
                            ))
                        }
                    </Switch>
                </div>
            </div>
        );
    }
    render() {
        const { menu } = this.props;
        return (
            <Router>
                {this.renderMain(menu)}
            </Router>
        );
    }
}