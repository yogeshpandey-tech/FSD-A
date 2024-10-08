// function sb() {
    
//     var username = document.getElementById("un").value;
//     var password = document.getElementById("ps").value;

   
//     if (username.length === 0 || password.length === 0) {
//         alert("Please fill in both username and password.");
//     } else {
    
//         alert("Form submitted successfully!");
        
//     }
// }

function validate() {
    var a = document.getElementById('un').value;
    var b = document.getElementById('ps').value;

    if(a.length < 10 || a.length == 0) return false;
    if(b.length < 10 || b.length == 0) return false;

    return true;

}


