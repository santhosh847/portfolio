let cardTexts = document.querySelectorAll(".card-text");
let cardImgs = document.querySelectorAll(".card-img");
let cardHovers = document.querySelectorAll(".card-hover");
let oldStyle = new Array(cardHovers.length);

cardHovers.forEach((cardHover, i) => {
	oldStyle[i] = {
		row: cardHover.style.gridRow,
		column: cardHover.style.gridColumn,
	};
});
cardHovers.forEach((cardHover, i) => {
	cardHover.addEventListener("mouseover", () => {
		cardTexts[i].style.opacity = 1;
		cardImgs[i].style.filter = "blur(2dpx)";
		cardHover.style.gridRow = "2/12";
		cardHover.style.gridColumn = "2/12";
		cardHover.style.zIndex = 4;
	});
	cardHover.addEventListener("mouseleave", () => {
		cardTexts[i].style.opacity = 0;
		cardImgs[i].style.filter = "";
		cardHover.style.gridRow = oldStyle[i]["row"];
		cardHover.style.gridColumn = oldStyle[i]["column"];
		cardHover.style.zIndex = 0;
	});
});
