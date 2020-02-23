let name = prompt('Як вас звати');

let pas = prompt('А пароль do you known')
if (name == null) { alert('Вхід скасовано') } //<---- щоб після цього не запускався наступний крок
else if (pas == 'ЛОГОС') {
    alert(`Ласкаво просимо, ${name}!`)
} else if (pas == null) { alert(`${name}, вийди розбійник`) } else { alert(`Це не вірний пароль `) }