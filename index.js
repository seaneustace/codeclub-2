// https://jokes.seanworker.workers.dev returns a random joke

const firstReply = ["A Mexican magician says he will disappear on the count of 3. He says “Uno, dos…” poof.", "Why don’t ants get sick?", "What did the pirate say when he turned 80 years old?", "What happened when the pirate attempted to recite the alphabet?", "How do you tell the gender of an ant?", "What’s the difference between in-laws and outlaws?", "What do you do if you get the bird flu?", "What’s brown and sticky?", "Just re-watched Benjamin Button, again.", "Why was the scarecrow awarded a Nobel prize?", "What do you call Batman and Robin after a steamroller went over them?", "What do you call a fish with no eyes?", "What do you call a lion who is feeling dandy?", "Where do bad rainbows go?", "What do you call a haunted chicken?", "What time is it when the town’s most beloved knight is gone?", "Do you know where you can get chicken broth in bulk?", "What do you call a fake noodle?", "What do you call a can opener that doesn’t work?", "Why did the can crusher quit his job?", "Did you hear about the Italian chef who died?", "What is Forrest Gump’s email password?"];
const secondReply = ["He disappeared without a tres.", "Because they have little antybodies.", "Aye matey", "He got lost at ‘c’.", "Put it in a glass of water. If it sinks it’s a girl ant. If it floats it’s buoyant.", "Outlaws are wanted.", "Tweetment.", "A stick!", "Never gets old.", "Because he was outstanding in his field.", "Flatman and Ribbon.", "Fsssshhhhhh!", "A Dandelion.", "Prism, it’s a light sentence.", "A poultry-geist", "Mourning.", "The stock market.", "An impasta.", "A can’t opener!", "Because it was soda pressing.", "He pasta-way.", "1forrest1"];

async function handleRequest(request) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
  
}
var arrayPointer = getRandomInt(22);
console.log(arrayPointer);
console.log(firstReply[arrayPointer]);
console.log(secondReply[arrayPointer]);
// expected output: 0, 1 or 2

var payload = [firstReply[arrayPointer], secondReply[arrayPointer]]

var json = JSON.stringify(payload);

json.split(["\",\""]);

if (firstReply[arrayPointer] == null){
  var arrayPointer = getRandomInt(22);
  payload = [firstReply[arrayPointer], secondReply[arrayPointer]]

  json = JSON.stringify(payload);
}
return new Response(json, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});
