import { useState } from "react";
import styles from "./styles.module.css";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo electrónico
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Enviar Correo Electrónico</h1>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Home;
