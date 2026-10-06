import styles from "../styles/especialization.module.scss";

export default function Especialization(){
    return(
     <section className={styles.especialization}>
        <div className={styles.interface}>
          <div className={styles.divtitle}>
                <h1 className={styles.title1}>Nossas Especialidades</h1>
          </div>  
          <div className={styles.flex}>            
             <div className={styles['text-top']}>
                    <h1 className={styles.title2}>Engenharia Elétrica</h1>
                    <div className={styles.underlined1}></div>
                    <div className={styles.divtopics1}>
                      <ul className={styles.topics1}>
                        <li>Projetos industriais de alta, média e baixa tensão</li>
                        <li>Projetos de subestações</li>
                        <li>Projetos de sistemas de iluminação pública</li>
                        <li>Projetos comerciais e de edificações especiais</li>
                        <li>Projetos de subestações de alta e média tensão</li>
                        <li>Projetos de geração de energia eólica</li>
                        <li>Projetos de sistemas de geração de energia termoelétrica</li>
                        <li>Estudos especializados de sistemas de potência</li>
                     </ul>   
                    </div>                                     
                  </div>                
                  <div className={styles['text-top2']}>
                    <h1 className={styles.h1}>Engenharia de instalações<span className={styles.title3}>em edificações</span></h1>
                    <div className={styles.underlined2}></div>
                    <div className={styles.divtopics2}>
                        <ul className={styles.topics2}>
                            <li>Projetos elétricos</li>
                            <li>Projetos de telefonia e rede lógica</li>
                            <li>Projetos de cabeamento estruturado</li>
                            <li>Projetos hidráulicos de água fria e água quente</li>
                            <li>Projeto de esgotamento sanitário e drenagem de águas pluviais</li>                      
                        </ul>  
                    </div>
                                  
                  </div>    
          </div>
        </div>
     </section>
    );
}