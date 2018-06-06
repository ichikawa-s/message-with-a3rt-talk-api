/**
 * 送信ボタン押下時にユーザーのメッセージをタイムラインに表示する
 */
function displayMessageTo() {

	var message = getMessage();

	console.log( message );

	appendMessageToTimeline( message );

}

/**
 * ユーザーの入力メッセージを取得する
 */
function getMessage() {
	return $('#talkapp_send_message').val();
}

/**
 * ユーザーの入力メッセージをタイムラインに表示する
 */
function appendMessageToTimeline( message ) {
	$('.messages-wrapper').append( '<div class="message to">' + message + '</div>' );
}

/**
 * 送信ボタンの押下時に呼ばれる
 */
$('#talkapp_send_btn').on('click', function(){
	// タイムラインにユーザーのメッセージを表示する
	displayMessageTo();

	// talk apiに送信する
	postMessage();
});

/**
 * 
 */
function postMessage() {

	$.ajax({
		type: "POST",

		url: "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",

		data: { apikey: "s9DxJCNnRgmzJBprDUUZrPLXgaY3dcEU",
				query: getMessage },

		success: function( data ) {
			console.log( data.status );
			console.log( data.message );
			console.log( data.results );

            // talk-apiの入力メッセージをタイムラインに表示する
			displayMessageFrom( data.results );

			// 送信メッセージをクリア
			$('#talkapp_send_message').val('');
		}
	});

}

/**
 * talk-apiの入力メッセージをタイムラインに表示する
 */
function displayMessageFrom( results ) {
	
	var message = null;

	if ( results && Array.isArray( results ) && results.length > 0 ) {
		message = results[0].reply;
	} else {
		message = "...";
	}
	
	if ( message ) {
		appendMessageFromTimeline( message );
	} else {
		console.log( 'data.results = ' + results );
	}

}

/**
 * talk-apiの入力メッセージをタイムラインに表示する
 */
function appendMessageFromTimeline( message ) {
	$('.messages-wrapper').append( '<div class="message from">' + message + '</div>' );
}

