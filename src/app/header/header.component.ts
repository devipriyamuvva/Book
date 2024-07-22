import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = "icon.jpg"
  login="login.jpg"
  isDropdownOpen: boolean = false;

  session=false;

  sessionStatus(){
    this.session=sessionStorage.getItem("status")==="active";
  }

  @Output()
  clickedButton:EventEmitter<string>=new EventEmitter<string>();

  onClickHome(){
    this.clickedButton.emit("Home");
  }
  onClickBooks(){
    this.clickedButton.emit("Books");
  }
  onClickAbout(){
    this.clickedButton.emit("AboutUs")
  }
  onClickKids(){
    this.clickedButton.emit("Kids")
  }
  onClickLogin(){
    this.clickedButton.emit("Login")
  }
  onClickRegister(){
    this.clickedButton.emit("Register")
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @Output() genreSelected: EventEmitter<string> = new EventEmitter<string>();

  onClickGenre(genre: string) {
    this.genreSelected.emit(genre);
  }

  onClickLogout(){
    sessionStorage.clear();
    this.clickedButton.emit("Login");
    this.session=false;
  }
  onClickProfile(){
    this.clickedButton.emit("Profile");
  }
  ngOnInit(){
    this.sessionStatus();
  }
}
