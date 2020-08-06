<template>
    <div>
        <h2><span>We</span>must unite against COVID-19</h2>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins',sans-serif;
    }
    body{
        display: flex;
        align-content: center;
        justify-content:center;
        min-height:100vh;
        background: #000;
    }
    h2{
        position:relative;
        font-size: 3.4em;
        font-weight:900;
        color: #fff;
        z-index: 1;
        overflow: hidden;
        margin: 20px 20px 0 0;
    }
    h2 span{
        color: red;
    }
    h2::before{
        content: '';
        position:absolute;
        left:-20%;
        width:120%;
        height:100%;
        background:linear-gradient(90deg,transparent 0%,#000 5%,#000 100%);
        animation: animate 5.5s linear forwards;
        /* animation-delay: 2s;  */
        
    }
    @keyframes animation {
        0%{
            left: -20%;
        }
        100%{
            left: 110%;
        }
    }
    /* video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
        pointer-events: none;
        mix-blend-mode: screen;
    } */
</style>