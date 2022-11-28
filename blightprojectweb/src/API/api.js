
import axiosFetch from '../Axios';

export const SendImage = (imageData,func,funcback,setdata)=> {
    // workData.user=userid
    axiosFetch().post('',imageData)
    .then((response)=>{
        // console.log(response.data)
        console.log(response.status)
        if(response.status===200){
            setdata(response.data.data)
            func()
            // setSending(false)
        }
    })
    .catch((error)=>{
        console.log(error)
        // setSending(false)
        funcback()

    })  
}