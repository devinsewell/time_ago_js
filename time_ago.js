function timeAgo(time_og){
		//just call the function timeAgo(UNIX_TIMESTAMP) <<replace UNIX_TIMESTAMP with a timestamp ie. 1416611970
		var periods = new Array("second", "minute", "hour", "day", "week", "month", "year", "decade");
		var lengths = new Array("60","60","24","7","4.35","12","10");
		var now = new Date().getTime() / 1000; //time in seconds since 1970
		var difference = now - time_og;
		for(var j = 0; difference >= lengths[j] && j < lengths.length-1; j++) {
			difference /= lengths[j];
		}
		difference = Math.floor(difference);
		if(difference != 1) {
			periods[j]+= "s";
		}
		/* remove this > */ alert(difference+" "+periods[j] + " ago");
		return  difference+" "+periods[j] + " ago";
	}
