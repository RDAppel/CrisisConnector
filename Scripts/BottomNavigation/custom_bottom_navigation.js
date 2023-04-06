window.customElements.define('bottom-navigation', class extends HTMLElement
{
    constructor()
    {
        super(); //Calling the constructor of the HTMLElement class and not the Skills 
        const bottom_navigation_tag = document.querySelector('bottom-navigation');
        const unorderList_tag = document.createElement('ul');
        const list_tag_home = document.createElement('li');
        const list_tag_hotline = document.createElement('li');
        list_tag_home.innerHTML= "Home";
        list_tag_hotline.innerHTML= "Hotline";
        // Appending
        bottom_navigation_tag.appendChild(unorderList_tag);
        unorderList_tag.appendChild(list_tag_home);
        unorderList_tag.appendChild(list_tag_hotline);


    }
});