function getCookie(name){
	var arr1 = document.cookie.split(';');
	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if (arr2[0].trim() === name) {
			return decodeURIComponent(arr2[1]);
		};
	};
	return '';
}

$(function () {
	init()
})

function init() {
	if(getCookie('blog_admin_cookie')){
		var username = JSON.parse(getCookie('blog_admin_cookie')).username
		if(username){
			$('#name').text(username)
		}
	}
}
