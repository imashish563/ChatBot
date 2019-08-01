// botChat is the function that picks the bot's next message.
function botChat() {
    // Set the bot as the sender of the next message.
    nextMessage.sender = "bot";
  
    /*if (botCount >= botScript.length) {
      nextMessage.message = goodbye
      botSilent = true;
    } else {
      // Set the bot's next message as the next string in the botScript array.
      nextMessage.message = botScript[botCount];
    }
  */
  
  if (botCount==0) {
      nextMessage.message = botScript[0];
	  botCount=botCount+1;
    } else {
      nextMessage.message = botScript[1];
    }
  
  
    // Check sendSpecialChat to see if anything special should happen.
    if (sendSpecialChat[0]) {
		nextMessage.message = sendSpecialChat[1].botResponse; 
    }
  
    // Send the bot's message.
    send(nextMessage.sender, nextMessage.message);
	
	if (sendSpecialChat[0] && sendSpecialChat[1] != null) {
		doUserRequestedOperation(sendSpecialChat[1]);
	}
  
    // Count 1 more chat that the bot has sent unless the chat was a sendSpecialChat.
    if (sendSpecialChat[0]) {
      sendSpecialChat = [false, ""];
  
    } 
	
	/*else {
      botCount += 1;
    }
	*/
  
    // Start listening again after the bot has sent a message.
    listenFor();
  }
  
function doUserRequestedOperation(userReqobj) {
	if (userReqobj.type == 'video') {
		setTimeout(function() {
			$("#myModal").modal({show: true,backdrop: "static"});
			
			var videoArea = document.getElementById('myVideo');
			
			var source = document.createElement('source');
			source.src = userReqobj.src;
			
			videoArea.appendChild(source);
			videoArea.load();
			videoArea.play();
		}, 2000);
	} else if (userReqobj.type == 'catalogue') {
		setTimeout(function() {
			
			$( "#pptModal .row" ).empty();
			for (var i = 1; i <= userReqobj.noOfImages; i++) {
				var imgSrc = userReqobj.src + i + '.' + userReqobj.imageType;
				var imgDiv = '<div class="col-16 col-md-8 col-lg-4"> <div class="portfolio-content"> <figure> <img src="' + imgSrc +'" alt=""> </figure> </div> </div>';
				
				$( "#pptModal .row" ).append(imgDiv);
			}
			
			$("#pptModal").modal({show: true,backdrop: "static"});
		}, 2000);
	} 
}

