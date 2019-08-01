$("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
$("#myModal").on('hide.bs.modal', function(){
	 $('#myVideo').get(0).pause();
    $('#myVideo').get(0).currentTime = 0;
  });
  
  
function showTypingIndicator() {
	console.log('In showTypingIndicator');
	$( "#chat-area" ).append( '<div class="typing-indicator indicator-position"> <span></span> <span></span> <span></span> </div>' );
}

function hideTypingIndicator() {
	console.log('In hideTypingIndicator');
	$( ".typing-indicator" ).remove();
}