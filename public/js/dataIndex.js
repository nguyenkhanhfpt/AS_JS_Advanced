var data = null;

$.ajax(
    {
        url: "./data.json",
        dataType: "json",
        async: false,
        success: function (res) {
            data = res;
        }
    }
);


// in ra dữ liệu của khách sạn
let fetchArrHotelHome = data.hotel.map(item => {
    let result = '<div><a href="detailHotel.html" class="text-decoration-none"><img src="' + item.image + '" class="hotel__img">'
        + '<div class="hotel__info">' +
        '<span class="hotel__type">' + item.type + '</span>' +
        '<h2 class="hotel__name">' + item.name + '</h2>' +
        '<p class="hotel__describe">' + item.describe + '</p>' +
        '<p class="hotel__price">' + item.price + ' đ/đêm</p>' +
        '<p class="blockquote hotel__address">' + item.address + '</p> </div></a> </div>';
    return result;
});

document.getElementById('hotelHome').innerHTML = fetchArrHotelHome.slice(0, 6).join('');



// in ra dữ liệu của tours
let fetchArrTours = data.tours.map(item => {
    let result = '<div class="col-6 col-lg-3 mb-3"><div class="shadow-sm tours__contai">' +
        '<a href="detailTour.html" class="text-decoration-none tours__link"><div class="tours__boxImg">' +
        '<img src="'+item.image+'" alt="" class="hotel__img tours__img"></div>' +
        '<div class="hotel__info tours__info"><div class="tours__name--textOver"><h2 class="hotel__name tours__name">'+item.nameTour+'</h2>' +
        '</div><p class="hotel__price tours__price">'+item.price.toLocaleString()+' đ</p><p class="hotel__describe"><img src="./public/images/clock.png" width="17px"> ' + item.day+
        '</p><p class="text-muted hotel__address tours__describe">' + item.describe + '</p></div></a></div></div>';
    return result;
});
document.getElementById('toursHome').innerHTML = fetchArrTours.slice(0, 4).join('');



// in ra dữ liệu của bình luận
let fetchArrComment = data.comment.map(item => {
    let result = '<div><div class="d-flex comment--cursor">' +
        '<img src="' + item.img + '" class="comment__imagePeo">' +
        '<div class="comment__content">' +
        '<p class="lead text-muted text-justify">"' + item.content + '"</p>' +
        '<p class="comment__name">' + item.name + '</p>' +
        '</div></div></div>';
    return result;
});
document.getElementById('comment').innerHTML = fetchArrComment.join('');






