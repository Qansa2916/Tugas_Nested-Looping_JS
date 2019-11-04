function Nested(value) {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i][0])
        console.log(value[i][1])
        console.log(value[i][2])
        console.log('\n')
    }
}
var Ntarray = [
    [1, 2, 3],
    ['mark', 'bill', 'elon'],
    ['FB', 'Ms', 'Tl']
]
Nested(NTarray)