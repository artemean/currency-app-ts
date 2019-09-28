export const formatDollar = (num: number, base: string): string => {
    return (num).toLocaleString("en-US", {style: "currency", currency: base, minimumFractionDigits: 2})
};
