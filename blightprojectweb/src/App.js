import React, {useRef} from 'react';
import './App.css';
import StepperView from './components/StepperView';
import FootAppBar from './components/FootAppBar';
import TopAppBar from './components/TopAppBar';
import DrawView from './components/DrawView';

function App(){

  let videoRef = useRef(null)
  let photoRef = useRef(null)
  const [usingCamera, setUsingCamera] = React.useState(false);
  const [imageDataUrl, setImageDataUrl] = React.useState(null)
  const [someThingSelected,setSomeThingSelected] = React.useState(false)

  const handleDeviceImageUpload = (e)=>{
    alert("Image upload from device")
    e.preventDefault()
    setSomeThingSelected(true)
    setImageDataUrl(URL.createObjectURL(e.target.files[0]))
  }
  const handleClearImage = ()=>{
    let photo = photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0,0,photo.width, photo.height)
    setImageDataUrl(null)
  }
  const handleTakephoto = ()=>{
    // image width and height
    setSomeThingSelected(true);
    let width = 674;

    let height = 450;

    
    let photo = photoRef.current;

    let video = videoRef.current;

    // set photo width and height 
    
    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')

    ctx. drawImage(video,0,0, photo.width, photo.height)
    let image_data_url = photo.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
    setImageDataUrl(image_data_url)
    // let imagetag = document.querySelector("image")
    // imagetag.src = 
    
  }
  const handleCameraAction = ()=>{
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
          // ok, browser supports it
          // alert('ok, browser supports it')
          const constraints = {
            video : true,
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
  
  return (
    <div className="App">
      <header className="App-header">
        <div className ="App-bar">
          <div>
            <DrawView/>
          </div>
          <div>
            <TopAppBar/>
          </div>
        </div>
      </header>
      <section className="App-content">
        <StepperView photoRef={photoRef} videoRef={videoRef} handleTakePhoto={handleTakephoto} 
        usingCamera={usingCamera} handleClearImage ={handleClearImage} imageURL={imageDataUrl} someThingSelected = {someThingSelected}/>
      </section>
      <footer className = "App-footer">
        <FootAppBar cameraAction={handleCameraAction} handleDeviceImageUpload= {handleDeviceImageUpload }/>
      </footer>
    </div>
  );
}

  

export default App;
