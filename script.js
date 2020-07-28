function fetchData(){
    // making the html content after the click hidden
    var container=document.getElementById("container");
    console.log('container',container);
    container.style.display = "none";

  
   


    $.get('https://codingninjas.in/api/v3/courses', function(data){
        console.log(data.status);
        var courses=data.data.courses;
        // console.log(courses);
        courses.map((course) => {
            var imageUrl=course.preview_image_url;
            var name= course.name;
            var id=course.course_group_id;


            var courseContainer= document.createElement('div');
                courseContainer.id="course-container";
            var imageContainer= document.createElement('div');
                imageContainer.className="image-container";
            var imageOfCourse= document.createElement('img');
                imageOfCourse.className="image-for-course";
            var detailContainer= document.createElement('div');
                detailContainer.className="detail-container";
            var nameContainer= document.createElement('div');
                nameContainer.className="name-container";

            var courseName= document.createTextNode(name);
            // console.log('courseName',courseName);
            imageOfCourse.src=imageUrl;
            
            nameContainer.appendChild(courseName);
            detailContainer.appendChild(nameContainer);
            imageContainer.appendChild(imageOfCourse);
            courseContainer.appendChild(imageContainer);
            courseContainer.appendChild(detailContainer);

            document.body.appendChild(courseContainer);

            var courseGroup=data.data.course_groups;
        courseGroup.map((group) => {
            var groupContainer= document.createElement('div');
            groupContainer.className="course-group-container";
           
            var groupId=group.id;
            if(groupId===id){
                var groupName=group.name;
                var nameOfGroup= document.createTextNode(groupName);
                groupContainer.appendChild(nameOfGroup);
                detailContainer.appendChild(groupContainer);
            }
            
            
        })

            // var courseGroup= document.createElement('div');
          
        });
        
        
    }).fail(function(xhr,textStatus, errorThrown){
        console.log("Request Failed");
    });
}

$(".button").click(fetchData);