import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AllComponent } from './all/all.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,CommonModule,BooksComponent,AboutComponent,KidsComponent,LoginComponent,RegisterComponent,ForgotpwdComponent,AllComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dummy';

  currentPage=''
  buttonClicked(eventData:string){
    this.currentPage=eventData
  }

  selectedGenre: string = 'All'; 

  onGenreSelected(genre: string) {
    this.selectedGenre = genre; 
    this.currentPage = 'All';
  }
}
