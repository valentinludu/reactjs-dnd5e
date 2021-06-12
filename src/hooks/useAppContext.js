import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined) {
        throw Error("useAppContext must be used inside AppContext.Provider");
    }
    
    return context;
}