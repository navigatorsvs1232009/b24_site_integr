$document.ready(function () {
  $(".crm-form").on("submit", function (event) {
    event.preventDefault();
    var form = $(this);
    $ajax({
      type: "POST",
      url: "/ajax/sendlead.php",
      data: new FormData(this),
      proccessData: false,
      contentType: false,
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error);
      },
    });
    $("#th-modal").mosal();
  });
});
