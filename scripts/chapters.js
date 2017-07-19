(function() {
	function getParameterByName(name, url) {
		if (!url) {
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var posts = [
		{
			title: "Lessons Learned in SaaS Development - Introduction",
			url: "http://blog.edmdesigner.com/lessons-learned-in-saas-development/"
		},
		{
			title: "Git Branching Workflows in SaaS Development and the Review ASAP Policy",
			url: "http://blog.edmdesigner.com/git-branching-workflows-in-saas-development-and-the-reivew-asap-policy/"
		},
		{
			title: "Clean Code, Coding Patterns and Code Reviews"
		},
		{
			title: "Project Management at an SaaS Company"
		},
		{
			title: "Tools That Help Your Team To Be Productive"
		},
		{
			title: "Dockerize everything and Private NPM"
		},
		{
			title: "Creating Server Side APIs"
		},
		{
			title: "Creating Client Side APIs"
		},
		{
			title: "Easy to Integrate Whitelabel Software Components"
		}
	];

	var actStr = "[You are reading it now]";
	var scripts = document.getElementsByTagName("script");
	var actPostIdx = getParameterByName("p", scripts[scripts.length - 1].src);
	actPostIdx = parseInt(actPostIdx);

	document.write('<div id="posts-toc">');
	document.write('<p>Lessons Learned in SaaS Development</p>');

	document.write("<ul>");
	for (var idx = 0; idx < posts.length; idx += 1) {
		var act = posts[idx];

		document.write("<li>");

		if (act.url && idx !== actPostIdx) {
			document.write('<a href="' + act.url + '" target="_blank">');
		}

		document.write(act.title);

		if (idx === actPostIdx) {
			document.write(" [You are reading it right now.]");
		}

		if (act.url && idx !== actPostIdx) {
			document.write("</a>");
		}

		document.write("</li>");
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("<style>#posts-toc{border: 1px solid #e6e6e6;background: #fafafa;padding: 20px;margin: 20px;}</style>");
}());
