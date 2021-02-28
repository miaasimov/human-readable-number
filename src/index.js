module.exports = function toReadable(n) {
    const ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const x = {
        3: "hundred",
        4: "thousand",
    };

    if (n === 0) {
        return ones[n];
    }

    const ns = n.toString();

    let result = "";
    for (let i = 0; i < ns.length; i++) {
        const r = +ns.substring(i);
        if (ns.length - i === 1) {
            if (r == 0) {
                break;
            }
            result += " " + ones[+ns[i]];
        } else if (ns.length - i === 2) {
            if (r == 0) {
                break;
            }
            if (r < 20) {
                result += " " + ones[r];
                break;
            }
            result += " " + tens[+ns[i]];
        } else {
            result += " " + ones[+ns[i]] + " " + x[ns.length - i];
        }
    }

    return result.trim();
};
