$(document).ready(function(){

	let mySnippets = {
		'snippetName' : snippetText
	}

  $('.setForm').on('click', function(){
  	let textFieldValue = $('.textField').val();
  	$('.debug').text(textFieldValue);

  	localStorage.setItem('snippetText', textFieldValue);

  });

   $('.setName').on('click', function(){
   	let nameFieldValue = $('.nameField').val();
   	$('.debug').text(nameFieldValue);

   	localStorage.setItem('myNameTextData', nameFieldValue);

  	
  });

  $('.getForm').on('click', function(){
  	let retrieveSnippet = localStorage.getItem('snippetText');
  	$('.debug').text(retrieveSnippet);
  });

  $('.getName').on('click', function(){
  	let retrieveName = localStorage.getItem('myNameTextData');
  	$('.debug').text(retrieveName);
  });
  // $('.textField').on('keyup', function(){
  // 	let textFieldValue = $('.textField').val();
  // 	$('.debug').text(textFieldValue);
  // });

});