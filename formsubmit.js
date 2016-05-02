$(document).ready(function(){
				
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	$("#usrName").focusout(function(){
		var usrName = $("#usrName").val();
		
		if (!(IsEmail(usrName))) {
			alert("User Name must be an Email Address. Try Again!");
			$("#usrName").focus();    
		}
	});
	
	$("#pwd").focusout(function(){
	var password = $("#pwd", $("#signUp")).val();
		if ((password.length) < 6 ) {
			alert("Must be at least 6 characters. Try Again!");
			$("#pwd").focus();
		}
	});

	$("#cnfmPwd").focusout(function(){
		var password = $("#pwd", $("#signUp")).val();
		var cpassword = $("#cnfmPwd", $("#signUp")).val();
		
		if (!(password).match(cpassword)) {
			alert("Your passwords don't match. Try again!");
			$("#cnfmPwd").focus();
		}
	});

	$("#dob").focusout(function() {
		var dob = $('#dob').val();
		if(dob != ''){
		    var str=dob.split('-');    
		    var firstdate=new Date(str[0],str[1],str[2]);
		    var today = new Date();        
		    var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
		    var age = parseInt(dayDiff);
		   
		    if (age > 150 || age < 14) {
		    	alert("Must be between 14 Years and 150 Years of age. Try Again!");
				$("#dob").focus();
		    }
		}
	});
	
	var clrBtn = "";

	$("#submitBtn").click(function() {
		var usrName = $("#usrName").val();
		var password = $("#pwd", $("#signUp")).val();
		var cpassword = $("#pwd", $("#signUp")).val();
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var dob = $("#dob").val();

		var usrDtls = "<div class=\"listDetails\"><h3>User Information</h3><ul class=\"usrInfo\"><li>User Name: <span>"+usrName+"</span></li>"+
					 "<li>Password:<span>"+password+"</span></li><li>First Name:<span>"+firstName+"</span></li><li>Last Name:<span>"+lastName+"</span></li>"+
					 "<li>Date of Birth:<span>"+dob+"</span></li></ul><hr><input type=\"button\" id=\"addMore\" name=\"addMore\" value=\"Add More Info\" />"+
					 "</div>";
        
        clrBtn = $("#resetBtn").detach();
		$("#signUp").empty();
		$("#signUp").append(usrDtls);
	});
	
	$("#signUp").on("click", "#resetBtn", function() {
		alert("All the information entered will be cleared!");
		$(".extraDetails").remove();
	});

	$("#signUp").on("click", "#addMore", function(){
		if ( !($( ".extraDetails" ).length)) {
 			var infoStr = "<div class=\"fieldContainer extraDetails\"><label for=\"bioInfo\">Bio</label><textarea id=\"bioInfo\" rows=\"10\" cols=\"30\"></textarea></div>"+
						"<div class=\"fieldContainer extraDetails\"><label for=\"interest\">Interests</label><textarea id=\"interest\" rows=\"10\" cols=\"30\">"+
						"</textarea></div><hr class=\"extraDetails\">";
			$(infoStr).insertBefore("#addMore");
			$("#signUp").append(clrBtn);
		    $("#resetBtn").css('margin-top','-55px');
		}
	});
});