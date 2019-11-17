$(document).ready(function () {
    $("#submit").on("click", function () {
        event.preventDefault();
        let scores = [];
        for (let i = 1; i < 11; i++) {
            scores.push(parseInt($(`#q${i}`).val().trim()));
        };
        let newFriend = {
            name: $("#name").val().trim(),
            photo: $('#photo').val().trim(),
            scores: scores
        };
        $.post("/api/friends", newFriend)
            .then(function (info) {
                // response comes from server based
                // on the request (post) that I just
                // asked for.
                console.log(info);
                $("#matchName").text(info.name);
                $("#profilePic").attr("src", info.photo);
                $('#myModal').modal('show');
            });
        $("#name").val("");
        $("#photo").val('');
        $('select').val("");
    });
});

