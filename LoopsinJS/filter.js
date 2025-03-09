const myArr = [1,2,3,4,5,6,7]

let MyNewArr1 = myArr.forEach( (nums) => (nums>3) )
let MyNewArr2 = myArr.filter( (nums) => (nums>3) )

// console.log(MyNewArr1); //
// console.log(MyNewArr2); //


// for each to do same task done using single line filter 
let newNums = [];
myArr.forEach( (num) => {
    if (num > 3) {
        newNums.push(num)
    }
} )
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  
// const NewBooks = books.filter( (item) => (item.publish > 2000) )
// console.log(NewBooks);
const FicBooks = books.filter( (item) => ( (item.genre = 'Fiction') && item.publish > 1995 ) )
for (const item of FicBooks) {
  console.log(item.title);
}



