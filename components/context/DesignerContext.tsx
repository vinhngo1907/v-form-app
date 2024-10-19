import { Dispatch, ReactNode, SetStateAction, useState, createContext } from "react";
import { FormElementInstance } from "../FormElements"

type DesignerContextType = {
    elements: FormElementInstance[];
    setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
}
export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({ children }: { children: ReactNode }) {
    const [elements, setElements] = useState<FormElementInstance[]>([]);
    return (
        <DesignerContext.Provider
            value={{
                elements,
                setElements
            }}
        >
            {children}
        </DesignerContext.Provider>
    )
}