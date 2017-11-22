$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault()
		$.ajax({
			url: '/user/login',
			method: 'post',
			data: $('form').serialize(),
			success: function (res) {
				if(!res.code){
					layer.msg(res.msg)
					setTimeout(function () {
						location.href = "/admin"
					},2000)
				}else{
					layer.msg(res.msg)
				}
			},
			error: function (err) {
				console.error(err)
				throw new Error(err)
			}
		})
	})
})