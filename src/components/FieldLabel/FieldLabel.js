import styles from "./FieldLabel.module.css";

const FieldLabel = ({ children, ...props }) => {
  return (
    <label className={styles.fieldLabel} {...props}>
      {children}
    </label>
  );
};

export default FieldLabel;
