function hope(){
	var html;
	html = "<div class='alerts'><img src='img/close.png' class='close' /><div class='wait'>敬请期待！</div></div>"
	$('body').append(html);
	$('.alert').show();
    $('.close').on('click',function(){
        $('.alerts').remove();
    })
}