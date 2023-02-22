import React from "react";

const FormInput = (props) => {
    const {
        pd,
        m,
        bxShd,
        br,
        color,
        fs,
        bg,
        placeholder,
        handleChange,
        type,
        field,
        name,
        value,
    } = props;

    return (
        <input
            value={value}
            onChange={(event) => handleChange(event, field)}
            type={type}
            name={name}
            placeholder={placeholder}
            style={{
                padding: `${pd ? pd : "10px 15px"}`,
                margin: `${m ? m : "10px"}`,
                boxShadow: `${bxShd ? bxShd : "0 0 3px red"}`,
                borderRadius: `${br ? br : "10px"}`,
                color: `${color ? color : "EAE8E9"}`,
                fontSize: `${fs ? fs : "18px"}`,
                background: `${bg ? bg : "white"}`,
            }}
        ></input>
    );
};

export default FormInput;
