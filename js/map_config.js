	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD

	var basemapURL = "YOUR_BASEMAP_HERE"
       		
		 var domainName= window.location.host;
		 var mapServiceDomain= window.location.host+":6080";
		 var arcgisserver = mapServiceDomain;

		 
	// change date in variables to last day of most recent update month
		  
	var updateDate = "<a href='http://www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "11/30/2015";
	var updateDate2 = "As of " + "11/30/2015"; // for dropdown menu in mobile view - index.html
	var updateDate3 = "11/30/2015";
	
	
	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	$(".lastUpdateDate2").html(updateDate3);
	
	
	// change these variable every month to value of most recent month of crash data
	
	// slidermonth == cur year (2009=0, 2015=6) * 12 + cur month  (Jan == 0, Dec == 11) so, 75 => April 2015 (6*12 = 72 + 3 = 75)
	// dropdownmonth == 0-11, Jan=0, Dec=11
	
	sliderMonth = 82; // October
	dropdownMonth = 10;