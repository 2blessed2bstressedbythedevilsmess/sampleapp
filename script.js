function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Angular JS',
			price: 500,
			active:true
		},{
			name: 'JavaScript',
			price: 300,
			active:false
		},{
			name: 'HTML5 & CSS',
			price: 250,
			active:false
		},{
			name: 'React JS',
			price: 220,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
