$(document).ready(function(){
	$("#signInBtn").click(function(){
        var $form = $("#main");
        var inputs = {};
        inputs["email"] = $form.find('input[id="text"]').val();
        inputs["password"] = $form.find('input[id="password"]').val();

        $.ajax({
            type:'POST',
            url: "a.php",
            data:inputs,
            sucess:function(data) {
                alert(data);
            },
            error:function(data){
                console.log(data);
            }
        });
    });
    //show signup
    $(".flipToSignUp").click(function(){
        $("#main").css("animation-name","hide-y"); 
        $("#main").css("transform","translate(-50%,-50%) rotateY(180deg)");
    
        
        $("#signUpForm").css("animation-name","show-y"); 
        $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(0deg)");
    });

    //show signin
    $("#flipToSignIn").click(function(){
        $("#signUpForm").css("animation-name","hide-y"); 
        $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(180deg)");
    
        
        $("#main").css("animation-name","show-y"); 
        $("#main").css("transform","translate(-50%,-50%) rotateY(0deg)");
    });

    //show msg
    /*$("#signInBtn").click(function(){
        $("#main").css("animation-name","hide-x"); 
        $("#main").css("transform","translate(-50%,-50%) rotateX(180deg)");
    
        
        $("#msg").css("animation-name","show-x"); 
        $("#msg").css("transform","translate(-50%,-50%) rotateX(0deg)");
    });*/

    //hide msg
    $("#ok").click(function(){
        $("#msg").css("animation-name","hide-x"); 
        $("#msg").css("transform","translate(-50%,-50%) rotateX(180deg)");
    
        
        $("#main").css("animation-name","show-x"); 
        $("#main").css("transform","translate(-50%,-50%) rotateX(0deg)");
    });

    $("#goToFP").click(function(){
        $("#forgotTable").removeClass("hidden");
        $("#singInTable").addClass("hidden");
    });

    $("#goToSignIn").click(function(){
        $("#singInTable").removeClass("hidden");
        $("#forgotTable").addClass("hidden");
    });

    $(".showHide").click(function(){
        var $this= $(this),
			$password_field = $this.prev();

		( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
		( 'HIDE' == $this.text() ) ? $this.text("SHOW") : $this.text("HIDE");
        
        $password_field.focus();
    });

    $("#back").click(function(event){
        if($(event.target).is($("#back")))
            $(this).addClass("hidden");
    });
});