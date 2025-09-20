// src/app/resources/data.ts

export interface Exam {
  name: string;
  description: string;
}

export interface Category {
  title: string;
  exams: Exam[];
}

export interface Scholarship {
  name: string;
  description: string;
}

export const examCategories: Category[] = [
  {
    title: "Banking Exams",
    exams: [
      {
        name: "IBPS PO / Clerk",
        description:
          "For recruitment of Probationary Officers and Clerks in public sector banks via the Institute of Banking Personnel Selection.",
      },
      {
        name: "SBI PO / Clerk",
        description:
          "Recruitment exam conducted by State Bank of India for Officer and Clerk-level positions. Offers excellent salary and growth.",
      },
      {
        name: "RBI Grade B",
        description:
          "Highly competitive exam for Officer-level posts in the Reserve Bank of India. Includes General, DEPR, and DSIM streams.",
      },
      {
        name: "RBI Assistant",
        description:
          "For clerical-level positions in RBI. Good entry-level job in the central banking system with scope for growth.",
      },
      {
        name: "NABARD Grade A/B",
        description:
          "Recruitment for Assistant Managers (Grade A) and Managers (Grade B) in the National Bank for Agriculture and Rural Development.",
      },
      {
        name: "IBPS RRB Officer Scale I/II/III",
        description:
          "For officer posts in Regional Rural Banks (RRBs) across India. Scale varies from entry to senior management.",
      },
      {
        name: "IBPS RRB Office Assistant",
        description:
          "For clerical positions in Regional Rural Banks (RRBs). Involves handling customer services and transactions.",
      },
      {
        name: "SEBI Grade A (Assistant Manager)",
        description:
          "Recruitment for Assistant Managers in Securities and Exchange Board of India. Streams include General, Legal, IT, and more.",
      },
      {
        name: "SIDBI Grade A Officer",
        description:
          "For Assistant Manager roles in the Small Industries Development Bank of India, which supports MSMEs in India.",
      },
      {
        name: "LIC AAO / ADO",
        description:
          "Conducted by Life Insurance Corporation of India for Assistant Administrative Officers and Development Officers.",
      },
      {
        name: "NIACL AO",
        description:
          "Recruitment of Administrative Officers in New India Assurance Company Ltd — a public sector general insurance company.",
      },
      {
        name: "UIIC AO",
        description:
          "Exam for Administrative Officer posts in United India Insurance Company. Good option for finance and law graduates.",
      },
      {
        name: "GIC Assistant Manager (Scale I Officer)",
        description:
          "Conducted by General Insurance Corporation of India for various disciplines like Finance, IT, Legal, etc.",
      },
      {
        name: "EPFO SSA / EO AO",
        description:
          "Conducted by UPSC/EPFO for posts like Social Security Assistant and Enforcement Officer under the Ministry of Labour.",
      },
      {
        name: "ESIC SSO / UDC / Steno",
        description:
          "Recruitment exams for Social Security Officer, Upper Division Clerk, and Stenographer in ESIC (Employees’ State Insurance Corp).",
      },
      {
        name: "IDBI Assistant Manager",
        description:
          "Recruitment for Assistant Manager posts in IDBI Bank, which follows a mix of private-public banking structure.",
      },
      {
        name: "South Indian Bank PO / Clerk",
        description:
          "Private sector bank exam for recruitment of clerks and probationary officers in South Indian Bank branches.",
      },
      {
        name: "Federal Bank PO / Clerk",
        description:
          "Another private bank exam for clerical and officer-level posts. Includes aptitude test, GD, and interviews.",
      },
      {
        name: "Nainital Bank PO / Clerk",
        description:
          "For graduates looking to enter a private regional bank operating in northern states. Includes online test and interview.",
      },
      {
        name: "IBPS Specialist Officer (SO)",
        description:
          "Recruitment for specialized roles in IT, HR, Marketing, Agriculture, Law, and Rajbhasha in various public sector banks.",
      }
    ]

  },
  {
    title: "Government & Civil Services",
    exams: [
      {
        name: "UPSC Civil Services",
        description:
          "The most prestigious exam in India for recruitment to IAS, IPS, IFS, IRS, and other Group A & B central services.",
      },
      {
        name: "SSC CGL",
        description:
          "Staff Selection Commission Combined Graduate Level exam for various posts in ministries, departments, and subordinate offices.",
      },
      {
        name: "Railway Recruitment Board (RRB)",
        description:
          "Recruitment for both technical (JE, SSE) and non-technical (NTPC, Group D) roles in Indian Railways.",
      },
      {
        name: "State Public Service Commission (PSC)",
        description:
          "Each state conducts its own PSC exam (like MPSC, BPSC, KPSC) for state civil services, similar to UPSC.",
      },
      {
        name: "UPSC CAPF (AC)",
        description:
          "Central Armed Police Forces exam for Assistant Commandants in BSF, CRPF, ITBP, CISF, and SSB.",
      },
      {
        name: "UPSC Indian Forest Service (IFoS)",
        description:
          "For forest officers. Candidates appear via the UPSC prelims but write a separate mains paper focused on science subjects.",
      },
      {
        name: "UPSC Engineering Services Exam (ESE/IES)",
        description:
          "Recruits engineers for Group A services in railways, CPWD, defense, and more. For core engineering branches only.",
      },
      {
        name: "SSC CHSL",
        description:
          "Recruitment for Lower Division Clerk (LDC), Postal Assistant, Data Entry Operator, and similar roles for 12th-pass and grads.",
      },
      {
        name: "SSC MTS & Havaldar",
        description:
          "Recruitment for multitasking staff and havaldar posts in various government departments for entry-level support roles.",
      },
      {
        name: "IB ACIO",
        description:
          "Intelligence Bureau Assistant Central Intelligence Officer exam for security and intelligence roles under MHA.",
      },
      {
        name: "DRDO CEPTAM",
        description:
          "DRDO conducts CEPTAM for Technical, Admin, and Allied positions. Suitable for engineering, science, and general grads.",
      },
      {
        name: "ISRO Recruitment",
        description:
          "Indian Space Research Organisation conducts exams for Scientists, Engineers, and Administrative staff.",
      },
      {
        name: "EPFO EO/AO",
        description:
          "Conducted by UPSC for Enforcement Officer / Accounts Officer posts in Employees' Provident Fund Organisation.",
      },
      {
        name: "ESIC UDC / SSO / Stenographer",
        description:
          "Employees’ State Insurance Corporation recruits for clerical, social security, and steno roles. Ideal for fresh graduates.",
      },
      {
        name: "CAG Auditor / Accountant (via SSC CGL)",
        description:
          "Posts like Auditor and Accountant in Comptroller & Auditor General’s office are filled via SSC CGL exam.",
      },
      {
        name: "LIC AAO / ADO",
        description:
          "Life Insurance Corporation’s recruitment for Administrative and Development Officers. Includes aptitude and interview rounds.",
      },
      {
        name: "FSSAI Recruitment",
        description:
          "Food Safety and Standards Authority of India recruits for Technical Officer, Food Analyst, Assistant, etc.",
      },
      {
        name: "NABARD Assistant / Grade A",
        description:
          "For roles in the National Bank for Agriculture and Rural Development. Suitable for Agri, Rural Dev, and Finance grads.",
      },
      {
        name: "Ministry of External Affairs – IFS (B)",
        description:
          "Recruitment to Indian Foreign Service (B) through SSC or UPSC for diplomatic administrative roles (not to be confused with UPSC IFS).",
      },
      {
        name: "Income Tax Inspector (via SSC CGL)",
        description:
          "One of the most sought-after posts via SSC CGL — offers power, stable income, and city postings.",
      }
    ]
  },
  {
    title: "Defence",
    exams: [
      {
        name: "CDS",
        description:
          "Combined Defence Services exam for graduates to join Indian Army, Navy, or Air Force. Conducted by UPSC.",
      },
      {
        name: "AFCAT",
        description:
          "Air Force Common Admission Test for graduates to join Flying, Technical, and Ground Duty branches of the Indian Air Force.",
      },
      {
        name: "Indian Navy SSC Entries",
        description:
          "Short Service Commission entries for various technical and non-technical branches like IT, Logistics, Education, and Executive.",
      },
      {
        name: "Indian Army TGC Entry",
        description:
          "Technical Graduate Course for engineering graduates to join the Indian Army as commissioned officers.",
      },
      {
        name: "JAG Entry (Army)",
        description:
          "Judge Advocate General entry scheme for law graduates to serve as legal officers in the Indian Army.",
      },
      {
        name: "Territorial Army Officer",
        description:
          "For employed graduates to serve in the Indian Army as part-time officers while maintaining their civilian careers.",
      },
      {
        name: "SSB Interview (Direct Entries)",
        description:
          "Some entries like NCC Special Entry or university campus selections are followed by direct SSB Interviews without a written exam.",
      }
    ]
  },
  {
    title: "Engineering & Higher Studies",
    exams: [
      {
        name: "GATE",
        description:
          "Graduate Aptitude Test in Engineering — essential for M.Tech/M.E. admissions and recruitment in PSUs like IOCL, NTPC, BHEL, etc.",
      },
      {
        name: "CAT",
        description:
          "Common Admission Test for admission into IIMs and top B-Schools for management programs (MBA, PGDM).",
      },
      {
        name: "GRE / GMAT",
        description:
          "Entrance exams for MS, MBA, and MIM programs in the US, Europe, and other international universities.",
      },
      {
        name: "Data Analyst",
        description:
          "A growing career path where professionals analyze large datasets to help companies make data-driven decisions. Skills needed: Python, SQL, Excel, Power BI, or Tableau.",
      },
      {
        name: "Cloud Architect",
        description:
          "Designs and manages cloud infrastructure for companies. Requires expertise in AWS, Azure, Google Cloud, and DevOps tools like Docker and Kubernetes.",
      },
      {
        name: "Web Developer",
        description:
          "Builds and maintains websites and web applications. Front-end (HTML, CSS, JavaScript) and back-end (Node.js, PHP, Django) skills are essential.",
      },
      {
        name: "Embedded Systems Engineer",
        description:
          "Works on hardware-software integration for IoT devices, robotics, automotive electronics. Requires C/C++, microcontroller knowledge, and RTOS.",
      },
      {
        name: "AI/ML Engineer",
        description:
          "Develops machine learning models and AI systems. Requires Python, TensorFlow/PyTorch, statistics, and data science skills.",
      },
      {
        name: "ISRO Internships & Research",
        description:
          "ISRO offers internships and research opportunities for students in electronics, aerospace, mechanical, and computer science. Visit ISRO’s official site for notifications.",
      },
      {
        name: "DRDO Research Positions",
        description:
          "DRDO offers research fellowships and scientist positions in defense R&D. Graduates can apply for internships and JRF roles.",
      },
      {
        name: "IITs & IISc for M.Tech/PhD",
        description:
          "Top institutes like IITs, IISc, and NITs offer postgraduate and doctoral research programs. GATE score and strong academics required.",
      },
      {
        name: "Product Manager (Tech)",
        description:
          "A cross-functional role in tech firms responsible for product strategy, roadmap, and development. Often pursued after MBA or with experience.",
      },
      {
        name: "Game Developer",
        description:
          "Develops interactive games using engines like Unity or Unreal. Requires programming (C#/C++), 3D modeling basics, and strong creative logic.",
      },
      {
        name: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats. Skills in network security, ethical hacking, and certifications like CEH, CompTIA are valuable.",
      },
      {
        name: "Robotics Engineer",
        description:
          "Works on automation, robot design, and control systems. Background in mechanical, electronics, or mechatronics preferred.",
      },
      {
        name: "UI/UX Designer",
        description:
          "Focuses on user interface and experience design for websites and apps. Tools: Figma, Adobe XD, Sketch, and basic HTML/CSS.",
      },
      {
        name: "Software Developer",
        description:
          "Core coding job in tech firms. Knowledge of programming languages like Java, Python, or C++, along with software development life cycles is needed.",
      },
      {
        name: "Technical Content Creator",
        description:
          "Creates tutorials, documentation, blogs, and educational content. Ideal for engineers with strong communication and teaching skills.",
      },
      {
        name: "Research & Innovation (Private R&D Labs)",
        description:
          "Work in innovation labs of Google, Microsoft, TCS Research, Samsung, etc. Often requires strong academic background and research mindset.",
      },
      {
        name: "Startups & Entrepreneurship (Tech)",
        description:
          "Engineering grads often build or join tech startups in SaaS, EdTech, FinTech, etc. Government schemes like Startup India and Atal Innovation Mission provide support.",
      }
    ],
  },
  {
    title: "Other Popular Exams",
    exams: [
      {
        name: "CLAT",
        description:
          "Common Law Admission Test for entry into top National Law Universities for 5-year integrated and LLM programs.",
      },
      {
        name: "NET / JRF",
        description:
          "UGC-NET for Assistant Professor eligibility and Junior Research Fellowship in Indian universities and colleges.",
      },
      {
        name: "NCHMCT JEE",
        description:
          "National Council for Hotel Management exam for admissions to B.Sc. in Hospitality & Hotel Administration.",
      },
      {
        name: "IHM Entrance Exams",
        description:
          "Individual IHMs may conduct entrance tests for courses in hospitality, tourism, and culinary arts.",
      },
      {
        name: "NIFT Entrance Exam",
        description:
          "For admission to National Institute of Fashion Technology for programs in fashion design, technology, and management.",
      },
      {
        name: "NID DAT",
        description:
          "Design Aptitude Test for admission to National Institute of Design’s UG and PG design programs.",
      },
      {
        name: "CUET (UG/PG)",
        description:
          "Common University Entrance Test for admission to central and other participating universities for various UG/PG courses.",
      },
      {
        name: "IIFT Entrance",
        description:
          "Indian Institute of Foreign Trade exam for MBA (International Business) program. Now part of CAT or separate depending on year.",
      },
      {
        name: "ICMAI CMA",
        description:
          "Cost and Management Accountancy exam for those interested in financial and cost auditing careers.",
      },
      {
        name: "CFA (India + Global)",
        description:
          "Chartered Financial Analyst exam for global finance professionals. Requires graduation and is conducted in levels.",
      },
      {
        name: "ICSI CS",
        description:
          "Company Secretary course conducted by ICSI. Includes Foundation, Executive, and Professional levels.",
      },
      {
        name: "IGNOU B.Ed Entrance",
        description:
          "For teaching aspirants who want to pursue B.Ed via distance mode from Indira Gandhi National Open University.",
      },
      {
        name: "FTII JET",
        description:
          "Joint Entrance Test for Film and Television Institute of India for acting, direction, screenplay, and cinematography programs.",
      },
      {
        name: "SRFTI Entrance Exam",
        description:
          "Entrance test for Satyajit Ray Film & Television Institute for creative and technical film education.",
      },
      {
        name: "Sangeet Natak Akademi Scholarships",
        description:
          "Scholarship programs for young artists in classical music, dance, theatre, and folk traditions.",
      },
      {
        name: "Kuchipudi / Bharatanatyam Certifications",
        description:
          "Formal certifications offered by recognized boards/institutions in classical dance forms like Kuchipudi and Bharatanatyam.",
      },
      {
        name: "Prayag Sangeet Samiti Exams",
        description:
          "Certification exams in Indian classical music (vocal/instrumental), dance, and fine arts.",
      },
      {
        name: "NSD Admission Test",
        description:
          "Entrance test for National School of Drama for acting and theatre training programs.",
      },
      {
        name: "TISSNET",
        description:
          "Entrance exam for Tata Institute of Social Sciences for courses in social work, public policy, and development studies.",
      },
      {
        name: "JAM (Joint Admission Test for M.Sc.)",
        description:
          "IIT-based exam for admission into M.Sc. programs in Physics, Chemistry, Mathematics, Biotechnology, etc.",
      }
    ]
  },
];

export const scholarships: Scholarship[] = [
    {
      name: "Maarg Scholarship",
      description:
        "Supports underprivileged students pursuing higher education through need-based financial assistance and mentoring.",
    },
    {
      name: "National Scholarship Portal (NSP)",
      description:
        "A centralized platform by the Government of India to apply for multiple scholarships from central and state schemes.",
    },
    {
      name: "Fulbright-Nehru Fellowship",
      description:
        "Enables Indian students and researchers to study or conduct advanced research in the United States across various disciplines.",
    },
    {
      name: "DAAD Scholarship",
      description:
        "Provides scholarships and funding for Indian students pursuing postgraduate and doctoral studies in Germany.",
    },
    {
      name: "Skill India Initiative",
      description:
        "Government initiative promoting skill development through certified vocational training in sectors like IT, retail, hospitality, and more.",
    },
    {
      name: "PM Scholarship Scheme (PMSS)",
      description:
        "Provides financial support for the wards of Indian Armed Forces personnel to pursue technical education in selected institutions.",
    },
    {
      name: "Content Creator",
      description:
        "Professionals producing videos, blogs, podcasts, and social media content. Key skills: video editing, SEO, social media marketing, storytelling.",
    },
    {
      name: "Graphic Designer",
      description:
        "Designs visual content for digital and print media. Requires proficiency in Adobe Photoshop, Illustrator, and UI/UX basics.",
    },
    {
      name: "Digital Marketing Specialist",
      description:
        "Focuses on SEO, SEM, social media ads, email marketing, and analytics to grow brands online. Google certifications are a plus.",
    },
    {
      name: "Animator / Motion Graphics Artist",
      description:
        "Creates animations and motion design for films, advertisements, and games using tools like After Effects and Blender.",
    },
    {
      name: "Photography & Videography",
      description:
        "Careers in professional photography and videography including commercial, documentary, wedding, and event coverage.",
    },
    {
      name: "TISSNET",
      description:
        "Entrance exam for Tata Institute of Social Sciences for courses in social work, human resource management, and public policy.",
    },
    {
      name: "NIFT Entrance Exam",
      description:
        "For admission into fashion design, technology, and management programs at the National Institute of Fashion Technology.",
    },
    {
      name: "Swayam Online Courses",
      description:
        "Government of India’s online education platform offering free and paid courses across diverse disciplines with certification.",
    },
    {
      name: "Atal Tinkering Labs",
      description:
        "An initiative to foster innovation and creativity among school and college students by providing access to technology and mentoring.",
    },
    {
      name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      description:
        "A flagship scheme to enable youth to take up industry-relevant skill training to improve employability.",
    },
    {
      name: "National Talent Search Examination (NTSE)",
      description:
        "Scholarship exam for talented students to identify and nurture meritorious students across India.",
    },
    {
      name: "Jawahar Navodaya Vidyalaya (JNV) Admission Test",
      description:
        "Entrance for talented rural students to study at Navodaya schools with free education and boarding facilities.",
    },
    {
      name: "Certificate in Foreign Languages",
      description:
        "Courses and certifications in languages like French, German, Spanish, Japanese enhancing career opportunities in translation, tourism, and diplomacy.",
    },
    {
      name: "Freelancing & Gig Economy",
      description:
        "Opportunities in graphic design, writing, programming, and digital marketing where individuals work on a project basis.",
    },
  ];
