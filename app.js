var app = {};




app.init = function(e)
{
	var that = this;
	
	e.add('00-slide', 'onAfterLoad', function () {
		$('#menu').removeClass('xclmHidden');	
		$('#menu>li').addClass('xclmHidden');	
		//$('.00-slide').removeClass('xclmHidden');		
		

	});

	e.add('02-slide', 'onAfterLoad', function () {
		menu_slides('1');	
	});		

	e.add('101-slide', 'onAfterLoad', function () {
		menu_slides('2');	
	});		





	
};







	function menu_slides(prev){

		var menu = prev;
		if(menu == '1') {
			$('#menu>li').removeClass('xclmHidden');

			$('#menu').addClass('menu_1');
			$('#menu').removeClass('menu_2');									
			// $('.00-slide').addClass('xclmHidden');								

		} else if (menu == '2') {
			$('#menu>li').removeClass('xclmHidden');							
			// $('.00-slide').addClass('xclmHidden');
			$('#menu').addClass('menu_2');
			$('#menu').removeClass('menu_1');								
		}

	};