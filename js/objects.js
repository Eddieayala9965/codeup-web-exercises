(function() {
    "use strict";

    // /**
    //  * TODO: Done
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.

        const person = {
            firstName: "Eddie",
            lastName: "Ayala",
            sayHello: function() {
                console.log(`hello from ${this.firstName} ${this.lastName}`)
            }

        }


     // * Example:
     console.log(person.firstName) // "Rick"
     console.log(person.lastName) // "Sanchez"
     // */

    // /**
    //  * TODO: Done
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work





     // * Example
     // console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     // */

    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //  */
    shoppers.forEach((shopper, index) => {
        if (shopper.amount >= 200) {
           console.log("You get a 12% discount!")
       } else {
           console.log("Sorry, no discount!")
       }


   })

    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *
    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //
    // do one of your favorite ufc fighters ! or fighting styles.

        // we are just calling the position, we are not calling the title.
    const booksArray = [
        {title: 'One Piece', author: {
            firstName: 'Eiichiro',
            lastName: 'Oda'
            }   } ,
        {title: 'Naruto', author: {
            firstName: 'Masashi',
            lastName: 'Kishimoto'
            }
        },
        {title: 'DragonBall Z', author: {
            firstName: 'Akira',
            lastName: 'Toriyama'
            }

        },
        {title: 'Chainsaw Man', author: {
            firstName: 'Tatsuki',
            lastName: 'Fujimoto'
            }

        },
        {title: 'Bleach', author: {
            firstName: 'Tite',
            lastName: 'kubo'
            }

        }
    ]
    console.log(booksArray[0].title)
    console.log(booksArray[0].author.firstName)
    console.log(booksArray[0].author.lastName)



    // /**
    //  * TODO:
    //  * Loop through the books array and output the following information about....... For Each is easier for arrays
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */

   booksArray.forEach((manga, index) => {
       let fullName = manga.author.firstName + " " + manga.author.lastName
       let mangaName = `Manga ${index+1}`
       console.log("--------")
       console.log(mangaName)
       console.log(manga.title)
       console.log(fullName)
   })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();