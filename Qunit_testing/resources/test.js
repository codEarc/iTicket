function testimage(name,exp){
	//qrcode.decode(name);
	qrcode.callback = function(data) { 
		test( "strictEqual test", function() {
		strictEqual( data,exp, "compair qr decode with input string " );
		});	
	};
	qrcode.decode(name);	
}
//each time it can only check one image

//test image 1
//testimage("chart.png","5E5IM/EH2Qb8LF+ln9dei3JZO8ztQOZOa+hGiyKMb4ljfd+ti4IRohhG+ZQ/ikzZgGgAtOBVBfyGVq3fj5lmiw==");

//test image 2
//testimage("good.png","XPHG7VXVKKom8fkeqqACBbtx4rQRM85PRYPrkc/Zi8BcD3vgDiqS5hL0EVywGBmOy9vYWEZfzRIX78iVzaSWYg==");

//test image 3
//testimage("test1.png","hello this is a qr decode");

//test image 4
//testimage("plus.png","+ +");

//test image 4
testimage("random.png","my1243edwsa+jkaerjadc78==");