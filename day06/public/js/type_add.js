$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault()
		$.ajax({
			url: '/admin/type_add',
			method: 'post',
			data: $('form').serialize(),
			success: function (res) {
				if(!res.code){
					$('#type').val('')
					layer.msg(res.msg)
				}else{
					layer.msg(res.msg)
				}
			},
			error: function (err) {
				throw new Error(err)
			}
		})
	})
})