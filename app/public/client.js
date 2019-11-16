$(document).ready(function () {
    $("#submit").on("click", function () {
        // console.log($("#q1").val().trim());
        event.preventDefault();
        let scores = [];

        for (let i = 1; i < 11; i++) {

            scores.push(parseInt($(`#q${i}`).val().trim()))
            
        };
        // when you transfer this data over to backend,
        // everything gets converted to a string,
        // so parseInt is meaningless!!!!! derrrr
        // check that
        let newFriend = {
            name: $("#name").val().trim(),
            photo: $('#photo').val().trim(),
            scores: scores
        };

        // friends.push(newFriend);
        // console.log(newFriend);
        /* post will create a newFriend from 
        the userInput and */
        $.post("/api/friends", newFriend)
            .then(function (info) {
                // response comes from server based
                // on the request (post) that I just
                // asked for.
                console.log(info);
                $("#matchName").text(info.name);
                $("#profilePic").attr("src", info.photo);
                $('#myModal').modal('show');
            })
        // $('#myModal').on('shown.bs.modal', function () {
        //     $('#myInput').trigger('focus');
        // })
    })
})

