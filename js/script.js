let get_sales_data = async() => {

await fetch('json/code-test.json')
      .then(function (response) {
               return response.json();
            })
            .then(function (data) {
			   var mainContainer = document.getElementById("jsondata");
            for (var i = 0; i < data.articles.length; i++) {
			var div = document.createElement("div");
                 div.innerHTML = '<div class="container"><div class="left-content"><h5 class="category"><a href="'+data.articles[i].link+'" target="_blank" title="'+data.articles[i].primarySectionRouteName+'">'+data.articles[i].primarySectionRouteName+'</h5></a><h2 class="heading-class">'+data.articles[i].headline+'</h2><p class="description">'+data.articles[i].standfirst+'.</p></div><div class="right-content"><div class="fake-img" ><img src="'+data.articles[i].thumbnail.src+'" alt="'+data.articles[i].thumbnail.title+'"></div></div></div><hr>';
                mainContainer.appendChild(div);
            }
            })
            .catch(function (err) {
                return err;
            });
			
}
get_sales_data();