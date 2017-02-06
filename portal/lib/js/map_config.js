	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD


   //// the domain will need to be modified to run this code locally /////

	var port = "6080";
	var isSSL = document.location.protocol;
	// console.log(isSSL);
	if (isSSL == "http:") {port = ":6080";}
	else if (isSSL == "https:") {port = ":6443";}

  	var domainName= window.location.host;
	var mapServiceDomain= window.location.host + port;
	arcgisserver = mapServiceDomain;
  




	var basemapURL = "//a841-dotweb01.nyc.gov/arcgis/rest/services/GAZETTEER/NYCDOT_Basemap_2013_Grey/MapServer";
	


	///// change date in variables to last day of most recent update month ////////////////////


	var updateDate = "<a href='//www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "12/31/2016";
	var updateDate2 = "As of " + "12/31/2016"; // for dropdown menu in mobile view - index.html
	var updateDate3 = "12/31/2016";
	var updateMessage = "";


	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	$(".lastUpdateDate2").html(updateDate3);
	$(".updateMessageDiv").html(updateMessage);
	$(".updateMessageDiv2").html(updateMessage);


	///// change these variable every month to value of most recent month of crash data

	// slidermonth == cur year (2009=0, 2015=6, 2016=7) * 12 + cur month  (Jan == 0, Dec == 11) so, 75 => April 2015 (6*12 = 72 + 3 = 75)
	// dropdownmonth == 0-11, Jan=0, Dec=11

	sliderMonth = 95; // Dec 2016
	dropdownMonth = 11; // Dec 2016
