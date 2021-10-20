function ibg() {
    $.each($(".ibg"), (function (t, a) {
        $(this).find("img").length > 0 && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")')
    }))
}