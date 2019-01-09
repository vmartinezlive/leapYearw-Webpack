import { Leapyear } from './leapyear';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#year").val());
    var output = Leapyear(input);

    $(".answer").text(output);
  });
});
