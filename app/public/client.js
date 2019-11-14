$(document).ready(function() {
    $("#submit").on("click", function() {
        // console.log($("#q1").val().trim());
        event.preventDefault();
        let answers = [];
        
        for (let i = 1; i < 11; i++) {
            answers.push(parseInt($(`#q${i}`).val().trim()))
        };
        let newFriend = {
            name: $("#name").val().trim(),
            photo: $('#photo').val().trim(),
            answers: answers
        };
        
        // friends.push(newFriend);
        // console.log(newFriend);
        /* post will create a newFriend from 
        the userInput and */
        $.post("/api/friends", newFriend)
        .then(function(response) {
            // response comes from server based
            // on the request (post) that I just
            // asked for.
            console.log(response);
            /*  */
            alert("added a new friend");
            console.log(`new data: `);
            $.get("/api/friends")
            .then(function(response) {
                console.log(response);
            })
        })
    })
})