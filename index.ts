let enterButton : HTMLElement = document.getElementById("enter");
let input : HTMLElement = document.getElementById("userInput");
let ul : HTMLElement = document.querySelector("ul");
let item : HTMLCollection = document.getElementsByTagName("li");

function inputLength() : number{
	return input['value'].length;
} 

function listLength() : number{
	return item['length'];
}

function createListElement() : void {
	let li : HTMLElement  = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input['value'])); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input['value'] = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() : void {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	let dBtn : HTMLElement  = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem() : void {
      console.log('delete');
      li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick() : void {
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event : KeyboardEvent) : void {
	if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
