import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Output()
  buttonClicked:EventEmitter<string>=new EventEmitter<string>();

  userName=sessionStorage.getItem("userName");

  male="male.png";
  female="female.jpg"

  userdetails=localStorage.getItem("Details");

  userinfo=this.userdetails?JSON.parse(this.userdetails):[];

  username=''
  name=''
  phone=''
  address=''
  gender=''
  profileUpdate(){
    for(var i=0;i<this.userinfo.length;i++){
      if(this.userinfo[i].username===this.userName){
        this.username=this.userinfo[i].username
        this.name=this.userinfo[i].name
        this.phone=this.userinfo[i].phone
        this.gender=this.userinfo[i].gender.toLowerCase()
        this.address=this.userinfo[i].address
        break;
      }
    }
  }
  ngOnInit(){
    this.profileUpdate();
  }
  uinfo:any[]=[];
  onClick(){
    for(var i=0;i<this.userinfo.length;i++){
      if(this.userinfo[i].username!==this.userName){
        this.uinfo.push(this.userinfo[i]);
      }
      if(this.uinfo.length===0){
        localStorage.removeItem("Details");
        this.buttonClicked.emit("Login")
        sessionStorage.clear()
      }
      else{
        localStorage.setItem("Details",JSON.stringify(this.uinfo));
        this.buttonClicked.emit("Login")
        sessionStorage.clear();
      }
    }
  }
}
