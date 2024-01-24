 var $window = $(window);
    var nav = $('.fixed-button');
        $window.scroll(function(){
            if ($window.scrollTop() >= 200) {
             nav.addClass('active');
         }
         else {
             nav.removeClass('active');
         }
     });
     function updateLocation(category) {
        var newUrl = "/admin/userList?size=10&page=0&part=" + category;

        window.location.href = newUrl;
    }
    $('.modifyB').on('click',function(){
        var parent = $(this).closest('tr');

        var userId = parent.find("input[name='userId']").val();
        var roles = parent.find("select[name='roles'] option:selected").val();
        console.log(roles)
        $.ajax({
            url: "/admin/updateRoles?userId=" + userId + "&roles=" + roles,
            type : "PUT",
            contentType:'application/json',
            success:function(response){
                window.location.href="/admin/userList";
            }
        })
    })
    $('.deleteB').on('click',function(){
        var parent = $(this).closest('tr');

        var userId = parent.find("input[name='userId']").val();
        $.ajax({
            url: "/admin/deleteUser?userId=" + userId,
            type : "DELETE",
            contentType:'application/json',
            success:function(response){
                window.location.href="/admin/userList";
            }
        })
    })