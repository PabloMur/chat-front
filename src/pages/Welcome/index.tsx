import styles from "./styles.module.css";
import { Loader } from "../../components/loader";
import { WelcomeForm } from "../../components/WelcomeForm";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <Loader />
      <WelcomeForm />
    </div>
  );
};

export default WelcomePage;
