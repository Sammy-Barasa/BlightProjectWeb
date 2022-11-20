import React,  { useState }  from 'react'
import { Fab, Action } from 'react-tiny-fab';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';





const FActionButton = ({handleCameraAction, handleDeviceImageUpload }) => {
  const style = {
    // right:40,
    left: 650,
    bottom: 35,
    color: '#3cd656',
  }

  const actionButtonStyles = {
    right:40,
    left: 40,
  }
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
        <input
            type="file"
            id="fileElem"
            multiple
            accept="image/*"
            onChange = {handleDeviceImageUpload}
            visibility = "false"
        >
          {/* <InsertPhotoIcon color='success'/> */}
        </input>
        {/* </InsertPhotoIcon> */}
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