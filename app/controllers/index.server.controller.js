exports.render = function (req, res) {
    res.render('index', {
        name: "Carlos Rosario",
        welcomeMessage: "Hello, and thank you for visiting my portfolio! I'm Carlos Rosario, a passionate software engineer dedicated to crafting exceptional web experiences and solving real-world problems through code.",
        missionStatement: "As a software engineer and web developer, my mission is to create exceptional web experiences that solve real-world problems and exceed expectations. I'm committed to continuous innovation, collaborating closely with clients and teams, and always putting the user first. My goal is to empower possibilities through code, using my technical expertise and passion for problem-solving to make a meaningful impact in the world of software."
    });
};  