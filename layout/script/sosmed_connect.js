var btnFBConnect = 'connect-fb',btnFBLogout = 'logout-fb';
window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({   appId      : app_id, status     : true, cookie     : true,xfbml      : true });
	// Additional init code here
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			// User logged into FB and authorized
			resFbAPI(); 
		} else if (response.status === 'not_authorized') {
			// User logged into FB but not authorized
			set_button(btnFBConnect,'inline');
			set_button(btnFBLogout,'none');
		} else {
			// User not logged into FB
			set_button(btnFBLogout,'none');
		}
	});
};
function login() {
    FB.login(function(response) {
        if (response.authResponse) resFbAPI(); 
    }, {scope:'email'});
	return false;
}
function resFbAPI() {
	//twttr.anywhere.signOut();
	set_button(btnFBConnect,'none');
	set_button(btnFBLogout,'inline');
    FB.api('/me', function(response) {
		connect_input('p_name',response.name);
		connect_input('p_email',response.email);
		connect_input('p_city',response.location.name);
    });
}
function set_empty(){
	connect_input('p_name','');
	connect_input('p_email','');
	connect_input('p_city','');
}
function logout() {
	FB.logout(function(response) {
		set_button(btnFBConnect,'inline');
		set_button(btnFBLogout,'none');
	});
	return false;
}
  // Load the SDK's source Asynchronously
  (function(d, debug){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
     ref.parentNode.insertBefore(js, ref);
   }(document, /*debug*/ false));
document.getElementById("connect-fb").onclick = login;
document.getElementById("logout-fb").onclick = logout;
function connect_input(name,value){
	document.getElementsByName(name)[0].value = value;
}
function set_button(name,status){
	document.getElementById(name).style.display = status;
}
	/*twttr.anywhere(function (T) {
		T.bind("authComplete", function (e, user) {
			twResAPI("active",user);
		});
		if(T.isConnected()){
			twResAPI("active",T.currentUser);
		}else{
			twResAPI("inactive");
		}
		T.bind("signOut", function (e) {
			twResAPI("inactive");
		});
		document.getElementById("connect-twt").onclick = function () {
			T.signIn(); return false;
		};
	}); 
	document.getElementById("logout-twt").onclick = function () {
		twttr.anywhere.signOut(); return false;
	};
	function twResAPI(STATUS,REF){
		if(STATUS == "active"){	logout();
			set_button('connect-twt','none');
			set_button('logout-twt','inline');
			connect_input('p_name',REF.data('name'));
			connect_input('p_city',REF.data('location'));
		}else{
			set_button('connect-twt','inline');
			set_button('logout-twt','none');
		}
	}*/