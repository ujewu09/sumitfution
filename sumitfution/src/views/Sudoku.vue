<!-- <template>
	<div>
		<div class="app">
			<h1>Sudoku Training</h1>
			<div class="game">
				<p>
					Time:
					<span class="time">00:00</span>
				</p>
				<p class="round">1/5</p>
				<p>
					Score:
					<span class="score">100</span>
				</p>
			</div>
			<div class="digits">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
				<span>9</span>
			</div>
			<div class="select-level">
				<div class="levels">
					<input type="radio" name="level" id="easy" value="easy" checked="checked">
					<label for="easy">Easy</label>

					<input type="radio" name="level" id="normal" value="normal">
					<label for="normal">Normal</label>

					<input type="radio" name="level" id="hard" value="hard">
					<label for="hard">Hard</label>
				</div>
				<div class="play">Play</div>
			</div>
			<div class="game-over">
				<h2>Game Over</h2>
				<p>
					Time:
					<span class="final-time">00:00</span>
				</p>
				<p>
					Score:
					<span class="final-score">3000</span>
				</p>
				<div class="again">Play Again</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			const ALL_DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
			const ANSWER_COUNT = {
				EAST: 1,
				NORMAL: 2,
				HARD: 3
			}
			const ROUND_COUNT = 5
			const SCORE_RULE = {
				CORRECT: 100,
				WRONG: -10
			}

			const $ = (selector) => document.querySelectorAll(selector)
			const dom = {
				game: $('.game')[0],
				digits: Array.from($('.game .digits span')),
				time: $('.game .time')[0],
				round: $('.game .round')[0],
				score: $('.game .score')[0],
				selectLevel: $('.select-level')[0],
				level: () => {
					return $('input[type=radio]:checked')[0]
				},
				play: $('.select-level .play')[0],
				gameOver: $('.game-over')[0],
				again: $('.game-over .again')[0],
				finalTime: $('.game-over .final-time')[0],
				finalScore: $('.game-over .final-score')[0],
			}

			const render = {
				initDigits: () => {},
				updateDigitStaus: () => {},
				updateTime: () => {},
				updateScore: () => {},
				updateRound: () => {},
				updateFinal: () => {},
			}
			
			const render = {
				initDigits: (texts) => {
					allTexts = texts.concat(_.fill(Array(ALL_DIGITS.length - texts.length),''))
					_.shuffle(dom.digits.forEach(digit,i) =>{
						digit.innerText = allTexts[i]
						digit.className = ''
					})
				},
			}
			
			const render = {
				updateDigitStaus:(text,isAnswer) =>{
					if(isAnswer){
						let digit = _.find(dom.digits, x => (x.innerText == ''))
						digit.innerText = text
						digit.className = 'correct'
					}
					else{
						_.find(dom.digits, x => (x.innerText == text)).className = 'wrobng'
					}
				}
			}
		}
	}
</script>

<style>
	body {
		margin: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: silver;
		overflow: hidden;
	}

	.app {
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		user-select: none;
	}

	h1 {
		margin: 0;
		color: sienna;
	}

	.game .message {
		width: inherit;
		display: flex;
		justify-content: space-between;
		font-size: 1.2em;
		font-family: sans-serif;
	}

	.game .message span {
		font-weight: bold;
	}

	.game .digits {
		box-sizing: border-box;
		width: 300px;
		height: 300px;
		padding: 10px;
		border: 10px solid sienna;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
	}

	.game .digits span {
		width: 80px;
		height: 80px;
		background-color: blanchedalmond;
		font-size: 30px;
		font-family: sans-serif;
		text-align: center;
		line-height: 2.5em;
		color: sienna;
		position: relative;
	}

	.select-level {
		z-index: 2;
		box-sizing: border-box;
		width: 240px;
		height: 240px;
		border: 10px solid rgba(160, 82, 45, 0.8);
		border-radius: 50%;
		box-shadow:
			0 0 0 0.3em rgba(255, 235, 205, 0.8),
			0 0 1em 0.5em rgba(160, 82, 45, 0.8);
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: sans-serif;
	}

	.select-level .levels {
		margin-top: 60px;
		width: 190px;
		display: flex;
		justify-content: space-between;
	}

	.select-level .levels {
		position: relative;
	}

	.select-level input[type=radio] {
		visibility: hidden;
		position: absolute;
		left: 0;
	}

	.select-level label {
		width: 56px;
		height: 56px;
		background-color: rgba(160, 82, 45, 0.8);
		border-radius: 50%;
		text-align: center;
		line-height: 56px;
		color: blanchedalmond;
		cursor: pointer;
	}

	.select-level input[type=radio]:checked+label {
		background-color: sienna;
	}

	.select-level .play {
		width: 120px;
		height: 30px;
		background-color: sienna;
		color: blanchedalmond;
		text-align: center;
		line-height: 30px;
		border-radius: 30px;
		text-transform: uppercase;
		cursor: pointer;
		margin-top: 30px;
		font-size: 20px;
		letter-spacing: 2px;
	}

	.select-level .play:hover {
		background-color: saddlebrown;
	}

	.select-level .play:active {
		transform: translate(2px, 2px);
	}

	.select-level,
	.game-over {
		z-index: 2;
		box-sizing: border-box;
		width: 240px;
		height: 240px;
		border: 10px solid rgba(160, 82, 45, 0.8);
		border-radius: 50%;
		box-shadow:
			0 0 0 0.3em rgba(255, 235, 205, 0.8),
			0 0 1em 0.5em rgba(160, 82, 45, 0.8);
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: sans-serif;
	}

	.game-over h2 {
		margin-top: 40px;
		color: sienna;
	}

	.game-over p {
		margin: 3px;
		font-size: 20px;
		color: sienna;
	}

	.select-level .play,
	.game-over .again {
		width: 120px;
		height: 30px;
		background-color: sienna;
		color: blanchedalmond;
		text-align: center;
		line-height: 30px;
		border-radius: 30px;
		text-transform: uppercase;
		cursor: pointer;
	}

	.select-level .play {
		margin-top: 30px;
		font-size: 20px;
		letter-spacing: 2px;
	}

	.select-level .play:hover,
	.game-over .again:hover {
		background-color: saddlebrown;
	}

	.select-level .play:active,
	.game-over .again:active {
		transform: translate(2px, 2px);
	}

	.game-over .again {
		margin-top: 10px;
	}

	.app {
		position: relative;
	}

	.select-level,
	.game-over {
		position: absolute;
		bottom: 40px;
	}

	.select-level,
	.game-over {
		visibility: hidden;
	}

	.game {
		transition: 0.3s;
	}

	.game.stop {
		filter: blur(10px);
	}

	.game .digits span.wrong {
		border: 2px solid crimson;
	}

	.game .digits span.correct {
		background-color: chocolate;
		color: gold;
	}
</style>
 -->