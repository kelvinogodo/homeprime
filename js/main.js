function displayMenu(){
    document.getElementById('nav-list').style.width='280px';
   };
   function closeMenu(){
    document.getElementById('nav-list').style.width='0px';
   };
   function showList(){
    document.getElementById('program-items').style.height='300px'
    document.getElementById('lander').style.marginTop='80px'
    document.getElementById('arrow-down').style.width='0px'
    document.getElementById('arrow-up').style.width='30px';
   };
   function menuClose(){
    document.getElementById('program-items').style.height='0px'
    document.getElementById('lander').style.marginTop='0px'
    document.getElementById('arrow-down').style.width='30px'
    document.getElementById('arrow-up').style.width='0px';
   };