import React from "react";
import styles from "./FormsControls.module.css";



export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div >
                <textarea className={styles.formInput} {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <input className={styles.formInputLogin} {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}