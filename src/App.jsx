import './App.css'
import { useEffect} from "react";
function App() {

  /////// reveal and active elements \\\\\\\
  function revealStart() {
    const reveals = document.querySelectorAll(".reveal-top, .reveal-right, .reveal-left");
    let i = 0;

    function revealNext() {
      if (i < reveals.length) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 70;

        if (elementTop < windowHeight - elementVisible) {
          if (reveals[i].className.includes('reveal-top')) {
            reveals[i].classList.add("active-top");
          } else if (reveals[i].className.includes('reveal-righ')) {
            reveals[i].classList.add('active-right')
          } else if (reveals[i].className.includes('reveal-left')) {
            reveals[i].classList.add('active-left');
          }
        } else {
          reveals[i].classList.remove("active");
        }
        i++;
        setTimeout(revealNext, 100); // انتظار 1 ثانیه قبل از اجرای حلقه بعدی
      }

    }
    revealNext(); // شروع اجرای حلقه
  }

  function reveal() {
    const reveals = document.querySelectorAll(".reveal-top, .reveal-right, .reveal-left");

    for (let i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 35;

      if (elementTop < windowHeight - elementVisible) {
        if (reveals[i].className.includes('reveal-top')) {
          reveals[i].classList.add("active-top");
        } else if (reveals[i].className.includes('reveal-righ')) {
          reveals[i].classList.add('active-right')
        } else if (reveals[i].className.includes('reveal-left')) {
          reveals[i].classList.add('active-left');
        }
      } else {
        if (reveals[i].className.includes('reveal-top')) {
          reveals[i].classList.remove("active-top");
        } else if (reveals[i].className.includes('reveal-righ')) {
          reveals[i].classList.remove('active-right')
        } else if (reveals[i].className.includes('reveal-left')) {
          reveals[i].classList.remove('active-left');
        }
      }
    }
  }


  window.addEventListener("scroll", (e) => {
    if (document.body.className == 'active-loader') {
      e.preventDefault();
    } else {
      reveal();
    }
  });

  useEffect(() => {
    const alertLandscape = document.querySelector('.alert-landscape');
    if (window.clientInformation.appVersion.includes('Mobile') && window.innerWidth < '600') {
      if (!screen.height > screen.width) {
        alertLandscape.classList.remove('active');
        document.body.classList.add('mobile');
      } else {
        alertLandscape.classList.add('active');
        document.body.classList.remove('mobile');
        alert('برای استفاده از این سایت، لطفا گوشی خود را به حالت افقی (لنداسکیپ) بچرخانید.');
      }
    } else {
      document.body.classList.remove('mobile');
      alertLandscape.classList.remove('active');
    }

    /////// loader \\\\\\\
    const closeIconLoader = document.querySelector('.loader svg');
    const body = document.querySelector('body');
    setTimeout(() => {
      body.classList.add('active-loader');
      closeIconLoader.addEventListener('click', () => {
        body.classList.remove('active-loader');
        setTimeout(() => {
          revealStart();
        }, 1000);
      })
    }, 1000);
    setTimeout(() => {
      body.classList.remove('active-loader');
    }, 10000);
    setTimeout(() => {
      revealStart();
    }, 10000);
  }, []);

  /////// navbar and title on top of the page ///////
  function selectMenu(ev) {
    const titleNav = document.querySelector('.title-menu');
    const titleNavH1 = document.querySelector('.title-menu h1');
    const activeli = document.querySelector('nav ul li.active');
    if (ev.type == 'click') {
      const navli = ev.currentTarget.parentElement;

      if (ev.target.innerText !== titleNavH1.innerText) {
        activeli.classList.remove('active');
        setTimeout(() => {
          navli.classList.add('active');

        }, 400);
        titleNav.classList.add('hide');
      }

      setTimeout(() => {
        titleNavH1.innerText = ev.target.innerText;
        titleNav.classList.remove('hide');
      }, 700);
      observerActive = false;
      setTimeout(() => {
        // برای فعال کردن observer دوباره
        observerActive = true;
      }, 1000);
    } else {
      if (ev.type == 'click') {

      }
      const target = ev.target.id;
      let thisLi;

      if (document.querySelector('.nav-list .active')) {
        activeli.classList.remove('active');
      }
      menu.classList.add('hover');
      switch (target) {
        case 'about-me':
          thisLi = document.querySelector('.about-me-li');
          thisLi.classList.add('active');
          titleNavH1.innerText = thisLi.innerText;
          titleMenu.classList.remove('hide-title-menu');
          break;
        case 'skills':
          thisLi = document.querySelector('.skills-li');
          thisLi.classList.add('active');
          titleNavH1.innerText = thisLi.innerText;
          titleMenu.classList.remove('hide-title-menu');
          break;
        case 'portfolio':
          thisLi = document.querySelector('.portfolio-li');
          thisLi.classList.add('active');
          titleNavH1.innerText = thisLi.innerText;
          titleMenu.classList.remove('hide-title-menu');
          break;
        case 'contact-me':
          thisLi = document.querySelector('.contact-me-li');
          thisLi.classList.add('active');
          titleNavH1.innerText = thisLi.innerText;
          titleMenu.classList.remove('hide-title-menu');
          break;

        default:
          break;

      }
    }
  }

  // Hide and show title of navbar when Scroll
  // let prevScrollPos = window.pageYOffset;
  // let titleMenu = document.querySelector(".title-menu");
  // let initialShowThreshold = 150;
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;

  //   if (currentScrollPos <= initialShowThreshold) {
  //     titleMenu.classList.remove("hide-title-menu");
  //   } else if (prevScrollPos > currentScrollPos) {
  //     titleMenu.classList.remove("hide-title-menu");
  //   } else {
  //     titleMenu.classList.add("hide-title-menu");
  //   }

  //   prevScrollPos = currentScrollPos;
  // };

  const emptySocialMedia = document.querySelectorAll('.card[title="it is empty"]');
  emptySocialMedia.forEach(item => {
    item.addEventListener('click', () => {
      if (!document.querySelector('.alert')) {
        const alert = document.createElement('div');
        alert.setAttribute('class', 'alert');
        alert.innerText = "من هنوز در این پلتفرم حساب ندارم :)";
        document.body.insertBefore(alert, document.body.firstChild);

        setTimeout(() => {
          alert.classList.add('active');
        }, 300);

        const removeAlert = setTimeout(() => {
          alert.classList.remove('active');
          setTimeout(() => {
            alert.remove();
          }, 1000);
          clearTimeout(removeAlert);
        }, 5000);
      }
    })
  })


  function openBoxSkills (e) {
    const box = e.currentTarget;
    if (box.classList.contains("active-sub-box")) {
      box.classList.remove('active-sub-box');
      
    } else {
      box.classList.add('active-sub-box');
    }
  }


  /////// change li menu when scroll \\\\\\\
  // انتخاب المان منو
  const menu = document.querySelector('.nav-list');
  // let observerActive = true;

  // تعریف تنظیمات برای IntersectionObserver
  // const observerOptions = {
  //   root: null, // null به معنای مشاهده فریم مرورگر است
  //   rootMargin: '0px', // حاشیه اضافی اضافه شده به حاشیه مشاهده‌کننده
  //   threshold: 0.5 // نسبت المان مشاهده شده به کل المان
  // };

  // تعریف مشاهده‌کننده
  // const observer = new IntersectionObserver((entries, observer) => {
  //   if (!observerActive) return;
  //   entries.forEach(entry => {
  //     // اگر المان وارد شده مشاهده شده باشد
  //     if (entry.isIntersecting) {
  //       selectMenu(entry);
  //     }
  //   })
  // }, observerOptions);

  // اعمال مشاهده‌کننده بر روی المنو
  // const about_me = document.querySelector('#about-me');
  // const skills = document.querySelector('#skills');
  // const portfolio = document.querySelector('#portfolio');
  // const contactMe = document.querySelector('#contact-me');
  // observer.observe(about_me);
  // observer.observe(skills);
  // observer.observe(portfolio);
  // observer.observe(contactMe);


  window.addEventListener("resize", () => { location.reload() });
  
  return (
    <>
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
          <g fill="#1ffa93" fillrule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
            strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
            fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
            style={{ mixBlendMode: "normal" }}>
            <g transform="scale(10.66667,10.66667)">
              <path
                d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z">
              </path>
            </g>
          </g>
        </svg>
        <strong className="green-color">به رزومه من خوش آمدید</strong>
        <div className="description">
          <img src="src/assets/img/Kourosh.jpg" alt="Kourosh Salmanzadeh" />
          <span>
            کوروش سلمان زاده هستم
            <br />
             در این سایت با مهارت ها و نمونه کارهای من در زمینه
            <b className="green-background"> فرانت اند </b>
            آشنا می شوید
          </span>
        </div>
      </div>

      <main>
        <aside>

          {/* <!-- menu and title menu --> */}
          <nav>
            <ul className="nav-list">
              <li className="active"><a href="#" aria-current="page" onClick={(event) => selectMenu(event)}>خانه</a>
              </li>
              <li className="about-me-li"><a href="#about-me" onClick={(event) => selectMenu(event)}>درباره من</a></li>
              <li className="skills-li"><a href="#skills" onClick={(event) => selectMenu(event)}>مهارت ها</a></li>
              <li className="portfolio-li"><a href="#portfolio" onClick={(event) => selectMenu(event)}>پورتفولیو</a></li>
              <li className="contact-me-li"><a href="#contact-me" onClick={(event) => selectMenu(event)}>ارتباط با من</a>
              </li>
            </ul>
          </nav>
          <div className="title-menu">
            <h1>خانه</h1>
          </div>

          {/* <!-- about me --> */}
          <div className="main-about-me reveal-left" id="about-me">
            <img src="src/assets/img/Kourosh.jpg" alt="Kourosh Salmanzadeh" />
            <div className="info">
              <ul>
                <li><span className="green-color bold title">نام:</span><span className="answer">کوروش</span></li>
                <li><span className="green-color bold title">نام خانوادگی:</span><span className="answer">سلمان
                  زاده</span></li>
                <li><span className="green-color bold title">سن:</span><span className="answer">متولد 82 (20
                  سال)</span>
                </li>
                <li><span className="green-color bold title">شهر سکونت:</span><span className="answer">مشهد</span>
                </li>
                <li><span className="green-color bold title">وضعیت تاهل:</span><span className="answer">مجرد</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-media reveal-left">
            <div className="main">
              <div className="card">
                <a href="https://www.instagram.com/ariya_aryia">
                  <svg fillrule="nonzero" height="30px" width="30px" viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                    className="instagram">
                    <g style={{ mixBlendMode: "normal" }} textAnchor="none" fontSize="none"
                      fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray=""
                      strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt"
                      strokeWidth="1" stroke="none" fillrule="nonzero">
                      <g transform="scale(8,8)">
                        <path
                          d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="card">
                <a href="https://twitter.com/Kourosh_s1">
                  <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
                    className="twitter">
                    <path
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                    </path>
                  </svg>
                </a>
              </div>
              <div className="card" title="it is empty">
                <svg height="30px" width="30px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
                  className="dribble">
                  <path
                    d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z">
                  </path>
                  <path
                    d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
                    fill="#ea4c89"></path>
                  <path
                    d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"
                    strokeMiterlimit="10" stroke="#ea4c89" fill="none"></path>
                </svg>
              </div>
              <div className="card" title="it is empty">
                <svg height="30px" width="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                  className="codepen">
                  <path
                    d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z">
                  </path>
                </svg>
              </div>
              <div className="card" title="it is empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="23px" width="23px"
                  className="uiverse">
                  <path fill="url(#paint0_linear_501_142)"
                    d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z">
                  </path>
                  <path fill="url(#paint1_linear_501_142)"
                    d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z">
                  </path>
                  <path fill="url(#paint2_linear_501_142)"
                    d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z">
                  </path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1="0"
                      x1="0" id="paint0_linear_501_142">
                      <stop stopColor="#BF66FF"></stop>
                      <stop stopColor="#6248FF" offset="0.510417"></stop>
                      <stop stopColor="#00DDEB" offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1="0"
                      x1="0" id="paint1_linear_501_142">
                      <stop stopColor="#BF66FF"></stop>
                      <stop stopColor="#6248FF" offset="0.510417"></stop>
                      <stop stopColor="#00DDEB" offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1="0"
                      x1="0" id="paint2_linear_501_142">
                      <stop stopColor="#BF66FF"></stop>
                      <stop stopColor="#6248FF" offset="0.510417"></stop>
                      <stop stopColor="#00DDEB" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="card">
                <a href="https://discord.gg/JwHKhsVh2S">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"
                    className="discord">
                    <path
                      d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z">
                    </path>
                  </svg>
                </a>
              </div>
              <div className="card">
                <a href="https://github.com/KouroshSalmanzadeh">
                  <svg height="30px" width="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
                    className="github">
                    <path
                      d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                    </path>
                  </svg>
                </a>
              </div>
              <div className="card">
                <a href="https://t.me/@Kourosh_s1">
                  <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
                    className="telegram">
                    <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                    <path
                      d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                      fill="#fff"></path>
                    <path
                      d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                      fill="#b0bec5"></path>
                    <path
                      d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                      fill="#cfd8dc"></path>
                  </svg>
                </a>

              </div>
              <div className="card" title="it is empty">
                <svg xmlSpace="preserve" viewBox="0 0 256 256" height="30" width="30" version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                  className="reddit">
                  <defs>
                  </defs>
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    style={{
                      stroke: "none",
                      borderRadius: "50%",
                      strokeWidth: "0",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "10",
                      fill: "none",
                      fillrule: "nonzero",
                      opacity: "1"
                    }}>
                    <circle transform="matrix(1 0 0 1 0 0)"
                      style={{
                        stroke: "none",
                        strokeWidth: "0",
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: "10",
                        fillrule: "nonzero",
                        opacity: "1"
                      }}
                      r="45" cy="45" cx="45"></circle>
                    <path strokeLinecap="round" transform="matrix(1 0 0 1 0 0)"
                      style={{
                        stroke: "none",
                        strokeWidth: "1",
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: "10",
                        fillrule: "nonzero",
                        opacity: "1"
                      }}
                      d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z">
                    </path>
                  </g>
                </svg>
              </div>
              <p className="text">شبکه های<br /><br />اجتماعی<br /><br />من</p>
              <div className="main_back"></div>
            </div>
          </div>

          <div className="skills-description reveal-left">
            <span className="green-color">توضیحات</span>
            <p>
              من در رشته کامپیوتر تحصیل کردم و در همان زمان با زبان های
              <code className="green-color"> python </code>
              و
              <code className="green-color"> C# </code>
              آشنا شدم و دوره آنها را گذراندم.
              سپس به صورت جدی از ابتدای سال 1401 به یادگیری حرفه ای طراحی وب مشغول شدم و در حال حاضر به مهارت
              های
              برنامه نویسی که در سمت چپ می بینید تسلط خوبی دارم و همچنان در حال یادگیری و آپدیت این چنین موارد
              هستم.

            </p>
          </div>

          <div className="portfolio-description reveal-left">
            <span className="green-color">توضیحات</span>
            <p>
              در این پروژه هایی که سمت چپ میبینید، از تکنولوژی ها و زبان های مختلف استفاده شده که کدها و جزئیات آنها را در گیت هاب
              میتوانید مشاهده کنید.
            </p>
            <a href="https://github.com/KouroshSalmanzadeh?tab=repositories" target="_blank"
              rel="noopener noreferrer">ریپازیتوری های گیت هاب من</a>
          </div>

          <div className="contact-me-phone reveal-left">
            <span className="green-color">تلفن من</span>
            <a href="tel:+989923120730">9923120730 98+</a>

          </div>

        </aside>

        <header>
          <div className="title reveal-top">
            <div className="container">
              <h1 className="reveal-right">کوروش سلمان زاده</h1>
              <h2 className="reveal-left">برنامه نویس فرانت اند</h2>
            </div>
          </div>
          <div className="img-about-me">
            <img className="reveal-top" src="src/assets/img/about_me.png" alt="about me (KouroshSalmanzadeh)" />
          </div>
          <div className="skills" id="skills">
            <div className="title-session bold reveal-right">
              <div className="container">
                <span>مهارت های من</span>
              </div>
            </div>

            <div className="second-title reveal-left">
              <div className="container">
                <span>برنامه نویسی</span>
              </div>
            </div>
            <div className="container">
              <div className="main-box-skills reveal-top">

                <div className="box-skills disabled">
                  <div className="skill">
                    <span className="bold">HTML</span>
                    <div className="progress-bar"></div>
                    <span className="arrow"></span>
                  </div>
                </div>

                <div className="box-skills" onClick={openBoxSkills}>
                  <div className="skill">
                    <span className="bold">CSS</span>
                    <div className="progress-bar"></div>
                    <span className="arrow"></span>
                  </div>
                  <div className="sub-skills">
                    <div className="skill">
                      <span className="bold">BootStrap <span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                    <div className="skill">
                      <span className="bold">Materialize <span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                    <div className="skill">
                      <span className="bold">TailWind <span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                    <div className="skill">
                      <span className="bold">FlexBox <span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                    <div className="skill">
                      <span className="bold">Grid <span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                    <div className="skill">
                      <span className="bold">Sass<span className="green-color">css</span></span>
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>

                <div className="box-skills" onClick={openBoxSkills}>
                  <div className="skill">
                    <span className="bold">JS</span>
                    <div className="progress-bar"></div>
                    <span className="arrow"></span>
                  </div>
                  <div className="sub-skills">
                    <div className="skill">
                      <span className="bold">React <span className="green-color">.js</span></span>
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>

                <div className="box-skills" onClick={openBoxSkills}>
                  <div className="skill">
                    <span className="bold">Git</span>
                    <div className="progress-bar"></div>
                    <span className="arrow"></span>
                  </div>
                  <div className="sub-skills">
                    <div className="skill">
                      <span className="bold"><span className="green-color">Git</span>hub</span>
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio" id="portfolio">
            <div className="title-session bold reveal-right">
              <div className="container">
                <span>پورتفولیو</span>
              </div>
            </div>
            <div className="second-title reveal-left">
              <div className="container">
                <span>نمونه کار های من</span>
              </div>
            </div>
            <div className="container">
              <div className="main-box-portfolio reveal-top">
                <div className="main-container scroll">
                  <div className="box-portfolio">
                    <span className="bold">پروژه اول</span>
                    <img src="src/assets/img/Project 6.png" alt="Project of Kourosh Salmanzadeh" />
                    <a href="https://kouroshsalmanzadeh.github.io/Golden-Coffee/" target="_blank"
                      rel="noopener noreferrer">مشاهده پروژه</a>
                  </div>
                  <div className="box-portfolio">
                    <span className="bold">پروژه دوم</span>
                    <img src="src/assets/img/Project 2.png" alt="Project of Kourosh Salmanzadeh" />
                    <a href="https://kouroshsalmanzadeh.github.io/second-project_find-jobs/" target="_blank"
                      rel="noopener noreferrer">مشاهده پروژه</a>
                  </div>
                  <div className="box-portfolio">
                    <span className="bold">پروژه سوم</span>
                    <img src="src/assets/img/Project 3.png" alt="Project of Kourosh Salmanzadeh" />
                    <a href="https://kouroshsalmanzadeh.github.io/ClockAlarm/" target="_blank"
                      rel="noopener noreferrer">مشاهده پروژه</a>
                  </div>
                  <div className="box-portfolio">
                    <span className="bold">پروژه چهارم</span>
                    <img src="src/assets/img/Project 4.png" alt="Project of Kourosh Salmanzadeh" />
                    <a href="https://kouroshsalmanzadeh.github.io/ToDoList-better-/" target="_blank"
                      rel="noopener noreferrer">مشاهده پروژه</a>
                  </div>
                  <div className="box-portfolio">
                    <span className="bold">پروژه پنجم</span>
                    <img src="src/assets/img/Project 1.png" alt="Project of Kourosh Salmanzadeh" />
                    <a href="https://kouroshsalmanzadeh.github.io/first-project_hacking-site/" target="_blank"
                      rel="noopener noreferrer">مشاهده پروژه</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me" id="contact-me">
            <div className="title-session bold reveal-right">
              <div className="container">
                <span>ارتباط با من</span>
              </div>
            </div>
            <div className="second-title reveal-left">
              <div className="container">
                <span>ایمیل</span>
              </div>
            </div>
            <div className="container">
              <a className="reveal-top" href="mailto:kouroshsalmanzadeh@gmail.com" target="_blank">
                ایمیل به من
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="40px" height="40px" viewBox="0,0,256,256">
                  <defs>
                    <linearGradient x1="26" y1="23.167" x2="26" y2="34.668" gradientUnits="userSpaceOnUse"
                      id="color-1">
                      <stop offset="0" stopColor="#00ff87"></stop>
                      <stop offset="1" stopColor="#000000"></stop>
                    </linearGradient>
                    <linearGradient x1="26" y1="6.5" x2="26" y2="57.561" gradientUnits="userSpaceOnUse"
                      id="color-2">
                      <stop offset="0" stopColor="#000000"></stop>
                      <stop offset="1" stopColor="#ffffff"></stop>
                    </linearGradient>
                    <linearGradient x1="32" y1="8.915" x2="32" y2="55.387" gradientUnits="userSpaceOnUse"
                      id="color-3">
                      <stop offset="0" stopColor="#000000"></stop>
                      <stop offset="1" stopColor="#ffffff"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" filrule="nonzero" stroke="none" strokwidth="1" stroklinecap="butt"
                    strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokdashoffset="0"
                    fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                    style={{ mixBlendMode: "normal" }}>
                    <g transform="scale(4,4)">
                      <path
                        d="M15.082,25.762l9.625,8.141c0.746,0.633 1.84,0.633 2.59,0l9.621,-8.141c0.711,-0.602 0.285,-1.762 -0.648,-1.762h-20.54c-0.933,0 -1.359,1.16 -0.648,1.762z"
                        fill="url(#color-1)"></path>
                      <path d="M18,49h16v2h-16z" fill="url(#color-2)"></path>
                      <path
                        d="M48,9c-6.134,0 -11.277,4.276 -12.637,10h-27.363c-2.758,0 -5,2.242 -5,5v26c0,2.758 2.242,5 5,5h36c2.758,0 5,-2.242 5,-5v-15h2v-2h-3c-6.066,0 -11,-4.934 -11,-11c0,-6.066 4.934,-11 11,-11c6.066,0 11,4.934 11,11v3c0,1.102 -0.898,2 -2,2c-1.102,0 -2,-0.898 -2,-2v-3c0,-3.859 -3.141,-7 -7,-7c-3.859,0 -7,3.141 -7,7c0,3.859 3.141,7 7,7c2.125,0 4.027,-0.953 5.312,-2.453c0.606,1.437 2.032,2.453 3.688,2.453c2.207,0 4,-1.793 4,-4v-3c0,-7.168 -5.832,-13 -13,-13zM5,24.109l12.086,9.891l-12.086,9.891zM47,50c0,1.652 -1.348,3 -3,3h-36c-1.652,0 -3,-1.348 -3,-3v-3.527l13.668,-11.18l4.168,3.41c0.914,0.75 2.039,1.125 3.164,1.125c1.125,0 2.25,-0.375 3.164,-1.125l4.172,-3.41l13.664,11.18zM47,34.949v8.941l-12.086,-9.89l3.618,-3.12c2.159,2.3 5.136,3.814 8.468,4.069zM37.264,29.317l-9.365,7.835c-1.102,0.902 -2.699,0.902 -3.801,0l-18.399,-15.054c0.551,-0.664 1.371,-1.098 2.301,-1.098h27.051c-0.026,0.331 -0.051,0.662 -0.051,1c0,2.712 0.837,5.231 2.264,7.317zM48,27c-2.758,0 -5,-2.242 -5,-5c0,-2.758 2.242,-5 5,-5c2.758,0 5,2.242 5,5c0,2.758 -2.242,5 -5,5z"
                        fill="url(#color-3)"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- halftone patterns --> */}
          <img className="halftone1" src="src/assets/img/halftone 1.png" />
          <img className="halftone3" src="src/assets/img/halftone 3.png" />
        </header>
      </main>

      <footer>
        <span>ممنونم که تا اینجا من را همراهی کردید</span>
        <span dir="ltr" className="dib mr4 mr5-ns">
          <b>©</b>
          <time id="current-year">2024</time>
          Kourosh Salmanzadeh
          :طراحی و توسعه توسط
        </span>
      </footer>

      <div className="alert-landscape">
        <img src="src/assets/img/tilt-your-phone-turn-your-phone.gif" />
      </div>
    </>
  )
}


export default App