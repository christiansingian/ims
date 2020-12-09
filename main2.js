jQuery(document).ready(function($) {
    sep();
    gg();
});

function gg() {
    $("#mbbtn #stack-menu").click(function() {
      var id = $(this).attr("id");
      $("#stackz nav#stack-menu2").css("display", "none");
      $("#stackz #" + id + "").toggle();
    });
    $("#mbbtn #stack-menu2").click(function() {
      var id = $(this).attr("id");
      $("#stackz nav#stack-menu").css("display", "none");
      $("#stackz #" + id + "").toggle();
    });

    // let myBtns=document.querySelectorAll('.abtn');
    // myBtns.forEach(function(btn) {
    //     btn.addEventListener('click', () => {
    //       myBtns.forEach(b => b.classList.remove('active'));
    //       btn.classList.toggleClass('active');
    //     });
    // });

    $(".abtn").each(function(index) {
        $(this).on("click", function(){
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(".abtn").removeClass('active');
                $(this).addClass('active');
            }
        });
    });

}

function sep() {

     $('#stackz #stack-menu, #stackz #stack-menu2').stackMenu({
        all: false, // add links to parents
        allTitle: 'All' // parents links text
     });
	$('.magic-box').matchHeight();
	$('.attr-1').matchHeight();
	$('.attr-2').matchHeight();
	$('.attr-3').matchHeight();
	$('.attr-4').matchHeight();
	$('.attr-5').matchHeight();
	$('.attr-6').matchHeight();
	$('.attr-7').matchHeight();
	$('.attr-8').matchHeight();
	$('.attr-9').matchHeight();
}