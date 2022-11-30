import React from "react";

export interface DefaultValue {
   history: string[];
   setHistory: () => void;
}

let defaultValue: DefaultValue  = {
   history: [],
   setHistory: () => {
   }
};

export const InputContext = React.createContext(defaultValue);
