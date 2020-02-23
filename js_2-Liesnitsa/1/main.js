let n = +prompt('Введіть число');
let i;
for (i = n - 1; i > 0; i--) {
    n = n * i
}
console.log(n);
document.write(n)