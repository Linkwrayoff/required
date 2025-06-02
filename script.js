document.querySelector('#js_form').addEventListener('submit', function(event){
	let span = document.querySelector("#js_span")
	let input = document.querySelector(`#js_input`);

	if (input.value.trim()=== "") {
		event.preventDefault();
		span.classList.add('star')
		alert("обязательное поле")
	}else{
		span.classList.remove('star')
	};
});
