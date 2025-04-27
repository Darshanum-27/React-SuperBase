import {useState, useEffect } from 'react'
import Supabase from './Components/Supabase'
import InsertRecipie from './Components/InsertRecipie'
import UpdateRecipie from './Components/UpdateRecipie'
import './App.css'

function App() {
  const[content, setData] = useState([])
  const [error, setError] = useState(null);

  useEffect(()=>{
    const getData = async () => {
      const {data, error} = await Supabase
      .from("smoothies")
      .select()

      if (error) {
        console.error("Error fetching smoothies:", error.message);
        setError(error.message);
        return;
      }
      if(data){
        setData(data)
      }
    }
    getData()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
    <h1> Smoothies list</h1>
      {
        content && content.length>0 ? (
        <ul>
          {content.map((value) =>(
            <li key={value.id}>{value.title}</li>
          ))}
        </ul>
        ) : (
          <h1>No data currently</h1>
        )
      }
      <InsertRecipie/>
      <UpdateRecipie/>
    </>
  )
}

export default App
