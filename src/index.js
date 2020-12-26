import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const con = 5279;
class HelloChemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInput : "",
      display: true,
      snakeDisp: true,
      email: ""
    };

    this.print = this.print.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginPage = this.loginPage.bind(this);
    this.mainPage = this.mainPage.bind(this);
    this.logoutPage = this.logoutPage.bind(this);
    this.getEmail= this.getEmail.bind(this);
  }

handleChange(event) {
  this.setState ({
      userInput: event.target.value
  });
}
loginPage(){
  this.setState ({
      display: true
  });
}

mainPage(){
  if(this.state.userInput==con) {
    this.setState ({
        display: false
    });
  } else {
    console.log(this.state.userInput + " is wrong code")
    this.setState ({
      userInput: ""
  });
  }
}

logoutPage(){
      this.setState ({
          display: false
      });
}
print() {
    console.log(this.state.userInput)
}

getEmail(event) {
    this.setState ({
        email: event.target.value
    });
}

render() {
    if(this.state.display) {
        return(
          <div id="main2">
              <h1 id="title">Beta Code Please</h1>
              <input id="box" type="text" value={this.state.userInput} onChange={this.handleChange}/>
              <button id="button" className="header" onClick={this.mainPage}>verify</button>
          </div>
        );
    } else{
      return(          
        <div>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>c-row</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
 
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

        <link href="styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Welcome</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    try using desktop mode!
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">C-ROW</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Welcome to our lives</h2>
                    <a class="btn btn-primary js-scroll-trigger" href="#about">Dive in</a>
                </div>
            </div>
        </header>
        <section class="about-section text-center" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Find our projects here</h2>
                        <p class="text-white-50">
                            Pojects from <a href="https://github.com/chemotharepy" target="_blank" rel="noreferrer">chemosenpai </a>
                            and <a href="https://codepen.io/why_though" target="_blank" rel="noreferrer">whythough</a>
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src="https://source.unsplash.com/collection/2512863/1650x466" alt="asfas"/>
            </div>
        </section>
        <section class="projects-section bg-light" id="projects">
            <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/pexels-swapnil-sharma-5540306.jpg" alt="" /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>We recommend you to get a good internet speed to play our games</h4>
                            <p class="text-black-50 mb-0">Please! <a href="https://fast.com/" target="_blank" rel="noreferrer">Click here</a> to test your internet</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-01.jpg" alt="" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">smol game</h4>
                                    <p class="mb-0 text-white-50"><a href="https://codepen.io/swapnil-sharma/pen/XWdwPLX" rel="noreferrer">currently working on it</a></p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-02.jpg" alt="" /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Find our small projects here</h4>
                                    <p class="mb-0 text-white-50"><a href="https://codepen.io/why_though" target="_blank" rel="noreferrer">Open</a></p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="signup-section" id="signup">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Subscribe to get info about this beta program</h2>
                        <form class="form-inline d-flex">
                            <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..."  value={this.state.email} onChange={this.state.getEmail}/>
                            <button class="btn btn-primary mx-auto" type="submit" onClick={window.open("swapnil.sharma1998@outlook.com")}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="contact-section bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="https://discord.gg/m5HRfWmb" target="_blank" rel="noreferrer">find us on discord server for now</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="#!">swapnil.sharma1998@outlook.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">+91 7694-930899</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-reddit"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        
        <footer class="footer bg-black small text-center text-white-50"><div class="container">Copyright © chemo and whythough</div></footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

        <script src="scripts.js"></script>
    </body>
    </div>
        
      );
    }
}

}
ReactDOM.render(<HelloChemo />, document.getElementById('root'));

reportWebVitals();