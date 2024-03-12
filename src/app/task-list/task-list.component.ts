import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { ITaskDetails } from '../interface';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList!: ITaskDetails[];
  modalRef!: BsModalRef;
  toDeletedId: any;
  constructor(private router:Router,private modalService:BsModalService,private taskService: TaskServiceService,private toastr: ToastrService) {
   }
  ngOnInit(): void {
    this.getTaskList();
  }
  routeTo(Id:any){
    const url = 'details/'+Id;
    this.router.navigate([url]);  
  }
  getTaskList(){
    this.taskService.GetTask().subscribe((response: ITaskDetails[])=>{
      this.taskList=response;
    })
  }
  OnChange(event:any,id:number){
    var obj ={
      Status:event.target.checked
    }
    this.taskService.PartialUpdateTask(obj,id).subscribe(response =>{
      if(response){
        this.getTaskList();
      }
    });
  }
  openModal(template:TemplateRef<any>,id:any){
    this.toDeletedId=id;
    this.modalRef =this.modalService.show(template,{class:"modal-dialog centered",backdrop:"static",keyboard:false});
  }
  DeleteTask(id:number){
    this.taskService.DeleteTask(id).subscribe(response =>{
      if(response){
        this.modalRef.hide();
        this.toastr.success('Task Deleted Successfully','Success');
        this.getTaskList();
      }
    },error=>{
      this.toastr.error('Failed to Delete Task','Failure');
    })
  }
}
