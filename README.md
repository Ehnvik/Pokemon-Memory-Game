# **Pokemon Memory Game**
Pokemon Memory Game is game for children and adults. The goal of the game is to match the cards that contains the same pokemon. The game is finished when all the cards with same pokemon are matched. The game let the user train there memory capability. The player can try match the cards as many times as they want, without failing the challenge. The game has no time limit either. The player can take all the times needed to complete the challenge. 

![pokemon-memory-game-amiresponsive](https://user-images.githubusercontent.com/87748379/134821578-6bfddaf6-5737-4d6b-9c70-59d5fbf093b3.JPG)

## **Features**

### **Page Title**

* The page title (h1) is placed on top of the game board. The title refers to the Pokemon slogan "Gotta Catch 'Em All". It also give the player instructions of what the game is about.
* The most common Pokemon colors are blue and yellow. That is why the title is styled with a yellow color.

![page-title](https://user-images.githubusercontent.com/87748379/134821932-03d93924-b143-43c3-af31-b452fe6be838.JPG)

### **Start of the game**

* Before the game starts all 12 cards get placed in random positions on the board. 
* All of the 12 cards have there back faced against the player. So the player doesn't know where the cards are positioned. 
* The card gets bigger when the player is hovering the mouse over it. This helps the player to know what card they are about to click on. 

![before-game](https://user-images.githubusercontent.com/87748379/134822352-caca1b7c-2a79-4305-baee-8c603806a919.JPG)

### **Playing the game**

* The cards flips over when the player clicks on it. The player can then see the Pokemon behind the clicked card.
* The first clicked card stays revealed until the player has clicked on the second card. If the player find the matching Pokemon card, then both of the cards stays revealed. If the player choose the wrong card, then both cards flips back. 

![playing-the-game](https://user-images.githubusercontent.com/87748379/134823330-f6a1b3f0-1da6-4d60-b9d6-3de2298ebc49.JPG)

### **Completing the game**

* The game is complete when the user has matched all the Pokemon cards.
* The player knows the challenge is completed, when all Pokemons are visible.

![completing-the-game](https://user-images.githubusercontent.com/87748379/134823639-97aea792-0844-461f-a8ed-86e1e7e57884.JPG)

### **Features for the future**

* In the future when there is more time. I would like to add a time limit to the game.

## **Testing**

* I have tested playing this game on Chrome, Firefox and Safari.
* I confirm that the fonts and colors are easy to read for the user.
* I confirm that the game result are always correct.
* I confirm that the game looks good and works on all standards size screens using devtools toggle device toolbar.
* I have run the website through lighthouse in devtool. The overall result is good. The game gets a lower score in performance because of all the images used in the game.

![lighthouse](https://user-images.githubusercontent.com/87748379/134982405-bd277eac-3767-49a6-926c-9494734efa7b.JPG)

## **Bugs**

### **Solved Bugs**

* When I tested the game in JSHint I got 11 warnings that I need to use 'esversion: 6' or Mozilla JS extensions.
* I solved this issue by adding the following comment in my script.js file: /*jshint esversion: 6 */.

![jshint](https://user-images.githubusercontent.com/87748379/134986874-cb50bb3b-1196-4374-9f1d-54c0da92220f.JPG)

## **Validator Testing**

* I have tested my project for bugs at https://validator.w3.org/, https://jigsaw.w3.org/css-validator/ and https://jshint.com/.
* No errors were found when testing the html file in the W3C validator.

![htmlw3c](https://user-images.githubusercontent.com/87748379/134987916-a0b8eeb6-e379-4b27-991a-5ed968a112d1.JPG)

* No errors were found when testing the css file in the W3C CSS validator.

![cssw3c](https://user-images.githubusercontent.com/87748379/134987951-65b3a96d-b510-438d-b74b-98c3c29b59bb.JPG)

* Two unsolved warnings found when testing the script file in JSHint.

![jshint](https://user-images.githubusercontent.com/87748379/134988247-ce912374-06da-4da5-b952-3867ae71c747.JPG)

### **Unfixed Bugs**
* Two unsolved warnings in script. No unfixed bugs that affects the game.

