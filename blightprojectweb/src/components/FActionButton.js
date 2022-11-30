import React  from 'react'
import { Fab, Action } from 'react-tiny-fab';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';





const FActionButton = ({handleCameraAction, handleDeviceImageUpload }) => {
  const style = {
    right:100,
    // left: 650,
    bottom: 60,
    color: '#3cd656',
  }

  // const actionButtonStyles = {
  //   right:40,
  //   left: 40,
  // }
  return (
    <Fab
    // mainButtonStyles={mainButtonStyles}
    // actionButtonStyles={actionButtonStyles}
    style={style}
    icon={<AddIcon color='success'/>}
    // event={event}
    alwaysShowTitle={true}
    // onClick={someFunctionForTheMainButton}
    >

    <Action
        text="Upload Image from device"
        // onClick={handleDeviceImageUpload}
    >
        {/* <InsertPhotoIcon color='success'> */}
        {/* <input
            type="file"
            id="fileElem"
            multiple
            accept="image/*"
            
            
        > */}
       
        
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange = {handleDeviceImageUpload} visibility = {false.toString()}/>
          <InsertPhotoIcon color='success'/>        
        </IconButton>
    </Action>
        
    <Action
        text="Use camera"
        onClick={handleCameraAction}
        >
        <PhotoCameraIcon color='success'>
        
        </PhotoCameraIcon>
    </Action>

    </Fab>
  )
}

export default FActionButton