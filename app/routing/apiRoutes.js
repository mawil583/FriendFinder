
let friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        // res is the response from the server 
        // to the client which will be displayed
        // in the form of a new json object {friends}
        res.json(friends);  
    });
    app.post("/api/friends", function(req, res) {
        /* post creates */
        // console.log(req.body);
        // res.json({name: "michael"});
        let newFriend = req.body;
        console.log("about to add a new friend to array")
        console.log(friends.length);
        // game logic goes here
        // first find the friends array and compare their answer
        // array to yours. Take absolute value of difference and
        // then compare them
        
        // answer array

        for (let i = 0; i < friends.length; i++) {
            let matchDiff = 0;
            for (let j = 0; j < friends[i].scores.length; i++) {
                if (newFriend.scores[j] !== friends[i].scores[j]) {
                    
                }
            }
        }

        friends.push(newFriend);
        console.log("new friend added");
        console.log(friends.length);

        // change this to: return the
        // closest friend (best match)
        res.json(newFriend);
    });
};
// get requests on server side is "sort of like"
// defining a function, whereas get requests on
// the client side is basically "calling" the 
// function that was declared on server side


// browser sees name: "michael" which comes from the server

// server sees {
/*"routeName": "Kim",
"name": "Kimziezz",
"role": "badass advanced engineer",
"age": 27,
"forcePoints": 99999.1
}*/