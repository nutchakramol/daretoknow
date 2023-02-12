const truthButton = document.getElementById("truth-button");
      const dareButton = document.getElementById("dare-button");
      const generatedTextDiv = document.getElementById("generated-text");

      // Create lists of text
      const TRUTH = [
        "What's your biggest fear?", 
        "Have you ever stolen something?", 
        "Have you ever been in love with two people at the same time?", 
        "Have you ever had a crush on a friend's significant other?", 
        "Have you ever been in a physical fight?", 
        "Have you ever been arrested?", 
        "Have you ever had a one night stand?", 
        "Have you ever had a crush on a teacher?", 
        "Have you ever been in love with a family member?", 
        "Have you ever cheated on a significant other?", 
        "Have you ever been in love with someone you couldn't have?", 
        "Have you ever been in love with someone you couldn't have?", 
        "Have you ever been in love with a friend?", 
        "Have you ever been in a relationship with someone you didn't love?", 
        "Have you ever been in a relationship with someone you knew was bad for you?", 
        "Have you ever been in a relationship with someone you knew you couldn't trust?", 
        "Have you ever been in love with someone you knew you couldn't have?", 
        "Have you ever been in a relationship with someone you knew you shouldn't have been in?", 
        "Have you ever been in a relationship with someone you knew you couldn't be faithful to?",
        "Have you ever been in love with someone you knew you couldn't trust?",
        "Have you ever been in a relationship with someone you knew you couldn't trust?",
        "Have you ever been in love with someone you knew you couldn't rely on?",
        "Have you ever been in a relationship with someone you knew you couldn't be yourself with?",
        "Have you ever been caught singing in the shower?",
        "Have you ever been kicked out of a public place?",
        "Have you ever walked into a door or wall?",
        "Have you ever sent a text message to the wrong person?",
        "Have you ever talked to yourself in public?",
        "Have you ever worn mismatched shoes?",
        "Have you ever had a prank played on you?",
        "Have you ever told a joke that no one laughed at?",
        "Have you ever forgotten someone's name?",
        "Have you ever been caught in a lie?"
];
      const DARE = [
        "Eat a spoonful of hot sauce",
        "Perform a silly dance in front of everyone",
        "Text your crush and tell them how you feel",
        "Let someone else choose your outfit for the rest of the night",
        "Eat a raw egg",
        "Call a random number and sing a song",
        "Do 20 jumping jacks",
        "Let someone else do your makeup",
        "Eat a piece of fruit using only your feet",
        "Do the worm",
        "Take a cold shower",
        "Call a friend and tell them a secret you've never told anyone",
        "Let someone else style your hair",
        "Do a cartwheel",
        "Take a shot of vinegar",
        "Do a striptease",
        "Let someone else choose your next social media post",
        "Eat a spoonful of mustard",
        "Run around the block",
        "Do a handstand",
        "Text a random contact in your phone and tell them you love them",
        "Take a selfie with a stranger",
        "let someone else choose your next date outfit",
        "Eat a spoonful of peanut butter using only your toes",
        "Do a backflip",
        "Call a random business and ask if they're hiring",
        "Do 20 push-ups",
        "Let someone else choose your next vacation destination",
        "Do a somersault",
        "Do a forward roll",
        "Call a friend and tell them you're sorry for something you did",
        "Let someone else choose your next tattoo",
        "Call a friend and tell them you're proud of them",
        "Do a dramatic reading of a letter or email",
        "Speak backwards for the next hour",
        "Do a dramatic reading of a newspaper article",
        "Do a impressions of famous people",
        "Tell a embarrassing story from your past",
        "Speak in a foreign language for the next hour",
        "Do a dramatic reading of a children's book",
        "Do a lip-sync performance",
        "Tell a scary story",
        "Do a karaoke performance",
        "Perform a magic trick",
        "Tell a joke in front of everyone",
        "Speak in a different accent for the next hour",
        "Do a stand-up comedy routine",
        "Act out a scene from a movie",
        "Perform a dramatic monologue"
      ];
     
      truthButton.addEventListener("click", function() {
        const randomIndexText = Math.floor(Math.random() * TRUTH.length);
        generatedTextDiv.innerHTML = TRUTH[randomIndexText];
      });

      dareButton.addEventListener("click", function() {
const randomIndexText = Math.floor(Math.random() * DARE.length);
generatedTextDiv.innerHTML = DARE[randomIndexText];
});

var fake = document.getElementById("dare-button2");

fake.addEventListener("click", function () {
  alert("Nahh!!!!! it's fake");
});

var fake2 = document.getElementById("truth-button2");

fake2.addEventListener("click", function () {
  alert("NEARLY??");
});
