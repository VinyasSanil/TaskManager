import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TaskServiceService } from '../task-service.service';
import { ITaskDetails } from '../interface';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  title:string='';
  description:string='';
  dueDate!: FormControl;
  selectedDate!:Date;
  status:boolean=false;
  datepipe: DatePipe = new DatePipe('en');
  modalRef!: BsModalRef;
  @ViewChild('backModel', { static: false })
  backModel!: TemplateRef<any>;
  TaskDetailsId: any;
  heading: string ='';
  taskDetails!: ITaskDetails;

  constructor(private router:Router, private modalService:BsModalService,private activatedRoute:ActivatedRoute,
    private taskService: TaskServiceService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.TaskDetailsId = params['Id'];
      if(this.TaskDetailsId == 0){
        this.heading = 'Create Task';
      }else{
        this.heading='Edit Task';
        this.getTaskDetails(this.TaskDetailsId);
      }
    })
  }
  routeBack(){
    this.modalRef.hide();
    this.router.navigate(['list']);
  }
  getTaskDetails(id:any){
    this.taskService.GetDetailedTaskDetails(id).subscribe((response:ITaskDetails) =>{
      this.taskDetails = response;
      this.title = this.taskDetails?.Title;
      this.description = this.taskDetails?.Description;
      this.dueDate = new FormControl(new Date(this.taskDetails?.DueDate));
      this.status = this.taskDetails?.Status;
    });
  }
  openModal(template:TemplateRef<any>){
    this.modalRef =this.modalService.show(template,{class:"modal-dialog centered",backdrop:"static",keyboard:false});
  }
  Submit(){
    if(this.heading == 'Create Task' && this.TaskDetailsId == 0){
      var obj = {
        Title: this.title,
        Description: this.description,
        DueDate: this.dueDate ? this.datepipe.transform(new Date(this.dueDate.value),'MM/dd/yyyy') : this.datepipe.transform(this.selectedDate,'MM/dd/yyyy'),
        Status: this.status
      }
      this.taskService.CreateTask(obj).subscribe(response => {
        if(response){
          this.toaster.success('Task Saved Successfully', 'Success');
          this.router.navigate(['list']);
        }
      },error =>{
        this.toaster.error('Failed to Save Task', 'Failure');
        this.router.navigate(['list']);
      });
    }else{
      var obj1 = {
        Id: this.TaskDetailsId,
        Title: this.title,
        Description: this.description,
        DueDate: this.dueDate ? this.datepipe.transform(new Date(this.dueDate.value),'MM/dd/yyyy') : this.datepipe.transform(this.selectedDate,'MM/dd/yyyy'),
        Status: this.status
      }
      this.taskService.UpdateTask(obj1,this.TaskDetailsId).subscribe(response =>
        {
          if(response){
            this.toaster.success('Task Saved Successfully', 'Success');
          this.router.navigate(['list']);
          }
        },error =>{
          this.toaster.error('Failed to Save Task', 'Failure');
          this.router.navigate(['list']);
        });
    }
    console.log("test");
  }
  addEvent(event:any) {
    debugger;
    this.selectedDate = new Date(event.value);
    console.log("test");
  }
}
