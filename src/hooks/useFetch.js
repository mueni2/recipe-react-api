import {useState,useEffect} from 'react'

const useFetch = (URL) => {

  const [data,setData] = useState({results:null,loading:true,error:null,next:null})
  
  useEffect(() => {
      fetch(URL)
      .then((response) => response.json())
      .then((data) => setData({results:data.hits,loading:false,error:null,next:data._links.next?.href}))
      .catch((error) => setData({results:null,loading:false,error,next:null}))
  },[URL])
 
  //next:data && data._links && data._links.next && data
  return data
}




export default useFetch