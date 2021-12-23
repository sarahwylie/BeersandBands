// we need to use an onClick method in JS to make the button retireve the user input
// that user input will be the parameters for the API call function:
// var searchEvents = function(city, startDate, endDate) {

$("#searchInput").on("keypress", function (e) {
  if (e.which === 13) {
    let city = this.value;
    console.log(city);
  }
});
$("#beginInput").on("click", function (e) {
  let city = this.value;
  console.log(city);
});
$("#endInput").on("keypress", function (e) {
  if (e.which === 13) {
    let city = this.value;
    console.log(city);
  }
});

$("#todo_list").on("click", "#delete", function () {
  $(this).parent().parent().remove();
});
