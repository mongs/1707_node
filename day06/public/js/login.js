$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault()
		$.ajax({
			url: '/user/login',
			method: 'post',
			data: $('form').serialize(),
			success: function (res) {
				console.log(res)
			},
			error: function (err) {
				console.error(err)
				throw new Error(err)
			}
		})
	})
})