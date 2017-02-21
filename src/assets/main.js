$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/2712583.json',
        datatype: 'jsonp',
        success: function(response) {
            $.each(response.courses.completed, function(index, course) {
                console.log(course.title);
            });
        }
    });
});