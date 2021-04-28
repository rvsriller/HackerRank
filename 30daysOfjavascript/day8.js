/**
 * Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure
Task
Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. 
You will then be given an unknown number of names to query your phone book for. For each NAME queried, print the associated
entry from your phone book on a new line in the form name=phoneNumber; if an entry for NAME  is not found, print Not found instead. 
*/



function processData(input) {
    //Enter your code here
    //Separate each line of input in elements (array)
    data = input.trim().split("\n");
    
    //Total number of contacts - example: n = 3
    numberContacts = data[0];

    //create phoneBook list of objects
    var phoneBook = {};
    
    // Generate entries with name and phone using index of data array 
    //Considering the contact info is between position 1 and numberOfcontacts 
    for (i = 1; i <= numberContacts ; i++) {
        
        //Separates data info ['name', 'number']
        let line = data[i].trim().split(" ");
        
        //add number to phoneBook name (line[0])  number (line[1])
        phoneBook[line[0]] = line[1];
    }
    
    