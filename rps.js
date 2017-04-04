<script type ="text/javascript">
var userChoice = prompt("rock/paper/scissors????");
var computerChoice = Math.random();
if(computerChoice<=0.33){
	computerChoice = rock;
}
else if(0.33<computerChoice<=0.66){
	computerChoice = paper;
}
else{
	computerChoice = scissors;
}
choice1 = userChoice;
choice2 = computerChoice;
function compare(choice1 , choice2){
	if(choice1 === choice2){
		return ("tie bro !!!");
	}
	if(choice1 === 'rock'){
		if(choice2 === 'scissors' ){
			return ("you win!!!");
		}
		else {
			return ("you suck!!");
		}
	}
	if(choice1 === 'scissors'){
		if(choice2 === 'paper'){
			return ("you win brooo !!");
		}
		else {
			return("you lose");
		}
	}
	if(choice1 === 'paper'){
		if(choice2 === 'rock'){
			return ("you win...partyyy");
		}
		else{
			return ("you suck");
		}
	}
}
console.log(compare(choice1,choice2));
</script>