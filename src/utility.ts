//adds 2 numbers
export function add(x:number, y:number): number{
    return x + y
}

interface Country {
    capital: string,
    population: number
}

let ecuador: Country = {
    capital: 'Quito',
    population: 200000
}

function countryData(data: Country): Country {
    return data;
}

countryData(ecuador);