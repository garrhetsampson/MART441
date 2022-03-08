var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(title)
    {
        this.title = title;
    }
    toString()
    {
        return "Title: " + this.title;    
    }
    get theTitle()
    {
        return this.title;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("Raise A Fist.", <img src="images/socialjustice1.jpg">, A fist raised in solidarity for George Floyd IG: @clay.banks);
    var myViewFinder1 = new ViewFinder("Hold up a sign.", image: 'images/socialjustice2.jpg'), peaceful protest JAX, FL;
	var myViewFinder2 = new ViewFinder("Block Traffic", image: 'images/socialjustice3.jpg') A bunch of people marching in the street.;
    var myViewFinder3 = new ViewFinder("Pose with a fist.", image: 'images/socialjustice4.jpg'), Man posed with fist raised.;
	var myViewFinder4 = new ViewFinder("March in the afternoon.", image: 'images/socialjustice5.jpg'), Group of young people posed and ready to march.;
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
	myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
	myViewFinderArray.push(myViewFinder4);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}