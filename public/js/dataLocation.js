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

    
// in ra dữ liệu của các địa điểm
let fetchArrLocal = data.local.map(item => {
    let result = "<div class='location'><a href='javascript:void(0)'><img src='" + item.images + "' class='local__img'>" +
        "<div class='local__back--gradient'><h2 class='location__name'>" + item.nameLocal + "</h2></div></a> </div>";
    return result;
});
document.getElementById('responsive').innerHTML = fetchArrLocal.join('');