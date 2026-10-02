import styles from '../../styles/navigationmenu.module.scss';
import { useState } from 'react';

interface NavigationProps{
  updateTopic: (id: number) => void; 
}

export default function NavigationMenu({updateTopic}: NavigationProps) {

    const [selected, setSelected] = useState(0);

    const handleChange = (id: number) => {
      setSelected(id);
      updateTopic(id);
    };

    return(
      <div className={styles.navigationdiv}>
      <input className={styles.page0}
        type="radio"
        name="page-option"
        id="page-0"
        checked={selected === 0}
        onChange={() => handleChange(0)}/>
      <label htmlFor="page-0">Industrial</label>
      <input className={styles.page1}
        type="radio"
        name="page-option"
        id="page-1"
        checked={selected === 1}
        onChange={() => handleChange(1)}
        />
      <label htmlFor="page-1">Estatal</label>
      <input className={styles.page2}
        type="radio"
        name="page-option"
        id="page-2"
        checked={selected === 2}
        onChange={() => handleChange(2)}
        />
      <label htmlFor="page-2">Setor Privado</label> 
      <input className={styles.page3}
        type="radio"
        name="page-option"
        id="page-3"
        checked={selected === 3}
        onChange={() => handleChange(3)}
        />
      <label htmlFor="page-3">Construção</label> 
      <input className={styles.page4}
        type="radio"
        name="page-option"
        id="page-4"
        checked={selected === 4}
        onChange={() => handleChange(4)}
        />
      <label htmlFor="page-4">Adm. Pública</label> 
      <input className={styles.page5}
        type="radio"
        name="page-option"
        id="page-5"
        checked={selected === 5}
        onChange={() => handleChange(5)}
        />
      <label htmlFor="page-5">Outros</label> 
    </div> 
    );
}        