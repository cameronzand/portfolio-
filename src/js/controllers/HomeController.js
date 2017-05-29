function HomeController () {

	
		console.log('Home Controller Is Live');



    
 
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
.tiPause(1500)
.tiDelete(10)
.tiType('clever.')
.tiPause(1500)
.tiDelete(7)
.tiType('pretty.')
.tiPause(1500)
.tiDelete(7)
.tiType('delightful.')
.tiPause(1500)
.tiDelete(11)
.tiType('better.')
.tiPause(1500)
.tiDelete(7)
.tiType('sincere.')
.tiPause(1500)
.tiDelete(8)
.tiType('witty.')
.tiPause(1500)
.tiDelete(6)
.tiType('incredible.')
.tiPause(1500)
.tiDelete(11)
.tiType('awesome.')
.tiPause(1500)
.tiDelete(8)
.tiType('excellent.')
// .tiBreak() .tiPause(750)
// .tiType(' but I don\'t really know what to say')
// .tiSettings({speed: 700})
// .tiType('...')
// .tiPause(750)
// .tiSettings({speed: 50})
// .tiDelete()
// .tiType('IS THAT SO <strong>WRONG??</strong>');



	// $scope.scrollTo = function (id){
	// 	$location.hash(aboutme);
	// 	$anchorScroll();
	// };
};




// HomeController.$inject = ['$scope', '$location', '$anchorScroll'];
export { HomeController };