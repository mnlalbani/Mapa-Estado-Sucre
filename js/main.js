$(document).ready(function () {

    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.modal').modal();
    //$('#Bermudez').modal('open');
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip({ delay: 50 });


    for (var i = 0; i < layer1.length; i++) {

        layer1[i].mouseover(function (e) {
            this.node.style.opacity = 0.7;
        });

        layer1[i].mouseout(function (e) {
            this.node.style.opacity = 1;
        });

        layer1[i].click(function (e) {
            //console.log("'#"+this.data('id')+"'");
            $('#'+this.data('id')).modal('open');
            
        });
    }

});