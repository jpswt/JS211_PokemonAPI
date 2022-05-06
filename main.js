// fetch data pushed to these arrays
let pokemon = [];
let pokemon2 = [];

//global scoreboard elements to place text for scoreboard
let scoreboard1 = document.getElementById('scoreboard-one');
let scoreboard2 = document.getElementById('scoreboard-two');
let scoreboard3 = document.getElementById('scoreboard-three');

// create catchPokemonOne function to make a fetch request to the URL using a random index for a random character data.
const catchPokemonOne = () => {
	// create a variable that will generate a random number, which is used with
	// the API to generate a random Pokemon character
	let randomIndex = Math.round(Math.random() * 200);
	fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
		.then((res) => res.json())
		.then((data) => {
			pokemon.push(data);
			console.log(data);

			// Use fetch data for Pokemon One Image
			//
			// Create a variable that creates the img element in the DOM
			let characterImg = document.createElement('img');
			// Assigning the source of the image via the api data sprite
			characterImg.src = `${pokemon[0].sprites.other.dream_world.front_default}`;
			// Applying style attribute for the image size
			characterImg.style.width = '250px';
			characterImg.style.height = '250px';
			// Create a variable for the div element the character image will be placed
			let characterOne = document.getElementById('character-one-img');
			// Appending the image into the div element with id character-one-img
			characterOne.appendChild(characterImg);

			//Use fetch data for Pokemon One Stats
			//
			// Create a variable for the ul element the character image will be placed.
			// Create a textNode for stats information (name, HP, weight and attack)
			// about the Pokemon character
			let characterOneStats = document.getElementById('pokemon-one');
			const name = document.createTextNode(
				`Name: ${pokemon[0].species.name
					.charAt(0)
					.toUpperCase()}${pokemon[0].species.name.slice(1)}`
			);
			const hp = document.createTextNode(
				`HP: ${pokemon[0].stats[1].base_stat}`
			);
			const weight = document.createTextNode(`Weight: ${pokemon[0].weight}`);
			const attack = document.createTextNode(
				`Attack: ${pokemon[0].moves[0].move.name
					.charAt(0)
					.toUpperCase()}${pokemon[0].moves[0].move.name.slice(1)}`
			);

			// Create list elements for each stat to be placed inside of the characterOneStats ul
			// each stat is then appended to each li and the the li's are appended to the
			// characterOneStats ul. This provides information for each Pokemon character when called.
			let li1 = document.createElement('li');
			let li2 = document.createElement('li');
			let li3 = document.createElement('li');
			let li4 = document.createElement('li');
			li1.appendChild(name);
			li2.appendChild(hp);
			li3.appendChild(weight);
			li4.appendChild(attack);
			characterOneStats.append(li1, li2, li3, li4);

			// Use fetch data for the name on scoreboard for start of battle sequence for Pokemon One
			// create textNodes for the text information on the scoreboard.
			// Note: Better way to do this and separate from character info,
			// but didn't stress about it as it wasn't part of assignment

			scoreboard1.textContent = `${pokemon[0].species.name.toUpperCase()}`;
			scoreboard2.textContent = 'VS';
			scoreboard3.textContent = '?????';
		});
};
// create catchPokemonTwo function to make a fetch request to the URL using a random index for a random character data.
const catchPokemonTwo = () => {
	let index = Math.round(Math.random() * 200);
	fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
		.then((res) => res.json())
		.then((data) => {
			pokemon2.push(data);
			console.log(data);

			//Use fetch data for Pokemon One Image
			//
			//create a variable that creates the img element in the DOM
			let characterImg = document.createElement('img');
			//Assigning the source of the image via the api data sprite
			characterImg.src = `${pokemon2[0].sprites.other.dream_world.front_default}`;
			//Applying style attribute for the image size
			characterImg.style.width = '250px';
			characterImg.style.height = '250px';
			// Create a variable for the div element the character image will be placed
			let characterTwo = document.getElementById('character-two-img');
			// Appending the image into the div element with id character-one-img
			characterTwo.appendChild(characterImg);

			//Use fetch data for Pokemon One Stats
			//
			// Create a variable for the ul element the character image will be placed.
			// Create a textNode for stats information (name, HP, weight and attack)
			// about the Pokemon character
			let characterTwoStats = document.getElementById('pokemon-two');
			const name = document.createTextNode(
				`Name: ${pokemon2[0].species.name
					.charAt(0)
					.toUpperCase()}${pokemon2[0].species.name.slice(1)}`
			);
			const hp = document.createTextNode(
				`HP: ${pokemon2[0].stats[1].base_stat}`
			);
			const weight = document.createTextNode(`Weight: ${pokemon2[0].weight}`);
			const attack = document.createTextNode(
				`Attack: ${pokemon2[0].moves[0].move.name
					.charAt(0)
					.toUpperCase()}${pokemon2[0].moves[0].move.name.slice(1)}`
			);

			// Create list elements for each stat to be placed inside of the characterOneStats ul
			// each stat is then appended to each li and the the li's are appended to the
			// characterOneStats ul. This provides information for each Pokemon character when called.
			let li1 = document.createElement('li');
			let li2 = document.createElement('li');
			let li3 = document.createElement('li');
			let li4 = document.createElement('li');
			li1.appendChild(name);
			li2.appendChild(hp);
			li3.appendChild(weight);
			li4.appendChild(attack);
			characterTwoStats.append(li1, li2, li3, li4);

			// Use fetch data for the name on scoreboard for start of battle sequence for Pokemon One
			// create textNodes for the text information on the scoreboard.
			scoreboard2.textContent = 'VS';
			scoreboard3.textContent = `${pokemon2[0].species.name.toUpperCase()}`;
		});
};

//Declaring a battle function that determines the winner between two random Pokemon
// characters by using their base stats value.
const battle = () => {
	// Declaring variables for the pokemon stats and image
	let pokemon1Stats = pokemon[0].stats[1].base_stat;
	let pokemon2Stats = pokemon2[0].stats[1].base_stat;
	let p1Img = document.getElementById('character-one-img');
	let p2Img = document.getElementById('character-two-img');
	// If the base stat value for Pokemon 1 is equal Pokemon 2 base stat value,
	// then the match is a draw!
	// Message that the match is a draw is displayed on the scoreboard.
	if (pokemon1Stats === pokemon2Stats) {
		scoreboard1.textContent = 'MATCH';
		scoreboard2.textContent = 'IS A';
		scoreboard3.textContent = 'DRAW!!';
		// If the base stat value for Pokemon 1 is greater than the Pokemon 2 base stat,
		// then Pokemon 1 wins!
		// Message that Pokemon 1 wins is displayed on the scoreboard.
		// The image for Pokemon 2 is grayed out to show that it is the loser and to
		// highlight that Pokemon 1 wins.
	} else if (pokemon1Stats > pokemon2Stats) {
		scoreboard1.textContent = 'WINNER';
		scoreboard2.textContent = 'IS';
		scoreboard3.textContent = `${pokemon[0].species.name.toUpperCase()}!!`;
		p2Img.style.filter = 'grayscale(100%)';
		// If the base stat value for Pokemon 2 is greater than the Pokemon 1 base stat,
		// then Pokemon 2 wins!
		// Message that Pokemon 2 wins is displayed on the scoreboard.
		// The image for Pokemon 1 is grayed out to show that it is the loser and to
		// highlight that Pokemon 2 wins.
	} else {
		scoreboard1.textContent = 'WINNER';
		scoreboard2.textContent = 'IS';
		scoreboard3.textContent = `${pokemon2[0].species.name.toUpperCase()}!!`;
		p1Img.style.filter = 'grayscale(100%)';
	}
};
// Declare a reset function that loops through the parent element and removes all child
// nodes.  This is used with the reset button and when called will to clear the
// screen of each pokemon image and stats.
const reset = (parent) => {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
};

//Event Listener Section

// Declaring variables for the Pokemon1 & 2, Battle and Reset Buttons
const battleButton = document.getElementById('battle');
const resetButton = document.getElementById('reset');
let pokemonOneButton = document.getElementById('choose-pokemon1');
let pokemonTwoButton = document.getElementById('choose-pokemon2');

// Remove pointer events from Pokemon Two so that Pokemon One must be selected first.
// This is scoreboard renders correctly.
pokemonTwoButton.style.pointerEvents = 'none';

// Adding an event listener to the Pokemon One button that when clicked
// call the catchPokemonOne function that displays the Pokemon Image and Stats
// Once button is clicked, it is disabled to prevent multiple Pokemon from being called to
// page simultaneously.  Allows for a 1v1 battle between Pokemon One and Pokemon Two.
// It also enables the pointer events on pokemonTwoButton so it can now be selected.  Work
// around for scoreboard data.
pokemonOneButton.addEventListener('click', (e) => {
	catchPokemonOne();
	pokemonOneButton.setAttribute('disabled', 'true');
	pokemonTwoButton.style.pointerEvents = 'auto';
});
// Adding an event listener to the Pokemon Two button that when clicked
// call the catchPokemonTwo function that displays the Pokemon Image and Stats
// Once button is clicked, it is disabled to prevent multiple Pokemon from being called to
// page simultaneously.  Allows for a 1v1 battle between Pokemon One and Pokemon Two
pokemonTwoButton.addEventListener('click', (e) => {
	catchPokemonTwo();
	pokemonTwoButton.setAttribute('disabled', 'true');
});
// Adding an event listener to the battle button that when clicked
// will call battle function to determine which Pokemon won the battle
// simulation
battleButton.addEventListener('click', (e) => {
	battle();
});

// Adding an event listener to the reset button that when clicked
// will reset multiple elements.  It clears away the Pokemon One and Two
// image and stats.  Resets scoreboard to default message.  Re-enables the Pokemon One
// and Two buttons, removes click feature from Pokemon Two button until Pokemon One
// button is clicked . Removes grayscale from losing Pokemon character back to
// full color and empties arrays pokemon and pokemon2

resetButton.addEventListener('click', (e) => {
	// Declaring variables for the pokemon image and stats to used in reset function
	let p1Img = document.getElementById('character-one-img');
	let p2Img = document.getElementById('character-two-img');
	let p1Text = document.getElementById('pokemon-one');
	let p2Text = document.getElementById('pokemon-two');

	// Calling reset function that removes the Pokemon image and stats for
	// both characters from the DOM
	reset(p1Img);
	reset(p2Img);
	reset(p1Text);
	reset(p2Text);

	// Default scoreboard message
	scoreboard1.textContent = 'Welcome';
	scoreboard2.textContent = 'to the';
	scoreboard3.textContent = 'PokeDome';

	//Enable buttons to be clickable
	pokemonOneButton.removeAttribute('disabled');
	pokemonTwoButton.removeAttribute('disabled');

	// Remove pointer events from Pokemon Two so that Pokemon One must be selected first.
	// This is so scoreboard renders correctly.
	pokemonTwoButton.style.pointerEvents = 'none';

	//remove grayscale from image after loss
	p1Img.style.filter = 'grayscale(0%)';
	p2Img.style.filter = 'grayscale(0%)';

	// reset data from arrays
	pokemon = [];
	pokemon2 = [];
});
