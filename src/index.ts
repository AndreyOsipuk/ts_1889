import { Book } from './book';
import { BueCallback, Reviews } from './types';
import { Genre } from './constants';
import { buy } from './helpers';

const reviews: Reviews = [
  ['Jhon', 5, 'It is my favorite book'],
  ['Mary', 3, 'I expected more from it :('],
  ['Clara', 5, 'Read it again and again!'],
];

const book = new Book({
  name: 'Harry Potter',
  genre: Genre.Fantasy,
  price: 1000,
  reviews,
  author: { lastName: 'J. K.', firstName: 'Rowling' },
  rating: 4.6,
});

const callback: BueCallback = (error, transactionId) => {
  if (error === null || transactionId) {
    console.log('Success');
  } else {
    console.log('Fail', error);
  }
};

buy(book, callback);
