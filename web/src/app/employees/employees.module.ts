import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './employees/employees.component';
import { RegisterEmployeeComponent } from './employees/register-employee/register-employee.component';



@NgModule({
	declarations: [
		EmployeesComponent,
  RegisterEmployeeComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		EmployeesComponent,
    RegisterEmployeeComponent
	]
})
export class EmployeesModule {}
