/* ********** Light-mode / Dark-mode Switcher ************ */

let time = new Date()
time = time.getHours();
console.log(time);

if (time >= 20 || time <= 6) {
    // console.log("Dark-mode time");
    let classes = document.querySelectorAll(".light-mode");
    for ( i = 0; i < classes.length; i++ ) {
        classes[i].classList.remove("light-mode");
        classes[i].classList.add("dark-mode");
    }
    // console.log(classes);
}