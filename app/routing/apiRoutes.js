var friendData = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
    console.log("called friendData apiRoute");
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    newFriend.scores = newFriend.scores.map(el => parseInt(el));
    //console.log(newFriend);
    friendData.push(newFriend);
    console.log(newFriend.scores);
    res.json(friendData);
    for (var i=0; i<friendData.length; i++){friendData[i].scores[j]
      for (var j=0; j<10; j++){
        var difference = Math.abs(newFriend.scores[j]-friendData[i].scores[j]);
        console.log('newFriend.score',newFriend.scores[j]);
        console.log('friend:'+[i]+' question:'+[j+1]+' score:'+ friendData[i].scores[j])
        console.log('difference', difference);
      }
    }
  });// compile all the differnces and then add them together for totalDifference 
}
// compile differences for each individual into a totalDiffernce var
// run a loop to check which totalDifference is the smallest
// determine which indiviudal has the smallest totalDifference and spit the name and image into div class="modal-body"