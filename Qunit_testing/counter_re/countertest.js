
//these values are expect to get from database
var odcv = 10;
var balv = 20;
var boxv = 30;

var all_payment=new Array("1r1c1","1r1c1","1r1c1"); //clien select 3 odc seats ths array was made by getting click events in objects in html

function counter() {
	totala = 0;
	for (var i = 0; i < all_payment.length; i++) {
		var check = all_payment[i].split("r");
		if (check[0] == 1) {
			totala += odcv;
		} else if (check[0] == 2) {
			totala += balv;
		} else if (check[0] == 3) {
			totala += boxv;
		}
	}
	//here i reture ammout itsted of inject it to DOM element
	return totala;
	//$('#ammount').html('Your total is <br> Rs ' + totala + '.00');
}

test( "equal test", function() {
	equal( counter(), 30, "total equal succeeds" );//client pick 3 odc
	empty();
	all_payment = Array("2r1c1","1r1c1","1r1c1");//client pick 1 balcony 2 odc
	equal( counter(), 40, "total equal succeeds" );
	empty();
	all_payment = Array("3r1c1","3r1c1","3r1c1");//client pick 3 box 
	equal( counter(), 190, "should fail" );//this should be fail senario
	empty();
	equal( counter(), 0, "total equal succeeds" );	
});
function empty(){//empty array
	all_payment = [];
}