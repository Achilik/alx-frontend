function createElement(data) {
    let para = document.createElement("P");
    para.innerHTML = data;
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    req.onreadystatechange = function (event) {
      if(req.readyState === 4) {
            if(req.status === 200) { callback(JSON.parse(req.responseText).query.pages[21721040].extract) } 
            else {
                const error = new Error('Error');
                return callback(error, null);
                }
      }
    }
    req.send();
}

queryWikipedia(createElement);
