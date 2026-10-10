import styles from "../styles/trabalheconosco.module.scss";

export default function TrabalheConosco() {
   return(
     <section id="trabalheconosco" className={styles.trabalheconosco}>
       <div className={styles.interface}>
            <div className={styles.divcontent}>
                <h1 className={styles.title}>Trabalhe Conosco</h1>
                <p className={styles.subtitle}>Se você se identificou com a nossa empresa e deseja enviar seu currículo,
                 preencha o formulario abaixo.
                </p>
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
                        <input className={styles.input} type="file" name="file" id="file"/>
                    </div>
                    <div className={styles.divinput}>
                       <select className={styles.select} name="select" id="select">
                         <option value="">Área de Atuação</option>
                         <option value="opcao1">Administrativo</option>
                         <option value="opcao2">Engenharia</option>
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
     </section>   
   );
}    