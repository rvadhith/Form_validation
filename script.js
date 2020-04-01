// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

function checkUserName() {
    var user_name = document.getElementById("usertext").value;
    var user_name_allowed_characters = /^[A-Za-z0-9]+$/;

    if(user_name.length == 0){
        return false;
    }
    else if(user_name.length < 8 && user_name.length > 15){
        return false
    }
    else if(!(user_name_allowed_characters.test(user_name))){
        return false;
    }
    else{
        return true;
    } 
}

// checkUserName();

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail(){
    var email = document.getElementById("emailtext").value;
    var email_allowed_characters = /^[@._A-Za-z0-9]+$/;

    if(!(email_allowed_characters.test(email))){
        return false;
    }
    else{
        return true;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false


function checkPassword() {
    var password = document.getElementById("passwordtext").value;
    var upper_case = /^[A-Z]+$/;
    var lower_case = /^[a-z]+$/;
    var special_characters = /^[!@#$%^&*()_]+$/;
    var numeric = /^[0-9]+$/;

    var upper_case_check = upper_case.test(password);
    var lower_case_check = lower_case.test(password);
    var special_characters_check = special_characters.test(password); 
    var numeric_check = numeric.test(password);

    if(upper_case_check && lower_case_check && special_characters_check && numeric_check){
        return true;
    }
    else{
        return false;
    }

} 