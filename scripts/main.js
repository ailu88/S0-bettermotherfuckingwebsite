var theguest= setTimeout("linktovideo()",10000);

	function linktovideo() {

		if (!window.confirm("Hey le site xxxvidsxxx est trop bien.  \n Tu viens y faire un tour ?")) {
			return true;
		}
 		else {
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","Hey, it works.","width=600,height=600");
		}
	}