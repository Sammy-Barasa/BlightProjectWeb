import React, {useRef} from 'react';
import './App.css';
import StepperView from './components/StepperView';
import FootAppBar from './components/FootAppBar'

// const FACING_MODE_USER = "user";
// const FACING_MODE_ENVIRONMENT = "environment";

function Detector(){

  let videoRef = useRef(null)
  let photoRef = useRef(null)
  const [usingCamera, setUsingCamera] = React.useState(false);
  const [usingSample, setUsingSample] = React.useState(false);
  const [usingImageSelect, setUsingImageSelect] = React.useState(false);
  const [imageDataUrl, setImageDataUrl] = React.useState(null)
  const [someThingSelected,setSomeThingSelected] = React.useState(false)
  const [predictionResult, setPredictionResult] = React.useState(null)
  
  const [facingMode, setFacingMode] = React.useState('user');

  const handleDeviceImageUpload = (e)=>{
    setSomeThingSelected(false)
    alert("Image upload from device")
    e.preventDefault()
    if(usingCamera){
      stopCamera()
    }
    setUsingCamera(false)
    setUsingSample(false)
    setUsingImageSelect(true)

    setSomeThingSelected(true)


    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
    let dataUrl = e.target.result;
      // console.log(dataUrl)
      setImageDataUrl(dataUrl)
    }
  }

  const handleClearImage = ()=>{
    let photo = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0,0,photo.width, photo.height)
    // setImageDataUrl(null)
    setSomeThingSelected(false)
  }

  const handleTakephoto = ()=>{
    // image width and height
    setSomeThingSelected(true);
    let width = 674;

    let height = 450;

    
    let photo = photoRef.current;

    let video = videoRef.current;
    console.log(photo)
    // set photo width and height 
    
    // photo.width = width
    photo.height = height
    photo.width = width

    console.log(photo)
    let ctx = photo.getContext('2d')

    ctx.drawImage(video,0,0, photo.width, photo.height)
    let image_data_url = photo.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
    setImageDataUrl(image_data_url)
       
  }
  
  const stopCamera = (e) => {
    let video = videoRef.current;
    let stream = video.srcObject;
    let tracks = stream.getTracks();
  
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }

  const handleCameraAction = ()=>{

      setUsingSample(false)
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
          // ok, browser supports it
          // alert('ok, browser supports it')
          const constraints = {
            video :{facingMode: facingMode},
            audio: false,
            
          }
                
          navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
              setUsingCamera(true);
              // attch stream to video tag
              let video = videoRef.current
              video.srcObject = stream;
              video.play();

          }).catch((error)=>{
            console.log(error)
          })
          
      }
  }

    

  const handleswitch = () => {
    const constraints = {
      video :{facingMode: facingMode},
      audio: false,
      
    }
    navigator.mediaDevices
            .getUserMedia(constraints)
            .then(()=>(
    stopCamera())).then(()=>(
    setFacingMode(
      prevState =>
        (prevState === 'user')
          ? 'environment'
          : 'user'
    )))
    handleCameraAction()
  };
  
  const handleSampleAction = ()=>{
    // set using sample option
    if(usingCamera){
      stopCamera()
    }
    setUsingCamera(false)
    console.log("using sample option")
    setUsingSample(true)
  }

  const recallCameraAction = ()=>{
        // stopCamera()
        // Find a way to updadet photoRef before take photo
        handleCameraAction()
  }
  return (
   <div>
      <div className="App-content">
        <StepperView photoRef={photoRef} videoRef={videoRef} handleTakePhoto={handleTakephoto} 
        usingCamera={usingCamera} usingImageSelect={usingImageSelect} setUsingImageSelect={setUsingImageSelect} handleClearImage ={handleClearImage} imageURL={imageDataUrl}
        someThingSelected = {someThingSelected} setdatafunc={setPredictionResult}
        predictionResult = {predictionResult} handleSwitch = {handleswitch}
        setUsingCamera = {setUsingCamera} setSomeThingSelected = {setSomeThingSelected} setImageDataUrl={setImageDataUrl}
        stopCamera = {stopCamera} usingSample = {usingSample} setUsingSample = {setUsingSample} recallCameraAction={recallCameraAction}
        />
      </div>
      <footer>
        <FootAppBar sampleAction={handleSampleAction} cameraAction={handleCameraAction} handleDeviceImageUpload= {handleDeviceImageUpload }/>
      </footer>
      </div>
  );
}

  

export default Detector;
