"use client";
import styles from "../../styles/message.module.scss"
import { useState, useEffect} from 'react';

interface PropsMessage{
   type: string;
   msg: string; 
}

export default function Message({type, msg}: PropsMessage){    
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!msg){
      setVisible(false);
      return  
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg])


    return(
    <>
       {visible && (
       <div className={`${styles.message} ${styles[type]}`}>{msg}</div> 
    )}
    </>
    )
}