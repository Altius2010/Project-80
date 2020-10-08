name_of_the_student_array = [];

function submit() {
    for (i = 1; i <= 4; i++) {
        var name_of_student = document.getElementById("name_of_the_student_" + i).value;
        name_of_the_student_array.push(name_of_student);
    }
    console.log(name_of_the_student_array);
    var len = name_of_the_student_array.length;
    var display_student_array = [];
    for (j = 0; j < len; j++) {
        display_student_array.push("<h4>Name-" + name_of_the_student_array[j] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_of_the_student_array.sort();
    var len = name_of_the_student_array.length;
    var display_student_array = [];
    for (j = 0; j < len; j++) {
        display_student_array.push("<h4>Name-" + name_of_the_student_array[j] + "</h4>");
    }
    remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array + "</h1>";
}