import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router,private http:HttpClient) { }

  //display data
  topHeadingDisplay: any = [];
  newsApiUrl:any

  ngOnInit(): void {

    
    //news api url
  this.newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f7c6d6c5fe884bd5955e83ba20885e95"

  //topheading()
  this.http.get(this.newsApiUrl).subscribe((result:any) => {

      console.log(result);

      this.topHeadingDisplay = result.articles;


    })

  }
  addCommentForm = this.fb.group({

    id: [""],
    userName: [""],
    userMailid: [""],
    userComment: [""]

  })

  addcomment() {
    let cdata = {
      id: this.addCommentForm.value.id,
      userName: this.addCommentForm.value.userName,
      userMailid: this.addCommentForm.value.userMailid,
      userComment: this.addCommentForm.value.userComment

    }
    // this.services.saveCommentData(cdata)

    this.http.post('https://news24-livesite-default-rtdb.firebaseio.com/user.json',cdata).subscribe((item: any) => {
      alert('Thank you for your valuable feed back')
      
    })
  
  }

   
}


