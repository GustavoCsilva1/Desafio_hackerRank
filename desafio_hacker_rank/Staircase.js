
function staircase(n) {
    let symbol = '#'
    let input = ''
    let position = n - 1

    for (let line = 0; line < n; line++) {

        for (let column = 0; column < n; column++) {
            if (column < position) {
                input += ' '
            }
            else {
                input += symbol
            }
        }
    console.log(input)
    input = ''
    position -= 1
    }

}

staircase(3)