function vaildate_mail(mail_address){
var atpos=mail_address.indexOf("@");
var dotpos=mail_address.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail_address.length)
	{
		//alert("Not a valid e-mail address");
		return false;
	}
	else{
		return true;
	}		
}


test( "vaildate test", function() {
	equal( vaildate_mail("AAAA"), true, "should falil" );
	equal( vaildate_mail("jayegmail.com"), true, "should falil" );
	equal( vaildate_mail("jay@"), true, "should falil" );
	equal( vaildate_mail("jaye@gmail.com"), true, "succuse" );
});