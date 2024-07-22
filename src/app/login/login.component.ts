import { Component, EventEmitter, Output ,Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
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
  username="";
  password="";

  un="";
  pwd="";

  isvalid=false;
  onSubmit(){
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
      window.alert("Invalid Credentials!!")
      this.un=''
      this.pwd=''
    }
  }
}
