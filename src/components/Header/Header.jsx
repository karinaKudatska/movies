import React from 'react';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {

  return (
    <div className="header">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography className="header__text" variant="h6" noWrap>
            Find your favorite movies!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;