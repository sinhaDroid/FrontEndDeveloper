var bio = {
  "name": "Deepanshu Sinha",
  "role": "Android Developer",
  "contacts": {
    "mobile": "+918892275587",
    "email": "107sinha@gmail.com",
    "github": "sinhaDroid",
    "twitter": "deepanshu-sinha-b47622b0",
    "location": "Bengaluru, India"
  },
  "welcomeMessage": "Specializing in developing Android apps, but curious about everything.",
  "skills": ['Software Engineering', 'Web Development', 'Android Development', 'HTML5/CSS3',
            'Python', 'Django', 'JavaScript', 'Java', 'Linux', 'NodeJs', 'ReactJs', 
            'GitHub', 'Project Management', 'Automation'],
  "biopic": "./images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

for(i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

var work = {
  "jobs": [
    {
      "employer": "Newsway",
      "title": "Android Developer",
      "location": "Bengaluru, India",
      "dates": "2016-Progress",
      "description": "Building a product from scratch"
    },
    {
      "employer": "SportsCafe",
      "title": "Android Developer",
      "location": "Bengaluru, India",
      "dates": "2016-2016",
      "description": "To provide real-time, engaging and interactive application to build the most preferred online sports portal for the Indian Sports Fan, and through it help develop India\'s Sports Culture. Creating the architecture for development and Validating the UI design which is given by designer. Developing the UI and implementing the functionalities with end to end testing. Handling release management and Focusing on further improvement of the product with the feedback\'s from the users."
    },
    {
      "employer": "Peersome",
      "title": "Android Developer Intern",
      "location": "Bengaluru, India",
      "dates": "2015-2016",
      "description": "To Provide Scale and interactive application for Peersome, A self drive car rental service provider. Developing Complete Android Application for Customer as well as Vendors from Scratch."
    },
    {
      "employer": "Cheerz Labs!",
      "title": "Software Developer Intern",
      "location": "Bengaluru, India",
      "dates": "2015-2015",
      "description": "A Service Based Company which deals with the technical projects. Build a Responsive and Interactive Website for Clients."
    }
  ]
};

function displayWork() {

  if(work.jobs.length > 0) {
  
    $("#workExperience").append(HTMLworkStart);

    for(i in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

var education = {
  "schools": [
    {
      "name": "RR Institute of Technology",
      "location": "Bengaluru, India",
      "degree": "Bachelor of Engineering",
      "major": "Computer Science Engineering",
      "dates": "June 2012 - July 2016"
    },
    {
      "name": "Dehradun Public School",
      "location": "Ghaziabad, India",
      "degree": "Inter School/SSLC",
      "majors": "Science(PCM)",
      "dates": "June 2010 - April 2012"
    },
    {
      'name': 'Ingraham Institute English School',
      'location': 'Ghaziabad, India',
      'degree': 'High School',
      'majors': ['Science(CS)'],
      'dates': 'April 2006 - March 2010'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Nanodegree',
      'school': 'Udacity',
      'date': '2017',
      'url': 'http://www.udacity.com'
    },
    {
      'title': 'Android Developer Nanodegree',
      'school': 'Udacity',
      'date': '2017',
      'url': 'http://www.udacity.com'
    },
    {
      'title': 'Intro To Programming',
      'school': 'Udacity',
      'date': '2017',
      'url': 'http://www.udacity.com'
    }
  ]
};

function displayEducation() {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);      
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);      

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(i in education.onlineCourses) {       
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
    
  }
}

var projects = {
  'projects': [
    {
      'title': 'Interactive Resume',
      'dates': '2017',
      'description': 'Nothing here... except for some kittens from placekitten.com',
      'images': [
        'http://placekitten.com/g/300/300',
        'http://placekitten.com/g/250/300',
        'http://placekitten.com/g/350/300'
      ]
    },
    {
      'title': 'Interactive Resume',
      'dates': '2017',
      'description': 'Nothing here... except for some kittens from placekitten.com',
      'images': [
        'http://placekitten.com/g/300/300',
        'http://placekitten.com/g/250/300',
        'http://placekitten.com/g/350/300'
      ]
    }
  ]
};


function displayProject() {
  if(projects.projects.length > 0) {
    for(i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for(img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}

displayWork();
displayProject();
displayEducation();

$('#mapDiv').append(googleMap);