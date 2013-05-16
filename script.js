function validate()
{
var email = document.myForm.email.value;
   if( document.myForm.username.value == "" )
   {
     alert( "masukin usernamenya cuk!" );
     document.myForm.username.focus() ;
	 document.myForm.username.style.background = 'Yellow'; 
     return false;
   }
    if( document.myForm.pwd.value == "" )
   {
     alert( "masukin pwd dong!" );
     document.myForm.pwd.focus() ;
	 document.myForm.pwd.style.background = 'Yellow'; 
     return false;
   }
   if( email == "" )
   {
     alert( "masukin email!" );
     document.myForm.email.focus() ;
     return false;
   }
    if(!IsValidEmail(email) )
   {
     alert( "yang valid dong emailnya!" );
     document.myForm.email.focus() ;
     return false;
   }
   if( document.myForm.phone.value == "" ||
           document.myForm.phone.value.length <= 9 )
   {
     alert( "masukin notelp" );
     document.myForm.phone.focus() ;
     return false;
   }
    if( isNaN( document.myForm.phone.value ) )
   {
     alert( "number cuk!" );
     document.myForm.phone.focus() ;
     return false;
   } 
   if( document.myForm.city.value == "" )
   {
     alert( "masukin city!" );
     return false;
   }
   else
   {
   formSubmit();
   }
   return( false );
}

function IsValidEmail(email)
{
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return filter.test(email);
}

function formSubmit()
{
//document.getElementById("myForm").submit();
//alert("okecuk"); //sekitar sini ya act nya harusnya
document.getElementById('stat').innerHTML='<font color=green size=13><b>Oke, terimakasih </font></b><br>';
}

/* function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    //if(theEvent.preventDefault) theEvent.preventDefault();
  }
   theEvent.returnValue = true;
  } */