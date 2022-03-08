/// This is the title section.

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

/// This is the image section.

var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(image)
    {
        this.image = image;
    }
    toString()
    {
        return "Image: " + this.image;    
    }
    get theimage()
    {
        return this.image;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder(<img src="images/socialjustice1.jpg">);
    var myViewFinder1 = new ViewFinder(<img src="images/socialjustice2.jpg">);
	var myViewFinder2 = new ViewFinder(<img src="images/socialjustice3.jpg">);
    var myViewFinder3 = new ViewFinder(<img src="images/socialjustice4.jpg">);
	var myViewFinder4 = new ViewFinder(<img src="images/socialjustice5.jpg">);
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
	myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
	myViewFinderArray.push(myViewFinder4);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("image").innerHTML = myViewFinderArray[randomNumber].toString();

}

/// This is the description section.

var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(description)
    {
        this.description = description;
    }
    toString()
    {
        return "Description: " + this.description;    
    }
    get thedescription()
    {
        return this.description;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("A fist raised in solidarity for George Floyd");
    var myViewFinder1 = new ViewFinder("peaceful protest JAX, FL";
	var myViewFinder2 = new ViewFinder("A bunch of people marching in the street."";
    var myViewFinder3 = new ViewFinder("Posed with fist raised."";
	var myViewFinder4 = new ViewFinder("Group of young people posed and ready to march.;
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
	myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
	myViewFinderArray.push(myViewFinder4);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString();

}

/// This is the author section.

var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(author)
    {
        this.author = author;
    }
    toString()
    {
        return "Author: " + this.author;    
    }
    get theauthor()
    {
        return this.author;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("IG: @clay.banks");
    var myViewFinder1 = new ViewFinder("Clifton Peaches");
	var myViewFinder2 = new ViewFinder("John Hogeson");
    var myViewFinder3 = new ViewFinder("Sarah Marshell");
	var myViewFinder4 = new ViewFinder("Wayne Dagers.");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
	myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
	myViewFinderArray.push(myViewFinder4);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].toString();

}

/// This is the year section.

var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(year)
    {
        this.author = year;
    }
    toString()
    {
        return "Year: " + this.year;    
    }
    get theyear()
    {
        return this.year;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("1980");
    var myViewFinder1 = new ViewFinder("1970");
	var myViewFinder2 = new ViewFinder("1960");
    var myViewFinder3 = new ViewFinder("1950");
	var myViewFinder4 = new ViewFinder("1940");
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