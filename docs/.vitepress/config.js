const primarySidebar = [
    { text: "cvi", link: "/cvi/" }, 
    {text:"Briif", link:"/cvi/brief"},
    {text:"Moodboard", link:"/cvi/moodboard"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/" },
    {text: "Font märgiks", link: "/logi/01_font_margiks" },
    {text: "Ruutudes märgid", link: "/logi/02_ruududjajoonis" },
]

module.exports = {
    title: "Minu lehekene",
    base: "/tgmm20/",
    themeConfig: {
        nav: [
            {text:"Esileht", link:"/"},
            {text:"Minust", link:"/minust/"},
            {text:"CVI", link:"/cvi/"},
            {text:"Blogi", link:"/logi/"},
        ],
        sidebar:
        {
            "/cvi":primarySidebar,
            "/cvi/biref":primarySidebar,
            "/cvi/moodboard":primarySidebar,
            "/logi/":logiSidebar,
            "/logi/01_font_margiks/":logiSidebar,
            "/logi/02_ruududjajoonis/":logiSidebar,
        }
        },
      };