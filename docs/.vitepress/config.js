const primarySidebar = [
    { text: "cvi", link: "/cvi/" }, 
    {text:"Briif", link:"/cvi/brief"},
    {text:"Moodboard", link:"/cvi/moodboard"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/" },
    {text: "Font märgiks", link: "/logi/01_font_margiks" },
    {text: "Ruutudes märgid", link: "/logi/02_ruududjajoonis" },
    {text: "Apple logo", link: "/logi/03_ounad" },
    {text: "Pildi järgi kass", link: "/logi/04_kass" },
    {text: "Pildi järgi kass", link: "/logi/05_kassII" },
    {text: "Negatiivne ruum", link: "/logi/06_negative_space" },
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
            "/logi/03_ounad/":logiSidebar,
            "/logi/04_kass/":logiSidebar,
            "/logi/05_kassII/":logiSidebar,
            "/logi/06_negative_space/":logiSidebar,
        }
        },
      };