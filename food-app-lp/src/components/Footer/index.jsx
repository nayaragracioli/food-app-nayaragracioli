import styles from "./style.module.css"

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <p className="paragraph white center">
               Todos os direitos reservados - Kenzie Academy Brasil - 2023{" "}
            </p>
         </div>
      </footer>
   );
};
