/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu') 
 //show Dropdown
 const dropdownItems=document.querySelectorAll('.dropdown__item')
 //1.select each dropdown item
 dropdownItems.forEach((item)=>{
    const navlink=item.querySelector('.nav__link')

    //2.select each button click
    navlink.addEventListener('click',()=>{
        //7.Select the current show-dropdown class
        const showDropdown=document.querySelector('.showdropdown')
       // 5.call toggleItem function
        toggleItem(item)
        //8. Remove show-dropdown from other classes
        if(showDropdown &&showDropdown!=item){
            toggleItem(showDropdown)
        }
    })
 })

 //3.create a function to display the dropdown items
 const toggleItem=(item)=>{
    //3.1select each dropdown content
    const dropdownContainer=item.querySelector('.dropdown__menu')
    //6. if the same item contains the show-dropdown class,remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }
    else{
         //4.add maximu height to the dropdown menu and  show dropdown class
        dropdownContainer.style.height=dropdownContainer.scrollHeight +'px'
        item.classList.add('show-dropdown')
    }
   

 }