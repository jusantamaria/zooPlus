import {faker} from '@faker-js/faker';



interface Data{
    name: string;
    status: string;
    lastName: string;
    email: string;
    locations:string [];
}

export const generateData = (
    overrides: Partial<Data> = {}
): Data => {
    const randomData = {
        name: "Name",
        status: "Status",
        lastName: "Last name",
        email: "el email",
        locations: []
    };
    const opData: Data = {
        ...randomData,
        ...overrides,
    };
    return opData;
};