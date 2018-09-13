$(function() {
  // On submit of create form, send POST call to server
  $("#createForm").on("submit", function(event) {
    event.preventDefault();

    var newItem = {
      item: $("#newText")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/list", {
      type: "POST",
      data: newItem
    }).then(function() {
      console.log("Created new list item");

      location.reload();
    });
  });

  // On click of complete button, send PUT call to server
  $(".toggleBtn").on("click", function(event) {
    console.log("toggle button test");

    event.preventDefault();

    var id = $(this).data("id");
    var newState = {completed: + $(this).data("completed")}; // + changes true value to 1 and false to 0

    // Send the PUT request.
    $.ajax("/api/list/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("Updated list item");

      location.reload();
    });
  });

  $(".deleteBtn").on("click", function(event) {
      console.log("delete btn test")
  })

});
