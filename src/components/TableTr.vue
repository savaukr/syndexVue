<template>
	<tr>
        <td class='tdId'>{{tranzaction.id}}</td>
        <td class='status'><span v-bind:class="tranzaction.statusClass">{{tranzaction.status}}</span><p>{{tranzaction.statusMes}}</p></td>
        <td class='debet'>{{tranzaction.debet}}</td>
        <td class='credit'>{{tranzaction.credit}}</td>
        <td class='details'>{{tranzaction.details}}</td>
        <td class='dateOper'>{{tranzaction.time}}</td>
	</tr>
</template>

<script>
export default {
	name: 'TableTr',
	props: {
		tranzaction: Object
	}
}
</script>

<style>
</style>