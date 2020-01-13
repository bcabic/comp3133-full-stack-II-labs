const capitalize = (sentence) => {
    var splitSentence = sentence.split(' ');
    //console.log(splitSentence);

    //console.log(splitSentence[0].charAt(0).toUpperCase());
    
    for (var x = 0; x < splitSentence.length; x++){
        splitSentence[x] = splitSentence[x].charAt(0).toUpperCase() + splitSentence[x].substring(1);
    }
    console.log(splitSentence.join(' '));
}

capitalize('the quick brown fox');

const largestNumber = (a,b,c) => {
    let greatest = a;
    if (b > greatest) greatest = b;
    else if (c > greatest) greatest = c;

    console.log(greatest);
}

largestNumber(1,0,1);
largestNumber(0,-10,-20);
largestNumber(1000, 510, 440);

const right = (word) => {
    if (word.length < 3) console.log(word);
    else{
        let end = word.substring(word.length - 3);
        word = end + word.substring(0, word.length - 3);
        console.log(word);
    }
}

right("Python");
right("JavaScript");
right("Hi")