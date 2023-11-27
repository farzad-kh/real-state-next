
import React from 'react';

const FormInput = ({register,errors,watch,name,id,type,title}) => {

    return (
        <div className={`formControl !w-full ${errors?.[name] && "error"}`} >
        <input style={{ background: "#fff" }}
            className="inp"
            {...register}
            name={name} // assign name prop
            type={type}
            id={id}
          
            autoCapitalize="none"
            autoCorrect="false"
            aria-disabled="false"
            autoComplete="off" />
        <label className={`textLabel ${watch(name) && "labeltop"}`} htmlFor="email">{title}</label>
        {/* <i className={errors.emailError ? "font-icons-aw-clear" : "font-icons-aw"}>{(errors.emailError && touched.email) && Xmark}{(!errors.emailError && touched.email) && CircleCheck}</i> */}
        <small className="er">{errors?.[name]?.message}</small>

    </div>
    );
};

export default FormInput;