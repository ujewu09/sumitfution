<!-- <template>
    <div>
        <p class="word">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
        </p>
    </div>
</template>

<script>
    export default{
            created() {
                let word = new Word()
                document.querySelector('.word').onclick = function(){
                    blinkEyes()
                    let chars = word.getNext()
                    Object.keys(chars).forEach(Key => switchChar(Key,chars[key]))
                }
                function blinkEyes(){
                    let eyes - document.querySelectorAll('.word span:not(:first-cheild):not(:last-child)')
                    let keyframes = [
                        {transform:'scaleY(1)',offset:0},
                        {transform:'scaleY(0.1)',offset:0.25},
                        {transform:'scaleY(1)',offset:0.5},
                        {transform:'scaleY(1)',offset:1},
                    ]
                    let options = {
                        duration:200,
                        iterations:2,
                    }
                    eyes.forEach(eye => eye.animate(keyframes,options))
                }
                
                function Word(){
                    const WORDS = ['book','boot','cook','door','food','fool','foot','good','look','loop','moon','noon','pool','poor','room','roof','root','soon','tool','wood','zoom',]
                    let current = 'bool'
                    this.getNext = () =>{
                        current = _(WORDS).without(current).sample()
                        return{
                            first:current.slice(0,1),
                            last:current.slice(-1)
                        }
                    }
                }
                
                function swotchChar(width,char){
                    let letter = {
                        first:{
                            dom:document.querySelector('.word span:first-child'),
                            to:'-0.5em',
                            from:'0.8em',
                        },
                        last:{
                            dom:document.querySelector('.word span:last-child'),
                            top:'0.5em',
                            from:'-0.8em',
                        }
                    }[which]
                    
                    let keyframes = {
                        out:[
                            {transform:`translateX(0)`,filter:'opacity(1)'},
                            {transform:`translateX(${letter.to})`,filter:'opacity(0)'},
                        ],
                        in:[
                            {transform:`translateX(${letter.from})`,filter:'opacity(0)'},
                            {transform:`trams;ateX(0)`,filter:'opacity(1)'},
                        ]
                    }
                    let options = {
                        duration:500,
                        fill:'forwards',
                        easing:'cubic-bezier(0.5,1.5,0.5,1.5)'
                    }
                    letter.dom
                        .animate(Keyframes.out,options)
                        .onfinish = function(){
                            letter.dom.animate(keyframes.in,options)
                            letter.dom.textContent = char
                        }
                }
            }
    }
</script>

<style scoped>
    body{
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:steelblue;
    }
    .word{
        font-size: 100px;
        color: linen;
        font-family: monospace;
        font-weight: bold;
        width: 100%;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        cursor: pointer;
        user-select: none;
    }
    .word span:first-child,
    .word span:last-child{
        color:pink;
    }
    .word span:not(:first-child):not(:last-child){
        background-image: radial-gradient(
            circle at center,
            linen 0.05em,
            transparent 0.05em
        );
    }
</style>
 -->