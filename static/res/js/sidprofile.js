(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    

})(jQuery); // End of use strict
    

jHeaderText = null;
sentences = [];
i = 0;
j = 0;
timeout = 150;

function changeHeaderText()
{
	timeout = 150;

	if(i == sentences.length)
	{
		i = 0;
	}
	s = sentences[i];

	if(j == s.length)
	{
		timeout = 1000;
	}
	if(i == sentences.length-1 && j == s.length)
	{
		timeout = 2000;
	}

	if(j > s.length)
	{
		j = 1;
		i++;
		
	}
	jHeaderText.html(s.slice(0, j));
	j++;

	if(s[j] == " ")
		timeout = 0;

	setTimeout(changeHeaderText, timeout);
}


function showAdBlockMsg()
{
	if(! document.getElementById('studads-iframe') )
	{
		document.getElementById('adblk-msg').style.display='block';
	}
}

$(document).ready(function()
{
	

	jHeaderText = $(".dyn-text");
	sentences = ["PRODUCT DEVELOPER","AVID SWIMMER","TECH BLOGGER"];
	$('#mining-button-text').html('MINE YOUR COINS');
	changeHeaderText();

	setTimeout(showAdBlockMsg,700);

	
});
