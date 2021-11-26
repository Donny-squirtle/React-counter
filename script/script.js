//1
let stringToLowCase = (string) => {
    string = string[0].toUpperCase() + string.toLowerCase().slice(1);
    return string;
}

console.log(stringToLowCase('asdASDsadsdASDGFASASsdfa'))
//2
let sayHello = (name) => {
    return name === "Mark" ? `Hi, ${name}!` : `Hello, ${name}!`;
}

console.log(sayHello('Mark'));
console.log(sayHello('Park'))
//3
let filterString = (arr, number) => {
    return arr.reduce((total, item) => {
        if (item.length < number) {
            total.push(item);
        }
        return total;
    }, []);
}

console.log(filterString(['asd', 'asd', 'asasdasd', 'a'], 4));