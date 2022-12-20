function alternate(s) {
    // Write your code here
    if(s.length === 1) {
        return 0
    }

    let uniquechar = [...new Set(Array.from(s))]

    let sArr = Array.from(s)

    let longest = 0


    for(let i = 0; i < uniquechar.length; i++){
        let el1 = uniquechar[i]

        for(let j = 0; j < uniquechar.length; j++) {
            let el2 = uniquechar[j]

            let temp = sArr.filter(filteredE1 => {
                return filteredE1 === el1 || filteredE1 === el2
            }).join('')


            if(temp.indexOf(el1+el1) === -1 && temp.indexOf(el2+el2) === -1){
                longest = Math.max(longest, temp.length)
            }
        }
    }
    return longest
}