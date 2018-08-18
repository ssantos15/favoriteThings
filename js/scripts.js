$("document").ready(function(){
    $("form#formOne").submit(function(event) {
      event.preventDefault();

      var name= $("input#name").val();
      var animal= $("input#animal").val();
      var number= $("input#number").val();
      var sibling= $("input#sibling").val();

      var favoriteThings = [name, animal, number, sibling];

      $("ul#output").append("<li>" + favoriteThings[2] + "</li>");
      $("ul#output").append("<li>" + favoriteThings[1] + "</li>");
      $("ul#output").append("<li>" + favoriteThings[3] + "</li>");
      $("ul#output").append("<li>" + favoriteThings[0] + "</li>");

      var newArray= [];
      newArray.push(favoriteThings);
      $("ul#output").append("<li>" + newArray + "</li>");

    });


});
