import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component : EmployeeListComponent},
{path: 'create-employee',component:CreateEmployeeComponent},
  {path:'', redirectTo:'employees',pathMatch:'full'},
{path: 'update-employee/:id',component: UpdateEmployeeComponent}
];
//first property specifies the url path of route
//what component your application needs to display for this path
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 