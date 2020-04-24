var data = null;
var numView = 4;

$.ajax(
    {
        url: "./data.json",
        dataType: "json",
        async: false,
        success: function (res) {
            data = res;
        }
    });


function getDataTour(data, page = 1) {
    let start = (page - 1) * numView;
    let end = page * numView;

    let fetchArrTours = data.map(item => {
        let result = '<div class="tours__item">' +
            '<img src="' + item.image + '" alt="" class="tours__img--grid">' +
            '<div class="tours__content"><h2 class=""><a href="detailTour.html">' + item.nameTour + '</a></h2>' +
            '<p class="hotel__describe"><img src="./public/images/clock.png" width="17px"> ' + item.day + '</p>' +
            '<a href="detailTour.html"> <p class="text-muted tours__describe tours__describe--over">' + item.describe + '</p></a></div>' +
            '<div class="tours__price--flex"><p>Chỉ từ</p><p class="tours__price--big">' + item.price.toLocaleString() + ' đ</p>' +
            '<a href="detailTour.html" class="tours__detail">Xem chi tiết</a></div></div>';
        return result;
    });
    document.getElementById('tours').innerHTML = fetchArrTours.slice(start,end).join('');
} 


$(document).ready(() => {
    $('.page-link-val').each(function() {
        let num = $(this).html();
        $(this).click(function() {
            getDataTour(data.tours, parseInt(num));
        })
    })
});

getDataTour(data.tours)

    

