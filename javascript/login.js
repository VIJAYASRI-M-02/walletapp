const field=document.getElementById('email');
const fld=document.getElementById('password');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');
var alerttxt="email required";

function IsEmpty(field,fld)
{
    objectvalue = field.value.length;
    if(objectvalue=="")
    {
        alert("Oops.. Please fill out the value of "+fld);
        objectfield.style.background = 'Yellow';
        return false;
    }
    else
        return true;
}

function validate_email(field,alerttxt)
{
    with (field)
    {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");
        if (apos<1||dotpos-apos<2){
            alert(alerttxt);return false;
        }
        else if(field.value=='' || field.value==null){
            
            alert(alerttxt);return false;
        }
        else {
            return true;
        }
    }
}

function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
 
    } else {
        fld.style.background = 'White';
    }
   return true;
}


