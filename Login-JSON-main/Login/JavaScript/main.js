

function Check() { 

validateUserName();
Email()
// Password() 
Users()
// Differaccount()
}
function validateUserName(){
  
  var username=document.querySelector("#usrname").value;
  if ((username[0] === username[0].toUpperCase())  && username.length>6) {
    return username;
    }
  else{
   document.querySelector(".useralert").innerHTML="Username min 6 elementden ibaret olmali ve ilk herfi boyuk olmalidi!"
  }
}

function Email()
  {
     var mail=document.querySelector("#mail").value
  var mailre = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (mail.match(mailre))
    {
      return mail;
    }
    else
   {console.log("HI")
    document.querySelector(".mailalert").innerHTML="Email sehvdir!"

    return (false);
    
  }
  }
  
// function Password() {
//   var psswrd = document.querySelector("#pswrd");
//  let regforpswrd="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
//  if (psswrd.test(regforpswrd)===false) {

//   document.querySelector(".pswrdalert").innerHTML="Pasword yanlisdir"
//  }
// else{
//   return psswrd;
// }


//   }

function Users() {
  if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]))
  }
  var uname=document.getElementById("usrname").value;
  var e_mail=document.getElementById("mail").value;
  var pswrd=document.getElementById("pswrd").value;
  console.log(uname);
  console.log(e_mail);
  console.log(pswrd);
  let users=JSON.parse(localStorage.getItem('users'));
  users.push({
    NAME:uname,
    EMAIL:e_mail,
    // PASSWORD:psswrd
  })
  localStorage.setItem('users',JSON.stringify(users))
}

// function Differaccount() {
//   let users=JSON.parse(localStorage.getItem('users'));
//   users.forEach(element => {
//    if ( element.e_mail===users.Email && element.NAME===users.uname) {
//     alert("bu adli istifadeci artiq movcuddur...!")
//    }
    
//   });
// }

