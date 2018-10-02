function select(obj)
{
	//only choose one element in one list
	var list = obj.parentNode;
	if (list.getAttribute("class")=="selected list-group"){
		alert("Can't choose more than one element in one list");
		return;
	}

	//get id and textcontent of the selected element
	id = obj.getAttribute("id");	
	var newchild = obj.cloneNode(true);
	obj.setAttribute("class","selected_elem list-group-item");

	//insert into todo
	if(id > 100 & id <201){
		//insert text into todo
		var position = document.getElementById("todo");
		position.appendChild(newchild);
		list.setAttribute("class", "selected list-group");
	}

	//insert into day
	if(id > 0 & id <101){
		var position = document.getElementById("day");
		position.appendChild(newchild);
		list.setAttribute("class", "selected list-group");
	}

	//insert into time
	if(id > 200){
		var position = document.getElementById("time");
		position.appendChild(newchild);
		list.setAttribute("class", "selected list-group");	
	}
}

function add(){
	//get the data
	var day = document.getElementById("day").firstChild;
	var todo = document.getElementById("todo").firstChild;
	var time = document.getElementById("time").firstChild;
	
	//check the data integrity
	if(day == null){
		alert("You should choose a day");
		return;
	}
	else if(todo == null){
		alert("You should choose a thing to do");
		return;
	}
	else if(time == null){
		alert("You should choose a time");
		return;
	}
	
	//combine the data
	var chosenday = day.textContent;
	var content = time.textContent + " : " + todo.textContent;
	
	//insert into calendar
	if(chosenday == "Monday"){
		var td = document.getElementById("mon");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Tuesday"){
		var td = document.getElementById("tue");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Wednesday"){
		var td = document.getElementById("wed");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Thursday"){
		var td = document.getElementById("thu");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Friday"){
		var td = document.getElementById("fri");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Saturday"){
		var td = document.getElementById("sat");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	if(chosenday == "Sunday"){
		var td = document.getElementById("sun");
		var div = document.createElement("div");
		div.innerText = content;
		td.appendChild(div);
	}
	//use the function clear()
	clear();
}

function clear(){
	//clear list
	var elem = document.getElementsByClassName("selected_elem");
	var elem1 = elem[0];
	var elem2 = elem[1];
	var elem3 = elem[2];
	elem1.setAttribute("class","unselected_elem list-group-item");
	elem2.setAttribute("class","unselected_elem list-group-item");
	elem3.setAttribute("class","unselected_elem list-group-item");
	
	//clear todo
	var parent1 = document.getElementById("todo");
	var child1 = document.getElementById("todo").firstChild;
	parent1.removeChild(child1);
	var list1 = document.getElementById("todolist");
	list1.setAttribute("class", "unselected list-group");

	//clear day
	var parent2 = document.getElementById("day");
	var child2 = document.getElementById("day").firstChild;
	parent2.removeChild(child2);
	var list2 = document.getElementById("daylist");
	list2.setAttribute("class", "unselected list-group");	

	//clear time
	var parent3 = document.getElementById("time");
	var child3 = document.getElementById("time").firstChild;
	parent3.removeChild(child3);
	var list3 = document.getElementById("timelist");
	list3.setAttribute("class", "unselected list-group");	
}

function showdate(){
	var d = new Date();

	var month = new Array(12);
	month[0] = "Jan.";
	month[1] = "Feb.";
	month[2] = "Mar.";
	month[3] = "Apr.";
	month[4] = "May.";
	month[5] = "Jun.";
	month[6] = "Jul.";
	month[7] = "Aug.";
	month[8] = "Sep.";
	month[9] = "Oct.";
	month[10] = "Nov.";
	month[11] = "Dec.";

 	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var date = d.getDate();
	var year = d.getFullYear();
	
	text = weekday[d.getDay()] + " " + month[d.getMonth()] + " " + date + " " + year;
	
	var box = document.getElementById("date");
	box.textContent = text;
}

function printPage(){
	var Data = document.getElementById("table").innerHTML;
	window.print();

}


