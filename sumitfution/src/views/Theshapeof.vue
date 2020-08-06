<template>
	<div>
		<div class="content">
			<ul class="one">
				<li>
					<div id="oval"></div>
				</li>
				<li>
					<div id="triangle-up"></div>
				</li>
				<li>
					<div id="triangle-up"></div>
				</li>
				<li>
					<div id="triangle-down"></div>
				</li>
				<li>
					<div id="triangle-left"></div>
				</li>
				<li>
					<div id="triangle-right"></div>
				</li>
				<li>
					<div id="triangle-topleft"></div>
				</li>
				<li>
					<div id="#triangle-topright"></div>
				</li>
				<li>
					<div id="triangle-bottomleft"></div>
				</li>
				<li>
					<div id="triangle-bottomright"></div>
				</li>
				<li>
					<div id="curvedarrow"></div>
				</li>
				<li>
					<div id="trapezoid"></div>
				</li>
				<li>
					<div id="parallelogram"></div>
				</li>
				<li>
					<div id="staer-six"></div>
				</li>
				<li>
					<div class="star-five"></div>
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.one li {
		list-style: none;
		width: 600px;
		height: 200px;
	}

	#oval {
		width: 200px;
		height: 100px;
		background: red;
		border-radius: 100px / 50px;
	}

	#triangle-up {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 100px solid red;
	}

	#triangle-down {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-top: 100px solid red;
	}

	#triangle-left {
		width: 0px;
		height: 0;
		border-top: 50px solid transparent;
		border-right: 100px solid red;
		border-bottom: 50px solid transparent;
	}

	#triangle-right {
		width: 0;
		height: 0;
		border-top: 50px solid transparent;
		border-left: 100px solid red;
		border-bottom: 50px solid transparent;
	}

	#triangle-topleft {
		width: 0;
		height: 0;
		border-top: 100px solid red;
		border-right: 100px solid transparent;
	}

	#triangle-topright {
		width: 0;
		height: 0;
		border-top: 100px solid red;
		border-left: 100px solid transparent;
	}

	#triangle-bottomleft {
		width: 0;
		height: 0;
		border-bottom: 100px solid red;
		border-right: 100px solid transparent;
	}

	#triangle-bottomright {
		width: 0;
		height: 0;
		border-bottom: 100px solid red;
		border-left: 100px solid transparent;
	}

	#curvedarrow {
		position: relative;
		width: 0;
		height: 0;
		border-top: 9px solid transparent;
		border-right: 9px solid red;
		transform: rotate(10deg);
	}

	#curvedarrow:after {
		content: "";
		position: absolute;
		border: 0 solid transparent;
		border-top: 3px solid red;
		border-radius: 20px 0 0 0;
		top: -12px;
		left: -9px;
		width: 12px;
		height: 12px;
		transform: rotate(45deg);
	}

	#trapezoid {
		border-bottom: 100px solid red;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		height: 0;
		width: 100px;
	}

	#parallelogram {
		width: 150px;
		height: 100px;
		transform: skew(20deg);
		background: red;
	}

	#staer-six {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 100px solid red;
		position: relative;
	}

	#staer-six::after {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-radius: 50px solid transparent;
		border-top: 100px solid red;
		position: absolute;
		content: "";
		top: 30px;
		left: -50px;
	}

	#star-five {
		margin: 50px 0;
		position: relative;
		display: block;
		color: red;
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid red;
		border-left: 100px solid transparent;
		transform: rotate(35deg);
	}

	#star-five:before {
		border-bottom: 80px solid red;
		border-left: 30px solid transparent;
		border-right: ;
	}
</style>
