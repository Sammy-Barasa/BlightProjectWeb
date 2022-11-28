import React from 'react'
import TopAppBar from './components/TopAppBar';
import Detector from './Detector';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

function App() {
  return (
    <div className="App">
        <Grid container spacing={1}>  
            <Grid item xs={4} sm={6}  md={8} lg={12} xl={12}>
            <BrowserRouter>
                    {/* <div> */}
                        <header className="App-header">
                            <div className ="App-bar">
                                <TopAppBar/>
                            </div>
                        </header>
                    {/* </div> */}
            
                    <div>
                    
                        <Routes> 
                            <Route path='/' element={<Detector/>}/>
                            
                            <Route path='/home' element={<Home/>}/>

                            <Route path='/about' element ={<About/>}/>

                            <Route path='/contact' element ={<Contact/>}/>
                            
                            <Route path='*' element={<PageNotFound/>}/>
                        </Routes>
                </div>
                </BrowserRouter>
            </Grid>
            </Grid>
    </div>
  )
}

export default App