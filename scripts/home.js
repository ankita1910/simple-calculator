var calculator = {};
/* VARIABLES USED:
CALCULATOR.FIRSTOPERAND
CALCULATOR.SECONDOPERAND
CALCULATOR.OPERATOR
CALCULATOR.ANSWER
*/
/* FUNCTION TO RESET THE INPUT BOX. CLEAR OUT INITIAL TEXT WHEN USER STARTS TYPING*/
calculator.resetInputBox = function() {
	if($("#input-box").val() == "Enter Operand") {
		$("#input-box").val(" ");
		$(".error-container").html("");
	}
}
/* FUNCTION TO POPULATE OPERAND IN INPUT BOX */
calculator.populateOperand = function(event) {
	calculator.resetInputBox();
	var operand = parseFloat($(event).html().trim());
	var getInputBoxValue = $("#input-box").val();
	$("#input-box").val(getInputBoxValue + operand);
}
/* FUNCTION TO POPULATE OPERATOR IN INPUT BOX */
calculator.populateOperator = function(event) {
	$(".error-container").html("");
	calculator.firstOperand = parseFloat($("#input-box").val().trim());
	if(!isNaN(calculator.firstOperand)) {
		calculator.operator = $(event).html().trim();
		$(event).addClass("active-operation");
		$("#input-box").val(" ");
	}
	else {
		$(".error-container").html("Enter Operand first");
	}
}
/* FUNCTION TO CALCULATE OPERATION AND DISABLE INPUT BOX TILL USER CLEARS OUT CURRENT OPERATION */
calculator.calculateAns = function() {
	calculator.secondOperand = parseFloat($("#input-box").val().trim());
	var operationString = calculator.firstOperand + calculator.operator + calculator.secondOperand;
	calculator.answer = eval(operationString);
	$("#input-box").val(operationString + " = " + calculator.answer);
	$(".op-container").removeClass("active-operation");
	$("#input-box").attr("disabled", "disabled")
}
/* FUNCTION TO CLEAR OUT THE CURRENT OPERATION AND RESETING THE VARIABLES */
calculator.clearInputBox = function(event) {
	$("#input-box").removeAttr("disabled"); 
	$("#input-box").val(" ");
	calculator.firstOperand = "";
	calculator.secondOperand = "";
	calculator.operator = "";
}