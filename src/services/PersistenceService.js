import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

export default class PersistenceService {
	
	loadData() {
		
		data = Vue.localStorage.get('accountsData')
		console.log(data)
		if (data) {
			return data = JSON.parse(data)
		} else {
			data = [
				{
					id: 1,
					start_balance: 0,
					owner: 'Felipe',
					interest: 0.15,
					contribution: 500,
					current_balance: 2000,
					has_loan: true,
					name: 'Reserva'
				}
			]
			Vue.localStorage.set('accountsData', JSON.stringify(data))
			return data[0]['current_balance']
		}
		
	}
	
	getBalance() {
		
		//if(!data) { loadData() }
		//return data[0]['current_balance']
		
	}
}