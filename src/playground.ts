import { sum } from './sum';

sum(1, 2);

class Book {
  name: string;
  genre: string;
  pageAmount: number;

  constructor(name: string, genre: string, pageAmount: number) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}

const books = [
  new Book('Harry Potter', 'fantasy', 980),
  new Book('Lord of the Ring', 'fantasy', 1001),
  new Book('How to be productive', 'lifestyle', 500),
  new Book('Game of Thrones', 'fantasy', 999),
];

function findSuitableBook(
  genre: string,
  pagesLimit: number,
  multipleRecommendations = true
): Book | Book[] | undefined {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit;
  };

  if (multipleRecommendations) {
    return books.filter(findAlgorithm);
  } else {
    return books.find(findAlgorithm);
  }
}


const recommendedBook = findSuitableBook('fantasy', 1000)
if (recommendedBook instanceof Book) {
  recommendedBook.name
}

// console.log(findSuitableBook('fantasy', '1000'));
// console.log(findSuitableBook('fantasy'));
// console.log(findSuitableBook(1000, 'fantasy'));
// console.log(findSuitableBook(1000));
// console.log(findSuitableBook());
// console.log(findSuitableBook().name);

const a = 123
