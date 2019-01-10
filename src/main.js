import { Leapyear } from './leapyear';
import $ from 'jquery';

$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#year").val());
    var output = Leapyear(input);

    $(".answer").text(output);
  });
});
