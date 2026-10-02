import styles from '../../styles/clients.module.scss';

export default function DivClientsEstatal() {
    return(
      <div className={styles.divtopicsestatal}>
         <ul className={styles.topicsestatal}>
            <li className={styles.topicestatal}>Bahiatursa - Empresa de Turismo da Bahia S.A.</li>
            <li className={styles.topicestatal}>Embasa - Empresa Baiana de Águas e Saneamento S.A.</li>
            <li className={styles.topicestatal}>Conder - Comp. de Desenvolvimento Urbano do Estado da Bahia</li>
            <li className={styles.topicestatal}>Petrobrás - Petróleo Brasileiro S.A.</li>
         </ul>
      </div>
    );

}    

