import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { SendImage } from '../API/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BounceLoader from "react-spinners/BounceLoader";
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import sp1 from '../images/samples/image1.JPG'
import sp2 from '../images/samples/image2.JPG'
import sp3 from '../images/samples/image3.jpeg'
import sp4 from '../images/samples/image4.JPG'
import sp5 from '../images/samples/image5.JPG'




const steps = [
    {
      label: 'Select leaf image',
      description: `Use the add button to take a photo of the image. Use the file Icon
            to select an image from your device.`,
    },
    {
      label: 'Predict request',
      description:
        'Send your prediction request to blight AI detector',
    },
    {
      label: 'Prediction result',
      description: ``,
    },
  ];
  
 

export default function StepperView({videoRef, photoRef, handleTakePhoto, usingImageSelect, setUsingImageSelect,recallCameraAction,usingCamera, usingSample, setUsingSample, handleClearImage, imageURL,someThingSelected, setdatafunc, predictionResult,handleSwitch, setUsingCamera,setSomeThingSelected,setImageDataUrl, stopCamera}) {

    // const override: CSSProperties = {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",
    //   };
    const samples = [sp1,sp2,sp3,sp4,sp5] 
    const [activeStep, setActiveStep] = React.useState(0);
    const [sending, setSending] = React.useState(false)
    const [selectedSample, setSelectedSample] = React.useState(null)

    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNetWithCamera = (e)=>{
        stopCamera()
        handleNext()
    }

    const handleClearAndBack =()=>{
        setSomeThingSelected(false)
        // recallCameraAction()
        handleBack()
        recallCameraAction()
    }

    const handleReset = () => {
        setUsingCamera(false)
        setSomeThingSelected(false)
        setImageDataUrl(null)
        setdatafunc(null)
        setSending(false)
        setUsingSample(false)
        setUsingImageSelect(false)
        if(usingCamera){
        stopCamera()
        }
        setActiveStep(0);
        window.location.reload()
    };

    
    const handleSending = ()=>{
        setSending(!sending)
        // stopCamera()
    }

    const handleSelectedSample =async (e)=>{
       
        setSomeThingSelected(true)
        // setSelectedSample(e.target.key)
        // console.log(e.target.src)
        // console.log(e.target.value)
        
        fetch(e.target.src).then((res)=>{
            res.blob().then((blob)=>{
               const file = new File([blob], 'image.jpg', {type: blob.type});

               const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = e => {
                    let dataUrl = e.target.result;
                    //   console.log(dataUrl)
                      setImageDataUrl(dataUrl)
                    }
                
            })
        });
    }
   
  return (
    <div>
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    
                    <StepLabel
                    optional={
                        index === 2 ? (
                        <Typography variant="caption">Blight Detector AI results</Typography>
                        ) : null
                    }
                    >
                    {step.label}
                    </StepLabel>
                    <StepContent>
                    <Typography>{step.description}</Typography>
                    {
                        index=== 0?
                        (<div className='container'>

                           <video className="video" ref={videoRef}>
                                
                            </video>
                            {usingCamera?
                            (<>
                            
                            <Button
                            variant="contained"
                            onClick={(e)=>{
                                e.preventDefault()
                                handleTakePhoto()
                                
                            }}
                            sx={{ mt: 1, mr: 1 }}
                            >
                            Take Photo
                            </Button>
                            <Button
                            variant="contained"
                            onClick={(e)=>{
                                e.preventDefault()
                                handleSwitch()
                                
                            }}
                            sx={{ mt: 1, mr: 1 }}
                            >
                            <FlipCameraIosIcon/>
                            </Button></>):
                                usingSample?(
                                <>
                                <div className='container'>
                                    <div className='dragzone'>
                                        <p style={{color:"black"}}>Samples</p>
                                        <div>{
                                        samples.map((sample, index)=>{
                                       return(
                                        <Card sx={{ maxWidth: 345 }} key = {index} style={{
                                            borderStyle: selectedSample===index?"solid":"",
                                            borderColor: "#2596be",
                                            bordeRadius: 3
                                        }}>
                                        <CardMedia
                                            component="img"
                                            alt={sample}
                                            height="350"
                                            image={sample}
                                            src={sample}
                                            onClick = {(e)=>{
                                                e.preventDefault()
                                                setSelectedSample(index)
                                                handleSelectedSample(e)}}
                                            value = {index}
                                            
                                        />
                                       <CardContent> 
                                            <Typography gutterBottom variant="h5" component="p">
                                            {`sample ${index+1}`}
                                            </Typography>
                                        </CardContent>
                                        </Card>
                                        )})}</div>
                                    </div>
                                </div>
                                </>)
                            :null}
                        </div>):null   
                    }
                    {
                        index ===1 && sending?(
                            <div className="spinner">
                            <BounceLoader
                                color={"#8be8a1"}
                                loading={sending}
                                // cssOverride={override}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                            </div>
                          ):(index ===1?
                            (<div className='container'>
                                {/* <img src = {imageURL}alt=""></img> */}
                                <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="selected leaf"
                                    height="400"
                                    image={imageURL}
                                />
                                {/* <CardContent> */}
                                    {/* <Typography gutterBottom variant="h5" component="div">
                                    {predictionResult.class}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {`${predictionResult.percent*100} %`}
                                    </Typography> */}
                                {/* </CardContent> */}
                            </Card>
                            </div>):(null)
                        )
                    }
                    {
                        index === 2 && predictionResult?(
                       
                            
                            <div className='containerresult'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={imageURL}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {predictionResult.class}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {`${predictionResult.percent*100} %`}
                                    </Typography>
                                </CardContent>
                            </Card>
                       
                        </div>):(null)
                    }
                    { usingCamera?
                        (<div className='container'>
                            {index===1?(<canvas className="photo" ref={photoRef} style={{display:'none'}}></canvas>):
                            (<canvas className="photo" ref={photoRef}></canvas>)}
                            {/* <canvas className="photo" ref={photoRef}></canvas> */}
                        </div>): null
                    }
                    <Box sx={{ mb: 2 }}>
                        { someThingSelected?

                        (<div><Button
                            variant="contained"
                            onClick={index===1?(e)=>{
                                e.preventDefault()
                                handleSending()
                                // console.log(sending)
                                SendImage(JSON.stringify(imageURL.replace(/^data:image\/jpeg;base64,/,"")),handleNext,handleBack,setdatafunc)
                                handleSending() 
                                // console.log(sending)
                                
                            }:index === 0 && usingCamera?handleNetWithCamera:handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        
                            disabled = {index ===1?sending:false}
                        >
                            {index === steps.length - 1 ? 'Finish' : index === 0 && usingSample?"Continue":index === 0 && usingImageSelect?'Click To Preview':index ===1?'Predict':'Continue'}
                        </Button>
                        <Button
                            disabled={index === 0 && usingCamera?false: false}
                            onClick={index ===0? handleClearImage :index===1 && usingCamera? handleClearAndBack:handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === 0?'clear image': index === 0 && usingSample?"":'Back'}
                        </Button></div>):( null)
                        }
                    </Box>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Your prediction completed. Reset for another requequest&apos;</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    RESET
                </Button>
            </Paper>
            )}
        </Box>
    </div>
  )
           }





