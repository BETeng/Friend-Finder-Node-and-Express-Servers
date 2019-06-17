var friendData = require("../data/friends");

module.exports = function(app){
  app.get("/api/friends", function(req, res){
    res.json(friendData);
    console.log("called friendData apiRoute");
  });
 app.post("/api/friends", function(req, res){
  var newFriend = req.body;
  newFriend.scores = newFriend.scores.map(el=>parseInt(el));
  //console.log(newFriend);
  friendData.push(newFriend);
  console.log(newFriend.scores);
  res.json(friendData);

})
}

// for (var i=0; i<friendData.length; i++){
//   totalDifference = Math.abs(friendData[i].scores - newFriend.scores)
//   // still need to add logic setup for subtracitng arrays 
//  // not sure if need to change values in array to numbers first or if the math logic will do it
// }
