import Logo from "../../assets/Logo.svg";
import styles from "./style.module.css";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={styles.logoBox}>
               <img src={Logo} alt="Logo Food App" />
            </div>
         </div>
      </header>
   );
};
