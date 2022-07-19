var Smosa_price = 10,
    Kachori_price = 12,
    Vadapav_price = 60,
    Maggi_price = 50;

var somsa_q,
    Kachori_q,
    Vadapav_q,
    Maggi_q = 0;

var smosaPriceshow = '',
    kachoriPriceshow = '',
    vadapavPriceshow = '',
    maggipriceshow = '';

//OR we can replace and short the code like in below.
/* document.getElementById('name').addEventListener('keyup', function () {
    var name = document.getElementById('name').value;
    document.getElementById('name2').innerHTML = name;
});
 */

document.getElementById('name').addEventListener('keyup', function () {
    //var name = this.value;
    document.getElementById('name2').innerHTML = this.value;
});

document.getElementById('email').addEventListener('keyup', function () {
    document.getElementById('email2').innerHTML = this.value;
});

document.getElementById('smosa').addEventListener('keyup', function () {
    if (this.value == '' || this.value == 0) {
        /* document.getElementById('bill').innerHTML = ''; */
        smosaPriceshow = '';
        somsa_q = 0;
        showbill();
    } else {
        somsa_q = this.value;
        smosaPriceshow =
            '<tr><td>Smosa</td><td>Rs.' +
            Smosa_price +
            '</td><td>' +
            somsa_q +
            '</td><td>' +
            Smosa_price +
            ' = ' +
            Smosa_price * somsa_q +
            ' </td></tr>';
        showbill();
    }
});

document.getElementById('kachori').addEventListener('keyup', function () {
    if (this.value == '' || this.value == 0) {
        /* document.getElementById('bill').innerHTML = ''; */
        kachoriPriceshow = '';
        Kachori_q = 0;
        showbill();
    } else {
        Kachori_q = this.value;
        kachoriPriceshow =
            '<tr><td>Kachori</td><td>Rs.' +
            Kachori_price +
            '</td><td>' +
            Kachori_q +
            '</td><td>' +
            Kachori_price +
            ' = ' +
            Kachori_price * Kachori_q +
            ' </td></tr>';
        showbill();
    }
});

document.getElementById('vadapav').addEventListener('keyup', function () {
    if (this.value == '' || this.value == 0) {
        /* document.getElementById('bill').innerHTML = ''; */
        vadapavPriceshow = '';
        Vadapav_q = 0;
        showbill();
    } else {
        Vadapav_q = this.value;
        vadapavPriceshow =
            '<tr><td>Vadapav</td><td>Rs.' +
            Vadapav_price +
            '</td><td>' +
            Vadapav_q +
            '</td><td>' +
            Vadapav_price +
            ' = ' +
            Vadapav_price * Vadapav_q +
            ' </td></tr>';
        showbill();
    }
});

document.getElementById('maggi').addEventListener('keyup', function () {
    if (this.value == '' || this.value == 0) {
        /* document.getElementById('bill').innerHTML = ''; */
        maggipriceshow = '';
        Maggi_q = 0;
        showbill();
    } else {
        Maggi_q = this.value;
        maggipriceshow =
            '<tr><td>Maggi</td><td>Rs.' +
            Maggi_price +
            '</td><td>' +
            Maggi_q +
            '</td><td>' +
            Maggi_price +
            ' = ' +
            Maggi_price * Maggi_q +
            ' </td></tr>';
        showbill();
    }
});

function showbill() {
    document.getElementById('bill').innerHTML =
        smosaPriceshow + kachoriPriceshow + vadapavPriceshow + maggipriceshow;

    /* to dispaly total sum */

    document.getElementById('amount').innerHTML =
        Smosa_price * somsa_q +
        Kachori_price * Kachori_q +
        Vadapav_price * Vadapav_q +
        Maggi_price * Maggi_q;
}
