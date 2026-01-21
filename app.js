function completeCourse(course) {
    localStorage.setItem(course, 100);
    alert(course.toUpperCase() + " course completed!");
}

document.getElementById("htmlProgress")?.setAttribute("value", localStorage.getItem("html") || 0);
document.getElementById("cssProgress")?.setAttribute("value", localStorage.getItem("css") || 0);
document.getElementById("jsProgress")?.setAttribute("value", localStorage.getItem("js") || 0);
