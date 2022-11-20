
import axiosFetch from '../Axios';

export const SendImage = (imageData)=> {
    
    
    // workData.user=userid
    axiosFetch().post('/',imageData)
    .then((response)=>{
        console.log(response.data)
        console.log(response.status)
   
    })
    .catch((error)=>{
        console.log(error)
        
    })  
}