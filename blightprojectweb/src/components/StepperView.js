import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


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
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];
  

export default function StepperView({videoRef, photoRef, handleTakePhoto,usingCamera, handleClearImage, imageURL}) {

    const [activeStep, setActiveStep] = React.useState(0);
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

   

    

  return (
    <div>
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                    optional={
                        index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
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
                            <Button
                            variant="contained"
                            onClick={(e)=>{
                                e.preventDefault()
                                handleTakePhoto()
                                
                            }}
                            sx={{ mt: 1, mr: 1 }}
                            >
                            Take Photo
                            </Button>:null}
                        </div>):null   
                    }
                    {
                        index ===1 ?(
                            <div className='container'>
                            <img src = {imageURL}></img>
                            </div>
                        ):(null)
                    }
                    { usingCamera?
                        (<div className='container'>
                            {index===1?(<canvas className="photo" ref={photoRef} style={{display:'none'}}></canvas>):
                            (<canvas className="photo" ref={photoRef}></canvas>)}
                        </div>): null 
                    }
                    <Box sx={{ mb: 2 }}>

                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                            disabled={index === 0 && usingCamera?false: false}
                            onClick={index ===0? handleClearImage :handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === 0?'clear image': 'Back'}
                        </Button>
                    </Box>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                </Button>
            </Paper>
            )}
        </Box>
    </div>
  )
}





