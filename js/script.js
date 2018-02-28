var a = prompt('Enter value a=');
var b = prompt('Enter value b=');
var value = (a * a) - (2 * a * b) - (b * b);
if (value > 0) {
    alert('Result: positive');
} else if (value < 0) {
    alert('Result: negative');
} else if (value === 0) {
    alert('Result: zero');
} else if (isNaN(value)) {
  	alert('Invalid entry. Please enter a number!');
}
