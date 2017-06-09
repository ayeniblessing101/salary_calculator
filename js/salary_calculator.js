function calculateSalary(){
	const intern = 20;
	const associates = 40;
	const managers = 60;
	const executives = 80;
	const directors = 100;
	let salary;
	let level = document.getElementById("level").value;
	let employeeType = document.getElementById("employeeType").value
	if(level === "level 1" && employeeType === "interns"){
		salary = intern;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 2" && employeeType === "interns"){
		salary = intern * 2;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 1" && employeeType === "associates"){
		salary = associates;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 2" && employeeType === "associates"){
		salary = associates * 2;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 1" && employeeType === "managers"){
		salary = managers;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 2" && employeeType === "managers"){
		salary = managers * 2;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 1" && employeeType === "executives"){
		salary = executives;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 2" && employeeType === "executives"){
		salary = executives * 2;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 1" && employeeType === "directors"){
		salary = directors;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}
	else if(level === "level 2" && employeeType === "directors"){
		salary = directors * 2;
		document.write(
			"Level: " + level + "<br><br>" + "Employee Type: "  + employeeType +
			"<br>" +  "<br>" + "Salary: " + "$" + salary);
	}

}
