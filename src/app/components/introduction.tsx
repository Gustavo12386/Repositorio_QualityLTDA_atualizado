import styles from "../styles/introduction.module.scss";
import Image from "next/image";
import certificate from "../../../public/Certificado-validade.jpeg"
import logo from "../../../public/logo_veritas.png"

export default function Introduction() {
    return(
       <main>
          <section id="#inicio" className={styles.introduction}>
             <div className={styles.interface}>
               <div className={styles.flex}>
                  <div className={styles['text-top']}>
                    <h1 className={styles.title}>Gerenciando seus Projetos</h1>
                    <p className={styles.description1}>Com sede em Salvador-Bahia e atuando desde 1990 no desenvolvimento de atividades de engenharia
                    em empreendimentos dos mais variados portes, a Quality Engenharia e Consultoria Ltda é uma empresa brasileira,
                    apacitada a elaborar estudos de viabilidade econômica, estudos e projetos básicos, projetos de detalhamento e
                    acompanhamento de obras e montagem.<br></br><br></br>
                    A QUALITY possui um escritório, com sede própria, área de 250m², localizado
                    em moderno edifício comercial, dotado de dispositivos modernos de segurança e comunicações, no bairro do STIEP
                    em Salvador, Bahia, inserido no principal Centro comercial e financeiro da cidade.<br></br><br></br>
                    Oferecer serviços e produtos de qualidade ao mercado, contribuindo para a melhoria da sociedade brasileira, fortalecendo seus clientes com
                    aplicação de tecnologias inovadoras e propiciando novas oportunidades de trabalho e desenvolvimento para os seus
                    colaboradores.</p>
                  </div>                
                  <div className={styles['text-top2']}>
                    <h1 className={styles.title}>Qualidade Certificada</h1>
                    <p className={styles.description2}>A QUALITY mantém um sistema de qualidade dentro dos requisitos da norma ISO 9001, versão 2015, comprovado
                    através do Bureau Veritas e reconhecido pelo INMETRO para o escopo: PROJETOS E CONSULTORIA NA ÁREA DE
                    ENGENHARIA ELÉTRICA.</p>
                    <div className={styles['imgs']}>
                        <Image src={certificate} alt="Certificado de Qualidade" className={styles.certificate}/>
                        <Image src={logo} alt="Logo Veritas" className={styles.logo}/>
                    </div>  
                  </div>                                 
               </div>
             </div>
          </section>
       </main>
    )
}    