// https://devshop.secretgeek.net/

avgDuration = 4;
startingMoney = 100;
defaultCompletionTime = 1;
function findFirstDoer(){
    if (document.getElementsByClassName("possible").length > 0) {
        return document.getElementsByClassName("possible")[document.getElementsByClassName("possible").length - 1].id
    }
}
function clickFirstDoer(id){
    if (id != undefined) {
        clickDoer(id)
    }
}
function tryAllThings(){
    if (game.Money >= game.LeadPrice) {
        getNewLead();
    }
    setTimeout(clickFirstAvailableCard("test"), 200);
    setTimeout(clickFirstAvailableCard("dev"), 400);
    setTimeout(clickFirstAvailableCard("ba"), 600);
    setTimeout(clickFirstDoer(findFirstDoer()), 800);
}
function looper(){
    tryAllThings();
    setTimeout(function(){looper();}, 1000);
}
document.onkeypress = function (e) {
    switch (e.key) {
        case "1":
            clickFirstAvailableCard("ba");
            break;
        case "2":
            clickFirstAvailableCard("dev");
            break;
        case "3":
            break;
        case "4":
            clickFirstAvailableCard("test");
            break;
        case "5":
            clickFirstDoer(findFirstDoer());
            break;
        case "6":
            getNewLead();
            break;
        case "7":
            tryAllThings();
            break;
    }
};
go();

looper();
