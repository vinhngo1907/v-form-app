import { TextFieldFormElement } from "./fields/TextField";
import { TextAreaFormElement } from "./fields/TextAreaField";
import { TitleFieldFormElement } from "./fields/TitleField";
import { ParagprahFieldFormElement } from "./fields/ParagraphField";
import { DateFieldFormElement } from "./fields/DateField";
import { SubTitleFieldFormElement } from "./fields/SubTitleField";

export type ElementsType =
    | "TextField"
    | "TextAreaField"
    | "TitleField"
    | "ParagraphField"
    | "DateField"
    | "SubTitleField"
    ;

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
    type: ElementsType;
    construct: (id: string) => FormElementInstance;
    designerBtnElement: {
        icon: React.ElementType,
        label: string
    };

    designerComponent: React.FC<{
        elementInstance: FormElementInstance,
    }>;

    formComponent: React.FC<{
        elementInstance: FormElementInstance;
        submitValue?: SubmitFunction;
        isInvalid?: boolean;
        defaultValue?: string;
    }>;
    propertiesComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;

    validate: (formElement: FormElementInstance, currentValue: string) => boolean;
}

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
};

export type FormElementsType = {
    [key in ElementsType]: FormElement;
};
export const FormELements: FormElementsType = {
    TextField: TextFieldFormElement,
    TextAreaField: TextAreaFormElement,
    TitleField: TitleFieldFormElement,
    ParagraphField: ParagprahFieldFormElement,
    DateField: DateFieldFormElement,
    SubTitleField: SubTitleFieldFormElement
}