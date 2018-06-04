function WhatsYourName(firstname,lastname) {
    
    firstname = document.getElementById('FirstName').value;
    lastname = document.getElementById('LastName').value;
    FullName = firstname + " " + lastname;

    let nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/g; 
    
    if (FullName.match(nameRegex)) {
        alert('Hi! Good to meet you!');
        console.log(true);  
    }
    else {
        alert('Oops! Please input a valid name!');
        console.log(false);
    }
}