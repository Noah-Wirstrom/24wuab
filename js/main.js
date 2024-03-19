document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('scrollToAbout').addEventListener('click', function() {
    
        document.getElementById('about').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    document.getElementById('scrollToArbeten').addEventListener('click', function() {
    
        document.getElementById('work').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    document.getElementById('scrollToUtbildning').addEventListener('click', function() {
    
        document.getElementById('education').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });


});



    
   