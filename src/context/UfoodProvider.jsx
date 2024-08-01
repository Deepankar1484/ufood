import React, { useState } from "react";
import Ufoodcontext from "./Ufoodcontext";
const UfoodProvider = ({ children }) => {
    const [today, setToday] = useState();
    const [tomorrow, setTomorrow] = useState();
    const [actual, setActual] = useState();
    return (
        <Ufoodcontext.Provider
            value={{ today, setToday, tomorrow, setTomorrow,actual,setActual }}
        >
            {children}
        </Ufoodcontext.Provider>
    );
};

export default UfoodProvider;