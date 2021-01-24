import { IVolume } from "./volume";

export interface IGoogleBookAPIReponse {
    kind: string;
    items: IVolume[];
    totalItems: number;
}