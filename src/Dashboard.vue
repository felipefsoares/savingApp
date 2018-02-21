<template>
	<!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> Fatura Atual - Detalhamento</div>
        <div class="card-body">
          <div class="table-responsive">
			<input v-model="search"/>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PMx{{data}}</div>
      </div>
</template>
<script>
	export default{
        data () {
			return {
				search: 'hello'
			}
		},
		props: ['data'],
		watch: {
			search: function (v1, v2) {
				console.log('Dashboard say: ' + v1)
			}, 
			data: function (v1, val) {
				console.log('Dashboard say: ' + val)
			}
		},
		created: function (){
			 //this.$parent.$on('dataChanged', function () {console.log(data)});
		}
	}
		//
</script>