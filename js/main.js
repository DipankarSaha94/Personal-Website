    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet1;
	var greet2;
    if (hrs < 12){
        greet1 = 'Good Morning';
	greet2 = 'Have a nice day!';
	}
    else if (hrs >= 12 && hrs <= 17){
        greet1 = 'Good Afternoon';
	greet2 = 'Hope you are enjoying your day!';
	}
    else if (hrs > 17 && hrs < 18){
        greet1 = 'Good Evening';
	greet2 = 'Hope you have a nice day!'
	}
    else if (hrs >= 18 && hrs <= 24){
        greet1 = 'Good Night';
	greet2 = 'Hope you have a nice day!';
	}

    document.getElementById('greet').innerHTML =
        '<b>' + greet1 + '</b> and Welcome to My Website, ' + greet2;



