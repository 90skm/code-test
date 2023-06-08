import errorMessage from '../error/error.json' assert { type: 'json' }; /* Imported the error file */

async function getData() {
  let errorEmpty = errorMessage.EMPTY; /* Getting the error message as input */
  await fetch('json/code-test.json') /* Fetching the json data as input */
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      /* Success Part */ var mainContainer =
        document.getElementById(
          'jsondata'
        ); /* Main container appends the data on HTML.*/
      if (!Object.keys(data).length) {
        /* Checking the length of data.*/
        var div = document.createElement('div');
        div.innerHTML =
          '<div class="container-class"><div class="leftcontent-class"><h5 class="error-class">' +
          errorEmpty.error +
          '</h5></div></div>';
        mainContainer.appendChild(div); /* Append the html in main container*/
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
          mainContainer.appendChild(div); /* Append the html in main container*/
        }
      }
    })
    .catch(function (err) {
      /* Error Part */ var mainContainer =
        document.getElementById(
          'jsondata'
        ); /* Main container appends the data on HTML.*/
      var div = document.createElement('div');
      div.innerHTML =
        '<div class="container-class"><div class="leftcontent-class"><h5 class="error-class">' +
        errorEmpty.error +
        '</h5></div></div>';
      mainContainer.appendChild(div); /* Append the html in main container*/
    });
}
getData();
