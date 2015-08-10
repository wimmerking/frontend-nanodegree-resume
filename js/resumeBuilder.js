/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Andrew King",
	"role" : "Web Developer",
	"contacts" :
	{
		"email" : "wimmerking@gmail.com",
		"mobile" : "510-690-4765",
		"github" : "wimmerking",
		"location" : "San Fransisco, CA",
        "twitter" : "wimmerking"
	},

	"welcomeMessage" : "Hi there!",
	"PictureURL" : "images/me.jpg",
    "skills" : ["Programming", "Photography", "JS","Awesomeness"],

};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.PictureURL);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};
bio.display();

var work = {
    "jobs" : [
    {
        "employer": "DFS Green",
        "title" : ["Operations Manager", "Director Of Sales"],
        "location" : "Milbrae, CA",
        "dates" : "2010 -2015",
        "description" : "Scheduled crews and jobs, mobilizing teams as well as organizing a sales team"
    },
    {
        "employer" : "First Presbyterian Church of Hayward",
        "title" : "Assistant Youth Director",
        "location" : "Castro Valley, CA",
        "dates" : "2009-2015",
        "description" : "led outreach to youth and organized trips, fundraisers, and service projects. Mentored students and built relationships"

    }
    ]
};
function displayWork() {
for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    var formattedLocation = HTMLworkLocation. replace("%data%", work.jobs[job].location)
    $(".work-entry:last").prepend(formattedLocation);
}
};
displayWork();
var education = {
	"schools" : [
	{
		"name": "Chabot College",
		"city": "Hayward, CA",
		"degree": "BA",
		"major": ["Computer Science", "Business"],
		"dates" : 2013,
		"url" : "http://www.Chabotcollege.edu"
	},

	],
	"onlineCourses": [
{
	"title": "Front End Web Developer",
	"school" : "Udacity",
	"dates" : 2015,
	"url" : "http://www.udacity.com"
}
	]
};
education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);

        for(course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
				formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
				formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
				formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url),
				formattedOnlineCourses = HTMLonlineClasses + formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

			$(".education-entry").append(formattedOnlineCourses);
		}
    }
};
education.display();



var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"dates" : "2014",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. ",
		"images" : [
		"http://placehold.it/350x150","http://placehold.it/350x150",
		]
		}
]
};


projects.display =function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").prepend(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
};
projects.display();





$("#map-div").append(googleMap);
