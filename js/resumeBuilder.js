var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};

var bio = {
  'name': 'Deepanshu Sinha',
  'role': 'Android Developer',
  'contacts': {
    'mobile': "<a href='tel:+918892275587'>+918892275587</a>",
    'email': "<a href='mailto:107sinha@gmail.com'>107sinha@gmail.com</a>",
    'linkedin': "<a href='http://www.linkedin.com/in/deepanshu-sinha-b47622b0'>deepanshu-sinha-b47622b0</a>",
    'github': "<a href='https://github.com/sinhaDroid'>sinhaDroid</a>",
    'location': "<a href='#'>Bengaluru, India</a>"
  },
  'welcomeMessage': 'Specializing in developing Android apps, but curious about everything.',
  'skills': ['Software Engineering', 'Web Development', 'Android Development', 'HTML5/CSS3',
              'Python', 'Django', 'JavaScript', 'Java', 'Linux', 'NodeJs', 'ReactJs', 
              'GitHub', 'Project Management', 'Automation'],
  'biopic': './images/fry.jpg',
  'display': function() {
    var name = replaceData(bio.name, HTMLheaderName);
    var role = replaceData(bio.role, HTMLheaderRole).replace('<hr/>','');

    $('#header').prepend(role)
                .prepend(name);

    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').append(replaceData(bio.biopic, HTMLbioPic))
                .append(replaceData(bio.welcomeMessage, HTMLwelcomeMsg))
                .append(HTMLskillsStart);

    appendListOfObjects(bio.skills, '#skills', HTMLskills, '%data%');
  }
};

var education = {
  'schools': [
    {'name': 'RR Institute of Technology',
     'location': 'Bengaluru, India',
     'degree': 'Bachelor of Engineering',
     'majors': ['Computer Science Engineering'],
     'dates': 2016,
     'url': 'http://www.rrinstitutions.com/'
    },
    {'name': 'Dehradun Public School',
     'location': 'Ghaziabad, India',
     'degree': 'Inter School/SSLC',
     'majors': ['Science(PCM)'],
     'dates': 2012,
     'url': 'http://www.ddps.in/'
    },
    {'name': 'Ingraham Institute English School',
     'location': 'Ghaziabad, India',
     'degree': 'High School',
     'majors': ['Science(CS)'],
     'dates': 2010,
     'url': 'http://www.ingrahaminstitute.com/EnglishMediumSchoolICSE'
    }
  ],
  'onlineCourses': [
    {'title': 'Front-End Nanodegree',
     'school': 'Udacity',
     'date': 2017,
     'url': 'http://www.udacity.com'
    },
    {'title': 'Android Developer Nanodegree',
     'school': 'Udacity',
     'date': 2017,
     'url': 'http://www.udacity.com'
    },
    {'title': 'Intro To Programming',
     'school': 'Udacity',
     'date': 2017,
     'url': 'http://www.udacity.com'
    }
  ],
  'display': function() {
    for (var i in this.schools) {
      $('#education').append(replaceData(i, HTMLschoolStart));
      var id = '#school-entry-' + i;
      var school = this.schools[i];
      $(id).append((replaceData(school.name, HTMLschoolName) + replaceData(school.degree, HTMLschoolDegree))
           .replace('#', school.url))
           .append(replaceData(school.dates, HTMLschoolDates))
           .append(replaceData(school.location, HTMLschoolLocation))
           .append(replaceData(school.majors, HTMLschoolMajor));
    }

    $('#education').append(HTMLonlineClasses);
    for (var j in this.onlineCourses) {
      $('#education').append(replaceData(j, HTMLonlineStart));
      var id = '#online-entry-' + j;
      var online = this.onlineCourses[j];
      $(id).append(replaceData(online.title, HTMLonlineTitle) + replaceData(online.school, HTMLonlineSchool))
           .append(replaceData(online.date, HTMLonlineDates))
           .append(replaceData(online.url, HTMLonlineURL).replace('#', online.url));
    }
  }
};

var work = {
  'jobs': [
    {'employer': 'Newsway',
     'title': 'Android Developer',
     'location': 'Bengaluru, India',
     'dates': '2016-Present',
     'description': 'Building a product from scratch'
    },
    {'employer': 'SportsCafe',
     'title': 'Android Developer',
     'location': 'Bengaluru, India',
     'dates': '2016',
     'description': 'To provide real-time, engaging and interactive application to build the most preferred online sports portal for the Indian Sports Fan, and through it help develop India\'s Sports Culture. Creating the architecture for development and Validating the UI design which is given by designer. Developing the UI and implementing the functionalities with end to end testing. Handling release management and Focusing on further improvement of the product with the feedback\'s from the users.'
    },
    {'employer': 'Peersome',
     'title': 'Android Developer Intern',
     'location': 'Bengaluru, India',
     'dates': '2015-2016',
     'description': 'To Provide Scale and interactive application for Peersome, A self drive car rental service provider. Developing Complete Android Application for Customer as well as Vendors from Scratch.'
    },
    {'employer': 'Cheerz Labs!',
     'title': 'Software Developer Intern',
     'location': 'Bengaluru, India',
     'dates': '2015',
     'description': 'A Service Based Company which deals with the technical projects. Build a Responsive and Interactive Website for Clients.'
    }
  ],
  'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(replaceData(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((replaceData(job.employer, HTMLworkEmployer) + replaceData(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(replaceData(job.dates, HTMLworkDates))
           .append(replaceData(job.location, HTMLworkLocation))
           .append(replaceData(job.description, HTMLworkDescription));
    }
  }
};

var projects = {
  'projects': [
    {'title': 'Interactive Resume',
     'dates': '2017',
     'description': 'Nothing here... except for some kittens from placekitten.com',
     'images': [
       'http://placekitten.com/g/300/300',
       'http://placekitten.com/g/250/300',
       'http://placekitten.com/g/350/300'
     ]
    }
  ],
  'display': function() {
    for (var i in this.projects) {
      $('#projects').append(replaceData(i, HTMLprojectStart));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(replaceData(project.title, HTMLprojectTitle))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);


// $('#main').append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}