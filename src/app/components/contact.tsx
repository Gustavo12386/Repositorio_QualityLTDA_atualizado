import styles from '../styles/contact.module.scss';
import Image from 'next/image';
import indicator from '../../../public/indicador(azul).png'

export default function Contact(){
    return(
        <section className={styles.contact}>
        <div className={styles.interface}>
           <div className={styles.divtitle1}>
             <h1 className={styles.title1}>Fale Conosco</h1> 
           </div>  
           <div className={styles.flex}>
             <div className={styles.divcontent1}>
                <div className={styles.divtitle2}>
                 <Image src={indicator} alt='indicator'/>
                 <h2 className={styles.title2}>Localização</h2>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7960360583997!2d-38.453047024620766!3d-12.984893560077287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0f15eb0c95%3A0xe163a272ac5adaa3!2sQuality%20Engenharia%20e%20Consultoria%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1791288879543!5m2!1spt-BR!2sbr" 
                width="400" height="300" loading="lazy" className={styles.iframe}></iframe>
                <p className={styles.description}>Rua Dr. José Peroba, 275 - Sl 409, Edifício Metrópolis Empresarial Stiep
                    - Salvador - Bahia - Brasil - Cep: 41.770-235 Tel:(71) 3341-1414
                </p> 
             </div>   
            <div className={styles.divcontent2}>
               <h2 className={styles.title3}>Entre em contato conosco através do formulário abaixo.
                Teremos o maior prazer em lhe atender!
               </h2> 
               <form className={styles.form}>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="text" name="name" id="name" placeholder="Nome"/>
                    </div>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="text" name="phone" id="phone" placeholder="Telefone"/>
                    </div>                    
                    <div className={styles.divinput}>
                       <select className={styles.select} name="select" id="select">
                         <option value="">Melhor Horário de Contato</option>
                         <option value="opcao1">Manhã</option>
                         <option value="opcao2">Tarde</option>
                         <option value="opcao3">Noite</option>
                       </select>
                    </div>
                    <div className={styles.divinput}>                        
                        <textarea className={styles.textarea} name="message" id="message" placeholder="Mensagem"></textarea>
                    </div>
                    <div className={styles.divinput}>
                       <input className={styles.button} type="submit" value="Enviar"/>
                    </div>    
                </form>  
            </div>                          
           </div>           
        </div>
      </section>
    );
}