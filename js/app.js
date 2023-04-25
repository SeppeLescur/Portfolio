function scrollTo(hash) {
    location.hash = "#" + hash;
}
// CONTENT NAV BUTTONS
let index = 1;
function next() {
    index += 1;
    if (index > sections) {
        index = 1;
    }
    scrollTo(index);
}
function previous() {
    index -= 1;
    if (index <= 0) {
        index = sections;
    }
    scrollTo(index);
}