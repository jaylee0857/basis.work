<template>
  <header data-mouse-class="cc-icon" class="header cc-large">
    <div class="header-image_wrap">
      <div class="header-image">
        <div class="iframe-video_wrapper">
          <video
            class="video-cover"
            width="100%"
            height="100%"
            autoplay
            loop
            muted
          >
            <source :src="getVideoUrl('home/knife1-1.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="iframe-video_blocker"></div>
        </div>
      </div>
    </div>
    <div class="header-content_wrapper">
      <div class="container">
        <div class="row">
          <div
            data-animation-trigger="transition"
            data-animation-element="group"
            class="col col-lg-6 col-md-12"
          >
            <div class="header-content_main">
              <div
                class="text-wrap-balance"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <h1 data-animation-element="title" class="h4">
                  <div
                    class="u-overflow-hidden"
                    style="
                      display: block;
                      text-align: start;
                      position: relative;
                    "
                  >
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      The
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      agency
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      for
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      the
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      next
                    </div>
                  </div>
                  <div
                    class="u-overflow-hidden"
                    style="
                      display: block;
                      text-align: start;
                      position: relative;
                    "
                  >
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      generation
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      of
                    </div>
                    <div
                      style="
                        position: relative;
                        display: inline-block;
                        translate: none;
                        rotate: none;
                        scale: none;
                        transform: translate(0px, 0%);
                      "
                    >
                      fintech.
                    </div>
                  </div>
                </h1>
              </div>
              <div
                class="header-content_cta"
                style="
                  transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                  opacity: 1;
                "
              >
                <div class="header-content_icon w-embed">
                  <svg
                    width="100%"
                    style=""
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-transition="in" class="header-trigger"></div>
  </header>
  <div class="spacing"></div>
  <div class="container">
    <div class="target_line"></div>
  </div>
  <section class="section over-h">
    <div class="section-title_component">
      <div class="container">
        <div
          class="section-title_wrapper"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="section-title_dot" style="opacity: 1">
            <div
              class="section-title_dot-fill"
              style="width: 100%; height: 100%"
            ></div>
          </div>
          <div class="u-overflow-hidden">
            <div
              class="section-title_title"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <h2 class="u-ts-4">Fintech Design Specialists</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="w-layout-grid pair-grid"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div
          id="w-node-_88e3e548-f2e0-1176-a852-0e15f232b846-af55239c"
          class="content"
        >
          <div
            class="content-p cc-1"
            style="
              transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              opacity: 1;
            "
          >
            <p class="u-ts-1 u-mb-0">
              It’s an industry unlike any other. From credit cards to neobanks
              and personal finance apps, the whole array of fintech is a
              crowded, highly-regulated landscape that demands the attention of
              specialists. The world is going through a digital finance
              revolution—find your product's place in it with Basis.
            </p>
          </div>
        </div>
      </div>
      <div class="sticky-pair cc-far">
        <div class="w-layout-grid pair-grid">
          <div class="div-block">
            <div class="card-wrapper cc-small">
              <div class="card-animation cc-40">
                <div
                  data-mouse-class="cc-none"
                  class="card"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                    opacity: 1;
                  "
                >
                  <div
                    class="card-image_wrapper"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    <div class="iframe-video_wrapper">
                      <iframe
                        class="iframe-video_iframe"
                        width="100%"
                        height="100%"
                        style="overflow: hidden"
                        frameborder="0"
                        scrolling="no"
                        allow="fullscreen"
                        src="https://app.vidzflow.com/v/h69w08i83W?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                        title="Sable 1"
                        loading="lazy"
                      ></iframe>
                      <div class="iframe-video_blocker"></div>
                    </div>
                  </div>
                  <div
                    class="card-body"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    <div class="u-overflow-hidden">
                      <div
                        class="card-up"
                        style="
                          transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                            rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                            skew(0deg, 0deg);
                          transform-style: preserve-3d;
                        "
                      >
                        <h4 class="u-ts-4">In-app credit score</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-wrapper cc-large">
            <div class="card-animation cc-40">
              <div
                data-mouse-class="cc-none"
                class="card cc-large"
                style="
                  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                  opacity: 1;
                "
              >
                <div
                  class="card-image_wrapper"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="iframe-video_wrapper">
                    <iframe
                      class="iframe-video_iframe"
                      width="100%"
                      height="100%"
                      style="overflow: hidden"
                      frameborder="0"
                      scrolling="no"
                      allow="fullscreen"
                      src="https://app.vidzflow.com/v/NHDnlIjW0Q?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                      title="Sable 4"
                      loading="lazy"
                    ></iframe>
                    <div class="iframe-video_blocker"></div>
                  </div>
                </div>
                <div
                  class="card-body"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="u-overflow-hidden">
                    <div
                      class="card-up"
                      style="
                        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                          rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                          skew(0deg, 0deg);
                        transform-style: preserve-3d;
                      "
                    >
                      <div class="card-large_text">
                        <h4 class="u-ts-4">Glow-in-the-dark credit card</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_197491fd-e75f-5caa-bd6c-f56fc5e78edc-af55239c"
            class="content"
          >
            <div
              class="content-p cc-1"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <p class="u-ts-1">
                After rebranding banks, producing sleek new cards, and
                seamlessly integrating those elements into cohesive,
                future-proof brands, Basis can deliver results in record time.
                Get started with our Fintech Trial and get design results for
                your most essential deliverables in three weeks.
              </p>
            </div>
            <div class="btn-group">
              <div
                class="btn-item cc-1"
                style="
                  opacity: 1;
                  transform: translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
              >
                <a
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  class="btn w-inline-block"
                  ><div class="btn-text-wrap">
                    <div class="btn-text">Contact Us</div>
                    <div class="btn-text cc-bottom">Contact Us</div>
                  </div></a
                >
              </div>
              <div
                class="btn-item cc-2"
                style="
                  opacity: 1;
                  transform: translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
              >
                <a
                  class="btn cc-secondary w-inline-block"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  ><div class="btn-text-wrap">
                    <div
                      class="btn-text"
                      style="
                        transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1)
                          rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                          skew(0deg, 0deg);
                        transform-style: preserve-3d;
                      "
                    >
                      Design Trial
                    </div>
                    <div
                      class="btn-text cc-bottom"
                      style="
                        transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1)
                          rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                          skew(0deg, 0deg);
                        transform-style: preserve-3d;
                      "
                    >
                      Design Trial
                    </div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="target_line"></div>
  </div>
  <section class="section">
    <div class="section-title_component">
      <div class="container">
        <div
          class="section-title_wrapper"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="section-title_dot" style="opacity: 1"></div>
          <div class="u-overflow-hidden">
            <div
              class="section-title_title"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <h2 class="u-ts-4">Fintech Capabilities</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-layout-grid pair-grid">
        <div
          id="w-node-b0cbec4a-56c8-e8e7-790a-68e14ee2ef27-af55239c"
          class="service-list"
        >
          <div class="service-list">
            <div
              class="logomark_component"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div
                class="logomark w-embed"
                style="
                  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                  transform-style: preserve-3d;
                "
              >
                <svg
                  height="100%"
                  style=""
                  viewBox="0 0 185 80"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <ul role="list" class="u-mt-3-5">
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-1"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Digital Banking,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-2"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Credit Card Designs,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-3"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Digital Wallets,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-4"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Payment Services,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-5"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Card Packaging,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-6"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Information Architecture,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-7"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Mobile Apps,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-8"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Prototypes,</h3>
                </div>
              </li>
              <li
                class="u-overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div
                  class="list-content cc-9"
                  style="
                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                >
                  <h3 class="u-tc-caps">Gamification.</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="target_line"></div>
  </div>
  <section class="section">
    <div class="section-title_component">
      <div class="container">
        <div
          class="section-title_wrapper"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="section-title_dot" style="opacity: 1"></div>
          <div class="u-overflow-hidden">
            <div
              class="section-title_title"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <h2 class="u-ts-4">Fintech Work</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row"><div class="col"></div></div>
      <div class="w-dyn-list">
        <div role="list" class="row w-dyn-items">
          <div role="listitem" class="col col-md-12 w-dyn-item">
            <div
              data-w-id="ca292e3d-cff1-64ba-f24a-14ac357cf62c"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                opacity: 1;
                transform-style: preserve-3d;
              "
              class="cases-auto"
            >
              <a
                data-mouse-class="cc-text"
                href="/cases/sable-brand"
                class="cases-card cc-auto w-inline-block"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait w-condition-invisible"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape w-condition-invisible"
                  />
                  <div>
                    <div class="iframe-video_wrapper">
                      <iframe
                        class="iframe-video_iframe"
                        width="100%"
                        height="100%"
                        style="overflow: hidden"
                        frameborder="0"
                        scrolling="no"
                        allow="fullscreen"
                        src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                        title="Sable 12"
                        loading="lazy"
                      ></iframe>
                      <div class="iframe-video_blocker"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="cases-text cc-auto"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="u-ts-2">Sable Brand</div>
                </div></a
              ><link rel="prerender" href="/cases/sable-brand" /><a
                data-mouse-class="cc-text"
                href="mailto:hello@basis.work?subject=Enquiry"
                class="cases-card cc-auto w-inline-block w-condition-invisible"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="iframe-video_wrapper">
                    <iframe
                      class="iframe-video_iframe"
                      width="100%"
                      height="100%"
                      style="overflow: hidden"
                      frameborder="0"
                      scrolling="no"
                      allow="fullscreen"
                      src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                      title="Sable 12"
                      loading="lazy"
                    ></iframe>
                    <div class="iframe-video_blocker"></div>
                  </div>
                </div>
                <div class="cases-text">
                  <div class="cases-more">
                    <div class="u-ts-6 u-tc-caps u-text-accent1">
                      Contact us<span class="hide-tablet"> for more</span>
                    </div>
                  </div>
                  <div class="u-ts-2">Sable Brand</div>
                </div></a
              >
            </div>
          </div>
          <div role="listitem" class="col col-md-12 w-dyn-item">
            <div
              data-w-id="ca292e3d-cff1-64ba-f24a-14ac357cf62c"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                opacity: 1;
                transform-style: preserve-3d;
              "
              class="cases-auto"
            >
              <a
                data-mouse-class="cc-text"
                href="/cases/sable-website"
                class="cases-card cc-auto w-inline-block"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="w-condition-invisible">
                    <div class="iframe-video_wrapper">
                      <iframe
                        class="iframe-video_iframe"
                        width="100%"
                        height="100%"
                        style="overflow: hidden"
                        frameborder="0"
                        scrolling="no"
                        allow="fullscreen"
                        loading="lazy"
                      ></iframe>
                      <div class="iframe-video_blocker"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="cases-text cc-auto"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="u-ts-2">Sable Website</div>
                </div></a
              ><link rel="prerender" href="/cases/sable-website" /><a
                data-mouse-class="cc-text"
                href="mailto:hello@basis.work?subject=Enquiry"
                class="cases-card cc-auto w-inline-block w-condition-invisible"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="iframe-video_wrapper">
                    <iframe
                      class="iframe-video_iframe"
                      width="100%"
                      height="100%"
                      style="overflow: hidden"
                      frameborder="0"
                      scrolling="no"
                      allow="fullscreen"
                      loading="lazy"
                    ></iframe>
                    <div class="iframe-video_blocker"></div>
                  </div>
                </div>
                <div class="cases-text">
                  <div class="cases-more">
                    <div class="u-ts-6 u-tc-caps u-text-accent1">
                      Contact us<span class="hide-tablet"> for more</span>
                    </div>
                  </div>
                  <div class="u-ts-2">Sable Website</div>
                </div></a
              >
            </div>
          </div>
          <div role="listitem" class="col col-md-12 w-dyn-item">
            <div
              data-w-id="ca292e3d-cff1-64ba-f24a-14ac357cf62c"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                opacity: 1;
                transform-style: preserve-3d;
              "
              class="cases-auto"
            >
              <a
                data-mouse-class="cc-text"
                href="/cases/seen-brand"
                class="cases-card cc-auto w-inline-block"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait w-condition-invisible"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape w-condition-invisible"
                  />
                  <div>
                    <div class="iframe-video_wrapper">
                      <iframe
                        class="iframe-video_iframe"
                        width="100%"
                        height="100%"
                        style="overflow: hidden"
                        frameborder="0"
                        scrolling="no"
                        allow="fullscreen"
                        src="https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                        title="Seen 1"
                        loading="lazy"
                      ></iframe>
                      <div class="iframe-video_blocker"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="cases-text cc-auto"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="u-ts-2">Seen Brand</div>
                </div></a
              ><link rel="prerender" href="/cases/seen-brand" /><a
                data-mouse-class="cc-text"
                href="mailto:hello@basis.work?subject=Enquiry"
                class="cases-card cc-auto w-inline-block w-condition-invisible"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="iframe-video_wrapper">
                    <iframe
                      class="iframe-video_iframe"
                      width="100%"
                      height="100%"
                      style="overflow: hidden"
                      frameborder="0"
                      scrolling="no"
                      allow="fullscreen"
                      src="https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                      title="Seen 1"
                      loading="lazy"
                    ></iframe>
                    <div class="iframe-video_blocker"></div>
                  </div>
                </div>
                <div class="cases-text">
                  <div class="cases-more">
                    <div class="u-ts-6 u-tc-caps u-text-accent1">
                      Contact us<span class="hide-tablet"> for more</span>
                    </div>
                  </div>
                  <div class="u-ts-2">Seen Brand</div>
                </div></a
              >
            </div>
          </div>
          <div role="listitem" class="col col-md-12 w-dyn-item">
            <div
              data-w-id="ca292e3d-cff1-64ba-f24a-14ac357cf62c"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                opacity: 1;
                transform-style: preserve-3d;
              "
              class="cases-auto"
            >
              <a
                data-mouse-class="cc-text"
                href="/cases/sable-app"
                class="cases-card cc-auto w-inline-block"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="w-condition-invisible">
                    <div class="iframe-video_wrapper">
                      <iframe
                        class="iframe-video_iframe"
                        width="100%"
                        height="100%"
                        style="overflow: hidden"
                        frameborder="0"
                        scrolling="no"
                        allow="fullscreen"
                        loading="lazy"
                      ></iframe>
                      <div class="iframe-video_blocker"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="cases-text cc-auto"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div class="u-ts-2">Sable App</div>
                </div></a
              ><link rel="prerender" href="/cases/sable-app" /><a
                data-mouse-class="cc-text"
                href="mailto:hello@basis.work?subject=Enquiry"
                class="cases-card cc-auto w-inline-block w-condition-invisible"
                ><div
                  class="cases-assets"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-portrait"
                  /><img
                    src="https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg"
                    loading="lazy"
                    alt=""
                    class="cases-landscape"
                  />
                  <div class="iframe-video_wrapper">
                    <iframe
                      class="iframe-video_iframe"
                      width="100%"
                      height="100%"
                      style="overflow: hidden"
                      frameborder="0"
                      scrolling="no"
                      allow="fullscreen"
                      loading="lazy"
                    ></iframe>
                    <div class="iframe-video_blocker"></div>
                  </div>
                </div>
                <div class="cases-text">
                  <div class="cases-more">
                    <div class="u-ts-6 u-tc-caps u-text-accent1">
                      Contact us<span class="hide-tablet"> for more</span>
                    </div>
                  </div>
                  <div class="u-ts-2">Sable App</div>
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="target_line"></div>
  </div>
  <section class="section">
    <div class="section-title_component">
      <div class="container">
        <div
          class="section-title_wrapper"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="section-title_dot" style="opacity: 1"></div>
          <div class="u-overflow-hidden">
            <div
              class="section-title_title"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <h2 class="u-ts-4">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-layout-grid pair-grid">
        <div
          data-animation-element="group"
          id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"
        >
          <div
            data-animation-element="rich-text"
            id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67"
            class="contact-cta w-richtext"
          >
            <h3
              data-animation-element="title"
              style=""
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div
                class="u-overflow-hidden"
                style="display: block; text-align: start; position: relative"
              >
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  Have
                </div>
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  a
                </div>
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  project
                </div>
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  in
                </div>
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  mind?
                </div>
              </div>
              <div
                class="u-overflow-hidden"
                style="display: block; text-align: start; position: relative"
              >
                <a
                  data-aos="fade-up"
                  data-aos-duration="700"
                  href="mailto:hello@basis.work"
                  style="
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                  ><div style="position: relative; display: inline-block">
                    hello@basis.work
                  </div></a
                >
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
    <aside class="pre-footer">
      <a
        data-mouse-text="Read Next"
        data-mouse-class="cc-text"
        class="section cc-pre-footer w-inline-block"
        ><div class="iframe-video_wrapper">
          <video
            class="video-cover"
            width="100%"
            height="100%"
            autoplay
            loop
            muted
          >
            <source :src="getVideoUrl('home/knife1-1.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="iframe-video_blocker"></div>
        </div>
        <div class="pre-footer_gradient"></div>
        <div class="marquee">
          <div
            class="marquee_content cc-text transparent"
            style="
              transform: translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              will-change: transform;
            "
          >
            <div
              class="marquee_item cc-1 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
            <div
              class="marquee_item cc-2 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
            <div
              class="marquee_item cc-3 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
          </div>
          <div
            class="marquee_content cc-text transparent"
            style="
              transform: translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              will-change: transform;
            "
          >
            <div
              class="marquee_item cc-1 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
            <div
              class="marquee_item cc-2 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
            <div
              class="marquee_item cc-3 transparent"
              style="
                transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
            >
              <div class="h1">Design Trial&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="pre-footer_button">
          <div class="btn cc-large-landscape">
            <div class="btn-text-wrap">
              <div class="btn-text cc-large-landscape">REad Next</div>
              <div class="btn-text cc-bottom cc-large-landscape">Button</div>
            </div>
          </div>
        </div></a
      >
    </aside>
  </div>
  <Footer></Footer>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { onMounted } from "vue";
import Footer from "@/widgets/layout/footer.vue";
import { getVideoUrl } from "@/unit/getVideoUrl";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    Footer,
  },
  setup() {
    const { t } = useI18n();
    onMounted(() => {
      AOS.init();
      console.log("index");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      });

      // 獲取所有目標元素並設置觀察
      const targets = document.querySelectorAll(".target_line");
      targets.forEach((target) => {
        observer.observe(target);
      });
    });
    return {
      t,
      getVideoUrl,
    };
  },
};
</script>
