export const formatCurrency = (price : number) => {
    return Number(price).toLocaleString('vi-VN', {currency : 'VND', style : 'currency'})
}