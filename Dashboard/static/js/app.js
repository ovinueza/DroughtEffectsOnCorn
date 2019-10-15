function showdata() {
  /* data route */
  var url = "/data";
  d3.json(url).then(function(response) {
    console.log(response);
  });
}

showdata();
