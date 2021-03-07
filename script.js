var image = document.createElement("picture")
var area = document.getElementById("result")
var text = document.getElementById("logic")
var btn = document.getElementById("submit")

function evaluation(){
    const message = document.getElementById("message").value.toLowerCase()
}

    function set(){
        x = Number.getElementById("message")
        if(message.length>20){
        console.log (`The words number in the message is not enought`)
        }
    }

var phrases = {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey"
        picture: "https://i.pinimg.com/originals/dd/b3/07/ddb3072916931e04daf7a454a8d4b31f.jpg"
            block

        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore"
        picture: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
            block

        phrase: "You are a wizard, Harry (c) Hagrid"
        picture: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }

    fucntion check(){
    var theMostFrequentWord = mosted(messageWords);
    for (i = 0; i <= 2; i++) {
        if (Number.getElementById("logic")[i] === true) {
           console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
        }
        else {
            x = Number(result.value) + Number(logic.value);
            alert("number of words in message aren't enough!");} }
        }
    }
}

    const count = () => {
        document.getElementById("result").innerHTML = (`Your result is ${}"`);
    };