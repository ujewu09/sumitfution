<template>
	<div></div>
</template>

<script>
	export default{
		created() {
			document.addEventListener('mousemove',(e) => {
				let body = document.querySelector('body');
				let heart = document.createElement('span')
				let x = e.offsetX
				let y = e.offsetY
				heart.style.left = x + 'px'
				heart.style.top = y + 'px'
				let size = Math.random() * 100
				heart.style.width = size + 'px'
				heart.style.height = size + 'px'
				body.appendChild(heart)
				setTimeout(() => {
					heart.remove()
				},2000)
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		font-family: '微软雅黑',sans-serif;
	}
	body{
		height: 100vh;
		background: #000;
		overflow: hidden;
	}
	span{
		position: absolute;
		background-color: red;
		background: url(../../public/images/爱心.png);
		width: 100px;
		height: 100px;
		background-size: cover;
		pointer-events: none;
		transform: translate(-50%,-50%);
		animation: animation 2s linear infinite;
	}
	@keyframes animate{
		0%{
			transform: translate(-50%,-50%);
			opacity: 1;
			filter: hue-rotate(0deg);
		}
		100%{
			transform: translate(-50%,-1000%);
			opacity: 1;
			filter:hue-rotate(360deg);
		}
	}
</style>
