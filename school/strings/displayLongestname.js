// Topic: Strings, Arrays

function longest(names,n) {
    let longestName = names[0];

    for (let i = 1; i < names.length; i++) {
        if (longestName.length < names[i]?.length) {
            longestName = names[i];
        }
    }
    return longestName;
}

longest(["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"], 5);
