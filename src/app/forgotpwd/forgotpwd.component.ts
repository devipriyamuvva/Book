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
  userinfo:any=localStorage.getItem("Details")
  userDetails:any[]=JSON.parse(this.userinfo)

  @Output()
  buttonClicked:EventEmitter<string>=new EventEmitter<string>();

  changePwd(){
    for(var i=0;i<this.userDetails.length;i++){
      if(this.userDetails[i].username===this.username){
        this.userDetails[i].password=this.password;
        localStorage.setItem("Details",JSON.stringify(this.userDetails))
        this.buttonClicked.emit("Login")
        window.alert("Password Changed Successfully !!")
        this.username=""
        this.password=""
        this.conpwd=""
        break;
      }
    }
  }
}
