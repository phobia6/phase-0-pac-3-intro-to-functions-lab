function shout(string) {
    //console.log(shout("Hello!".toUpperCase()));
    return string.toUpperCase();
}
//console.log(shout("Hello!"));

function whisper(string) {
    return string.toLowerCase()
}
//console.log(whisper("Hello!"));

function logShout(spy) {
    console.log(spy.toUpperCase());
  }
  logShout("Hello!");

function logWhisper(spy) {
    console.log(spy.toLowerCase());
  }
  logWhisper("Hello!");

function sayHiToHeadphonedRoommate(strings) {
    if (strings === strings.toLowerCase()) {
        return "I can't hear you!" 
    } else if (strings === strings.toUpperCase()) {
        return "YES INDEED!"
    } else if (strings === "Let's have dinner together!") {
        return "I would love to!"
    }
}
//console.log(sayHiToHeadphonedRoommate("i can\'t hear you!"));
console.log(sayHiToHeadphonedRoommate("I CAN\'T HEAR YOU!"));