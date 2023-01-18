// import React from 'react'
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import 'react-tiny-fab/dist/styles.css';
import FActionButton from './FActionButton';
// import Grid from '@mui/material/Grid';


// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

export default function FootAppBar({sampleAction, cameraAction, handleDeviceImageUpload }) {
  return (
    <div>
      <React.Fragment>
      <CssBaseline />
      {/* <Grid item xs={4} sm={6}  md={8} lg={12} xl={12}> */}
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0,xs:200, sm:400, md: 600 }}>
        <Toolbar>
          <div className='App-footer'>
          <FActionButton handleSampleAction={sampleAction} handleCameraAction={cameraAction} handleDeviceImageUpload ={handleDeviceImageUpload }/>
          </div>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </div>
  )
}

