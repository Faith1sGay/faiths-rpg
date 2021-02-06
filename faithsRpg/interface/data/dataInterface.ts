export namespace IData {
    export interface Data {
        inputPrompt?: string;
        formsOfTrue?: string[];
        formsOfFalse?: string[];
        unacceptableInputMessages?: {
            getBoolInput?: string;
            getIntInput?: string;
            getCommand?: string;
        }
    }
}
