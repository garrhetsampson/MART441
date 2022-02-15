function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Mushu emerges from his slumber with the confidence of a hollywood actor. He is ready to prove himself. What should Mushu do?";
        document.getElementById("choice1").innerHTML = "Sneak off";
        document.getElementById("choice2").innerHTML = "Ring the Gong";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Mushu starts to back out, but then something in the back of Mushu's mind says 'Dishonor!'";
        document.getElementById("choice1").innerHTML = "Go ahead and be brave";
        document.getElementById("choice2").innerHTML = "Scan the situation";
    } else if (choice == 1 && answer1 == "Sneak off") {
        document.getElementById("story").innerHTML = "I just woke up! I am the great Stone Dragon—good morning! I will go forth and fetch Mulan! Did I mention that I was the great Stone Dragon?";
        document.getElementById("choice1").innerHTML = "Chill out.";
        document.getElementById("choice2").innerHTML = "Mention that he is the great stone dragon.";
    } else if (choice == 2 && answer2 == "Ring the Gong") {
        document.getElementById("story").innerHTML = "I'm travel-sized for your convenience! Mushu starts to walk over to our hero and then decides to go to the water instead.  Now what?'";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "What? What do you mean you're not lucky? You lied to me? And what are you? A sheep? Mushu decides to go in even with hesitation to make new friends. Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Mushu decides to just look around for the moment. What should Mushu do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Evaluate all s") {
        document.getElementById("story").innerHTML = "Mushu doesn't know what to do. You've brought dishonor on your whole family." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Mention that he is the great stone dragon.") {
        document.getElementById("story").innerHTML = "Mushu has lied. He is not infact the great stone dragon." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Chill out.") {
        document.getElementById("story").innerHTML = "Mushu decided to go swimming... to poor results." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Mushu decides it's time to drink... As all dragons do." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Mushu has succeeded in saving China. Congrats." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Mushu throws a temper tantrum." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Mushu decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Mushu decides to get just a little closer, so he jumps on a rocket for safe travel." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Mushu' has entered the battlefield for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Mushu?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Mushu thanks you!";

    }


}