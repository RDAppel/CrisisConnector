
class BottomNavigation extends HTMLElement {
  
    constructor() {
      super();
      const nav_tag = document.createElement('nav');
      const ancor_tag = document.createElement('a');
      const ancor_tag1 = document.createElement('a');
      ancor_tag.innerHTML = "Home";
      ancor_tag1.innerHTML = "📞 Hotlines";
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          *{
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          nav{
            display: flex;
            justify-content: space-around;
            background: #8E2DE2;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  
            background: linear-gradient(to right, #4A00E0, #8E2DE2);
            opacity: 90%;
            padding: 12px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
  
          .nav-item{
            align-items: center;
            text-decoration: none;
            color: white;
            padding: 12px;
            justify-content: space-around;
          }
          
          .

        </style>
        <nav>
          <img src="../Assets/Icons/homeIcon.png"/>
          <a class="nav-item" href="#">
            ${ancor_tag.innerHTML}
          </a>
  
          <a class="nav-item" href="#">
            ${ancor_tag1.innerHTML}
          </a>
        </nav>
      `;

    }
  }
  
  customElements.define('bottom-navigation', BottomNavigation);
  