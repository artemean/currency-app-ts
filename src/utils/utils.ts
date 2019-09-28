export const formatDollar = (num: number, name: string): string => {
    return (num).toLocaleString("en-US", {style: "currency", currency: name, minimumFractionDigits: 2})
};
