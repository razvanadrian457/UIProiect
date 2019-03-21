  function saveValues()
    {
        localStorage.email = document.getElementById("em").value;
        localStorage.password = document.getElementById("pa").value;
    }
    function loadValues()
    {
        document.getElementById("em").value = localStorage.email;

       document.getElementById("pa").value = localStorage.password;
    }







var editId;

var API_URL = {

    LOGIN: 'http://localhost:8010/user',

};
window.Login = {

    loggedUser: null,


    logOut: function(event){
         $(".showOnLogged").hide();

         location.reload();;
    },

    login: function(event) {

     var username = $(event.target).parents(".login-container").find('input[name="email"]').val(),
         pass = $(event.target).parents(".login-container").find('input[name="password"]').val();

     $.ajax({
            url: API_URL.LOGIN,
            method: "GET",
            data: jQuery.param({ email: username, password : pass}) ,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        }).done(function (response) {
            console.log("response from java", response);
            if (response) {
            localStorage.currentCustomer = response;
            window.location.replace("index.html")
            }
            else {

                   $("#userIncorrect").css({"display":"block","color":"red"});
                   $(".form-control[name='email']").val('');
                   $(".form-control[name='password']").val('');
            }

        }).fail(function(response) {
                        console.log("fail");
                        console.log(response);


                   $("#userIncorrect").css({"display":"block","color":"red"});

                   $(".form-control[name='email']").val('');
                   $(".form-control[name='password']").val('');
        });
        console.log("userName and password match");
        event.preventDefault();
        return false;
    },



   register: function(event) {

         var username = $(event.target).parents(".login-container").find('input[name="email"]').val(),
             pass = $(event.target).parents(".login-container").find('input[name="password"]').val();

         $.ajax({

                url: API_URL.LOGIN,
                method: "POST",

                    data: JSON.stringify({ 'email': username, 'password' : pass}) ,
                contentType: 'application/json',

            }).done(function (response) {
                console.log("response from java", response);
                localStorage.curentCustomer = response;
                window.location.replace("index.html")
            }).fail(function(response) {
                            console.log("fail");
                            console.log(response);


                       $("#userIncorrect").css({"display":"block","color":"red"});

                       $(".form-control[name='email']").val('');
                       $(".form-control[name='password']").val('');
            });
            console.log("userName and password match");
            event.preventDefault();
            return false;
        },



};
