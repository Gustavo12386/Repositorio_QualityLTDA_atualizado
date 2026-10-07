import styles from '../styles/acting.module.scss'
import Image from 'next/image';
import svg from '../../../public/indicador.png'

export default function Acting(){
    return(
      <section className={styles.acting}>
         <div className={styles.interface}>
            <div className={styles.divtitle}>
                <h1 className={styles.title}>Áreas de Atuação</h1>                
            </div> 
            <div className={styles.divdescription}>
              <Image className={styles.svg} src={svg} alt='svg'/>
              <p className={styles.description}>A Quality Engenharia e Consultoria atua em diversos segmentos relacionados a
                projetos elétricos e de instalações, destacando-se:
              </p>
            </div>
           <div className={styles.divtopics}>
             <div className={styles.topicslist1}>
               <div className={styles.topic1}>Área Industrial em Geral</div>               
               <div className={styles.topic3}>Área de Iluminação Pública</div>
               <div className={styles.topic4}>Área de Edificações Hospitalares</div>
            </div>            
            <div className={styles.topicslist2}>
               <div className={styles.topic8}>Área de Geração de Energia</div>
               
               <div className={styles.topic11}>Área de Conservação de Energia</div>              
               <div className={styles.topic7}>Área de Energia Solar</div>         
            </div>
            <div className={styles.topicslist3}>
               <div className={styles.topic5}>Área de Energia Eólica</div>
               <div className={styles.topic6}>Área Edificações Especiais</div>               
               <div className={styles.topic9}>Área de Telecomunicações</div>
            </div>
            <div className={styles.topicslist4}>
              <div className={styles.topic2}>Área Industrial Química e Petroquímica</div>  
              <div className={styles.topic10}>Sistemas de Abastecimento de Água</div>
            </div>
           </div>            
         </div>
      </section>
    );
}