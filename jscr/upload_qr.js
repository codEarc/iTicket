$('#udate').datepicker({dateFormat:'yy-mm-dd',minDate:'1',maxDate:'+6m'});
(function () {
	var input = document.getElementById("images"), 
		formdata = false;
		
	if (window.FormData) {
  		formdata = new FormData();
  		document.getElementById("btn").style.display = "none";
	}
	
 	input.addEventListener("change", function (evt) {
 		document.getElementById("reupload").innerHTML = "Uploading . . .";
 		var i = 0, len = this.files.length, img, reader, file;
	
		for ( ; i < len; i++ ) {
			file = this.files[i];
	
			if (!!file.type.match(/image.*/)) {
				if ( window.FileReader ) {
					reader = new FileReader();
					reader.onloadend = function (e) { 
						showUploadedItem(e.target.result, file.fileName);
					};
					reader.readAsDataURL(file);
				}
				if (formdata) {
					formdata.append("images[]", file);
				}
			}	
		}
	
		if (formdata) {
			$.ajax({
				url: image_up,
				type: "POST",
				data: formdata,
				processData: false,
				contentType: false,
				success: function (res) {
					document.getElementById("reupload").innerHTML = res; 
				}
			});
		}
	}, false);	
}());

function ddd(){
	var t = $('#images').val();
	//$("#new").show();
	//alert(locations);
	qrcode.callback = function(qrdata) { 
		//alert(qrdata);
		var qrcode_data ={qdata : qrdata};
		$.ajax({
				url: data_up,
				type: "POST",
				data: qrcode_data,
				success: function (res) {
					if(res.length==4){
						alert("Your ticket is expired or invalid please check it again");
					//return;	
					}else{
					$("#new").show();
					var dep = res.split('#');
					time(dep[1]);
					document.getElementById("reupload").innerHTML = dep[0]; 
					}
				}
			});		
	};
	qrcode.decode(locations);
}

function time(sec){
	var text = "Your  ";
	var tw = sec.replace(/{"id":/g,"");
	var th = tw.replace(/,"time":"/g,"");
	var fh = th.replace(/"}/g,"");
	var ff = fh.replace(/]/g,"");
	var six = ff.replace(/\[/g,"");
	var arr = six.split(',');
	var times = new Array;
	for(var i = 0; i<arr.length; i++){
		$('#'+i).html(secsp(arr[i]));
		times.push(secsp(arr[i]));
	}
	var times_page = times.join("h ");
	//times_page.concat("h ");
	//alert(times_page);
	$('#time').html('You have to select time from  ' +times_page+"h <br>" );	
}

function secsp(inp){
	var arr2 = inp.split("\"");
	//alert(arr2[2]);
	return arr2[2];
}

function upd(){
	//alert($('#udate').val().length);
	
	var update_data = {
		u_date : $('#udate').val(),
       	u_time : $('#stime').val()		
	};
	 $.ajax({
       		url: update,
       		type: 'POST',
       		data: update_data,
       		success:function(msg){
       				//alert("Please save the image");
					window.location = msg;
					//alert(msg);
			}
       });
}

