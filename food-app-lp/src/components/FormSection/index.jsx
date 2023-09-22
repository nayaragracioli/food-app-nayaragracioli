import { ConvertingForm } from "./ConvertingForm";
import styles from "./style.module.css";

export const FormSection = () => {
   return (
      <section className={`${styles.formSection} section-red section-padding`}>
         <div className="container sm">
            <h2 className="title white md center">Conheça nosso aplicativo</h2>
            <ConvertingForm />
         </div>
      </section>
   );
};
