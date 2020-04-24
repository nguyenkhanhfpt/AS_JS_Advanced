var data = null;
let numberView = 10;

$.ajax(
    {
        url: "./data.json",
        dataType: "json",
        async: false,
        success: function (res) {
            data = res;
        }
    });

// hàm in ra khách sạn
function getDataHotel(data, page = 1) {
    let start = (page - 1) * numberView;
    let end = page * numberView;
    let fetchArrHotelHome = data.map(item => {
        let result = '<div><a href="detailHotel.html" class="text-decoration-none"><img src="' + item.image + '" class="hotel__img">'
            + '<div class="hotel__info">' +
            '<span class="hotel__type">' + item.type + '</span>' +
            '<h2 class="hotel__name">' + item.name + '</h2>' +
            '<p class="hotel__describe">' + item.describe + '</p>' +
            '<p class="hotel__price">' + item.price.toLocaleString() + ' đ/đêm</p>' +
            '<p class="blockquote hotel__address">' + item.address + '</p> </div></a> </div>';
        return result;
    });

    document.getElementById('hotel').innerHTML = fetchArrHotelHome.slice(start,end).join('');
}


// phân trang để hiển thị khách sạn
$(document).ready(function () {
    $('#order').change(function () {
        let sort = $('#order').val();

        let arrNew = data.hotel.sort((a, b) => {
            if (sort === 'priceLow') {
                return a.price - b.price;
            }
            if (sort === 'priceHigher') {
                return b.price - a.price;
            }
        })
        getDataHotel(arrNew);
    });

    $('.page-link-val').each(function() {
        let num = $(this).html();
        $(this).click(function() {
            getDataHotel(data.hotel, parseInt(num));
        })
    })
})


// Thay đổi khách sạn khi đổi địa điểm
$(document).ready(function () {
    $('.location').each(function() {
        let local = $(this).find('.location__name').html();

        $(this).click(function() {
            let localFilterHotel = data.hotel.filter((item) => {
                var regex = new RegExp(local);;
                if (regex.test(item.address)) {
                    return item;
                }
            })
            $('.pagination').css({display: "none"});
            if(localFilterHotel.length) {
                getDataHotel(localFilterHotel);
            }
            else {
                document.getElementById('hotel').innerHTML = "<p>Địa điểm bạn mong muốn đến chưa có khách sạn nào được trên ứng dụng của chúng tôi!</p>";
            }
            
        })
    })
})

// sắp xếp khách sạn theo mặc định
getDataHotel(data.hotel);