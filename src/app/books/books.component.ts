import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books = [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      description: 'Harry Potter is a series of fantasy novels written by British author J.K. Rowling. The series follows the adventures of the young wizard Harry Potter and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
      imageUrl: 'HarryPotter.jpg'
    },
    {
      id: 2,
      title: 'The Fault in Our Stars',
      author: 'John Green',
      description: 'The Fault in Our Stars is a novel by John Green that explores the life of a teenage girl named Hazel who has cancer and meets Augustus at a cancer support group. The novel delves into themes of love, mortality, and the meaning of life.',
      imageUrl: '2.jpg'
    },
    {
      id: 3,
      title: 'I Too Had A Love Story',
      author: 'Ravinder Singh',
      description: 'I Too Had A Love Story is an autobiographical novel by Indian author Ravinder Singh. It narrates the true story of the author\'s love life and the tragedy that struck him. The novel explores themes of love, loss, and destiny.',
      imageUrl: '3.jpg'
    },
    {
      id: 4,
      title: 'Half Girlfriend',
      author: 'Chetan Bhagat',
      description: 'Half Girlfriend is a romance novel by Indian author Chetan Bhagat. The story revolves around a Bihari boy and a rich Delhi girl who become friends at college but have differing opinions on their relationship.',
      imageUrl: '4.jpg'
    },
    {
      id: 5,
      title: '400 Days',
      author: 'Chetan Bhagat',
      description: '400 Days is a novel by Chetan Bhagat that delves into the life of a protagonist who faces a dilemma that challenges his beliefs and relationships. It explores themes of ambition, love, and personal growth.',
      imageUrl: '5.jpg'
    },
    {
      id: 6,
      title: 'Five Point Someone',
      author: 'Chetan Bhagat',
      description: 'Five Point Someone is a novel by Chetan Bhagat about three friends at an Indian engineering college and their experiences. It explores the pressures of academic performance and the impact on friendships.',
      imageUrl: '6.jpg'
    },
    {
      id: 7,
      title: 'One Arranged Murder',
      author: 'Chetan Bhagat',
      description: 'One Arranged Murder is a mystery novel by Chetan Bhagat that follows a protagonist who investigates a murder that occurs during a wedding. It combines elements of suspense, romance, and family drama.',
      imageUrl: '7.jpg'
    },
    {
      id: 8,
      title: 'The Girl in Room 105',
      author: 'Chetan Bhagat',
      description: 'The Girl in Room 105 is a romantic thriller by Chetan Bhagat. It tells the story of a young man who sets out to uncover the truth behind a mysterious disappearance and finds himself entangled in unexpected events.',
      imageUrl: '8.png'
    },
    {
      id: 9,
      title: 'The Spanish Love Deception',
      author: 'Elena Armas',
      description: 'The Spanish Love Deception is a contemporary romance novel by Elena Armas. It follows the journey of a woman who embarks on a fake relationship with her coworker to deceive her ex-boyfriend and discovers unexpected emotions.',
      imageUrl: '9.jpg'
    },
    {
      id: 10,
      title: "A Midsummer Night's Dream",
      author: 'William Shakespeare',
      description: "A Midsummer Night's Dream is a comedy play by William Shakespeare. It portrays the events surrounding the marriage of Theseus, the Duke of Athens, and Hippolyta, the Queen of the Amazons, and the adventures of four young Athenian lovers and a group of amateur actors.",
      imageUrl: '10.png'
    },
    {
      id: 11,
      title: 'Sherlock Holmes',
      author: 'Sir Arthur Conan Doyle',
      description: 'Sherlock Holmes is a fictional detective created by Scottish author Sir Arthur Conan Doyle. Holmes is known for his astute logical reasoning, his ability to adopt almost any disguise, and his use of forensic science to solve difficult cases.',
      imageUrl: '11.jpg'
    },
    {
      id: 12,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'Pride and Prejudice is a romantic novel by Jane Austen. It follows the emotional development of protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
      imageUrl: '12.jpg'
    },
  ];

  // searchVal='';

  @Output()
  clickedButton: EventEmitter<string> = new EventEmitter<string>();

  add() {
    if (sessionStorage.getItem("status") != "active") {
      this.clickedButton.emit("Login");
    }
  }

  searchval = ''
  num_of_books=0

  searchVal(val: string) {
    this.searchval = val
  }

  filteredBooks() {
    if (this.searchval != '') {
      var filteredbooks = [];
      for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].title.toLowerCase().includes(this.searchval.toLowerCase())) {
          filteredbooks.push(this.books[i]);
        }
      }
      this.num_of_books=filteredbooks.length;
      return filteredbooks;
    }
    else {
      return this.books;
    }
  }
}
