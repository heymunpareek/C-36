class Form {
    constructor() {

    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game")
        title.position(500,0);
        
        var inputBox = createInput("")
        inputBox.position(500, 150);

        var nameDisplay = createElement('h4');
        nameDisplay.html("Name: ")
        nameDisplay.position(450, 130);


        var goButton = createButton("GO!")
        goButton.position(550,250);

        var greeting = createElement('h3');

        goButton.mousePressed(function () {
            inputBox.hide();
            goButton.hide();
            var name = inputBox.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Get Ready for the Race" + name);
            greeting.position(300,150);

        })
    }
}