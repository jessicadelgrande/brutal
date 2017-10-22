"use strict";

function autoType(elementClass, typingSpeed) {
	var thhis = $(elementClass);
	thhis.css({
		"position": "relative",
		"display": "inline-block"
	});
	// adding a dom element with a class of cursor
	thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
	thhis = thhis.find(".detailsText");
	var text = thhis.text().trim().split('');
	var charNum = text.length;
	var newString = "";
	thhis.text("|");
	setTimeout(function () {
		thhis.css("opacity", 1);
		thhis.prev().removeAttr("style");
		thhis.text("");
		for (var i = 0; i < charNum; i++) {
			(function (i, char) {
				setTimeout(function () {
					newString += char;
					thhis.text(newString);
				}, i * typingSpeed);
			})(i + 1, text[i]);
		}
	}, 1500);
}

// when user hovers over a specific detailsIcon, 
// corresponding details div will begin autoType
// $(".detailsIcon-twitter").hover(function() {
// 	$(this).css(autoType(".details-twitter", 200),
// 		)
// });

$(document).ready(function () {
	// calling the autoType function
	// number is the speed that each letter is typed 
	// autoType(".details", 200);
});

// need to call autoType on hover of individual icons