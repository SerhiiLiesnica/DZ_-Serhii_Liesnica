// low.textarea.addEventListener('click', function(){
//     document.body.innerHTML('click')
// })

// edit.onclick = function(){
//     low1.style.displey = 'block'
// document.getElementsByClassName('low1')
// }
// style.onclick = function(){
//     low2.style.displey = 'block'
// document.getElementsByClassName('low2')
// }

// let edit = document.querySelector('.edit')


document.querySelector('.edit').addEventListener('click', function() {
    document.querySelector('.low1').style.display = 'flex'
    document.querySelector('.low2').style.display = 'none'
    document.querySelector('#area').value = document.querySelector('.top').innerHTML
})

document.querySelector('#save').addEventListener('click', function() {
    document.querySelector('.low1').style.display = 'none'
    document.querySelector('.top').innerHTML = document.querySelector('#area').value
})

document.querySelector('.style').addEventListener('click', function() {
    document.querySelector('.low2').style.display = 'flex'
    document.querySelector('.low1').style.display = 'none'

    // document.querySelector('#area').value = document.querySelector('.top').innerHTML
})

document.querySelector('#px12').addEventListener('click', function() {
    document.querySelector('.top').style.fontSize = '12px'
        // document.querySelector('.top').innerHTML = document.querySelector('#12px').value
})

document.querySelector('#px14').addEventListener('click', function() {
    document.querySelector('.top').style.fontSize = '14px'
})
document.querySelector('#px16').addEventListener('click', function() {
    document.querySelector('.top').style.fontSize = '16px'
})
document.querySelector('#px18').addEventListener('click', function() {
    document.querySelector('.top').style.fontSize = '18px'
})
document.querySelector('#px20').addEventListener('click', function() {
    document.querySelector('.top').style.fontSize = '20px'
})


document.querySelector('.myselect').addEventListener('change', function() {
        document.querySelector('.top').style.fontFamily = this.value
    })
    // document.querySelector('#fantasy').addEventListener('change', function() {
    //     document.querySelector('.top').style.fontFamily = 'fantasy'
    // })
    // document.querySelector('#monospace').addEventListener('change', function() {
    //     document.querySelector('.top').style.fontFamily = 'monospace'
    // })
    // document.querySelector('#sens-serif').addEventListener('change', function() {
    //     document.querySelector('.top').style.fontFamily = 'sens-serif'
    // })



document.querySelector('#CoT').addEventListener('click', function() {
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'flex'
})
document.querySelector('#BC').addEventListener('click', function() {
    document.querySelector('.color').style.display = 'none'
    document.querySelector('.backGroundColor').style.display = 'flex'
        // let BC == this.click
        //     if()

})

document.querySelector('#BT').addEventListener('click', function() {
    console.log(this.checked)
    let BT = this.checked
    if (BT == true) {
        document.querySelector('.top').style.fontWeight = 'bold'
    } else if (BT != true) {
        document.querySelector('.top').style.fontWeight = 'normal'
    }

})


document.querySelector('#CT').addEventListener('click', function() {
    console.log(this.checked)
    let CT = this.checked
    if (CT == true) {
        document.querySelector('.top').style.fontStyle = 'italic'
    } else if (CT != true) {
        document.querySelector('.top').style.fontStyle = 'normal'
    }
})

document.querySelector('.c1').addEventListener('click', function() {

    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'

})
document.querySelector('.c2').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c3').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c4').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c5').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c6').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c7').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c8').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.c9').addEventListener('click', function() {
    document.querySelector('.top').style.color = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})


document.querySelector('.bgc1').addEventListener('click', function() {

    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc2').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc3').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc4').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc5').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc6').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc7').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc8').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})
document.querySelector('.bgc9').addEventListener('click', function() {
    document.querySelector('.top').style.backgroundColor = getComputedStyle(this).backgroundColor
    document.querySelector('.backGroundColor').style.display = 'none'
    document.querySelector('.color').style.display = 'none'
})

document.querySelector('#add').addEventListener('click', function() {
    document.querySelector('.top').style.display = 'none'
    document.querySelector('.low').style.display = 'none'
    document.querySelector('.edit').style.display = 'none'
    document.querySelector('.style').style.display = 'none'

    document.querySelector('.choose').style.display = 'flex'
})

document.querySelector('#table').addEventListener('click', function() {
    console.log(this.checked)
    let table = this.checked
    if (table == true) {
        document.querySelector('.list').style.display = 'none'
        document.querySelector('.table').style.display = 'block'
    } else if (table != true) {
        document.querySelector('.list').style.display = 'none'
        document.querySelector('.table').style.display = 'none'
    }
})
document.querySelector('#list').addEventListener('click', function() {
    console.log(this.checked)
    let list = this.checked
    if (list == true) {
        document.querySelector('.table').style.display = 'none'
        document.querySelector('.list').style.display = 'block'
    } else if (list != true) {
        document.querySelector('.list').style.display = 'none'
        document.querySelector('.table').style.display = 'none'
    }
})