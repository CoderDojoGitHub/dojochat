/*global PUBNUB:true*/

var PUBLISH_KEY   = "PUBLISH_KEY";
var SUBSCRIBE_KEY = "SUBSCRIBE_KEY";

var pubnub;

function connectToPubNub() {
  pubnub = PUBNUB.init({
    publish_key   : PUBLISH_KEY,
    subscribe_key : SUBSCRIBE_KEY
  });
}

function listenToChatChannel() {
  pubnub.subscribe({
    channel : "dojochat",
    message : receiveMessage,
    connect : function(channel) {
      pubnub.publish({
        channel : "dojochat",
        message : "A wild chatter appeared!"
      });
    }
  });
}

function setUpMessageSending() {
  $("#message-form").submit(sendMessage);
}

function sendMessage(event) {
  event.preventDefault();
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
  connectToPubNub();
  listenToChatChannel();
  setUpMessageSending();
});

