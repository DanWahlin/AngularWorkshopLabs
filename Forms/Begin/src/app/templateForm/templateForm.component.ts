import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/customer';

@Component({
  selector: 'template-driven-form',
  templateUrl: './templateForm.component.html'
})
export class TemplateFormComponent implements OnInit {
  model: Customer;  
  states: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
      this.model = new Customer(18, 'Jane Doe', 'Arizona', '1234 Anywhere St.');

      this.states = ['Arizona', 'California', 
                     'Florida', 'Texas'];
  }

  onSubmit() {
    this.submitted = true;
  }
}