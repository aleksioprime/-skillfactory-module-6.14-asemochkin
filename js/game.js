const numDivs = 36;
const maxHits = 10;

let hits = 0;
let penalty = 0;
let firstHitTime = 0;

function round() {
    $(".target").removeClass("target");
    let divSelector = randomDivId();
    $(divSelector).addClass("target");
    $(divSelector).text(hits + 1)
    if (hits === maxHits) {
        endGame();
    }
}

function endGame() {
    $(".grid-wrapper").hide();
    let totalPlayedMillis = getTimestamp() - firstHitTime;
    let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
    $(".message").show();
    $("#total-time-played").text(totalPlayedSeconds);
    $("#total-hits-played").text(hits);
    $("#total-penalty-played").text(penalty);
    console.log(totalPlayedSeconds);
    hits = 0;
    $(".target").text("");
    $(".target").removeClass("target");
    $("#button-start").hide();
}

function handleClick(event) {
    $(".target").text("")
    if ($(event.target).hasClass("target")) {
        hits += 1;
    } else {
        penalty += 1;
        $(".target").addClass("miss");
    }
    round();
}

function init() {
    $("#button-start").click(function () {
        hits = 0;
        firstHitTime = getTimestamp();
        round();
    });
    $(".game-field").click(handleClick);
    $("#button-reload").click(function () {
        location.reload();
    });
    console.log("Скрипт прогрузился")
}

$(document).ready(init);