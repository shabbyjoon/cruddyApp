$(document).ready(function(){
  var nameFieldValue;
  var textFieldValue;
   
   var mySnippets = {
	  	'myNameTextData' : nameFieldValue,
	    'myFormTextData' : textFieldValue
	    }

  $('.setForm').on('click', function(){
  	let textFieldValue = $('.textField').val();
  	$('.debug').text(textFieldValue);

  	localStorage.setItem('myFormTextData', textFieldValue);

  });

   $('.setName').on('click', function(){
   	let nameFieldValue = $('.nameField').val();
   	var mySnippets = {
	 	'myNameTextData' : nameFieldValue,
		'myFormTextData' : textFieldValue
	 }
   	$('.debug').text(nameFieldValue);

  console.log(nameFieldValue);
   	localStorage.setItem('myNameTextData', nameFieldValue);

  	
  });

  $('.getForm').on('click', function(){
  	let retrieveData = localStorage.getItem('myFormTextData');
  	$('.debug').text(retrieveData);
  });

  $('.getName').on('click', function(){
  	let retrieveData = localStorage.getItem('myNameTextData');
  	$('.debug').text(retrieveData);
  });

    $('.displayAll').on('click', function(){
    let retrieveName =localStorage.getItem('myNameTextData');
    let retrieveForm = localStorage.getItem('myFormTextData')
    $('.debug').text(retrieveName);
    $('.getAll').text(retrieveForm);
  });
  // $('.textField').on('keyup', function(){
  // 	let textFieldValue = $('.textField').val();
  // 	$('.debug').text(textFieldValue);
  // });

});