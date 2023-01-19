export function toNumber(str: string): number{
    return Number(str.replaceAll(',', '')) as number;
}