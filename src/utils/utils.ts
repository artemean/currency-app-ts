export const formatDollar = (num: number): string => {
    return (num).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2})
};
