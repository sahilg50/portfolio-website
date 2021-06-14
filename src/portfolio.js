/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sahil Gupta",
  title: "Hi all, I'm Sahil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and Machine Learning engineer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and Machine Learning applications with Python / Tensorflow / Keras and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xJRD0UuM6wt2Pg4eMX9f-_D-459Dgs4P/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sahilg50",
  linkedin: "https://www.linkedin.com/in/sahil-gupta-0794b9194/",
  gmail: "sahilgupta.312000@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100004778771841",
  medium: "https://medium.com/@sahilgupta.312000",
  stackoverflow: "https://stackoverflow.com/users/13218763/sahil",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Blend of Machine Learning and Full Stack Development!",
  skills: [
    emoji(
      "🚀 Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("🤖 Develope creative and fun Machine Learning models"),
    emoji(
      "🔥 Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/python.png"
    },
    {
      skillName: "tensorlfow",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/tensorflow.png"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/react-native.png"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/html-5.png"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/sass.png"
    },

    {
      skillName: "C++",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/git.png"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/npm.png"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname:
        "https://img.icons8.com/windows/42/000000/yarn-logo.png"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname:
        "https://img.icons8.com/ultraviolet/40/000000/database.png"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/postgreesql.png"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/git.png"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Thapar University ",
      logo: require("./assets/images/thapar.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "June 2019 - May 2023",
      desc: "Hold various positions of responsibility in the college.",
      descBullets: [
        "Game Coordinator: Organized various sports competitions and headed the university's althetics team. ",
        "Volunteer: I've been contributing as a volunteer to help provide knowledge and education to underprivileged children.",
        "Organizing Committee: Orgnaized various tech events that saw huge participation! ",
        "Tech Lead: Headed the tehnical team for developing the society website.",
        "CR: I've been given the role of a class representative."
      ]
    },
    {
      schoolName: "S.M. Arya Public School ",
      logo: require("./assets/images/smarya.png"),
      subHeader: "High School",
      duration: "May 2017 - April 2019",
      desc: "Participated in various sports competetions and honored with various awards",
      descBullets: [
        "Team Leader: Headed the basketball team of the school.",
        "Award: Stood third in the entire school(12th Grade).",
        "Marks: Scored 93.4% marks in 12th board exmas."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Alogrithms",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Volunteer",
      company: "PRATIGYA",
      companylogo: require("./assets/images/pratigya.jpg"),
      date: "Dec 2019 – Present",
      desc: "Volunteered to help grow the underpriviled!",
      descBullets: [
        "Taught subjects like English and Maths",
        "Developed website for the NGO",
        "Worked together with the marketing team to increase the NGO reach."
      ]
    },
    {
      role: "Tech-Team Member",
      company: "Adventure Club",
      companylogo: require("./assets/images/adventure.jpg"),
      date: "Oct 2020 – present",
      desc: "Organised various college trips.",
      descBullets: [
        "Worked together with the marketing team to get the best offers.",
        "Worked together with the technical team to develope the society website."
      ]
    },
    {
      role: "Tech-Team Member",
      company: "ORION",
      companylogo: require("./assets/images/orion.png"),
      date: "Sep 2020 – present",
      desc: "Helped organized the college tech-fest!",
      descBullets: [
        "Helped the Tech-team.",
        "Helped the logistics team.",
        "Helped the marketing team."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME INNOVATIVE PROJECTS THAT ME AND MY TEAM MADE AT COLLEGE",
  projects: [
    {
      image: require("./assets/images/truefy.jpeg"),
      projectName: "TRUEFY",
      projectDesc:
        "Developed an app to solve the problem of counterfeits in the market.",
      footerLink: [
        {
          name: "App is coming soon.",
          url: "https://www.canva.com/design/DAEfCQfSJsg/xANxb6dsllmcozdLfUTPoA/view"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zany.png"),
      projectName: "ZANY",
      projectDesc:
        "We're building a shopping website that helps everyday salesperson to sell their products in real-time.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sahilg50/Ecommerce-DBMS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "SOME COOL IN-DEMAND CERTIFICATION THAT I'VE COMPLETED!",

  achievementsCards: [
    {
      title: "Deep Learning Specialization.",
      subtitle:
        "Successfully completed the deep learning specialization provided by Deep Learning.AI and taught by none other than Andrew Ng.",
      image: require("./assets/images/deeplearning.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/FZP2NXD96FZM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
        }
      ]
    },
    {
      title: "Financial Markets",
      subtitle:
        "Understood the stock market concepts and applied them in the Indian Stock Market.",
      image: require("./assets/images/yale.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/LJWGC8VKSQ9D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },

    {
      title: "Data Structures & Algorithms",
      subtitle: "Learnt data atructures and alogrithms.",

      image: require("./assets/images/udemy.png"),
      footerLink: [{name: "Certification", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sahilgupta.312000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Sahilg0", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
