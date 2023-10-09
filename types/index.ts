import { MouseEventHandler } from "react";

export interface CustomButtonsProps{
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    isDisabled?: boolean;
    btnType?:"button" | "submit";

}
export interface CustomFiltersProps{
    title: string;
    options: OptionProps[];
}

export interface OptionProps{
    title: string;
    value: string;
}
export interface FilersProps{
    manufacturer: string;
    model:string;
    year: number;
    fuel: string;
    limit: number;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext : boolean;
}


export interface SearchManufacturerProps {
    manufacturer : string;
    setManufacturer:(manufacturer: string) => void;
}
export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement: number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;

}