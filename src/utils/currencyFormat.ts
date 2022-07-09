export const currencyFormatDecimal = (number: number) => (number / 100).toFixed(2);

export function currencyFormatBRL(value: number) {
    const number = Number(currencyFormatDecimal(value));
    const numberFormated = number.toFixed(2).split('.');
    numberFormated[0] = "R$ " + numberFormated[0].split(/(?=(?:...)*$)/).join('.');
    return numberFormated.join(',');
}

export function currencyUnformatBRL(value: string) {
    return value.replace(/[^\d]+/g, "");
}

export const currency = {
    formatted: function(value: string) {
      const formattedNumber = currencyFormatBRL(Number(value));
      return formattedNumber;
    },

    unFormatted: function(value: string) {
      const unFormattedNumber = currencyUnformatBRL(value);
      return Number(unFormattedNumber);
    }
};