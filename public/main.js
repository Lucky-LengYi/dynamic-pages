$(function () {
  $.ajax({
  url: "bookmarks.json",
}).done(function(data) {
  function getdata(nS) {
    return new Date(parseInt(nS)*1000).toLocaleString(/:\d{1,2}$/,'');
  }
    data.forEach(function (item) {
      console.log(getdata(item.created));
    });
  });
});
