/*global PUBNUB:true*/

var pubnub;

function setUpPubNub() {
  pubnub = PUBNUB.init({
    publish_key   : "PUBLISH_KEY",
    subscribe_key : "SUBSCRIBE_KEY"
  });

  pubnub.subscribe({
    channel : "dojochat",
    message : function(m){
      console.log(m);
    },
    connect : function(channel) {
      pubnub.publish({
        channel : "dojochat",
        message : "Hi"
      });
    }
  });
}

$(function() {
  setUpPubNub();
});

