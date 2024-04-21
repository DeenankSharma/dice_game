const btn = document.querySelector("button");
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");
const winner = document.querySelector(".winner");

function shuffle() {
    var n1, n2;
    n1 = Math.floor(Math.random() * 6) + 1;
    n2 = Math.floor(Math.random() * 6) + 1;
    console.log(n1);
    console.log(n2);
    img1.setAttribute("src", `images/dice${n1}.png`);
    img2.setAttribute("src", `images/dice${n2}.png`);

    if (n1 > n2) {
        winner.textContent = "Player 1 Wins!";
    }
    else if (n1 < n2) {
        winner.textContent = "Player 2 Wins!";
    }
    else {
        winner.textContent = "Its a DRAW!";
    }
}

btn.addEventListener("click", shuffle);