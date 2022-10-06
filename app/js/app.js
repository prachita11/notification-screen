function markAsRead(){
    var allElements = document.querySelectorAll(".notification");
    for(i=0; i<allElements.length; i++)
    { 
     allElements[i].classList.remove('unread');
    }
    document.getElementById("notification").classList.add('read');

}