import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  books = [
    {
      id: 1,
      title: 'Beauty and the Beast',
      author: 'Michael Morpurgo',
      description: 'Beauty and the Beast is a traditional fairy tale that tells the story of a young woman named Belle who is taken prisoner by a Beast in his castle. Despite her fears, she befriends the castle\'s enchanted staff and learns to look beyond the Beast\'s exterior to recognize the kind heart and soul of the true Prince within.',
      imageUrl: '20.jpg'
    },
    {
      id: 2,
      title: 'Sherlock Holmes',
      author: 'Sir Arthur Conan Doyle',
      description: 'Sherlock Holmes is a famous detective known for his brilliant deductive reasoning and astute observation skills. Alongside his loyal friend Dr. Watson, Holmes solves perplexing mysteries and outsmarts cunning criminals in Victorian London.',
      imageUrl: '21.png'
    },
    {
      id: 3,
      title: 'Chicka Chicka Boom Boom',
      author: 'Bill Martin Jr. and John Archambault',
      description: 'Chicka Chicka Boom Boom is a lively alphabet rhyme that tells the story of letters racing to the top of a coconut tree. With playful rhythm and vibrant illustrations, this book engages young readers in a fun and memorable way.',
      imageUrl: '22.jpg'
    },
    {
      id: 4,
      title: 'The Guardians of Lore',
      author: 'Daniel Errico',
      description: 'The Guardians of Lore follows the adventures of courageous guardians who protect ancient stories and legends from falling into darkness. As they battle formidable foes and embark on epic quests, they safeguard the wisdom and magic held within these timeless tales.',
      imageUrl: '23.jpg'
    },
    {
      id: 5,
      title: 'The Jungle Book',
      author: 'Rudyard Kipling',
      description: 'The Jungle Book is a collection of stories that follow the adventures of Mowgli, a boy raised by wolves in the jungles of India. Alongside his animal friends, Mowgli navigates the challenges of the wilderness, encounters dangerous predators, and learns valuable life lessons.',
      imageUrl: '24.jpg'
    },
    {
      id: 6,
      title: 'Cinderella',
      author: 'Charles Perrault',
      description: 'Cinderella is a beloved fairy tale about a kind-hearted young woman who, with the help of her Fairy Godmother, attends a royal ball and captures the heart of a prince. Despite facing adversity and mistreatment from her stepmother and stepsisters, Cinderella’s unwavering kindness and courage lead her to a happily ever after.',
      imageUrl: '25.jpg'
    },
    {
      id: 7,
      title: 'Winnie-the-Pooh',
      author: 'A.A. Milne',
      description: 'Winnie-the-Pooh is a classic children\'s book that follows the adventures of a teddy bear named Winnie-the-Pooh and his friends Piglet, Eeyore, and Tigger in the Hundred Acre Wood. Together, they have heartwarming adventures and learn valuable life lessons.',
      imageUrl: '26.jpg'
    },
    {
      id: 8,
      title: 'Harry Potter',
      author: 'J.K.Rowling',
      description: 'Harry Potter is a series of fantasy novels that chronicle the life and adventures of a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley. Set in the magical world of Hogwarts School of Witchcraft and Wizardry, the series explores themes of friendship, bravery, and the battle between good and evil.',
      imageUrl: '27.jpg'
    },
    {
      id: 9,
      title: 'Matilda',
      author: 'Roald Dahl',
      description: 'Matilda is a brilliant young girl with telekinetic powers who uses them to stand up against the injustices she faces at home and at school. With the help of her kind teacher Miss Honey, Matilda discovers her true potential and finds a loving family.',
      imageUrl: '28.jpg'
    },
    {
      id: 10,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'The Hobbit follows the journey of Bilbo Baggins, a hobbit who embarks on an unexpected adventure to help a group of dwarves reclaim their homeland from the dragon Smaug. Along the way, Bilbo encounters trolls, elves, and goblins, and discovers courage and friendship within himself.',
      imageUrl: '29.jpg'
    }
  ]

  @Output()
  clickedButton:EventEmitter<string>=new EventEmitter<string>();

  add(){
    if(sessionStorage.getItem("status")!="active"){
      this.clickedButton.emit("Login");
    }
  }
}
