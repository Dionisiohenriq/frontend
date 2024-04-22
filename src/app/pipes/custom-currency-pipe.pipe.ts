import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrencyPipe',
  standalone: true,
})
export class CustomCurrencyPipePipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
    }).format(value);
  }
}
