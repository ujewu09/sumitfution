<template>
	<div>
		<div class="container">
			<div class="box">
				<span style="--i:1"></span>
				<span style="--i:2"></span>
				<span style="--i:3"></span>
				<span style="--i:4"></span>
				<span style="--i:5"></span>
				<span style="--i:6"></span>
				<span style="--i:7"></span>
				<span style="--i:8"></span>
				<span style="--i:9"></span>
				<span style="--i:10"></span>
			</div>
			<div class="box">
				<span style="--i:1"></span>
				<span style="--i:2"></span>
				<span style="--i:3"></span>
				<span style="--i:4"></span>
				<span style="--i:5"></span>
				<span style="--i:6"></span>
				<span style="--i:7"></span>
				<span style="--i:8"></span>
				<span style="--i:9"></span>
				<span style="--i:10"></span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #111;
	}

	.container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.container .box {
		display: inline-block;
		width: 500px;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 50px 0;
	}

	.container .box span {
		position: absolute;
		box-sizing: border-box;
		border: 2px solid red;
		border-radius: 50%;
		/* background-color: red; */
		animation: animate 5s linear infinite;
		animation-delay: calc(0.5s * var(--i));
	}

	.container .box:nth-child(2) span {
		border: 2px solid #9f93ab;
		/* border: none; */
		/* background: rgba(0,255,0,0.25); */
		/* background-color: rgba(159, 147, 171);; */
	}

	@keyframes animate {
		0% {
			width: 0px;
			height: 0px;
		}

		50% {
			opacity: 1;
		}

		100% {
			width: 500px;
			height: 500px;
			opacity: 0;
		}
	}
</style>
