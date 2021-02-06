export namespace IData {
    export interface Data {
        inputPrompt?: string;
        formsOfTrue?: string[];
        formsOfFalse?: string[];
        unacceptableInmputMesages?: {
            getBoolInput?: string;
            getIntInput?: string;
            getCommand?: string;
        }
    }
}
