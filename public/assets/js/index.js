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
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // On click of complete button, send PUT call to server
  $(".toggleBtn").on("click", function(event) {
    console.log("toggle button test");

    event.preventDefault();

    var id = $(this).data("id");
    var newCompleted = $(this).data("completed");
    var newState = {completed: + newCompleted}; // + changes true value to 1 and falso to 0

    // Send the POST request.
    $.ajax("/api/list/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("Updated list item");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".deleteBtn").on("click", function(event) {
      console.log("delete btn test")
  })

});
