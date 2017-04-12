var initialize = function(){
  center = {lat:55.953291, lng:-3.200000}
  chicago ={lat:41.878114, lng: -87.629798}
  content = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1 id="firstHeading" class="firstHeading">Edinburgh</h1>'+
                 '<div id="bodyContent">'+
                 '<p><b>Edinburgh</b>, also referred to as <b>Auld Reekie</b>, is the capital city ' 
                 '</div>'+
                 '</div>';

  var container = document.getElementById('main-map')
  var mainMap = new MapWrapper(container, chicago, 10)
  

 
  var chicagoClick = function() {
      mainMap.googleMap.setCenter(chicago);
      mainMap.googleMap.setZoom (8);
     
    };


  var button = document.querySelector('button')
  button.onClick = chicagoClick

 mainMap.addMarker(center,content)
 mainMap.addClickEvent()
 

}

window.onload = initialize


