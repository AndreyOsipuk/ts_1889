import { sum } from './sum';
sum(1, 2);
class Book {
    constructor(name, genre, pageAmount) {
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
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
const recommendedBook = findSuitableBook('fantasy', 1000);
if (recommendedBook instanceof Book) {
    recommendedBook.name;
}
// console.log(findSuitableBook('fantasy', '1000'));
// console.log(findSuitableBook('fantasy'));
// console.log(findSuitableBook(1000, 'fantasy'));
// console.log(findSuitableBook(1000));
// console.log(findSuitableBook());
// console.log(findSuitableBook().name);
const a = 123;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWdyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9QbGF5Z3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVWLE1BQU0sSUFBSTtJQUtSLFlBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQjtRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLEtBQUssR0FBRztJQUNaLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDN0MsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQztJQUNsRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0NBQzVDLENBQUM7QUFFRixTQUFTLGdCQUFnQixDQUN2QixLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsdUJBQXVCLEdBQUcsSUFBSTtJQUU5QixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUM7SUFDL0QsQ0FBQyxDQUFDO0lBRUYsSUFBSSx1QkFBdUIsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNsQztBQUNILENBQUM7QUFHRCxNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDekQsSUFBSSxlQUFlLFlBQVksSUFBSSxFQUFFO0lBQ25DLGVBQWUsQ0FBQyxJQUFJLENBQUE7Q0FDckI7QUFFRCxvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCx1Q0FBdUM7QUFDdkMsbUNBQW1DO0FBQ25DLHdDQUF3QztBQUV4QyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdW0gfSBmcm9tICcuL3N1bSc7XG5cbnN1bSgxLCAyKTtcblxuY2xhc3MgQm9vayB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ2VucmU6IHN0cmluZztcbiAgcGFnZUFtb3VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZ2VucmU6IHN0cmluZywgcGFnZUFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdlbnJlID0gZ2VucmU7XG4gICAgdGhpcy5wYWdlQW1vdW50ID0gcGFnZUFtb3VudDtcbiAgfVxufVxuXG5jb25zdCBib29rcyA9IFtcbiAgbmV3IEJvb2soJ0hhcnJ5IFBvdHRlcicsICdmYW50YXN5JywgOTgwKSxcbiAgbmV3IEJvb2soJ0xvcmQgb2YgdGhlIFJpbmcnLCAnZmFudGFzeScsIDEwMDEpLFxuICBuZXcgQm9vaygnSG93IHRvIGJlIHByb2R1Y3RpdmUnLCAnbGlmZXN0eWxlJywgNTAwKSxcbiAgbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgOTk5KSxcbl07XG5cbmZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soXG4gIGdlbnJlOiBzdHJpbmcsXG4gIHBhZ2VzTGltaXQ6IG51bWJlcixcbiAgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlXG4pOiBCb29rIHwgQm9va1tdIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4gICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucGFnZUFtb3VudCA8PSBwYWdlc0xpbWl0O1xuICB9O1xuXG4gIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuICAgIHJldHVybiBib29rcy5maWx0ZXIoZmluZEFsZ29yaXRobSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvb2tzLmZpbmQoZmluZEFsZ29yaXRobSk7XG4gIH1cbn1cblxuXG5jb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMClcbmlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4gIHJlY29tbWVuZGVkQm9vay5uYW1lXG59XG5cbi8vIGNvbnNvbGUubG9nKGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAnMTAwMCcpKTtcbi8vIGNvbnNvbGUubG9nKGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knKSk7XG4vLyBjb25zb2xlLmxvZyhmaW5kU3VpdGFibGVCb29rKDEwMDAsICdmYW50YXN5JykpO1xuLy8gY29uc29sZS5sb2coZmluZFN1aXRhYmxlQm9vaygxMDAwKSk7XG4vLyBjb25zb2xlLmxvZyhmaW5kU3VpdGFibGVCb29rKCkpO1xuLy8gY29uc29sZS5sb2coZmluZFN1aXRhYmxlQm9vaygpLm5hbWUpO1xuXG5jb25zdCBhID0gMTIzXG4iXX0=