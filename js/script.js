/* 
@params fetch - get the data on json file in code-test.json.
@params async - run the api asynchronously.
@params await - wait the data comes from json file.
@params appendChild - this function append the multiple child dive in main div.
@params mainContainer - this is container append all the data on html using id.
@params createElement - Create a empty div.
@params Object.keys(data).length - check json file empty or not.
@params innerHTML - append the html in main container div.
@params error.json file inside the error folder all errors in this file.
*/

import errorMessage from '../error/error.json' assert { type: 'json' };

async function getData() {
  let errorEmpty = errorMessage.EMPTY;
  await fetch('json/code-test.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var mainContainer = document.getElementById('jsondata');
      if (!Object.keys(data).length) {
        var div = document.createElement('div');
        div.innerHTML =
          '<div class="container-class"><div class="leftcontent-class"><h5 class="error-class">' +
          errorEmpty.error +
          '</h5></div></div>';
        mainContainer.appendChild(div);
      } else {
        for (var i = 0; i < data.articles.length; i++) {
          var div = document.createElement('div');
          div.innerHTML =
            '<div class="container-class"><div class="leftcontent-class"><h5 class="category-class"><a href="' +
            data.articles[i].link +
            '" target="_blank" title="' +
            data.articles[i].primarySectionRouteName +
            '">' +
            data.articles[i].primarySectionRouteName +
            '</h5></a><h2 class="heading-class">' +
            data.articles[i].headline +
            '</h2><p class="description-class">' +
            data.articles[i].standfirst +
            '.</p></div><div class="rightcontent-class"><div class="fakeimg-class" ><img src="' +
            data.articles[i].thumbnail.src +
            '" alt="' +
            data.articles[i].thumbnail.title +
            '"></div></div></div><hr>';
          mainContainer.appendChild(div);
        }
      }
    })
    .catch(function (err) {
      var mainContainer = document.getElementById('jsondata');
      var div = document.createElement('div');
      div.innerHTML =
        '<div class="container-class"><div class="leftcontent-class"><h5 class="error-class">' +
        errorEmpty.error +
        '</h5></div></div>';
      mainContainer.appendChild(div);
    });
}
getData();
