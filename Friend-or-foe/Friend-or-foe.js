function friend(friends){
    // Create an empty array
    array = [];
    // Loop through the friends array
    for(var i=0; i<friends.length; i++){
        // Add name to the empty array if it equals four
        if(friends[i].length === 4) 
            array.push(friends[i]);
    }
    return array
  }