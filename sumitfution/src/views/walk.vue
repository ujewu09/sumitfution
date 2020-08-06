<template>
    <div>
        <div class="man">
            <span class="head"></span>
            <span class="body"></span>
            <span class="feet"></span>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    body{
        margin: 0;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:radial-gradient(lightgray 20%,whitesmoke);
    }
    .man{
        width: 12em;
        height:33em;
        font-size:10px;
        position:relative;
    }
    .man{
        color:whiter;
    }
    .head{
        position:absolute;
        width:7em;
        height:7em;
        background-color:currentColor;
        border-radius: 50%;
        right: 0;
    }
    .body{
        position:absolute;
        width:6.2em;
        height:14.4em;
        background-color:currentColor;
        top: 7em;
        border-radius:100% 20% 0 0;
    }
    .feet::before,
    .feet::after{
        content: '';
        position:absolute;
        width:4em;
        height:1.4em;
        background-color:white;
        bottom:0;
        left: -1.6em;
        border-radius: 1em 80% 0.4em 0.4em;
    }
    .man::before{
        content: '';
        position:absolute;
        width: 12em;
        height:0.8em;
        background-color:rgba(0, 0, 0, 0.1);
        bottom:-0.2em;
        left:-3em;
        border-radius: 50%;
    }
    .feet::before,
    .feet::after{
        animation:feet-animation 2s ease-in-out infinite;
    }
    .feet::after{
        animation-delay: 1s;
    }
    @keyframes feet-animation{
        20%{
            transform: translateX(3.4em) translateY(-1.6em) rotate(4deg);
        }
        30%{
            transform:translateX(4.6em) translateY(-1em) rotate(0deg);
        }
        40%{
            transform: translateX(5.6em) translateY(-0.6em) rotate(4deg);
        }
        44%{ 
            transform: translateX(5.6em) translateY(0) rotate(0deg);
        }
    }
    .man::before{
        animation: shadow-animate 4s ease-in-out infinite;
    }
    @keyframes shadow-animate{
        0%,50%,100%{
            transform: scale(1); 
        }

        25%,75%{
            transform: scale(1.15);
        }
    }
</style>
