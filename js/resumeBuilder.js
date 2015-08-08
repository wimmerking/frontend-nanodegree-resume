/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Andrew",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "wimmerking@gmail.com",
		"mobile" : "510-690-4765",
		"github" : "wimmerking",
		"location" : "San Fransisco"
	},
	"welcomeMessage" : "Hi there!",
	"skills" : [
	"awesomeness", "programming", "rock climbing", "JS"
	],
	"bioPic" : "images/me.jpg"
}

var education = {
	"schools" : [
	{
		"name": "Chabot College",
		"city": "Hayward, CA",
		"degree": "BA",
		"major": ["Compsci","Spanish"],
		"dates" : 2013,
		"url" : "http://www.Chabotcollege.edu"
	},
	{
		"name": "Udacity",
		"city": "Mountain View",
		"Degree": "nanodegree web Developer",
		"major": ["Compsci"]
	}
	],
	"onlineCourses": [
{
	"title": "Front End Web Developer",
	"school" : "Udacity",
	"dates" : 2015,
	"url" : "http://www.udacity.com"
}
	]
}
var work = {
	"jobs" : [
	{
		"employer": "DFS Green",
		"title" : ["Operations Manager", "Director Of Sales"],
		"location" : "Milbrae",
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
}
var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"dates" : "2014",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet augue sit amet elit consectetur faucibus. Morbi et tortor.",
		"images" : [
		"http://placehold.it/350x150","http://placehold.it/350x150","http://placehold.it/350x150","http://placehold.it/350x151"
		]
		}
]
}


if(bio.skills.length > 0)	{

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[3]);
	$("#skills").prepend(formattedSkill);
}

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
}
}
displayWork();

