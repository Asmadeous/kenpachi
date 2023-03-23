const speed = Number(window.prompt("Type a number", ""))
    if (speed <= 70){
        return "Ok"
    }else {
        points = (speed - 70) / 5;
        if (points > 12){
            return "License supended";
        }else {
            return`Points:${points}`
        }
    }