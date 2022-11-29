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
  
  

export default function StepperView({videoRef, photoRef, handleTakePhoto,usingCamera, handleClearImage, imageURL,someThingSelected, setdatafunc, predictionResult,handleSwitch, setUsingCamera,setSomeThingSelected,setImageDataUrl}) {

    // const override: CSSProperties = {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",
    //   };

    const [activeStep, setActiveStep] = React.useState(0);
    const [sending, setSending] = React.useState(false)
      

    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setUsingCamera(false)
        setSomeThingSelected(false)
        setImageDataUrl(null)
        setdatafunc(null)
        setSending(false)
        setActiveStep(0);
        window.location.reload()
    };

    const handleSending = ()=>{
        setSending(!sending)
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
                            <>
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
                            </Button></>:null}
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
                                
                            }:handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        
                            disabled = {index ===1?sending:false}
                        >
                            {index === steps.length - 1 ? 'Finish' : index === 0 && !usingCamera?'Click To Preview':index ===1?'Predict':'Continue'}
                        </Button>
                        <Button
                            disabled={index === 0 && usingCamera?false: false}
                            onClick={index ===0? handleClearImage :handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === 0?'clear image': 'Back'}
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





