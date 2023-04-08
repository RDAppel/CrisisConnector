class HomePage extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
      .container {
        display: flex;
        flex-direction: column;
        
        align-items: center;
        min-height: calc(100vh - 60px); /* Assuming the navbar is 60px tall */
        padding-top: 60px; /* Assuming the navbar is 60px tall */
      }

      .button {
        position: relative;
        padding: 30px 20px;
        border-radius: 28px;
        background-color: #fd746c;
        width: 25%;
        text-align: center;
        overflow: hidden;
        color: #FFF;
        border: none;
        margin-bottom: 10px;
        cursor: pointer;
        z-index: 1;
      }

      .button:hover .circle {
        transform: scale(10);
        z-index: -1;
        
      }

      .button-title {
        font-weight: bold;
        font-size: 30px;
      }

      .button-subtitle {
        font-size: 18px;
        margin-bottom: 20px;
        text-align: left;
        color: #FFF;
      }

      .button:hover .button-title {
        color: #512DA8;
      }

      .circle {
        position: absolute;
        top: -75px;
        right: -75px;
        height: 128px;
        width: 128px;
        background-color: #f9b234;
        border-radius: 50%;
        transition: all .5s ease;
        z-index: 0;
      }

      @media screen and (max-width: 768px) {
        .button {
          width: 60%;
        }

        .button-title {
          font-size: 24px;
        }

        .button-subtitle {
          font-size: 16px;
          text-align: center;
          width: 75%;
        }
      }
    </style>

    <div class="container">
      <button class="button">
        <div class="circle"></div>
        <div class="button-title">911</div>
      </button>
      <div class="button-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      <button class="button">
        <div class="circle"></div>
        <div class="button-title">National Lifeline</div>
      </button>
      <div class="button-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    </div>
    `;
  }
}

customElements.define('home-page', HomePage);
