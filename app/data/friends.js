var friend = {
    frdArr:[
        {
            name:"Ahmed",
            photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            answers: [5,1,4,4,5,1,2,5,4],
            sum:31
        },
    ],
    findBestMatch: function(friendOb,friendArray) {
        var result = friendArray[0];
        friendArray.forEach(function(ele) {
            if(Math.abs(ele.sum-friendOb.sum) < Math.abs(result.sum-friendOb.sum)) {
                result = ele;
            }
        })
        return result;
    } 
}