function HomeController () {

	
		console.log('Home Controller Is Live');

	$(".nav-disappear").autoHidingNavbar({

	});
    
 
    // $("#typing").ghosttyper({
    // messages: ['anything', 'you want', 'it to','type']
    // });


$('#example4').typeIt({
     speed: 50,
     autoStart: false
})
.tiType('Togehte')
.tiPause(1000)
.tiDelete(3)
.tiType('ther, ')
.tiPause(1000)
.tiType('we can build something beautiful.')
.tiPause(1700)
.tiDelete(10)
.tiType('clever.')
.tiPause(1700)
.tiDelete(7)
.tiType('pretty.')
.tiPause(1700)
.tiDelete(7)
.tiType('delightful.')
.tiPause(1700)
.tiDelete(11)
.tiType('better.')
.tiPause(1700)
.tiDelete(7)
.tiType('sincere.')
.tiPause(1700)
.tiDelete(8)
.tiType('witty.')
.tiPause(1700)
.tiDelete(6)
.tiType('incredible.')
.tiPause(1700)
.tiDelete(11)
.tiType('awesome.')
.tiPause(1700)
.tiDelete(8)
.tiType('stellar.')
.tiPause(1700)
.tiDelete(8)
.tiType('charming.q')
.tiPause(1000)
.tiDelete(3)
.tiType('g.')
.tiPause(1700)
.tiDelete(9)
.tiType('cool.')
.tiPause(1700)
.tiDelete(5)
.tiType('excellent.')




	// $scope.scrollTo = function (id){
	// 	$location.hash(aboutme);
	// 	$anchorScroll();
	// };
};




// HomeController.$inject = ['$scope', '$location', '$anchorScroll'];
export { HomeController };