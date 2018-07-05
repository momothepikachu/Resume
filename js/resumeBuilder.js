// the data
model = {
	bio: {
	    name : 'Monica Rao',
	    role : 'Front-End Developer',
	    contacts : {
	          mobile: '571-210-0866',
	          email: 'monicaxrao@gmail.com' ,
	          github: 'momothepikachu',
	          location: 'Charlottesville, VA'
	      },
	    welcomeMessage: '" I\'m an organism that turns tea into code. "  by Momo Rao' ,
	    skills: ['HTML', 'CSS (SASS/SCSS)', 'JavaScript (VanillaJS, JQuery)', 'Git/GitHub', 'Python', 'Building and Automation Tools (Gulp)', 'Testing/Debugging (Jasmine)'],
	    biopic: 'https://s26.postimg.cc/8ftlo7isp/IMG_5286.jpg',
	    blog: 'https://medium.com/@monicaxrao',
	    linkedin: 'https://www.linkedin.com/in/xiaomonicarao/',
	    githublink: 'https://github.com/momothepikachu',
	    codepen: 'https://codepen.io/Momothepikachu/',
	    site: 'www.momorao.com'
	},
	education: {
		schools: [{
			name: 'University of Wisconsin-Madison',
			location: 'Madison, WI',
			degree: 'Master in Science',
			majors: ['Molecular Biology'],
			dates: '2013 - 2016'
		},
		{
			name: 'Sun Yat-Sen University',
			location: 'Guangzhou, China',
			degree: 'Bachelor in Science',
			majors: ['Biotechnology'],
			dates: '2009 - 2013'
		}],
		onlineCourses: [{
			title: 'Front-End Web Development Nanodegree',
			school: 'Udacity: Grow-With-Google Scholarship',
			dates: 'Mar. 2018 - Sep. 2018',
			url: 'https://s26.postimg.cc/6504xlxd5/google.png'
		}]
	},
	work: {
	    jobs: [{
		    employer: 'University of Wisconsin-Madison',
		    title: 'Research Assistant',
		    location: 'Madison, WI',
		    dates: '2013 - 2016',
		    description: 'Conducted multiple research projects on genome engineering and neuronal connectivity studies'
		}, 
		{
		    employer: 'University of Wisconsin-Madison',
		    title: 'Teaching Assistant',
		    location: 'Madison, WI',
		    dates: '2015 - 2016',
		    description: 'Managed ~300 students, led discussion classes, designed exam questions, and aided students during office hours'
	    }]
	},
	projects: {
		projects: [{
			title: 'Memory Game',
			dates: 'May 2018',
			description: 'The game board consists of eight different pairs of cards. Flip over two hidden cards at a time to locate the ones that match!',
			images: [
			'https://raw.githubusercontent.com/momothepikachu/memory-game/master/img/finishgame.gif']
		},
		{
			title: 'Front-End Classic Arcade Game',
			dates: 'Jun. 2018',
			description: 'Make your player reach the water, without colliding into any one of the enemies(bugs)!',
			images: [
			'https://raw.githubusercontent.com/momothepikachu/Classic-Arcade-Game-Clone/master/images/arcadegame.gif']			
		}]
	}
};

octopus = {
	init: function(){
		view.init();
	},
	getBioInfo: function(){
		return model.bio;
	},
	getProjectsInfo: function(){
		return model.projects.projects;
	},
	getWorkInfo: function(){
		return model.work.jobs;
	},	
	getSchools: function(){
		return model.education.schools;
	},
	getOnlineCourses: function(){
		return model.education.onlineCourses[0];
	},					
	insertAfter: function(element, tag, oldData, newData){
		let newElement = element.replace(oldData, newData);
		$(tag).append(newElement);
		// var formattedHeaderName = HTMLheaderName.replace("%data%", work.jobs[job].location);
		// $(".work-entry:last").append(formattedLocation);		
	},
	insertBefore: function(element, tag, oldData, newData){
		let newElement = element.replace(new RegExp(oldData,'g'), newData);
		$(tag).prepend(newElement);	
	}	
}

view = {
	init: function(){
		this.bioDisplay();
		this.projectsDisplay();
		this.workDisplay();
		this.educationDisplay();
		this.googleMapDisplay();
		this.footerDisplay();
	},
	bioDisplay: function(){
		let info = octopus.getBioInfo();
		octopus.insertBefore(HTMLwebsite, "#header", "%data%", info.site);		
		octopus.insertBefore(HTMLheaderRole, "#header", "%data%", info.role);
		octopus.insertBefore(HTMLheaderName, "#header", "%data%", info.name);
		octopus.insertAfter(HTMLmobile, "#topContacts", "%data%", info.contacts.mobile);
		octopus.insertAfter(HTMLemail, "#topContacts", "%data%", info.contacts.email);
		octopus.insertAfter(HTMLgithub, "#topContacts", "%data%", info.contacts.github);
		octopus.insertAfter(HTMLlocation, "#topContacts", "%data%", info.contacts.location);
		octopus.insertAfter(HTMLbioPic, "#header", "%data%", info.biopic);
		octopus.insertAfter(HTMLwelcomeMsg, "#header", "%data%", info.welcomeMessage);
		octopus.insertAfter(HTMLskillsStart, "#header");
		for (let i=0; i<info.skills.length; i++) {
			octopus.insertAfter(HTMLskills, "#skills", "%data%", info.skills[i]);
		}
	},
	projectsDisplay: function(){
		let info = octopus.getProjectsInfo();
		octopus.insertAfter(HTMLprojectStart, "#projects");
		for (let i=0; i<info.length; i++){
			let project = info[i];
			let newEle = '<div class="project-'+i+'"></div>'
			octopus.insertAfter(newEle, ".project-entry");
			octopus.insertAfter(HTMLprojectTitle, ".project-"+i, "%data%", project.title);
			octopus.insertAfter(HTMLprojectDates, ".project-"+i, "%data%", project.dates);
			octopus.insertAfter(HTMLprojectDescription, ".project-"+i, "%data%", project.description);
			octopus.insertAfter(HTMLprojectImage, ".project-"+i, "%data%", project.images);
		}
	},
	workDisplay: function(){
		let info = octopus.getWorkInfo();
		octopus.insertAfter(HTMLworkStart, "#workExperience");
		for (let i=0; i<info.length; i++){
			let project = info[i];
			octopus.insertAfter(HTMLworkEmployer, ".work-entry", "%data%", project.employer+' - '+project.title);
			octopus.insertAfter(HTMLworkDates, ".work-entry", "%data%", project.dates);
			octopus.insertAfter(HTMLworkLocation, ".work-entry", "%data%", project.location);
			octopus.insertAfter(HTMLworkDescription, ".work-entry", "%data%", project.description);
		}
	},
	educationDisplay: function(){
		let schools = octopus.getSchools();
		let courses = octopus.getOnlineCourses();
		octopus.insertAfter(HTMLschoolStart, "#education");
		octopus.insertAfter(HTMLschoolName, ".education-entry", "%data%", courses.school+' -- '+courses.title);
		octopus.insertAfter(HTMLonlineDates, ".education-entry", "%data%", courses.dates);	
		octopus.insertAfter(HTMLonlineURL, ".education-entry", "%data%", courses.url);	

		for (let i=0; i<schools.length; i++){
			let project = schools[i];
			octopus.insertAfter(HTMLschoolName, ".education-entry", "%data%", project.name+' -- '+project.degree);
			octopus.insertAfter(HTMLschoolDates, ".education-entry", "%data%", project.dates);
			octopus.insertAfter(HTMLschoolLocation, ".education-entry", "%data%", project.location);
			octopus.insertAfter(HTMLschoolMajor, ".education-entry", "%data%", project.majors);
		}
	},
	googleMapDisplay: function(){
		$("#mapDiv").append(googleMap);	
	},
	footerDisplay: function(){
		let info = octopus.getBioInfo();
		octopus.insertAfter(HTMLfooterLinkedIn, "#footerContacts", "%data%", info.linkedin);
		octopus.insertAfter(HTMLfooterGitHub, "#footerContacts", "%data%", info.githublink);
		octopus.insertAfter(HTMLfooterBlog, "#footerContacts", "%data%", info.blog);
		octopus.insertAfter(HTMLfooterCodePen, "#footerContacts", "%data%", info.codepen);		
	}
}

octopus.init();