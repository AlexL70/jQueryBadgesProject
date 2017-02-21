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
                courseDiv.append($('<img>').attr('src', course.badge));
                var anchor = $('<a>');
                anchor.attr('href', course.url);
                anchor.attr('target', '_blank');
                anchor.addClass('btn');
                anchor.addClass('btn-primary');
                anchor.html('See Course');
                courseDiv.append(anchor);
                badges.append(courseDiv);
            });
        }
    });
});