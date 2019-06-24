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
    // friendData.push(newFriend); 
    console.log(newFriend.scores);

    var comparisonArray = [];

    for (var i = 0; i < friendData.length; i++) {
      var comparedFriend = friendData[i];
      var totalDifference = 0;

      for (var j = 0; j < 10; j++) {
        var difference = Math.abs(comparedFriend.scores[j] - newFriend.scores[j]);
        console.log('newF score:', newFriend.scores[j], 'compF score:', comparedFriend.scores[j]);
        totalDifference += difference;
        console.log('difference:', difference, 'totalDifference', totalDifference);
      }
      comparisonArray[i] = totalDifference;
      console.log('comparedFriend', comparedFriend)
      console.log(comparisonArray)
    }
    var bestMatchId = comparisonArray[0];
    var bestMatchIVal = 0;

    for(var i =0; i<comparisonArray.length; i++){
      if(comparisonArray[i]<bestMatchId){
        bestMatchId = comparisonArray[i];
        bestMatchIVal = i;
      }
    }
    res.json(friendData[bestMatchIVal]); 
  });
}
