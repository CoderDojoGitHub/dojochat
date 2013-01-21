/*global PUBNUB:true*/

var pubnub;

function setUpPubNub() {
  pubnub = PUBNUB.init({
    publish_key   : "PUBLISH_KEY",
    subscribe_key : "SUBSCRIBE_KEY"
  });

  pubnub.subscribe({
    channel : "dojochat",
    message : receiveMessage,
    connect : function(channel) {
      pubnub.publish({
        channel : "dojochat",
        message : "Hi"
      });
    }
  });
}

function setUpSendButton() {
  $("#send").click(sendMessage);
}

function sendMessage() {
  var myMessage = $("#message").val();
  pubnub.publish({
    channel : "dojochat",
    message : myMessage
  });
  $("#message").val("");
}

function receiveMessage(message) {
  $("#chat").append(message + "\n");
}

$(function() {
  setUpPubNub();
  setUpSendButton();
});

