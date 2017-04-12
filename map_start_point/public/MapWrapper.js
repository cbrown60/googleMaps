var MapWrapper = function(container, coords, zoom,contentString){
  this.googleMap = new google.maps.Map(container,{
    center: coords,
    zoom:zoom,
    content:contentString
  })
}

MapWrapper.prototype = {

  addMarker: function(coords, contentString){

      var marker = new google.maps.Marker({
        position:coords,
        map: this.googleMap
      })

       var infowindow = new google.maps.InfoWindow({
             content: contentString
        })

      marker.addListener('click', function() {
          infowindow.open(this.googleMap, marker);
        })

  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap,'click',function(event){
     this.addMarker(event.latLng)
    }.bind(this))
  }
  


 

}






