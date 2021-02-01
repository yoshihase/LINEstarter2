var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
//    
        var date = $('input[name="date"]').val();
        var msg = `${key}\n予約：${date}`;
        sendText(msg);

        return false;
    });
});
