import { useState, useEffect } from 'react'
import Supabase from './Supabase'

const UpdateRecipie = () => {
    const [recordId, setRecordId] = useState(null)

    useEffect(() => {
    if (recordId === null) return

    const callupdate = async () => {
      const {data, error } = await Supabase
        .from('smoothies')
        .select('title, created_at')
        .eq('id', 1)
        

      if (error) {
        console.log("Error updating:", error.message)
        return
      }

      if(data){
        console.log("Output Message:", data)

      }
    }

    callupdate()
}, [recordId])

  const updateClicked = (e) => {
    e.preventDefault()
    setRecordId(10) // Example ID
  }

  return (
    <>
      <button onClick={updateClicked}>Click to update</button>
    </>
  )
}

export default UpdateRecipie