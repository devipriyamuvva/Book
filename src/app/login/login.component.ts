import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output ,Input, inject} from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  google="google.png"
  facebook="facebook.jpg"
  @Output()
  clickedbutton:EventEmitter<string>=new EventEmitter<string>();

  onClickRegister(){
    this.clickedbutton.emit("Register")
  }
  onClickForgotPwd(){
    this.clickedbutton.emit("ForgotPwd")
  }

  userinfo=localStorage.getItem("Details");

  pwdError=""
  unError=""
  un="";
  pwd="";
  loginError=""

  isvalid=false;
  onSubmit(){
    if(this.un==="" && this.pwd===""){
      this.unError="This field is required."
      this.pwdError="This field is required."
      return
    }
    if(this.pwd===""){
      this.pwdError="This field is required."
      return
    }
    if(this.un===""){
      this.unError="This field is required."
      return
    }

    var userDetails:any[]=[];
    if(this.userinfo){
      userDetails=JSON.parse(this.userinfo);
    }
    for(var i=0;i<userDetails.length;i++){
      if(userDetails[i].username===this.un&&userDetails[i].password===this.pwd){
        this.clickedbutton.emit("Books");
        sessionStorage.setItem("status","active");
        sessionStorage.setItem("userName",this.un)
        this.isvalid=true;
        break;
      }
    }

    if(!this.isvalid){
      this.loginError="Invalid Credentials"
      // window.alert("Invalid Credentials!!")
      this.un=''
      this.pwd=''
    }
  }

  clearUnError(){
    this.unError=''
  }
  clearPwdError(){
    this.pwdError=''
  }
  clearLoginError() {
    this.loginError = '';
  }
}
