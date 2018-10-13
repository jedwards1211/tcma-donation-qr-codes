import React, { Component } from 'react';
import './App.css';
import PreserveDonationLink from './PreserveDonationLink'
import qs from 'qs'

import createStyled from "material-ui-render-props-styles";
import type { Classes } from "material-ui-render-props-styles";
import type { Theme } from "universal/theme";

const links = [
  {name: 'Amazing Maze', preserve: 'amazingmaze'},
  {name: 'Avery Ranch Cave Preserve', preserve: 'averyranch'},
  {name: 'Deep & Punkin Caves Nature Preserve', preserve: 'deepandpunkin'},
  {name: "Ezell's Cave Preserve", preserve: 'ezells'},
  {name: "Godwin Ranch Preserve", preserve: 'godwinranch'},
  {name: "Lost Oasis Cave Preserve", preserve: 'lostoasis'},
  {name: "O-9 Well", preserve: 'o9well'},
  {name: "Robber Baron Cave Preserve", preserve: 'robberbaron'},
  {name: "Rolling Oaks Preserve", preserve: 'rollingoaks'},
  {name: "Whirlpool Cave Preserve", preserve: 'whirlpool'},
  {name: "Wilcox Preserve", preserve: 'wilcox'},
].map(({preserve, ...props}) => (
  <PreserveDonationLink
    href={`https://tcmacaves.org/donate?${qs.stringify({
      cause: 'preserve',
      preserve,
      donationtype: 'single',
      mode: 'quick',
    })}`}
    {...props}
  />
))

const appStyles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

const AppStyles = createStyled(appStyles, {name: 'App'})

class App extends Component {
  render() {
    return (
      <AppStyles>
        {({classes}: {classes: Classes<typeof appStyles>}) => (
          <div className={classes.root}>
            {links}
          </div>
        )}
      </AppStyles>
    );
  }
}

export default App;
