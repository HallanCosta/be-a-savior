type NumberFormatProps = number;

export function currencyFormat(number: NumberFormatProps) {
    return 'R$ ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}