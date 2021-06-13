import styles from "./Button.module.css";

const Button = ({ ...props }) => {
  return <button className={styles.customButton} {...props}></button>;
};

export default Button;
