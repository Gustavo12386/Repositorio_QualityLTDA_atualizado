import styles from '../../styles/clients.module.scss';

export default function DivPublicAdm() {
    return(
        <div className={styles.divtopicspublic}>
            <ul className={styles.topicspublic}>
                <li className={styles.topicpublic}>Fundação Cultural do Estado da Bahia</li>
                <li className={styles.topicpublic}>INCRA - Instituto Nacional da Colonização e Reforma Agrária</li>
                <li className={styles.topicpublic}>HEMOBA - Fundação de Hemotologia e Hemoterapia da Bahia</li>
                <li className={styles.topicpublic}>SESP - Secretaria Municipal de Serviços Públicos (Prefeitura Municipal de Salvador)</li>
                <li className={styles.topicpublic}>SEMOP - Secretaria Municipal de Ordem Pública (Prefeitura Municipal de Salvador)</li>
                <li className={styles.topicpublic}>SUCAB - Superitendência de Contruções Administrativas da Bahia</li>
                <li className={styles.topicpublic}>SESAB - Secretaria de Saúde do Estado da Bahia</li>
                <li className={styles.topicpublic}>Tribunal Regional Federal - 5ª Região</li>
            </ul>    
        </div>    
    );    
}    