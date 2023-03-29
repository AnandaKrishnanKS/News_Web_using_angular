import { HttpClient } from '@angular/common/http';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  cmddata:any
  usercomments:any
  constructor(private fb: FormBuilder,private http:HttpClient ) {}

  ngOnInit(): void {

   //to view feed back 
   this.cmddata='https://news24-livesite-default-rtdb.firebaseio.com/user.json'

   this.http.get(this.cmddata).subscribe((data:any)=>{

   console.log(data);
   
  this.usercomments=data

 })

  }

  

}
