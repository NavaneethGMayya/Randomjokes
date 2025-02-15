const jokes = [
    "What did one snowman say to the other snowman? It smells like carrots over here!",
    "Why did Beethoven get rid of his chickens? All they ever said was, 'Bach, Bach, Bach!'",
    "What did 20 do when it was hungry? Twenty-eight.",
    "Why is grass so dangerous? Because it's full of blades!",
    "Why are mountains so funny? They’re hill areas.",
    "Why wasn’t the cactus invited to hang out with the mushrooms? He wasn’t a fungi.",
    "Why shouldn’t you fundraise for marathons? They just take the money and run.",
    "Why did the crab cross the road? It didn’t—it used the sidewalk.",
    "Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!",
    "Why can't a nose be 12 inches long? Because then it would be a foot.",
    "Why can’t you put two half-dollars in your pocket? Because two halves make a hole, and your money will fall out!",
    "Why does a moon rock taste better than an Earth rock? It’s a little meteor.",
    "How much do rainbows weigh? Not much. They’re actually pretty light.",
    "What is the most popular fish in the ocean? The starfish.",
    "A slice of apple pie costs $2.50 in Jamaica, $3.75 in Bermuda, and $3 in the Bahamas. Those are the pie-rates of the Caribbean.",
    "Why did the football coach yell at the vending machine? He wanted his quarter back!",
    "I had a joke about paper today, but it was tearable.",
    "What kind of job can you get at a bicycle factory? A spokesperson.",
    "What does a condiment wizard perform? Saucery.",
    "What's the difference between an alligator and a crocodile? You’ll see one later and one in a while.",
    "What’s the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment.",
    "What’s the difference between ducks and dine-and-dashers? Ducks take care of their bills.",
    "What's the difference between spring rolls and summer rolls? Their seasoning.",
    "What’s the difference between Iron Man and Aluminum Man? Iron Man stops the bad guy. Aluminum Man foils their plans.",
    "What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire.",
    "What’s the difference between a $20 steak and a $55 steak? February 14th.",
    "What's the best thing about Switzerland? The flag is a big plus.",
    "I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.",
    "I found a lion in my closet the other day! When I asked what it was doing there, it said 'Narnia business.'",
    "What's a cat's favorite instrument? Purr-cussion.",
    "Why did the snail paint a giant S on his car? So when he drove by, people could say: 'Look at that S car go!'",
    "What do you call a happy cowboy? A jolly rancher.",
    "What subject do cats like best in school? Hiss-tory.",
    "Humpty Dumpty had a great fall. He said his summer was pretty good too.",
    "My boss said 'dress for the job you want, not for the job you have.' So I went in as Batman.",
    "How do you make holy water? You boil the hell out of it.",
    "Justice is a dish best served cold. Otherwise, it's just water.",
    "Why should you never throw grandpa's false teeth at a vehicle? You might denture car.",
    "Why are Christmas trees bad at knitting? They always drop their needles.",
    "What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.",
    "I can always tell when someone is lying. I can tell when they're standing too.",
    "Some people pick their nose, but I was born with mine.",
    "What's the coolest element in the periodic table? Ber-yllium.",
    "I used to be afraid of speed bumps. I'm trying to get over it.",
    "If your house is cold, just stand in the corner. It’s always 90 degrees there.",
    "I don't recommend entering a wormhole. You might get stuck in the apple.",
    "The owner of the tuxedo store kept hovering over me when I was browsing, so I asked him to leave me alone. He said, 'Fine, suit yourself.'",
    "Why did the egg have a day off? Because it was Fryday.",
    "Have you ever heard about the kidnapping at school? It's okay, he woke up.",
    "I found a book called 'How to Solve 50% of Your Problems.' So I bought 2.",
    "What do Keanu Reeves and Baby Yoda have in common? They age at the same rate.",
    "Why did the coffee taste like dirt? Because it was ground just a few minutes ago.",
    "Why can't you make a dinosaur omelet? Because they're egg-stinct.",
    "Why do quarterbacks tell obvious jokes? So they don't go over their receivers' heads.",
    "Why did the Rolling Stones stop making music? Because they got to the bottom of the hill.",
    "How many goats does it take to change a lightbulb? Just one, but you have to goat them into it.",
    "What did one cupcake say to the other? You ain't seen muffin yet.",
    "What is the best present? Broken drums! You can't beat them.",
    "Did you hear about the new squirrel diet? It's just nuts.",
    "I made a song about a tortilla once, now it's more like a wrap.",
    "Did you hear about the spatula's hot new flame? It met the grill of its dreams.",
    "Did you know corduroy pillows are in style? They're making headlines.",
    "What does a nosey pepper do? It gets jalapeño business."
];

// let ranjokes=jokes[Math.floor(1+Math.random()*jokes.length)]

// document.querySelector(".inner").innerHTML=ranjokes;

let first=document.querySelector(".inner");
first.innerHTML="First click on Generate to get Today's Joke";
first.style.color="green";

document.querySelector("button").addEventListener("click",function(){
    let newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let stylejoke=document.querySelector(".inner")
    stylejoke.innerHTML = newJoke;
    stylejoke.style.color="#e44d26"

})