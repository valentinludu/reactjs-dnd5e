import { Form as FormikForm } from "formik";
import styles from "./Form.module.css";

const Form = ({ children, ...props }) => {
  return (
    <FormikForm className={styles.form} {...props}>
      {children}
    </FormikForm>
  );
};

export default Form;
