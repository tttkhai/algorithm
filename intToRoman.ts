function intToRoman(num) {
    const mapNumberToRomanCharacter = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'L': 50,
        'XL': 49,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    let remaining = num;
    let result = "";
    while(remaining > 0) {
        for(let [char, value] of Object.entries(mapNumberToRomanCharacter)) {
            if(remaining >= value) {
                result += char;
                remaining -= value;
                continue;
            }
        }
    }

    return result
};

intToRoman(1994)