import {useEffect, useState} from 'react';
export function useFetch(baseUrl, initialType){
    const [data, setdata]=useState(null)
    const fetchUrl = (type) =>{
      fetch(baseUrl+'/' + type)
      .then(response => response.json())
      .then(response => setdata(response))
    }
      useEffect(()=>{
        fetchUrl(initialType)
      },[]);

      return {
        data,
        fetchUrl, 
      }
}