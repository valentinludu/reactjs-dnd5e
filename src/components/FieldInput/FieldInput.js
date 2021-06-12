import { Field} from "formik";
import styles from "./FieldInput.module.css";

const FieldInput = ({error, ...props}) => {
    return <Field className={`${error ? styles.fieldInputError : ""} ${styles.fieldInput}`} {...props} />;
};

export default FieldInput;