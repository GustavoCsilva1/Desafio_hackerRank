function pageCount(n, p) {
    // Write your code here
    const nextPage = Math.floor(p/2)
    const backPage = Math.floor(n/2) - Math.floor(p/2)
    return Math.min(nextPage, backPage)
}