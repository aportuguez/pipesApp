import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Adrian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Alisson';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernan',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }
}
