import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxFiling } from '@model-interface';
import { months, years } from '@data-api';
import { toNumber } from '@utility-api';

@Component({
  selector: 'share-ui-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit {

  @Input() taxFiling: TaxFiling = {
    filingType: '0',
    filingTypeName: '',
    month: '01',
    year: 0,
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalAmount: 0,
    errMsg: ''
  };
  months = months;
  years = years;
  toNumber = toNumber;
  strAdditionalFiling = 'Additional Filing';
  strOrdinaryFiling = 'Ordinary Filing';

  constructor() {
    
  }

  ngOnInit(): void {
    this.taxFiling.filingTypeName = this.strOrdinaryFiling;
    this.taxFiling.monthName = this.months.find(x => x.value == this.taxFiling.month)?.name;
  }

  resetData(){
    this.taxFiling.saleAmount = 0;
    this.taxFiling.taxAmount = 0;
    this.taxFiling.surcharge = 0;
    this.taxFiling.penalty = 0;
    this.taxFiling.totalAmount = 0;
  }

  setMoneyFormat(value: any, fixed: number) {
    value = !value ? 0.00 : Number(value).toFixed(fixed);
    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    
    return dollarUS.format(value).replace('$', '');
  }

  onFocusOut(e: any){
    e.value = this.setMoney(e.value);
    this.taxFiling.surcharge = this.taxFiling.taxAmount * 0.1;
    this.taxFiling.penalty = 200;
    if(this.taxFiling.taxAmount || this.taxFiling.taxAmount > 0){
      this.taxFiling.penalty = 200;
      this.taxFiling.totalAmount = (this.taxFiling.taxAmount || this.taxFiling.taxAmount > 0) ? this.taxFiling.taxAmount + this.taxFiling.surcharge + this.taxFiling.penalty : 0;
    } else {
      this.taxFiling.penalty = 0;
      this.taxFiling.totalAmount = 0;
    }
    this.taxFiling.errMsg = '';
    // e.value = (!e.value || e.value == 0) ? '0' : e.value;
  }

  setMoney(value: any) {
    var number = !value ? 0 : value;
    if(number == 0) return '';
    number = (''+number).replaceAll(',', '');
    number = !number ? 0.00 : Number(number).toFixed(2);
    
    const fraction = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    var n = number.split('.');
    if (n.length > 1 && n[1].length <= 1)
        return fraction.format(n[0]).replace('$', '') + '.' + n[1];
    // if (number % 1 == 0)
    //     return fraction.format(number).replace('$', '');
    // else
        return formatter.format(Number(n[0] + '.' + n[1].substr(0, 2))).replace('$', '');
  }

  calTaxAmount(e: any){
    // console.log(e.value);
    this.taxFiling.taxAmount = this.taxFiling.saleAmount > 0 ? this.taxFiling.saleAmount * 0.07 : 0;
    this.taxFiling.surcharge = this.taxFiling.taxAmount * 0.1;
    if(this.taxFiling.taxAmount || this.taxFiling.taxAmount > 0){
      this.taxFiling.penalty = 200;
      this.taxFiling.totalAmount = (this.taxFiling.taxAmount || this.taxFiling.taxAmount > 0) ? this.taxFiling.taxAmount + this.taxFiling.surcharge + this.taxFiling.penalty : 0;
    } else {
      this.taxFiling.penalty = 0;
      this.taxFiling.totalAmount = 0;
    }
    e.value = (!e.value || e.value == 0) ? '' : e.value;
    this.taxFiling.errMsg = '';
  }

  filingTypeChange(filingType1: any, filingType2: any) {
    if(filingType1.checked){
      this.taxFiling.filingTypeName = this.strOrdinaryFiling;
    }

    if(filingType2.checked){
      this.taxFiling.filingTypeName = this.strAdditionalFiling;
    }
    this.resetData();
  }
}
