$(document).ready(function(){
  var nameFieldValue;
  var textFieldValue;
  localStorage.clear();

  $('.setForm').on('click', function(){
  	  var obj = new Object();
  	  let nameFieldValue = $('.nameField').val();
  	  obj.name = nameFieldValue;
  	  let textFieldValue = $('.textField').val();
  	  obj.content = textFieldValue;
  	  var str = JSON.stringify(obj);
  	  $('.debug').text(textFieldValue);
  	  console.log(str);
  	  console.log(nameFieldValue);
  	localStorage.setItem(obj.name, str);

  });

  $('.getForm').on('click', function(){
  	  let name = localStorage.key(localStorage.length-1);
  	  let content = localStorage.getItem(name);
  	  let snippet = JSON.parse(content);
  	  let retrieveData = snippet['name'] + " " + snippet['content'];
  	$('.debug').text(retrieveData);

    });

    $('.displayAll').on('click', function(){
      var retrieveData = '';
        for(var i =0; i < localStorage.length; i++){
          let name = localStorage.key(i);
          let content = localStorage.getItem(name);
  	      let snippet = JSON.parse(content);
  	      retrieveData += snippet['name'] + "  " + snippet['content'] + ", ";
        }
      $('.debug').text(retrieveData);
      $('.getAll').text(retrieveForm);
  });

  $('.search').on('click', function(){
  	let storedVal = localStorage.getItem($('.nameField').val());
  	let snippet = JSON.parse(storedVal);
  	$('.debug').text(snippet.content);

  })

  $('.reset').on('click', function(){
  	localStorage.clear();
  	$('.debug').text('');
  })
  // $('.textField').on('keyup', function(){
  // 	let textFieldValue = $('.textField').val();
  // 	$('.debug').text(textFieldValue);
  // });

});