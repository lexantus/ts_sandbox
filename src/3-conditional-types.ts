type Animal = {
    name: number;
};

type Human = {
    firstName: number;
    secondName: number;
}

type GetRequiredInformation<TType> = TType extends Animal 
? { age: number } 
: TType extends Human 
? { socialSecurityNumber: number }
: never;

export type GetRequiredInformationFromAnimal = GetRequiredInformation<Animal>;
export type GetRequiredInformationFromHuman = GetRequiredInformation<Human>;
export type GetRequiredInformationFromAlien = GetRequiredInformation<{
    planet: string;
}>;