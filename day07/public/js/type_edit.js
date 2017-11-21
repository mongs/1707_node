$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault()
		$.ajax({
			url: '/admin/type_edit',
			method: 'post',
			data: $('form').serialize(),
			success: function (res) {
				if(!res.code){
					layer.msg(res.msg)
					setTimeout(function () {
						location.href = "/admin/type_list"
					},2000)
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