var data = null;

$.ajax(
    {
        url: "./data.json",
        dataType: "json",
        async: false,
        success: function (res) {
            data = res;
        }
    });


// in các địa điểm dưới footer
let fetchArrLocalFooter = data.local.map(item => {
    let result = '<a href=""><li>Homestay ' + item.nameLocal + '</li></a>';
    return result;
});
document.getElementById('listLocalHomestay').innerHTML = fetchArrLocalFooter.join('');