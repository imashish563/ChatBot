/*

In JavaScript we use variables to store information for later use. To allow variables to be used globally which preserves their information across many functions we have to declare them first with the 'var' keyword. In this JavaScript file we declare all the global variables we will need in other files.

*/

// chatArea is the variable that stores the place on the screen the chats will appear.
var chatArea = document.getElementById('chat-area');

// count is a variable that stores how many total chats have been sent.
var count = 0;

// botCount and userCount are variables that store how many chats each the bot and the suer have sent.
var botCount = 0;
var userCount = 0;

// nextMessage is an object variable that stores the next message that will be sent and who will be sending it.
var nextMessage = {
  message: "",
  sender: ""
};


// sendSpecialChat is a variable that stores if the bot should say something off script, and what that should be.
var sendSpecialChat = [false, ""];


// botSilent is a variable that stores when the bot is done speaking because it has said all of the things in the script.
var botSilent = false;

var requestedSource = [
	{
		"searchQry": "Happy Birthday !!",
		"userMsgKeyWord": "Happy Birthday",
		"botResponse": "Thank you !! I'm surprised that you remembered :)",
		"type": "text"
	}, {
		"userMsgKeyWord": "Hey | Hi",
		"botResponse": "Hello !!",
		"type": "text"
	},{
		"userMsgKeyWord": "Thankyou report | Thanks report | Thank you report",
		"botResponse": "You are welcome",
		"type": "text"
	}, {
		"searchQry": "How about yourself?",
		"userMsgKeyWord": "how yourself | how are you",
		"botResponse": "I'm good as well. Its been calm. How can I help you today?",
		"type": "text"
	}, {
		"searchQry": "Whats the latest on Networks team escalation?",
		"userMsgKeyWord": "networks team escalation | network teams escalation | network team escalation",
		"botResponse": "The team is doing well, all SLAs are green. There are no escalations. Here is the snapshot of the vitals. You can relax.",
		"type": "catalogue",
		"src": "images/slides/",
		"imageType": "png",
		"noOfImages": 7
	}, {
		"searchQry": "Play the deck?",
		"userMsgKeyWord": "vitals MS account| some vitals | vitals MS",
		"botResponse": "Here you go !",
		"type": "video",
		"src": "videos/vid-1.mp4"
	}, {
		"searchQry": "Play this years video?",
		"userMsgKeyWord": "play this year | this year",
		"botResponse": "Ehh, should have asked you,Here you go again !",
		"type": "catalogue",
		"src": "images/slides/",
		"imageType": "png",
		"noOfImages": 7
	}, {
		"userMsgKeyWord": "talking about | looking for",
		"botResponse": "Dont mention it. If you like I have a better version for you",
		"type": "text"
	},{
		"searchQry": "Play the deck?",
		"userMsgKeyWord": "show me",
		"botResponse": "Cool. Loading...",
		"type": "video",
		"src": "videos/vid-1.mp4"
	},{
		"userMsgKeyWord": "Thanks day",
		"botResponse": "Bye",
		"type": "text"
	}
];
