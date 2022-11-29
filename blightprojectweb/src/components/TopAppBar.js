import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DrawView from './DrawView';
import { Link } from "react-router-dom";


// const drawerWidth = 240;
const navItems = ['home', 'about', 'contact'];

function DrawerAppBar() {
  // const { window} = props;
 

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',xs: '200', sm: '500'}}>
      <AppBar component="nav">
        <Toolbar >
        
        {/* <Typography
            variant="h6"
          > */}
           <DrawView/>
          {/* </Typography> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: '200', sm: '500' } }}
            // color="black"
          >
           Blight DetectorML
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#ffff' }}>
                <Link to={`/${item}`}>{item}</Link>
                
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
 
// };

export default DrawerAppBar;
