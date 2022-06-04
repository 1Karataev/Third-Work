import { useState } from "react"

export const  useFetching = (callback) =>{
  const [isPostloading, setisPostloading] = useState(false);
  const [error, setError ] = useState('')
 const fetching = async() => {
  try {
    setisPostloading(true)
    await callback()
  }
  catch (e) {
    setError(e.message)
  }
  finally{
    setisPostloading(false)
  }
 }
 return [fetching, isPostloading, error]
}