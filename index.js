let name;
let score;
let time;
let day;
let ranking = [];
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const table = document.getElementById("table");
const ui = document.getElementById("ui");

function player(name, score, time, day) {
    this.name = name;
    this.time = time;
    this.day = day;
    if (score < 10) {
        this.score = "      " + score;
    } else if (score < 100) {
        this.score = "     " + score;
    } else if (score < 1000) {
        this.score = "    " + score;
    } else if (score < 10000) {
        this.score = "   " + score;
    } else if (score < 100000) {
        this.score = "  " + score;
    } else if(score < 1000000){
        this.score = " " + score;
    }else {
        this.score = score;
    }
}

function clearForm() {
    nameInput.value = "";
    scoreInput.value = "";
}

function setTable() {
    const div_ranking = document.querySelectorAll("div#ranking");

    if (div_ranking != null) {
        div_ranking.forEach((p) => p.remove());
    }
    ranking.forEach((p) => {
        table.insertAdjacentHTML(
            "beforeend",
            '<div id="ranking" class="no' +
                (ranking.indexOf(p) + 1) +
                '"><a class="rank">' +
                "No." +
                (ranking.indexOf(p) + 1) +
                '</a><div class="wrapper"><a class="name">' +
                p.name +
                '<span style="font-size:20px">さん　　</span></a><a class="score">' +
                p.score +
                '<span style="font-size:20px">点　　</span></a><a class="day">' +
                p.day +
                " " +
                p.time +
                "</a></div></div>",
        );
    });
}

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = " " + hours;
    }
    return hours + ":" + minutes;
}

function getDay() {
    switch (new Date().getDate()) {
        case 19:
            return "1日目";
        case 20:
            return "2日目";
        default:
            return "0日目";
    }
}

function addPlayer() {
    ranking.push(new player(nameInput.value, scoreInput.value, getTime(), getDay()));
    clearForm();
    ranking.sort((a, b) => b.score - a.score);
    setTable();
    ui.close();
}

function load() {
    clearForm();
    setTable();
}

function deletes(n) {
    ranking.splice(n, 1);
}
