"use client";
import styles from "../styles/trabalheconosco.module.scss";
import Message from './services/message';
import { useRef, useState } from 'react';
import { ChangeEvent } from 'react';

export default function TrabalheConosco() {
    const formRef = useRef<HTMLFormElement>(null);    
    const [message, setMessage] = useState<string | undefined>('');
    const [type, setType] = useState<string | undefined>('');  
    const [text, setText] = useState('');
    const limit = 11;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);     
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

       if (!formRef.current) return;

        // Captura os dados textuais do formulário de forma simples
        const formData = new FormData(formRef.current);

            try {
            // Faz o disparo direto para a rota interna criada 
            const response = await fetch('/api/send-email', {
              method: 'POST',
              body: formData, // Envia o formulário completo de forma nativa
            });

            const result = await response.json();

            if (response.ok && result.success) {         
              setText('');     
              setMessage('Informações enviadas com sucesso!');
              setType('success');
              formRef.current?.reset();             
              
            } else {
              alert(`Erro informado pelo servidor: ${result.error}`);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
            setMessage('Falha ao enviar as informações tente novamente!');
            setType('error');
          } 
    }

   return(
     <section id="trabalheconosco" className={styles.trabalheconosco}>
       <div className={styles.interface}>
            <div className={styles.divcontent}>
                <h1 className={styles.title}>Trabalhe Conosco</h1>                
                <p className={styles.subtitle}>Se você se identificou com a nossa empresa e deseja enviar seu currículo,
                 preencha o formulario abaixo.
                </p>
                {message && <Message type={type!} msg={message}/>} 
                <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="text" name="name" id="name" placeholder="Nome"/>
                    </div>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className={styles.divinput}>                        
                        <input className={styles.input}
                        type="text" name="phone" id="phone"
                        placeholder="Telefone" value={text}
                        onChange={handleChange} maxLength={limit} />
                    </div>
                    <div className={styles.divinput}>                        
                        <input className={styles.input} type="file" accept=".pdf, .png, .jpg, .jpeg" name="file" id="file"/>
                    </div>
                    <div className={styles.divinput}>
                       <select className={styles.select} name="position" id="position">
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