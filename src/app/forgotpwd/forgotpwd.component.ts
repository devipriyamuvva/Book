import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css'
})
export class ForgotpwdComponent {
  username=""
  password=""
  conpwd=""
  pwdError=""
  pwdError2=""
  userinfo:any=localStorage.getItem("Details")
  userDetails:any[]=JSON.parse(this.userinfo)

  @Output()
  buttonClicked:EventEmitter<string>=new EventEmitter<string>();

  usernameError=""
  changePwd(){
    var hasError=false
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var usernameExists=false;
    var index=-1;

    for(var i=0;i<this.userDetails.length;i++){
      if(this.userDetails[i].username===this.username){
        usernameExists=true;
        index=i;
        break;
      }
    }

    if(!usernameExists){
      this.usernameError='Username does not exist.';
      return
    }

    if(!pwdRegex.test(this.password)){
      this.pwdError="Password must contain at least 1 digit,<br> 1 lowercase letter,1 uppercase letter,<br>1 special character <br> length must be 8 characters"
      hasError=true
    }

    if(this.conpwd!=this.password){
      this.pwdError2="Passwords donot match"
      hasError=true
    }

    if(!hasError){
      if(usernameExists){
        this.userDetails[index].password=this.password;
        localStorage.setItem("Details",JSON.stringify(this.userDetails))
        this.buttonClicked.emit("Login")
        window.alert("Password Changed Successfully !!")
      }
    }

    if(hasError){
      return
    }
  }

  clearUsernameError(){
    this.usernameError=""
  }

  clearPwdError(){
    this.pwdError=""
  }

  clearConPwdError(){
    this.pwdError2=""
  }

  reset(){
    this.username=""
    this.password=""
    this.conpwd=""
  }
}
