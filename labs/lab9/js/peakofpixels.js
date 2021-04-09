document.getElementById('cont').onclick = function(){grow();};
function grow(){
    var element = document.getElementById('cont');
    var height=height*1.1;
    var width=width*1.1;
    document.getElementById('cont').style.height= height+"px" 
    document.getElementById('cont').style.width= width+"px"  
}