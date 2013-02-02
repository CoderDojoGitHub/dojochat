/*global PUBNUB:true*/

var PUBLISH_KEY   = "PUBLISH_KEY";
var SUBSCRIBE_KEY = "SUBSCRIBE_KEY";

var pubnub;

function setUpPubNub() {
  pubnub = PUBNUB.init({
    publish_key   : PUBLISH_KEY,
    subscribe_key : SUBSCRIBE_KEY
  });
}



function listenToChatChannel() {
  pubnub.subscribe({
    channel : "dojochat",
    message : receiveMessage
  });
}

function receiveMessage(message) {
  $("#chat").append(message + "\n");
}



function setUpMessageForm() {
  $("#message-form").submit(sendMessageForm);
}

function sendMessageForm() {
  var myMessage = $("#message").val();
  sendMessage(myMessage);
  $("#message").val("");
}

function sendMessage(myMessage) {
  pubnub.publish({
    channel : "dojochat",
    message : myMessage
  });
}



function setUpEveryting() {
  setUpPubNub();
  listenToChatChannel();
  setUpMessageForm();
}

$.ready(setUpEveryting);

