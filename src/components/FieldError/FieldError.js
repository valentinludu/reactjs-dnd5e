import React from "react";
import styles from "./FieldError.module.css";

const FieldError = ({error}) => {
    if(!error) return null;

    return <div className={styles.fieldError}>{error}</div>
};

export default FieldError;