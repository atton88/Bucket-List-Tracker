$(function() {

    // On submit of create form, send POST call to server
    $("#createForm").on("submit", function(event) {
        console.log("button test")
        event.preventDefault();

        var newItem = {item : $("#newText").val().trim()};

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

    //
});
