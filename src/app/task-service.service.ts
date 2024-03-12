import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskDetails } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  constructor(private http:HttpClient) { }

  GetTask():Observable<ITaskDetails[]>{
    return this.http.get<ITaskDetails[]>(`http://localhost:3000/Tasks`);
  }
  CreateTask(task:any):Observable<any>{
    return this.http.post<any>(`http://localhost:3000/Tasks`,task);
  }
  UpdateTask(task:any,id:number):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/Tasks/${id}`,task);
  }
  GetDetailedTaskDetails(id:any):Observable<ITaskDetails>{
    return this.http.get<ITaskDetails>(`http://localhost:3000/Tasks/${id}`);
  }
  DeleteTask(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/Tasks/${id}`);
  }
  PartialUpdateTask(task:any,id:number):Observable<any>{
    return this.http.patch<any>(`http://localhost:3000/Tasks/${id}`,task);
  }
}
