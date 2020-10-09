// results.html

// changing appearance of input names for a result list
 const resultNames = {
     name: 'Name',
     email: 'Email',
     age: 'Age',
     message: 'Message'
 };

 // reaching the results in the url and placing them in the page
 const resultsList = document.getElementById('results')
 new URLSearchParams(window.location.search).forEach((value, name) => {
     resultsList.append(`${resultNames[name]}: ${value}`)
     resultsList.append(document.createElement((`br`)))
 }); 
 