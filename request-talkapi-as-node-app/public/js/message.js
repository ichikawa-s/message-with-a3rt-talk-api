/**
 * 送信ボタン押下時にタイムラインにメッセージを表示する
 */
function displayMessageTo() {
	// $().click()

	var message = getMessage();

	console.log( message );

	appendMessageToTimeline( message );

}

function getMessage() {
	return $('#bms_send_message').val();
}

function appendMessageToTimeline( message ) {
	$('.messages-wrapper').append( '<div class="message to">' + message + '</div>' );
}

function appendMessageFromTimeline( message ) {
	$('.messages-wrapper').append( '<div class="message from">' + message + '</div>' );
}

$('#bms_send_btn').on('click', function(){
	// タイムラインに送信メッセージを表示する
	displayMessageTo();

	// talk apiに送信する
	/*
	$.ajax({
		  type: "POST",
		  url: "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",
		  data: { apikey: A3RT_API_SETTING.apikey,
			      query: getMessage }
		  ,
		  success: function( data ) {
			  console.log( data.status );
			  console.log( data.message );
			  console.log( data.results );

			  displayMessageFrom( data.results );

			  // 送信メッセージをクリア
		　　　　　$('#bms_send_message').val('');

		  }
		});
		*/

		var data_for_send = JSON.stringify( { 'message' : getMessage() } );
		console.log( 'data = ' + data_for_send );

		$.ajax({
			  type: "POST",
			  url: "http://localhost:3000/requestToTalkApi",
			  data: JSON.parse( data_for_send ),
				dataType:'json',
				// contentType: 'application/json',
			  success: function( data ) {
				  console.log( data.status );
				  console.log( data.message );
				  console.log( data.results );

				  displayMessageFrom( data.results );

				  // 送信メッセージをクリア
			　　　　　$('#bms_send_message').val('');

			  }
			});
});

function displayMessageFrom( results ) {

	var message = results[0].reply;

	if ( message ) {
		appendMessageFromTimeline( message );
	} else {
		console.log( 'data.results = ' + results );
	}

}
