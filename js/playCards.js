$(document).ready(function(){
    var cardDeck = $("#cardDeck").playingCards();
    cardDeck.spread(); // show it

    var hand = [];
    var hand1 = [];
    var discardPile = [];
    var showError = function(msg){
        $('#error').html(msg).show();
        setTimeout(function(){
            $('#error').fadeOut('slow');
        },3000);
    }
    var showHand = function(){
        var el = $('#yourHand')
        el.html('');
        for(var i=0;i<hand.length;i++){
            el.append(hand[i].getHTML());
        }
        el = $('#cpuHand')
        el.html('');
        for(var i=0;i<hand1.length;i++){
            el.append(hand1[i].getHTML());
        }
                el = $('#discardPile')
        el.html('');
        for(var i=0;i<discardPile.length;i++){
            el.append(discardPile[i].getHTML());
        }
    }
    var doShuffle = function(){
        cardDeck.shuffle();
        cardDeck.spread(); // update card table
    }
    var doDrawCard = function(){
        var c = cardDeck.draw();
        if(!c){
            showError('no more cards');
            return;
        }
        hand[hand.length] = c;
        cardDeck.spread();
        showHand();
    }
    var doDrawCard1 = function(){
        var c = cardDeck.draw();
        if(!c){
            showError('no more cards');
            return;
        }
        hand1[hand1.length] = c;
        cardDeck.spread();
        showHand();
    }
    var doOrderByRank = function(){
        cardDeck.orderByRank();
        cardDeck.spread(); // update card table
    }
    var doOrderBySuit = function(){
        cardDeck.orderBySuit();
        cardDeck.spread(); // update card table
    }
    $('#shuffler').click(doShuffle);
    $('#draw').click(doDrawCard);
    $('#draw1').click(doDrawCard1);
    $('#shuffleDraw').click(function(){
        doShuffle();
        doDrawCard();
    });
    $('#addCard').click(function(){
        if(!hand.length){
            showError('your hand is empty');
            return;
        }
        var c = hand.pop();
        discardPile[discardPile.length] = c;
            showHand();
    });
     $('#takeCard').click(function(){
        if(!hand1.length){
            showError('your hand is empty');
            return;
        }
        var c = hand1[0];
        hand1[hand1.length] = c;
            showHand1();
    });
     $('#takeCard').click(function(){
        if(!hand.length){
            showError('your hand is empty');
            return;
        }
        var c = hand[0];
        hand[hand.length] = c;
            showHand();
    });
        $('#giveCard').click(function(){
        if(!hand.length){
            showError('your hand is empty');
            return;
        }
        var c = hand.pop();
        hand1[hand1.length] = c;
            showHand();
    });
            $('#giveCard1').click(function(){
        if(!hand1.length){
            showError('your hand is empty');
            return;
        }
        var c = hand1.pop();
        hand[hand.length] = c;
            showHand();
    });
        $('#addCard1').click(function(){
        if(!hand1.length){
            showError('your hand is empty');
            return;
        }
        var c = hand1.pop();
        discardPile[discardPile.length] = c;
            showHand();
        });
    $('#orderByRank').click(doOrderByRank);
    $('#orderBySuit').click(doOrderBySuit);
});
/*
// if we weren't using jquery to handle the document ready state, we would do this:
if (window.addEventListener) {
    window.addEventListener("load",initPlayingCards,false);
} else if (window.attachEvent) {
    window.attachEvent("onload",initPlayingCards);
} else {
    window.onload = function() {initPlayingCards();}
}
function initPlayingCards() {
    cardDeck = new playingCards();
}
*/
