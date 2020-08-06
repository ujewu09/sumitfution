<template>
	<div class="flex-container">
		<div class="flex-item item1">1</div>
		<div class="flex-item">2</div>
		<div class="flex-item">3</div>
	</div>
</template>

<script>
</script>

<style scoped>
	body{
		direction: rtl;
	}
	.flex-container{
		display: -webkit-flex;
		display: flex;
		width: 400px;
		height: 300px;
		/* flex-wrap: wrap-reverse; */
		/* flex-direction: row-reverse; */
		align-items: center;
		/* flex-wrap: wrap-reverse; */
		background: lightgrey;
	}
	.flex-item{
		width: 100px;
		height: 100px;
		background-color: red;
		margin: 10px;
	}
	.item1{
		align-self: stretch;
	}
</style>
