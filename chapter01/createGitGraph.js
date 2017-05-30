function createGitGraph(canvasId) {
	var canvas = document.getElementById(canvasId);
	
	var myTemplateConfig = {
		colors: [ "#d88", "#8d8", "#88d", "#dd8", "#d8d"], // branches colors, 1 per column
		branch: {
			lineWidth: 8,
			spacingX: 50,
			showLabel: true,                  // display branch names on graph
		},
		commit: {
			spacingY: -80,
			dot: {
				size: 12
			},
			message: {
				displayAuthor: false,
				displayBranch: true,
				displayHash: false,
				font: "normal 12pt Arial"
			},
			shouldDisplayTooltipsInCompactMode: false, // default = true
			tooltipHTMLFormatter: function ( commit ) {
				return "" + commit.sha1 + "" + ": " + commit.message;
			}
		}
	};
	var myTemplate = new GitGraph.Template( myTemplateConfig );

	var gitgraph = new GitGraph({
		elementId: canvasId,
		template: myTemplate,
		orientation: "vertical",
		mode: "compact"
	});

	var master = gitgraph.branch("master");
	master.commit("init");
	master.commit("init gulp + folder structure");

	var staging = master.branch("staging");
	staging.commit("something on staging");
	staging.merge(master);

	var stepIdx = 0;
	gitgraph.canvas.addEventListener("click", function() {
		if (stepIdx >= steps.length) {
			return;
		}

		steps[stepIdx++]();
	});

	var branches = {
		master: master,
		staging: staging
	};


	var steps = [
		
	];

	function addStep(stepFunction) {
		steps.push(stepFunction.bind(branches));
		return iface;
	}

	var iface = {
		addStep: addStep
	};

	return iface;
}