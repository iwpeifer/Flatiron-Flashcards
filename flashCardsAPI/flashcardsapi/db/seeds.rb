# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

flashcards = Flashcard.create([{
                                subject: "JS",
                                question: "When used on a reference to a function, it eturns a reference to a new function in which 'this' is defined by the given argument",
                                answer: ".bind()"
                              },
                              {
                                subject:"JS",
                                question: "When used on a reference to a function, it immediately executes the function with 'this' defined by the first argument; subsequent arguments correspond to the arguments that the original function takes",
                                answer: ".call"
                              },
                              {
                                subject:"Rails",
                                question: "What should you type into the command line to create a new Rails API application?",
                                answer: "rails new PROJECT_NAME --api"
                              },
                              {
                                subject:"JS",
                                question: "What does the syntax look like for .map?",
                                answer: ".map(callback, thisArg) *thisArg is optional"
                              },
                              {
                                subject:"JS",
                                question: "What does the syntax look like for .reduce?",
                                answer: ".reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  10
);"
                              }
                            ])
