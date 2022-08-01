import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;

  constructor(
    public authObj: AngularFireAuth,
    public router:Router,
    public fireservice:FireserviceService
  ) { }

  ngOnInit() {
  }

  login(){
    this.fireservice.loginWithEmail({email:this.email, password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireservice.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          alert('Welcome');
        },err=>{
          console.log(err);
        });
      }
    })
  }

  signup() {
    this.router.navigateByUrl('signup');
  }
}
