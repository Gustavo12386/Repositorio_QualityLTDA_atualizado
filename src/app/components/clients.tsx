"use client";
import { useState } from "react";
import styles from "../styles/clients.module.scss";
import NavigationMenu from "./subcomponents/navigationmenu";
import Industry from "./services/divindustry";
import Construction from "./services/divconstruction";
import PublicAdm from "./services/divpublic.adm";
import Estatal from "./services/divestatal";
import Private from "./services/divprivatesector";
import Others from "./services/divothers";

export default function Clients() {
  
  //atualizar estado do componente    
  const [pageselected, handleChange] = useState(0); 

  return(
   <section className={styles.clients}>
     <div className={styles.interface}>
       <div className={styles.divtitle}>
         <h1 className={styles.title}>Nossos Clientes</h1>
        </div>
        <div className={styles.divcontent}>
          <NavigationMenu updateTopic={handleChange}/>                      
        </div>
        {(() =>{
          if(pageselected === 0){
            return <Industry/>
          } else if(pageselected === 1){
            return <Estatal/>
          } else if(pageselected === 2){
            return <Private/>
          } else if(pageselected === 3){
            return <Construction/>
          } else if(pageselected === 4){
            return <PublicAdm/>
          } else if(pageselected === 5){
            return <Others/>
          }
        })()}
      </div>  
   </section>
  );
}    