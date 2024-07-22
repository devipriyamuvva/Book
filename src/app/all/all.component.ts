import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnChanges{
  books = [
    {
      id: 1,
      title: 'The Night Circus',
      author: 'Erin Morgenstern',
      genre: 'Fantasy',
      imageUrl: 'A.jpg'
    },
    {
      id: 2,
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      genre: 'Mystery',
      imageUrl: 'B.jpg'
    },
    {
      id: 3,
      title: 'Eat, Pray, Love',
      author: 'Elizabeth Gilbert',
      genre: 'Travel',
      imageUrl: 'C.jpg'
    },
    {
      id: 4,
      title: 'Bridget Jones\'s Diary',
      author: 'Helen Fielding',
      genre: 'Comedy',
      imageUrl: 'D.jpg'
    },
    {
      id: 5,
      title: 'Misery',
      author: 'Stephen King',
      genre: 'Horror',
      imageUrl: 'E.jpg'
    },
    {
      id: 6,
      title: 'American Gods',
      author: 'Neil Gaiman',
      genre: 'Fantasy',
      imageUrl: 'F.jpg'
    },
    {
      id: 7,
      title: 'The Martian',
      author: 'Andy Weir',
      genre: 'Fantasy',
      imageUrl: 'G.jpg'
    },
    {
      id: 8,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Mystery',
      imageUrl: 'H.jpg'
    },
    {
      id: 9,
      title: 'The Shining',
      author: 'Stephen King',
      genre: 'Horror',
      imageUrl: 'I.jpg'
    },
    {
      id: 10,
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      genre: 'Romance',
      imageUrl: 'J.jpg'
    },
    {
      id: 11,
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      genre: 'Crime',
      imageUrl: 'K.jpg'
    },
    {
      id: 12,
      title: 'Outlander',
      author: 'Diana Gabaldon',
      genre: 'Romance',
      imageUrl: 'L.jpg'
    },
    {
      id: 13,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Mystery',
      imageUrl: 'M.jpg'
    },
    {
      id: 14,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      genre: 'Mystery',
      imageUrl: 'N.jpg'
    },
    {
      id: 15,
      title: 'Big Little Lies',
      author: 'Liane Moriarty',
      genre: 'Mystery',
      imageUrl: 'O.jpg'
    },
    {
      id: 16,
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      genre: 'Comedy',
      imageUrl: 'P.jpg'
    },
    {
      id: 17,
      title: 'Sherlock Holmes',
      author: 'Sir Arthur Conan Doyle',
      genre: 'Mystery',
      imageUrl: 'Q.jpg'
    },
    {
      id: 18,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      imageUrl: 'R.jpg'
    },
    {
      id: 19,
      title: 'The Road Trip',
      author: 'Beth O\'Leary',
      genre: 'Romance',
      imageUrl: 'S.jpg'
    },
    {
      id: 20,
      title: 'Wild',
      author: 'Cheryl Strayed',
      genre: 'Travel',
      imageUrl: 'T.jpg'
    },
    {
      id: 21,
      title: 'The Girl on the Train',
      author: 'Paula Hawkins',
      genre: 'Crime',
      imageUrl: 'U.jpg'
    },
    {
      id: 22,
      title: 'The Silent Corner',
      author: 'Dean Koontz',
      genre: 'Crime',
      imageUrl: 'V.jpg'
    },
    {
      id: 23,
      title: 'The Rosie Project',
      author: 'Graeme Simsion',
      genre: 'Comedy',
      imageUrl: 'W.jpg'
    },
    {
      id: 24,
      title: 'Good Omens',
      author: 'Neil Gaiman & Terry Pratchett',
      genre: 'Comedy',
      imageUrl: 'X.jpg'
    },
    {
      id: 25,
      title: 'IT',
      author: 'Stephen King',
      genre: 'Horror',
      imageUrl: 'Y.jpg'
    },
    {
      id: 26,
      title: 'Bird Box',
      author: 'Josh Malerman',
      genre: 'Horror',
      imageUrl: 'Z.jpg'
    },
    {
      id: 27,
      title: 'Into the Wild',
      author: 'Jon Krakauer',
      genre: 'Travel',
      imageUrl: 'AA.jpg'
    },
    {
      id: 28,
      title: 'A Walk in the Woods',
      author: 'Bill Bryson',
      genre: 'Travel',
      imageUrl: 'BB.jpg'
    }
  ];

  @Output()
  clickedButton: EventEmitter<string> = new EventEmitter<string>();

  add(){
    if(sessionStorage.getItem("status")!="active"){
      this.clickedButton.emit("Login");
    }
  }

  @Input() filteredGenre: string = 'All'; 

  title:string='Our Book Collection'
  
  filteredBooks: any[] = [];

  ngOnChanges() {
    this.filterBooksByGenre(this.filteredGenre);
    if(this.filteredGenre!='All'){
      this.title=this.filteredGenre+' Novels'
    }
    else{
      this.title="Our Book Collection"
    }
  }

  filterBooksByGenre(genre: string) {
    if(genre === 'All') {
      this.filteredBooks = this.books; 
    } else {
      this.filteredBooks = this.books.filter(book => book.genre === genre);
    }
  }
}
