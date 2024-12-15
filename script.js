const sumEv = (n) => {
    let sum = 0
    for (i = 0; i <= n; i += 2) {
        if (n % 2 == 0) sum += i
        else n -= 1
    }
    return sum
}
const sumEven = () => {
    
    let n = Number(prompt("Enter A Number"))

    alert(`Sum Of even numbers between 2 to ${n} is  ${sumEv(n)}`)
}