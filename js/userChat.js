// userChat is the function that waits for the user to send a message.
function userChat() {

    // Find where the user is inputing text.
    compose_area = document.getElementById('composer');
  
    // Set the user as the sender of the next message.
    nextMessage.sender = "user";
  
    // Get the user's input in the compose_area and clear the compose_area.
    nextMessage.message = compose_area.value;
    compose_area.value = "";
    
    
    // We need to convert the user's message to upper case to check if it matches with any prompts using the .toUpperCase() function.
    
    uppercase = nextMessage.message.toUpperCase();
  
    //checkUserMsgsForKeywords(uppercase);
	decodeUserMsgAndFormBotResponse(uppercase);
  
  
    // Send user's message.
    send(nextMessage.sender, nextMessage.message);
  
    // Count 1 more chat that the user has sent.
    userCount += 1;
  
    // Ask the bot for another chat.
    lookForChat()
  
  }
  

function decodeUserMsgAndFormBotResponse (userMsg) {
	
	$.each(requestedSource, function(index, element) {
		console.log(element);
		if (element.userMsgKeyWord && (lookUpKeyWord(userMsg, element.userMsgKeyWord)) || userMsg == element.searchQry) {
			console.log("Match found...");
			sendSpecialChat = [true, element];
			return false;
		}
	});
	
}

function lookUpKeyWord(userMsg, keyWord) {
	
	var keyWordArry = $.map(keyWord.split("|"), $.trim);
	var keyWordFound = false;

	$.each(keyWordArry, function(i){
		console.log('Looking for {' + keyWordArry[i] + '} in user Message {' + userMsg + '}');
		var pattern = new RegExp("\\b" + keyWordArry[i].replace(/ +/g, "\\b.*\\b") + "\\b", "i");
		console.log(pattern);
		
		keyWordFound = userMsg.match(pattern);
		
		if (keyWordFound)
			return false;
	});

	return keyWordFound
}