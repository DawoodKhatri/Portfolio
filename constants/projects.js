export const PROJECTS = [
  {
    imagesPath: "acm",
    imagesCount: 6,
    thumbnail: 1,
    title: "MHSSCOE ACM",
    description:
      "Crafted a web application for MHSSCOE ACM committee, facilitating seamless interaction and information dissemination.",
    skills: ["react", "nextjs", "tailwind", "nodejs", "mongodb"],

    details: [
      "Developed a full-stack app with Next.js and MongoDB for MHSSCOE ACM committee.",
      "Created static pages for events, member details, and a flip-book-style PDF viewer for the magazine section.",
      "Designed an admin panel for easy event management, including creation, deletion, and editing.",
      "Implemented user management in the admin panel for allocating membership IDs and roles.",
      "Generated unique QR codes for each member, linking to personalized pages with user details and achievements.",
    ],
    demo: "https://mhsscoe-acm-dev.vercel.app",
  },
  {
    imagesPath: "zentech",
    imagesCount: 7,
    thumbnail: 3,
    title: "FMB Booking",
    description:
      "Designed and developed a slot booking application, streamlining the process for FMB events.",
    skills: ["react", "nextjs", "tailwind", "nodejs", "mongodb"],
    details: [
      "Designed and developed a slot booking application with a Misri calendar, similar to the Hijri calendar.",
      "Users are provided with credentials for login, allowing them to access and manage their details.",
      "Enabled users to change their default passwords for enhanced security.",
      "Introduced multiple booking types with customizable descriptions to cater to user preferences.",
      "Implemented a PDF receipt download feature for users to receive booking confirmations in Urdu language.",
      "On the admin side, displayed the calendar with booked dates, details of bookings, and user information.",
      "Admins can cancel and reschedule bookings, manage user data, and add new users.",
      "Implemented an admin feature to export monthly booking data as an Excel sheet for comprehensive record-keeping.",
    ],
  },
  {
    imagesPath: "image-gallery",
    imagesCount: 5,
    thumbnail: 1,
    title: "Image Gallery",
    description:
      "Developed an image editing platform with functionalities for upload, download, storage, cropping, and rotation.",

    skills: [
      "html",
      "css",
      "js",
      "gmail",
      "nodejs",
      "expressjs",
      "mongodb",
      "firebase",
    ],
    details: [
      "Developed an image editing platform with features like upload, download, storage, cropping, and rotation.",
      "Integrated Google login for user authentication, allowing users to access their accounts and stored data.",
      "Utilized HTML, CSS, and JavaScript for front-end development.",
      "Implemented server-side functionality using Node.js and Express.js.",
      "Utilized MongoDB for efficient data storage and retrieval.",
      "All images securely stored on Firebase Storage, ensuring reliable and scalable image storage.",
    ],
    demo: "https://dk-image-gallery.vercel.app",
  },
  {
    imagesPath: "dflix",
    imagesCount: 6,
    thumbnail: 1,
    title: "DFlix",
    description:
      "Created a Movies information website, offering users a comprehensive platform for exploring and discovering films.",
    skills: ["html", "css", "react"],
    details: [
      "Developed a movie information web app, DFlix, enabling users to explore and discover various films.",
      "Utilized the TMDB API to collect and showcase comprehensive details such as streaming platforms, cast information, and more.",
      "Designed an intuitive user interface for easy navigation and a seamless film exploration experience.",
      "Built with React, ensuring a dynamic and responsive user experience for film enthusiasts.",
    ],
    demo: "https://d-flix.vercel.app",
  },
  {
    imagesPath: "iot-printer",
    imagesCount: 1,
    thumbnail: 1,
    title: "IoT Printer",
    description:
      "Implemented an IoT-based printing system that facilitates file uploads from the cloud to the printer for seamless printing.",
    skills: ["react", "nextjs", "nodejs", "expressjs", "aws"],
    details: [
      "Created an IoT-based printer using Raspberry Pi, running a Node.js server.",
      "Utilized AWS Cloud to establish an MQTT broker for seamless communication.",
      "Connected the Node server on Raspberry Pi to the AWS MQTT broker, enabling constant communication.",
      "Designed a React-based frontend allowing users to upload files, which are then sent to AWS S3 for storage.",
      "The file link is transmitted to AWS MQTT, received by the Raspberry Pi's Node server, and downloaded for printing.",
      "Enables printing from any device using the web app to upload files, providing flexibility and accessibility.",
    ],
  },
  {
    imagesPath: "iot-door-lock",
    imagesCount: 1,
    thumbnail: 1,
    title: "IoT Door Lock",
    description:
      "Designed an IoT-based door lock system, allowing users to open or close the door by entering the correct password via a web app.",
    skills: ["html", "css", "js", "arduino", "cpp"],
    details: [
      "Developed an IoT-based door lock system using a servo motor for locking and unlocking.",
      "Utilized NodeMCU ESP8266 for control, connecting to the web app via WiFi for seamless communication.",
      "Programmed the NodeMCU to respond to password inputs from the web app, enabling secure door access.",
      "Implemented a secure mechanism where the servo motor rotates to open or close the door based on correct password entry.",
      "Designed a user-friendly web app interface for easy password input and door control.",
      "Enhanced security by integrating HTML, CSS, and JavaScript for a responsive and intuitive user experience.",
    ],
  },
];
