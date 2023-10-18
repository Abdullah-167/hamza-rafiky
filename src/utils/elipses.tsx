const elipses = (data: string | undefined, length: number = 20): string => {
    if (data && data.length > length) {
        return data.slice(0, length - 1) + "...";
    }
    return data || "";
};
export default elipses;