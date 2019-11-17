
let friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // res is the response from the server 
        // to the client which will be displayed
        // in the form of a new json object {friends}
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        // game logic goes here

        // initialize bestMatch with first friend in friends array
        // then update it with different friend when for loop executes,
        // but only if other friends have less difference in scores
        let bestMatch = friends[0];
        let bestMatchDiff = Infinity;
        // for each friend in my friends array (i refers to friend index),
        for (let i = 0; i < friends.length; i++) {
            // loop through that friend's scores and compare them to 
            // newFriend's scores (j refers to answer index)
            let sumOfDiffPerPerson = 0;
            // each index in this array corresponds to the sum of differences in 
            // compatibility points between newFriend and friend at
            // current index
            console.log(`newFriend.scores.length: `, newFriend.scores.length);
            console.log("iteration: " + i);
            console.log(`friends[i].scores.length`, friends[i].scores.length);
            for (let j = 0; j < newFriend.scores.length; j++) {
                let scoreDiffPerAnswer = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                sumOfDiffPerPerson += scoreDiffPerAnswer;
            }
            if (sumOfDiffPerPerson < bestMatchDiff) {
                bestMatchDiff = sumOfDiffPerPerson;
                bestMatch = friends[i];
            };
        };
        res.json(bestMatch);
        friends.push(newFriend);
    });
};