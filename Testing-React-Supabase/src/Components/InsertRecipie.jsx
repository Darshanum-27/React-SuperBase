import {useState, useEffect} from 'react'
import Supabase from './Supabase'

const InsertRecipie = () => {
    const [sendData, setSendData]  = useState(null)
    useEffect(()=>{
        const setData = async () =>{
            const {data, error} = await Supabase
            .from("smoothies")
            .insert([sendData])
            .select()

            if (error){
                console.error(error.message)
                return
            }
            if(data){
                console.log(data)
            }
        }
        setData()
    }, [sendData])

    const buttonClicked = (e) => {
        e.preventDefault();
        setSendData({title: "Sweet corn", method: "Heat the corn and add spices", Rating: 10})
    }
    return (
        <>
            <button onClick = {(e) => buttonClicked(e)}>Click Me</button>
        </>
    )
}
export default InsertRecipie