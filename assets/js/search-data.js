// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research papers in generative AI, computer vision, and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-joined-tiktok-as-a-machine-learning-engineer",
          title: 'I joined TikTok as a Machine Learning Engineer.',
          description: "",
          section: "News",},{id: "news-i-joined-adobe-firefly-as-an-applied-scientist",
          title: 'I joined Adobe Firefly as an Applied Scientist.',
          description: "",
          section: "News",},{id: "news-cetcam-camera-controllable-video-generation-via-consistent-and-extensible-tokenization-was-accepted-to-cvpr-2026-findings",
          title: 'CETCAM: Camera-Controllable Video Generation via Consistent and Extensible Tokenization was accepted to CVPR...',
          description: "",
          section: "News",},{id: "news-mv-s2v-multi-view-subject-consistent-video-generation-was-accepted-to-siggraph-2026",
          title: 'MV-S2V: Multi-View Subject-Consistent Video Generation was accepted to SIGGRAPH 2026.',
          description: "",
          section: "News",},{id: "news-byteloom-weaving-geometry-consistent-human-object-interactions-through-progressive-curriculum-learning-was-accepted-to-eccv-2026",
          title: 'ByteLoom: Weaving Geometry-Consistent Human-Object Interactions through Progressive Curriculum Learning was accepted to ECCV...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/xinyu_gong_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%6F%78%79%67%6F%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=A8e8UNAAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GongXinyuu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xinyu-gong-b4ab73191", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
