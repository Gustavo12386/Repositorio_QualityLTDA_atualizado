import styles from '../styles/contact.module.scss';
import Image from 'next/image';
import indicator from '../../../public/indicador(azul).png'

export default function Contact(){
    return(
         <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fale Conosco</h1>

        <div className={styles.grid}>
        
          <div className={styles.location}>
            <div className={styles.locationHeader}>
              <Image
                className={styles.icon}
                src={indicator}
                alt=""
                width={28}
                height={36}
              />
              <h2 className={styles.subtitle}>Localização</h2>
            </div>

            <iframe
              className={styles.map}
              title="Mapa da Quality Engenharia e Consultoria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7960360583997!2d-38.453047024620766!3d-12.984893560077287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0f15eb0c95%3A0xe163a272ac5adaa3!2sQuality%20Engenharia%20e%20Consultoria%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1791288879543!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <address className={styles.address}>
              Rua Dr. José Peroba, 275 - Sl 409, Edifício Metrópolis Empresarial Stiep
              <br />
              Salvador - Bahia - Brasil - CEP: 41.770-235
              <br />
              Tel: (71) 3341-1414
            </address>
          </div>
         
          <div className={styles.formArea}>
            <p className={styles.intro}>
              Entre em contato conosco através do formulário abaixo.
              Teremos o maior prazer em lhe atender!
            </p>

            <form className={styles.form}>
              <div className={styles.field}>              
                <input className={styles.input} type="text" id="name" name="name" placeholder="Nome" />
              </div>

              <div className={styles.field}>               
                <input className={styles.input} type="email" id="email" name="email" placeholder="Email" />
              </div>

              <div className={styles.field}>                
                <input className={styles.input} type="tel" id="phone" name="phone" placeholder="Telefone" />
              </div>

              <div className={styles.field}>               
                <select className={styles.select} id="time" name="time" defaultValue="">
                  <option value="">Melhor Horário de Contato</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>

              <div className={styles.field}>               
                <textarea className={styles.textarea} id="message" name="message" placeholder="Mensagem" />
              </div>

              <button className={styles.button} type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
}