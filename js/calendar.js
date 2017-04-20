		$(function() {

			var start = moment().subtract(29, 'days');
			var end = moment();

			function cb(start, end) {
				$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			}

			$('#reportrange').daterangepicker({
				startDate: start,
				endDate: end,
				ranges: {
					'Esse mês': [moment().startOf('month'), moment().endOf('month')],
					'Mês passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				}
			}, cb);

			cb(start, end);

		});