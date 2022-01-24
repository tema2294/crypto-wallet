export const convertNumber = (number: number) => {
    let fractionDigits = 0
    if (number < 1) {
        fractionDigits = 3
    }
    return Number(number.toFixed(fractionDigits)).toLocaleString()
}