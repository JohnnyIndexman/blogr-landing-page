import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [timer, setTimer] = useState(true)
    const [fergurson, setFergurson] = useState(null)

    useEffect(()=>{
        setTimeout(() =>{
      //  fetch('https://jsonplaceholder.typicode.com/posts')
       fetch(url)
       .then(res =>{
        if(!res.ok){
          throw Error('Could not fetch the data');
        }
        return res.json()
        
        })
       .then(data =>{
        setData(data)
        setTimer(false)
        setFergurson(false)
       })
      .catch(err =>{
       setFergurson(err.message)
       setTimer(false)
       setData([])
      })},2000)
    
    
      },[url])
      return {data, timer, fergurson}
}

export default useFetch;