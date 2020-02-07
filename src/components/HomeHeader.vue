<template>
  <header class="header-wrapper relative overflow-hidden">
    <div
      class="header-content container mx-auto flex items-center justify-center h-full relative z-10"
    >
      <div class="header-description text-white px-4">
        <h2 class="header-heading mb-2">
          Welcome to<br /><span class="marvuel">Mar<b>V</b>uel</span>
        </h2>
        <p>
          We'll help you discover our magnificent series by letting you browse
          through a curated list of fans' favorite characters.
        </p>
      </div>
    </div>
    <picture>
      <source
        srcset="
          ../assets/img/header_home/1920_header_home.webp 1920w,
          ../assets/img/header_home/1440_header_home.webp 1440w,
          ../assets/img/header_home/1080_header_home.webp 1080w,
          ../assets/img/header_home/810_header_home.webp   810w,
          ../assets/img/header_home/767_header_home.webp   600w,
          ../assets/img/header_home/320_header_home.webp   320w
        "
        sizes="100vw"
        type="image/webp"
      />
      <source
        srcset="
          ../assets/img/header_home/1920_header_home.jpg 1920w,
          ../assets/img/header_home/1440_header_home.jpg 1440w,
          ../assets/img/header_home/1080_header_home.jpg 1080w,
          ../assets/img/header_home/810_header_home.jpg   810w,
          ../assets/img/header_home/767_header_home.jpg   600w,
          ../assets/img/header_home/320_header_home.jpg   320w
        "
        sizes="100vw"
      />
      <img
        src="../assets/img/header_home/1920_header_home.jpg"
        alt="Comic book background"
        class="header-image absolute inset-0 h-full w-full"
        loading="lazy"
      />
    </picture>
  </header>
</template>

<style scoped>
.header-wrapper {
  height: 60vh;
  min-height: 200px;
  max-height: 600px;
  font-size: 0;
  text-align: center;
}
.header-wrapper::after {
  content: '';
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.65) 55%,
    rgba(0, 0, 0, 0.8) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

.header-content {
  font-size: 1.25rem;
  text-shadow: 0 0.1em 0 rgba(0, 0, 0, 0.5);
}

.header-description {
  max-width: 550px;
}
.header-heading {
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  font-size: 1.5rem;
}
.header-heading .marvuel {
  font-size: 4rem;
}

.header-image {
  object-fit: cover;
  pointer-events: none;
}

@media screen and (min-width: 768px) {
  .header-heading {
    font-size: 1.6rem;
  }

  .header-heading .marvuel {
    font-size: 5.5rem;
  }
}

@media screen and (min-width: 1200px) {
  .header-heading {
    font-size: 1.7rem;
  }

  .header-heading .marvuel {
    font-size: 6rem;
  }
}

/* IE fix - not perfect, but it works */
@media all and (-ms-high-contrast: none) {
  .home-header-wrapper {
    overflow: hidden;
  }

  .home-header-image {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 100%;
    max-width: 10000%;
    height: auto;
  }
}
</style>
