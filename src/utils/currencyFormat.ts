export const currencyFormatDecimal = (number: number) => (number / 100).toFixed(2);

export function currencyFormatBRL(value: number) {
    const number = Number(currencyFormatDecimal(value));
    const numberFormated = number.toFixed(2).split('.');
    numberFormated[0] = "R$ " + numberFormated[0].split(/(?=(?:...)*$)/).join('.');
    return numberFormated.join(',');
}