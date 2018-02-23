var a = prompt('Enter value "a="');
var b = prompt('Enter value "b="');
var value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    document.write('Result: positive');
} else if (value < 0) {
    document.write('Result: negative');
} else {
    document.write('Result: zero');
}
