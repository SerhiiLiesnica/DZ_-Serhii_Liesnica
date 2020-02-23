// завдання 7.
let a = -166;
for (; a < 10000;) {
    a = 2 * a + 200
    if (a > -100 && a < 100) {
        console.log(a)
        document.write(` ${a}`)
    }
}