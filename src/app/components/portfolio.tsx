"use client";
import { useState } from 'react';
import styles from '../styles/portfolio.module.scss'
import Pagination from './subcomponents/pagination';
import { projects } from './services/jsonportfolio';

export default function Portfolio(){   
  
  //indica mudança de estado da página, para renderizar os elementos do portfólio de acordo com a página atual
  const [page, setPage] = useState(1); 

  //Quantidade de elementos a serem exibidos por página
  const quantityElementperpage = 1;

  //Calcula o número total de páginas, com base na quantidade de elementos e na quantidade de elementos por página
 const totalPages = Math.ceil(projects.length / quantityElementperpage);

  //Quantidade de elementos a serem exibidos inicialmente, de acordo com a página atual
  const quantityStart = (page - 1) * quantityElementperpage;

  //Quantidade de elementos a serem exibidos no final, de acordo com a página atual
  const quantityEnd = quantityStart + quantityElementperpage;

  //Seleciona os elementos do portfólio a serem exibidos na página atual
  const currentProject = projects.slice(quantityStart, quantityEnd); 

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