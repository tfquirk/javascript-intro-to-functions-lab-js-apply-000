<<<<<<< HEAD
//create function that shouts
function shout(string) {
  return string.toUpperCase()
}
//create function that whispers
function whisper(string) {
  return string.toLowerCase();
}
// create function that prints shouted word
function logShout(string) {
  console.log(shout(string));
}
// create function that prints whispered word
function logWhisper(string) {
  console.log(whisper(string));
}
// create a function that calls shout function so Gma can hear
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
     return 'I can\'t hear you!';
  } 
  if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  } 
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
=======
//create function that shouts
function shout(string) {
  return string.toUpperCase()
}
//create function that whispers
function whisper(string) {
  return string.toLowerCase();
}
// create function that prints shouted word
function logShout(string) {
  console.log(shout(string));
}
// create function that prints whispered word
function logWhisper(string) {
  console.log(whisper(string));
}
// create a function that calls shout function so Gma can hear
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
     return 'I can\'t hear you!';
  } 
  if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  } 
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }

}
>>>>>>> ae9143c4dca6d91cf44cff02be555bec202d57be
