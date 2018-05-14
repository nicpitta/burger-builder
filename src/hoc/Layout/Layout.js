import React, { Component } from 'react';

import Auxilary from '../Auxilary/Auxilary';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class layout extends Component {
  state = {
    showSideDrawer: true,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Auxilary>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler} />
        </div>

        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxilary>
    )
  }
};


export default layout;
