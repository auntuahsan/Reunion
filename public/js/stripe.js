$("#btnPlaceOrder").click(async function () {
    let amount = $("#subtotal").text().replace('$','')

    const settings = {
        async: true,
        crossDomain: true,
        url: "./create-checkout-session",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        data: JSON.stringify({ amount: amount })
    }

    await $.ajax(settings).done(function (response) {
        if (response && response.url) {
            window.location.href = response.url
        }
    });

});


$(document).ready(function() {
    $('#product1').change(function() {
        if($(this).is(':checked')) {
            $('#product1Quantity').slideDown();
        } else {
            $('#product1Quantity').slideUp();
        }
        calculateSubtotal();
    });

    $('#product2').change(function() {
        if($(this).is(':checked')) {
            $('#product2Quantity').slideDown();
        } else {
            $('#product2Quantity').slideUp();
        }
        calculateSubtotal();
    });

    $('#product3').change(function() {
        if($(this).is(':checked')) {
            $('#product3Quantity').slideDown();
        } else {
            $('#product3Quantity').slideUp();
        }
        calculateSubtotal();
    });

    $('#product4').change(function() {
        if($(this).is(':checked')) {
            $('#product4Quantity').slideDown();
        } else {
            $('#product4Quantity').slideUp();
        }
        calculateSubtotal();
    });

    $('.quantity').change(function() {
        calculateSubtotal();
    });

    $('#increaseBtn1').click(function() {
        var currentValue = parseInt($('#quantity1').val());
        $('#quantity1').val(currentValue + 1);
        calculateSubtotal();
    });

    $('#decreaseBtn1').click(function() {
        var currentValue = parseInt($('#quantity1').val());
        if(currentValue > 1) {
            $('#quantity1').val(currentValue - 1);
            calculateSubtotal();
        }
    });

    $('#increaseBtn2').click(function() {
        var currentValue = parseInt($('#quantity2').val());
        $('#quantity2').val(currentValue + 1);
        calculateSubtotal();
    });

    $('#decreaseBtn2').click(function() {
        var currentValue = parseInt($('#quantity2').val());
        if(currentValue > 1) {
            $('#quantity2').val(currentValue - 1);
            calculateSubtotal();
        }
    });

    $('#increaseBtn3').click(function() {
        var currentValue = parseInt($('#quantity3').val());
        $('#quantity3').val(currentValue + 1);
        calculateSubtotal();
    });

    $('#decreaseBtn3').click(function() {
        var currentValue = parseInt($('#quantity3').val());
        if(currentValue > 1) {
            $('#quantity3').val(currentValue - 1);
            calculateSubtotal();
        }
    });

    $('#increaseBtn4').click(function() {
        var currentValue = parseInt($('#quantity4').val());
        $('#quantity4').val(currentValue + 1);
        calculateSubtotal();
    });

    $('#decreaseBtn4').click(function() {
        var currentValue = parseInt($('#quantity4').val());
        if(currentValue > 1) {
            $('#quantity4').val(currentValue - 1);
            calculateSubtotal();
        }
    });

    function calculateSubtotal() {
        var quantity1 = ($('#product1').is(':checked')) ? parseInt($('#quantity1').val()) : 0;
        var quantity2 = ($('#product2').is(':checked')) ? parseInt($('#quantity2').val()) : 0;
        var quantity3 = ($('#product3').is(':checked')) ? parseInt($('#quantity3').val()) : 0;
        var quantity4 = ($('#product4').is(':checked')) ? parseInt($('#quantity4').val()) : 0;

        var price1 = 175;
        var price2 = 150;
        var price3 = 50;
        var price4 = 40;

        var total1 = quantity1 * price1;
        var total2 = quantity2 * price2;
        var total3 = quantity3 * price3;
        var total4 = quantity4 * price4;

        $('#item1Quantity').text(`Main Event (Adult) x ${quantity1}`);
        $('#item1Total').text(`$${total1}`);
        $('#item2Quantity').text(`Main Event (Child) x ${quantity2}`);
        $('#item2Total').text(`$${total2}`);
        $('#item3Quantity').text(`Product 3 Quantity x ${quantity3}`);
        $('#item3Total').text(`$${total3}`);
        $('#item4Quantity').text(`Product 4 Quantity x ${quantity4}`);
        $('#item4Total').text(`$${total4}`);

        var subtotal = total1 + total2 + total3 + total4;
        $('#subtotal').text(`$${subtotal}`);
    }
});
