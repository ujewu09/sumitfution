<template>
	<div>
		<div class="circles">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	body {
		margin: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightgoldenrodyellow;
	}

	.circles {
		width: 10em;
		height: 10em;
		font-size: 30px;
		display: flex;
		justify-content: center;
		position: relative;
		animation: rotating 5s linear infinite;
	}

	@keyframes rotating {
		to {
			transform: rotate(1turn);
		}
	}

	.circles span {
		position: absolute;
		--diameter: calc(10em - (var(--n) - 1) * 1em);
		width: var(--diameter);
		height: var(--diameter);
		border-radius: 50%;
	}

	.circles span:nth-child(odd) {
		background-color: #000000;
	}

	.circles span:nth-child(even) {
		background-color: red;
	}

	.circles span:nth-child(n+8) {
		top: calc((var(--n) - 7) * 1em);
	}

	.circles span:nth-child(1) {
		--n: 1;
	}

	.circles span:nth-child(2) {
		--n: 2;
	}

	.circles span:nth-child(3) {
		--n: 3;
	}

	.circles span:nth-child(4) {
		--n: 4;
	}

	.circles span:nth-child(5) {
		--n: 5;
	}

	.circles span:nth-child(6) {
		--n: 6;
	}

	.circles span:nth-child(7) {
		--n: 7;
	}

	.circles span:nth-child(8) {
		--n: 8;
	}

	.circles span:nth-child(9) {
		--n: 9;
	}

	.circles span:nth-child(10) {
		--n: 10;
	}
</style>
