const primarySidebar = [
    { text: "cvi", link: "/cvi/" }, 
    {text:"Briif", link:"/cvi/brief"},
    {text:"Moodboard", link:"/cvi/moodboard"},
];

module.exports = {
    title: "Minu lehekene", // appended to all page titles
    themeConfig: {
        nav: [
            {text:"Esileht", link:"/"},
            {text:"Minust", link:"/minust/"},
            {text:"CVI", link:"/cvi/"},
            {text:"CVI-doku", link:"/cvi-doku/"},
        ],
        sidebar:{
            "/cvi":primarySidebar,
            "/cvi/biref":primarySidebar,
            "/cvi/moodboard":primarySidebar,
        },
      },
    };