"use client";
import { useState } from 'react';
import styles from '../styles/portfolio.module.scss'
import Pagination from './subcomponents/paginationportfolio';
import { projects } from './services/jsonportfolio';

export default function Portfolio(){   

   const [page, setPage] = useState(1); 

  const quantityElement = 1;

  const quantityStart = (page - 1) * quantityElement;

  const quantityEnd = quantityStart + quantityElement ;

  const currentProject = projects.slice(quantityStart, quantityEnd);

 const totalPages = Math.ceil(projects.length / quantityElement);

  return(
    <section className={styles.portfolio}>
        <div className={styles.interface}>
          <div className={styles.divtitle}>
            <h1 className={styles.title}>Nosso Portfólio</h1>
          </div> 
            {(currentProject).map((p, index) => (
              <div key={index} className={styles.divcontent}>
                <h1 className={styles.subtitle}>{p.enterprise}</h1>
                <p className={styles.description}>{p.description}</p>                
              </div>
            ))}              
            <Pagination
             currentPage={page}
             totalPages={totalPages}
             onPageChange={(newPage) => {             
                setPage(newPage);              
             }}
            />        
        </div>         
    </section>
   );    
}