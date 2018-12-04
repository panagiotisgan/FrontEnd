$(document).ready(function () {
        $('#myModal').on('show.bs.modal', function (e) {
            var image = $(e.relatedTarget).attr('src');
            $(".modal-content").attr("src", image);
        });
});

// When the user clicks on <span> (x), close the modal
$(document).ready(function () {
   $('.close').click(function(){
   $('#myModal,.close,#img01,#caption').css("display","none");
   });
});