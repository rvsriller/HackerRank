function processData(input) {
    data = input.trim().split("\n");
    
    numberContacts = data[0];

    var phoneBook = {};
    
    for (i = 1; i <= numberContacts ; i++) {
        
        let line = data[i].trim().split(" ");
        
        phoneBook[line[0]] = line[1];
    }
    
    
    for (; i < data.length; i++) {
        let result = phoneBook[data[i]];
        
        console.log( 
            (result != undefined)
            ? data[i] + "=" + result
            : "Not found"
        );
    }
} 