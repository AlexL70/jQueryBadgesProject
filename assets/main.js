$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/2712583.json',
        datatype: 'jsonp',
        success: function(response) {
            var badges = $('#badges');
            $.each(response.courses.completed, function(index, course) {
                var courseDiv = $('<div></div>');
                courseDiv.addClass('course');
                courseDiv.append($('<h3></h3>').html(course.title));
                badges.append(courseDiv);
                console.log(course.title);
            });
        }
    });
});