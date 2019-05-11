<template>
	<div id="rightContainer">
        <div id="table">
            <table>
                <caption>Мои транзакции</caption>
                <thead>
                    <tr>
                        <th class="tdIdH">ID ЗАЯВКИ</th>
                        <th class="statusH">СТАТУС</th>
                        <th class="debetH">СУММА К ЗАЧИСЛЕНИЮ</th>
                        <th class="creditH">СУММА К ОПЛАТЕ</th>
                        <th class="detailskH">ДЕТАЛИ</th>
                        <th class="dateOperH">ВРЕМЯ СОЗДАНИЯ</th>
                    </tr>
                </thead>
                <tbody id="tableRecord">
                    <TableTr
                        v-for="item in tranzactions"
                        v-bind:tranzaction = "item"
                        v-bind:key = "item.id"
                    ></TableTr> 
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
var arrTranzactions = [
	{	id: '1',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{
		id: '2',
		status:'Заявка отклонена',
		statusMes: 'Средства не поступили  на указанные реквизиты, требуется предоставить доказательства оплаті',
	 	debet: '2700',
		credit: '3800',
		details: 'UkrEximBank',
		time: '25.03.19 17:05:33'
	},
	{
		id: '5',
		status:'В обработке',
		statusMes: '',
	 	debet: '2700',
		credit: '3800',
		details: 'UkrEximBank',
		time: '25.03.19 17:05:33'
	},
	{	id: '3',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '4',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '6',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	},
	{	id: '7',
		status:'Заявка подтверждена',
		statusMes: '',
		debet: '700', 
		credit: '800',
		details: 'A-bank',
		time: '25.03.19 17:05:33'
	}
	];
	function statusClass(arrTranzactions, last=false) {
		function setStatus(item) {
			if (item.status == 'Заявка подтверждена') item.statusClass = 'confirm';
			if (item.status == 'Заявка отклонена') item.statusClass = 'reject';
			if (item.status == 'В обработке') item.statusClass = 'processing';
		}
		if (!last) arrTranzactions.forEach((item) => { setStatus(item);})
			else setStatus(arrTranzactions[arrTranzactions.length-1]);
	}
	statusClass(arrTranzactions);

import TableTr from './TableTr.vue';
export default {
	name: 'RightContainer',
	data() {
		return {
			tranzactions: arrTranzactions
		}
	},
	components: {
		TableTr
	}
}

</script>

<style>
#table {
    display: block;
    overflow: auto;
    max-width: 100%;
    padding: 18px;
    background-color: #D8DEE3;
}
table {
    width: 100%;
    background-color: #FFFFFF;
    border-collapse: collapse;
    font-size: 12px;
}
table tr:nth-child(n+3) {
    border:1px solid #D8DEE3;
}
caption {
    height: 40px;
    background-color: #595959;
    color: #fff;
    text-align: left;
    padding-top: 12px;
    padding-left: 20px;
    font-size: 16px;
    vertical-align: middle;
}
th {
  font-size: 12px;
  color: rgb(89, 89, 89);
  height: 55px;
  background-color: #F2F4F6;
  padding: 5px;
  
}
td {
    padding: 5px;
    text-align: center;
}
.tdId {
    color:#1083FF;
}
.confirm, .reject, .processing {
    background-color: #00CCFF;
    font-size: 14px;
    font-family: "OpenSans";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    text-align: center;
    border-radius: 4px;
    padding: 2px 3px;
}
.reject {
    background-color: #E2233C;
}
.processing {
    background-color: #9F9F9F;
}
.debet {
  font-size: 16px;
  color: rgb(89, 89, 89);
  line-height: 0.188;
}
.credit, .details, .dateOper {
  font-size: 14px;
  color: rgb(159, 159, 159);
}

@media screen and (max-width:790px) {
    #table {
      padding: 10px;
    }
 
    #rightContainer{
        width: 100%;
    }
}
@media screen and (max-width:690px) {
	#table {
	          
	        padding: 0;
	        margin: 5px 5px;
	 }
}
@media screen and (max-width:330px) {
	#table {
	    margin: 0;
	    width:100%;
	}
}
</style>