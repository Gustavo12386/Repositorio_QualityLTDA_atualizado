import styles from '../../styles/pagination.module.scss'
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps){

  // Funções para lidar com a navegação entre páginas
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

   return(
    <div className={styles.pagination}>
      <button
      className={`${styles.paginationbutton} ${styles.navigation}`}
      onClick={handlePrevious}
      disabled={currentPage === 1}
      >
      <ChevronLeft size={20} />
      </button>
      <button className={`${styles.paginationbutton} ${styles.navigation}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        ><ChevronRight size={20} />
      </button>
    </div>
   );
}