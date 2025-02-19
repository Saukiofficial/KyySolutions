<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>KyySolutions</title>
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="{{ asset('frontend/img/favicon.png')}}" rel="icon">
  <link href="{{ asset ('frontend/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset ('frontend/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset ('frontend/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
  <link href="{{ asset ('frontend/vendor/aos/aos.css') }}" rel="stylesheet">
  <link href="{{ asset ('frontend/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
  <link href="{{ asset ('frontend/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="{{ asset ('frontend/css/main.css') }}" rel="stylesheet">
</head>

<body class="index-page">

  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="{{ route('home') }}" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
         <img src="{{ asset('frontend/img/logo.png') }}" alt="">
        <h1 class="sitename">KyySolutions</h1>
      </a>

     <nav id="navmenu" class="navmenu d-flex align-items-center justify-content-between">
  <ul>
    <li><a href="{{ route('home') }}"><i class="bi bi-house fs-5 me-2"></i> Beranda</a></li>
    <li><a href="{{ route('about') }}"><i class="bi bi-info-circle fs-5 me-2"></i> Tentang</a></li>
    <li><a href="{{ route('service') }}"class="active"><i class="bi bi-briefcase fs-5 me-2"></i> Pelayanan</a></li>
    <li><a href="{{ route('portfolio') }}"><i class="bi bi-image fs-5 me-2"></i> Portfolio</a></li>
    <li><a href="{{ route('team') }}"><i class="bi bi-people fs-5 me-2"></i> Team</a></li>
    <li><a href="{{ route('contact') }}"><i class="bi bi-envelope fs-5 me-2"></i> Contact</a></li>
  </ul>
  <i class="mobile-nav-toggle d-xl-none bi bi-list fs-5"></i>
</nav>


      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>

      </div>
    </div>
  </header>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background d-flex align-items-center justify-content-center">
  <img src="frontend/img/sementara.jpg" alt="" data-aos="fade-in" class="img-fluid w-100 h-60">


  <div class="container text-center" data-aos="fade-up" data-aos-delay="100">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="display-3">Service</h2>
      </div>
    </div>
  </div>

</section>
<!-- /Hero Section -->
    <!-- Services Section -->
    <section id="services" class="services section light-background">

      <!-- Section Title -->
      <!-- Services Section -->
      <section id="services" class="services section light-background">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan digital Anda</p>
        </div>

        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-globe text-primary fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('website-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Pembuatan Website</h3>
                </a>
                <p class="text-muted mb-4">Kami mengembangkan website profesional yang responsif, modern, dan sesuai dengan kebutuhan bisnis Anda. Dengan teknologi terkini dan desain yang menarik.</p>
                <a href="{{ route ('website-service-details') }}" class="btn btn-outline-primary rounded-pill px-4">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-danger bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-controller text-danger fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('game-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Pembuatan Game</h3>
                </a>
                <p class="text-muted mb-4">Kembangkan game yang menarik dan interaktif dengan tim developer kami. Dari konsep hingga implementasi, kami siap mewujudkan ide game Anda.</p>
                <a href="{{ route ('game-service-details') }}" class="btn btn-outline-danger rounded-pill px-4">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-journal-code text-success fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('media-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Media Pembelajaran</h3>
                </a>
                <p class="text-muted mb-4">Solusi media pembelajaran interaktif yang efektif untuk meningkatkan engagement dan pemahaman siswa dalam proses belajar mengajar.</p>
                <a href="{{ route ('media-service-details') }}" class="btn btn-outline-success rounded-pill px-4">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-info bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-laptop text-info fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('design-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Design Grafis</h3>
                </a>
                <p class="text-muted mb-4">Layanan desain grafis profesional untuk kebutuhan branding, marketing, dan komunikasi visual bisnis Anda dengan hasil yang eye-catching.</p>
                <a href="{{ route ('design-service-details') }}" class="btn btn-outline-info rounded-pill px-4">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-warning bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-boxes text-warning fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('asset3d-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Asset 3D</h3>
                </a>
                <p class="text-muted mb-4">Pembuatan asset 3D berkualitas tinggi untuk game, animasi, atau kebutuhan visualisasi produk dengan detail yang memukau.</p>
                <a href="{{ route ('asset3d-service-details') }}" class="btn btn-outline-warning rounded-pill px-4">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item position-relative h-100 shadow-sm rounded-3 p-4 border border-light hover-shadow transition">
                <div class="icon-box mb-4">
                  <div class="icon bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-flex">
                    <i class="bi bi-file-word text-secondary fs-3"></i>
                  </div>
                </div>
                <a href="{{ route ('skripsi-service-details') }}" class="text-decoration-none">
                  <h3 class="h4 mb-3 text-dark">Skripsi</h3>
                </a>
                <p class="text-muted mb-4">Bantuan dan konsultasi pengerjaan skripsi dengan pendekatan profesional dan sesuai dengan standar akademik yang berlaku.</p>
                <a href="{{ route ('skripsi-service-details') }}" class="btn btn-outline-secondary rounded-pill px-4">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
      .service-item {
        transition: all 0.3s ease;
        background: white;
      }

      .service-item:hover {
        transform: translateY(-5px);
      }

      .hover-shadow:hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
      }

      .transition {
        transition: all 0.3s ease-in-out;
      }

      .icon-box .icon {
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .section-title {
        margin-bottom: 3rem;
      }

      .section-title h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #020330;
        margin-bottom: 1rem;
      }

      .section-title p {
        color: #6c757d;
        font-size: 1.1rem;
      }
      </style>
          </div><!-- End Service Item -->

        </div>

      </div>

    </section><!-- /Services Section -->
    <section id="footer" class="footerid">
        <footer id="footer" class="footer light-background">

            <div class="container footer-top">
              <div class="row gy-4">
                <div class="col-lg-5 col-md-12 footer-about">
                  <a href="index.html" class="logo d-flex align-items-center">
                    <img src="frontend/img/logo.png" alt="Logo" class="img-fluid">
                    <span class="sitename">KyySolutions</span>
                  </a>
               <p>Sebagai penyedia jasa pembuatan website dan media game, kami menawarkan solusi terbaik untuk kebutuhan digital Anda. Dengan pengalaman dan keahlian yang mumpuni, kami dapat membantu Anda menciptakan website yang profesional dan efektif, serta media game yang menarik dan interaktif. Kami berkomitmen untuk memberikan hasil yang berkualitas tinggi dan memuaskan kebutuhan Anda.</p>
                  <div class="social-links d-flex mt-4">
                    <a href="#"><i class="bi bi-twitter-x"></i></a>
                    <a href="#"><i class="bi bi-tiktok"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                  </div>
                </div>

                <div class="col-lg-2 col-6 footer-links">
                  <h4>Navbar Menu</h4>
                  <ul>
                    <li><a href="{{ route('home') }}"><i class="bi bi-house fs-5 me-2"></i> Beranda</a></li>
                    <li><a href="{{ route('about') }}"><i class="bi bi-info-circle fs-5 me-2"></i> Tentang</a></li>
                    <li><a href="{{ route('service') }}"><i class="bi bi-briefcase fs-5 me-2"></i> Pelayanan</a></li>
                    <li><a href="{{ route('portfolio') }}"><i class="bi bi-image fs-5 me-2"></i> Portfolio</a></li>
                    <li><a href="{{ route('team') }}"><i class="bi bi-people fs-5 me-2"></i> Team</a></li>
                    <li><a href="{{ route('contact') }}"><i class="bi bi-envelope fs-5 me-2"></i> Contact</a></li>
                  </ul>
                </div>

                <div class="col-lg-2 col-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><a href="{{ route ('website-service-details') }}">Pembuatan Website</a></li>
                      <li><a href="{{ route ('game-service-details') }}">Pembutan Game</a></li>
                      <li><a href="{{ route ('media-service-details') }}">Media Pembelajaran</a></li>
                      <li><a href="{{ route ('asset3d-service-details') }}">Design Grafis</a></li>
                      <li><a href="{{ route ('asset3d-service-details') }}">Asset 3D</a></li>
                      <li><a href="{{ route ('skripsi-service-details') }}">Skripsi</a></li>
                    </ul>
                  </div>

                <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>KyySolutions</p>
                  <p>Sumenep,Madura,JawaTimur,No.hp 081232916758</p>
                  <p>Indonesia</p>
                  <p class="mt-4"><strong>Phone:</strong> <span>081232916758</span></p>
                  <p><strong>Email:</strong> <span>kyysolutions17@gmail.com</span></p>
                </div>

              </div>
            </div>

            <div class="container-fluid" style="background-color: #170a5e; width: 100vw; margin-left: calc(-50vw + 50%); bottom: 0; left: 0; z-index: 1000;">
                <div class="container copyright text-center p-4">
                  <p> <span>Copyright</span> <strong class="px-1 sitename">KyySolutions</strong> <span>All Rights Reserved</span></p>
                  <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>

            </footer>
    </section>


  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="{{ asset ('frontend/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/php-email-form/validate.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/aos/aos.js') }}"></script>
  <script src="{{ asset('frontend/vendor/waypoints/noframework.waypoints.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/purecounter/purecounter_vanilla.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/glightbox/js/glightbox.min.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/imagesloaded/imagesloaded.pkgd.min.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
  <script src="{{ asset ('frontend/vendor/swiper/swiper-bundle.min.js') }}"></script>

  <!-- Main JS File -->
  <script src="{{ asset ('frontend/js/main.js') }}"></script>

</body>

</html>
