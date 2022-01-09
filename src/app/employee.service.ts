import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:1110/employees/get" ;
  private myUrl="http://localhost:1110/employees/add" ;
  private bURL="http://localhost:1110/employees/update";
  private gURL="http://localhost:1110/employees";
  constructor(private httpClient: HttpClient) { }

getEmployeesList(): Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.baseURL}`);
}
createEmployee(employee :Employee): Observable<object>{
  return this.httpClient.post(`${this.myUrl}`,employee);
}
getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.gURL}/${id}`);
}
updateEmployee(id: number,employee: Employee):Observable<Object>{
  return this.httpClient.put(`${this.bURL}/${id}`,employee);
}
}
