var setFrame = (n) => {
		$('.carousel').carousel(n);
		$('.menu-btn')
			.each(
				(i,x) => $(x).removeClass('active').removeClass('menu-active')
			);
		$(
			$('.menu-btn')[n]
		)
			.addClass('active')
			.addClass('menu-active');
		$('.carousel').carousel('pause');
}

$('.carousel').load(() => $('.carousel').carousel('pause'));
