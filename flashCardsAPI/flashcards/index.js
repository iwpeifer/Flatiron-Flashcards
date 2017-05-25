$(document).ready(function(){
  $('.parallax').parallax()
  getFlashcards()
  submitFlashcard()
})

function getFlashcards(){
  $.ajax({
    url: "http://localhost:3000/api/v1/flashcards",
    type: "GET",
    success: function(data){
      showFlashcards(data)
    }
  })
}

function submitFlashcard(){
  $("#submit").click(function(event){
    event.preventDefault()
    var newFlashcard = { flashcard: {
                                      subject: $("#subject").val(),
                                      question: $("#question").val(),
                                      answer: $("#answer").val()
                                    }
                                  }
    createFlashcard(newFlashcard)
  })
}

function createFlashcard(newFlashcard){
  let data = JSON.stringify(newFlashcard)
  console.log(data)
  $.ajax({
    url: "http://localhost:3000/api/v1/flashcards",
    type: 'POST',
    contentType: "application/json",
    data: data,
    success: function(data){
      getFlashcards()
    }
  })
}

function showFlashcards(flashcards){
  // var flashcardList = `${flashcards.map(flashcard => "<div id='" + `${flashcard.id}` + "'><li class='subject'>Subject: " + flashcard.subject + "<button class='delete'>Delete</button><br></li><li class='question'>Question: " + flashcard.question + "<br></li><li class='answer' style='background-color:black'>Answer: " + flashcard.answer + "</li></div><br>").join("")}`
  var flashcardList = `${flashcards.map(flashcard => "<div class='row'><div class='col s12 m6'><div class='card white darken-1'><div class='card-content black-text' id='"+ `${flashcard.id}` + "'><span class='subject'>" + flashcard.subject + "</span><p class='question'>" + flashcard.question + "</p><p class='answer' style='background-color:black'>" + flashcard.answer + "</p></div><div id='"+ `${flashcard.id}` + "'><a href=# class='delete'>Delete</a></div></div></div></div>").join("")}`
  $("#flashcards").html(flashcardList)
  showAnswer()
  deleteButton()
}

function showAnswer(){
  $( ".answer" ).hover(function() {
    this.style.backgroundColor = "white";
    this.style.color = "green"
    this.style.fontWeight = "bold"
  }, function() {
    this.style.backgroundColor = "black";
    this.style.color = "black"
  }
);
}

function deleteButton(){
  $(".delete").click(function(){
    var delete_id = $(this).parent().attr('id')
    var id = parseInt(delete_id)
    deleteFlashcard(id)
  })
}

function deleteFlashcard(id){
  $.ajax({
    url: `http://localhost:3000/api/v1/flashcards/${id}`,
    type: 'DELETE',
    success: function(flashcard){
      getFlashcards()
    }
  })
}
