# JS211_PokemonAPI

THe purpose of this assignment was to build an app using two API fetch calls and include some interactivity with the information.  I chose to build a Pokemon Battle simulator using the Pokemon API.  

Created two random Pokemon Characters by using fetch calls to the Pokemon API.  For each of the characters, I used the data fetched to use the image sprites, as well as some of the Pokemon stats information for Name, HP, Weight and Type of Attack.  The character image and stats are then appended to the DOM and UI controls are selected.  

UI controls were created and given event listeners to select each Pokemon character for the battle simulation, start a battle simulation and reset the simulation to beginning.

The UI controls where designed in which the user must select the first Pokemon before the second.  Mainly to keep the scoreboard from showing incorrect data.  Design of scoreboard could have been better, but since it wasn't a big part of assignment I worked around it.  Once a pokemon character was selected, the button was disabled to prevent user from selecting multiple Pokemon to the screen.  This ensures a 1 vs 1 match up for the battle simulation.

In addition to character creation and stats, a scoreboard was created that also uses the "name" from the fetched data to show a "VS" screen between the two characters as well as show which character wins a battle simulation.

A battle UI control was given to call the start of the battle.  The battle is determined by the "base stat" of each Pokemon character respectively.  The higher the base stat would be the winner.  The result of the match is displayed on the scoreboard.  In the event of a tie, the scoreboard shows the match as a draw.

The reset UI control removes all images and information from the screen, resets scoreboard to default message after battle, empites push data arrays, re-enables buttons.
