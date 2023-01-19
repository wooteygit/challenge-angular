export interface TaxFiling {
    filingType?: string;
    filingTypeName?: string;
    month: string;
    monthName?: string,
    year: number;
    saleAmount: number;
    taxAmount: number;
    surcharge: number;
    penalty: number;
    totalAmount: number;
    errMsg: string
}
  