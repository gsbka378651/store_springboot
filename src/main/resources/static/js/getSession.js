$(document).ready(function() {
	getUserSession()
});

$("#logout").click(function() {
	$.ajax({
		url: '/users/logout',
		type: 'GET',
		success: function (data) {
			alert("登出成功")
			location.href = "index.html"
		},
		error: function (xhr) {
			console.log("登出失敗");
		}
	});
})

function getUserSession() {
	$.ajax({
		url: '/users/getUserSession',
		dataType:'text',
		type: 'POST',
		success: function (data) {
			if(data == "OK") {
				$("#login").remove();
				$("#logout").css("display", "block");
			}
		},
		error: function (xhr) {
			console.log("請求失敗")
		}
	});
}