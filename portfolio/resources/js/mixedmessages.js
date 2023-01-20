//the project will give the user tips for a movie, a song and a book

// First we'll create three arrays with data

//Array 1 : movietitles, try to get at least thirty
const arrMovies = ['300','A band called Death','A Guide To Recognizing your Saints','Adaptation','Amores Perros','Annie Hall','Apocalypse Now','Arrival','Avatar','Barfi','Black Cat White Cat','Captain Fantastic','Choke','Clerks','Dead Snow','Easy Rider','Enter the Void','Finding Neverland','Ghostbusters','Goodbye Christopher Robin','Gummo','Hard Candy','Horton Hears a Who','Inception','Inherent Vice','Interview with a vampire','La Haine','Lars and the real girl','Le Scaphandre et le Papillon','Magnolia','Moon','Once Upon a Time In Hollywood','Pig','Psycho','Requiem for a dream','Reservoir Dogs','Shortbus','Song of the Sea','The Beach','The Breadwinner','Waltz with Bashir','Waterworld'];

//Array 2 : songtitles, get at least forty
const arrSongs = ['Automatic Fantastic by Brant Bjork','Without a Trace by The Black Angels','High Strangeness by Mothership','Badd by Dark Sky','Carolina Drama by The Raconteurs','Muscle Museum by Muse','505 by Arctic Monkeys','The Hardest Button to Button by The White Stripes','A Martyr for my love for you by The White Stripes','The Only by Static-X','Diamond by All Them Witches','Slip Away by Mad Season','Lobby by The Kilimanjaro Darkjazz Ensemble','We Might Be Dead By Tomorrow by Soko','Hurt by Johnny Cash','Glory Box by Portishead','Karma Police by Radiohead','The Aeroplane Flies High by The Smashing Pumpkins','Five Spot After Dark by Curtis Fuller','Dimples by John Lee Hooker','On The Road Again by Canned Heat','See You Next Fall by All Them Witches'];

//Array 3 : booktitles, get at least twenty
const arrBooks = ['To Kill a Mockingbird','The Year of the Flood','Brooklyn Follies','Fahrenheit 451','Steppenwolf','Das leiden der Jungen Werther','Snow','Wilding','The Wind-up Bird Chronicle','The man from St-Petersburg','Inferno']

//function to get a random number
//parameter will be a number (the length of one of the three arrays)
//return will be a random number
function randomNumberFromNumber(num) {
    //console.log('random number '+num);
    return Math.ceil((Math.random())*num);
}

//function to get a random entry from an array
//parameter will be an array
//this function will use the function above
//return will be a random entry
function randomEntry(arr) {
    //console.log('random entry from '+arr[0]);
    return arr[randomNumberFromNumber(arr.length-1)];
}

//function to make up the full message
//this will go through three steps, adding to the message that will be outputted to the user
//Put the three messages all in this one function, or make three extra smaller functions.
//no parameters
//return will be the mixed message
function mixedMessage() {
    let movieTitle = randomEntry(arrMovies);
    let songTitle = randomEntry(arrSongs);
    let bookTitle = randomEntry(arrBooks);

    return `


    I have peered into your soul and these are my suggestions :

    You should watch ${movieTitle} before the week is over.
    
    The song your soul is craving for now is ${songTitle}.
    
    To make a profound change in your life, you should read ${bookTitle}.

    
    `
}

console.log(mixedMessage());