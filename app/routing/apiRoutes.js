
let friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // res is the response from the server 
        // to the client which will be displayed
        // in the form of a new json object {friends}
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        /* post creates */
        // console.log(req.body);
        // res.json({name: "michael"});
        let newFriend = req.body;
        console.log("about to add a new friend to array")
        console.log(`newFriend:`, newFriend);
        console.log(friends.length);
        // game logic goes here
        // first find the friends array and compare their answer
        // array to yours. Take absolute value of difference and
        // then compare them

        // answer array

        let matchDiff = [];
        for (let i = 0; i < friends.length; i++) {
            for (let j = 0; j < 10; j++) {
                // if current answer index of new friend does not 
                // equal current answer index of a friend at some
                // index within friends array of objcets, then
                // take the absolute value of the difference of 
                // newFriend score and friend[i] score

                // if (parseInt(newFriend.scores[j]) !== parseInt(friends[i].scores[j])) 
                console.log('is there an error yet?')
                console.log(`newFriend.scores[j]: ${parseInt(newFriend.answers[j])}`);
                console.log(`friends[i].scores[j]: ${parseInt(friends[i].scores[j])}`);
                let personDiff = Math.abs(parseInt(newFriend.answers[j]) - parseInt(friends[i].scores[j]));
                console.log('how about now?')
                matchDiff.push(personDiff);
                console.log('now?')
            }
        }
        console.log('and now?')

        console.log(matchDiff);
        console.log("orrrr")
        let index = 0;
        let smallestVal = matchDiff[0];
        for (let k = 0; k < matchDiff.length; k++) {
            if (matchDiff[k] < smallestVal) {
                smallestVal = matchDiff[k];
                index = k;
            };
        }
        console.log(`matchDiff array: ${matchDiff}`);
        console.log(`closest match is person at index ${index}`);
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