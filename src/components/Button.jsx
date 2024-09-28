import { useState } from "react";

export const Button = (props) => {
    const { text } = props;

    function handlerButton() {
        const randomValue = Math.floor(Math.random() * 100) + 1; 
        alert(randomValue);
    }

    return (
        <button onClick={handlerButton}>
            {text}
        </button>
    );
};
