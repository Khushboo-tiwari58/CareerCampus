// src/data/collegeStudents.js
const collegeStudentsData = {
    intro:
        "College years are the perfect time to explore interests, build professional skills, and prepare for competitive opportunities.",

    careerPathways: [
        // ✅ Engineering
        {
            title: "Higher Studies (Engineering)",
            description:
                "Pursue M.Tech, MS, or MBA after engineering. Prepare for exams like GATE (India), GRE (abroad), or CAT for management. Specialize in fields such as AI, Data Science, Cybersecurity, Robotics, or Structural Engineering.",
        },
        {
            title: "Campus Placements (Engineering)",
            description:
                "Leverage on-campus recruitment drives. Build technical and soft skills, work on real-world projects, contribute to open-source, and prepare for coding interviews (DSA, System Design, etc.).",
        },
        {
            title: "Entrepreneurship (Engineering)",
            description:
                "Use your technical knowledge to create startups in areas like SaaS, hardware products, AI/ML solutions, and IoT. Join engineering-focused incubators or competitions like Smart India Hackathon.",
        },

        // ✅ Medical & Allied Health
        {
            title: "Higher Studies (Medical)",
            description:
                "After MBBS, consider MD/MS, or specialize further via DM/MCh. For alternate fields, explore MPH (Public Health), MHA (Hospital Administration), or PhD for research. NEET-PG or USMLE for advanced studies in India or abroad.",
        },
        {
            title: "Clinical Practice & Government Jobs",
            description:
                "Set up your own practice or work in hospitals. Apply for roles in government hospitals, armed forces, or public health services through UPSC, AIIMS, or ESIC exams.",
        },
        {
            title: "Research & Pharma (Medical)",
            description:
                "Work in medical research, pharmaceuticals, clinical trials, or biotech. Consider companies like Pfizer, Johnson & Johnson, or CSIR research labs.",
        },

        // ✅ Arts & Humanities
        {
            title: "Higher Studies (Arts & Humanities)",
            description:
                "Pursue MA, M.Phil, or PhD in disciplines like Sociology, History, Political Science, Psychology, etc. Appear for UGC NET or prepare for civil services (UPSC, State PCS).",
        },
        {
            title: "Media, Journalism & Writing",
            description:
                "Enter careers in journalism, digital content creation, creative writing, copywriting, or academic writing. Explore internships in publishing houses, news media, and think tanks.",
        },
        {
            title: "NGOs & International Organizations",
            description:
                "Work in social development, policy analysis, gender studies, and international relations with NGOs, UN bodies, or human rights organizations.",
        },

        // ✅ Commerce
        {
            title: "Higher Studies (Commerce)",
            description:
                "Options include M.Com, MBA, CA, CMA, CS, CFA, or CFP. Choose based on your interest in accounting, finance, taxation, auditing, or business strategy.",
        },
        {
            title: "Banking, Finance & FinTech",
            description:
                "Prepare for exams like IBPS, SBI PO, RBI Grade B, or pursue roles in investment banking, credit analysis, or fintech startups.",
        },
        {
            title: "Entrepreneurship (Commerce)",
            description:
                "Start your own venture in e-commerce, digital marketing, accounting services, or business consulting. Develop a strong foundation in business models and customer acquisition.",
        },

        // ✅ Law
        {
            title: "Higher Studies (Law)",
            description:
                "After LLB/BA LLB, pursue LLM or specialize in areas like IPR, Criminal Law, Corporate Law, or International Law. Appear for judiciary exams or UGC NET for academia.",
        },
        {
            title: "Litigation & Corporate Law",
            description:
                "Work as an advocate in courts or join corporate firms. Participate in moot courts, internships under senior advocates, and legal research projects.",
        },

        // ✅ Design & Fine Arts
        {
            title: "Higher Studies (Design/Fine Arts)",
            description:
                "Pursue Master of Design (M.Des), MFA, or specialized courses in UX/UI, Graphic Design, Animation, etc. Entrance exams include CEED, NID, or NIFT PG.",
        },
        {
            title: "Creative Industries & Freelancing",
            description:
                "Work in media houses, ad agencies, product companies, or as an independent artist, illustrator, or designer. Build an online portfolio and use platforms like Behance or Dribbble.",
        },

        // ✅ Agriculture & Environmental Sciences
        {
            title: "Higher Studies (Agriculture)",
            description:
                "Pursue M.Sc. in Agriculture, Agronomy, or allied fields. Consider ICAR fellowships, or study abroad in areas like Agroecology, Sustainable Farming, etc.",
        },
        {
            title: "Agri-Tech & Rural Development",
            description:
                "Work in agri-tech startups, NGOs, government schemes (Krishi Vigyan Kendras), or agricultural research organizations.",
        },

        // ✅ Education & Teaching
        {
            title: "Teacher Training & Academia",
            description:
                "Pursue B.Ed, M.Ed, or appear for CTET, TET, or UGC NET. Explore roles as school teacher, university lecturer, or online educator.",
        },
        {
            title: "EdTech Industry",
            description:
                "Join EdTech startups as content creators, curriculum designers, or education consultants. Opportunities in platforms like BYJU’S, Unacademy, or Khan Academy.",
        },

        // ✅ Vocational & Skill-Based Careers
        {
            title: "Skilled Trades & Certifications",
            description:
                "Pursue ITI, polytechnic diplomas, or certifications in fields like Electrician, Plumbing, Automotive Tech, Culinary Arts, or Welding. High demand in both India and abroad.",
        },
        {
            title: "Government & Public Sector (Vocational)",
            description:
                "Explore roles in public works, railways, defense services, and other technical departments via SSC, RRB, and state-level exams.",
        },

        // ✅ General Options for All Streams
        {
            title: "Civil Services & Competitive Exams",
            description:
                "Prepare for UPSC, SSC CGL, State PSC, or other competitive exams. Suitable for candidates from any background with a strong general knowledge base.",
        },
        {
            title: "Study Abroad",
            description:
                "Consider international education for specialization, research, or work opportunities. Popular destinations include USA, UK, Canada, Australia, Germany. Exams like GRE, TOEFL, IELTS, GMAT may be required.",
        },
        {
            title: "Freelancing & Remote Work",
            description:
                "Work remotely in fields like design, writing, software, marketing, or education. Build a profile on platforms like Upwork, Fiverr, or Toptal. Ideal for flexible lifestyles or digital nomads.",
        }
    ],


    examsList: [
        // 🎓 HIGHER STUDIES (INDIA)
        {
            title: "GATE",
            description: "For M.Tech/M.E and PSU recruitment in engineering and science fields.",
        },
        {
            title: "CAT",
            description: "Entrance exam for MBA programs at IIMs and top B-schools in India.",
        },
        {
            title: "MAT",
            description: "Management Aptitude Test for MBA admissions in various B-schools.",
        },
        {
            title: "XAT",
            description: "Conducted by XLRI for MBA/PGDM courses in various institutions.",
        },
        {
            title: "CMAT",
            description: "Common Management Admission Test by NTA for MBA programs.",
        },
        {
            title: "IIFT",
            description: "For MBA in International Business at IIFT Delhi and Kolkata.",
        },
        {
            title: "CLAT PG",
            description: "For admission to LLM programs in National Law Universities.",
        },
        {
            title: "PGIMER / AIIMS PG / JIPMER PG",
            description: "For MD/MS/MDS admissions in medical colleges like AIIMS, PGI, etc.",
        },
        {
            title: "ICAR AIEEA PG",
            description: "For post-graduate admissions in agricultural universities in India.",
        },
        {
            title: "CUET-PG",
            description: "Common entrance for PG programs in central universities.",
        },

        // 🌍 HIGHER STUDIES (ABROAD)
        {
            title: "GRE",
            description: "For MS, MEngg, and PhD programs abroad (especially USA, Europe).",
        },
        {
            title: "GMAT",
            description: "For MBA programs abroad and in some Indian institutions like ISB.",
        },
        {
            title: "IELTS",
            description: "Tests English proficiency; required for UK, Canada, Australia, etc.",
        },
        {
            title: "TOEFL",
            description: "English proficiency test; required for US universities.",
        },
        {
            title: "PTE Academic",
            description: "English proficiency test accepted in Australia, New Zealand, etc.",
        },
        {
            title: "LSAT (India & Global)",
            description: "For admission to law programs in India and abroad.",
        },
        {
            title: "SAT / ACT (Graduation Pathways)",
            description: "Some colleges abroad accept SAT/ACT for undergraduate or transfer admissions, even post 12th or diploma.",
        },

        // 🏛️ GOVERNMENT JOBS & CIVIL SERVICES
        {
            title: "UPSC Civil Services Exam",
            description: "For IAS, IPS, IFS, and other central government services. Open to all streams.",
        },
        {
            title: "State PSC Exams",
            description: "State-level civil services exams like MPSC, KPSC, BPSC, etc.",
        },
        {
            title: "SSC CGL",
            description: "For government posts in ministries, income tax, CBI, etc. (open to any graduate).",
        },
        {
            title: "SSC CHSL",
            description: "For clerical and assistant roles in central government offices.",
        },
        {
            title: "RRB NTPC / JE / ALP",
            description: "For technical and non-technical roles in Indian Railways.",
        },
        {
            title: "IBPS PO / Clerk",
            description: "For public sector bank recruitment across India.",
        },
        {
            title: "SBI PO / Clerk",
            description: "Banking jobs in State Bank of India — India’s largest bank.",
        },
        {
            title: "RBI Grade B",
            description: "For officer-level posts in Reserve Bank of India.",
        },
        {
            title: "NABARD Grade A/B",
            description: "For rural development and banking sector jobs.",
        },
        {
            title: "LIC AAO / ADO",
            description: "For officer roles in Life Insurance Corporation of India.",
        },
        {
            title: "ESIC / EPFO Exams",
            description: "Recruitment exams for government insurance & provident fund departments.",
        },
        {
            title: "DRDO / ISRO Scientist Exams",
            description: "For science and engineering roles in premier research organizations.",
        },

        // 🔬 RESEARCH & ACADEMIA
        {
            title: "CSIR NET",
            description: "For research fellowships and lectureship in science subjects.",
        },
        {
            title: "UGC NET",
            description: "For Assistant Professor and JRF in humanities and commerce.",
        },
        {
            title: "ICMR JRF",
            description: "For medical and health-related research fellowships.",
        },
        {
            title: "DBT JRF / GATE-Biotech",
            description: "For research in biotechnology and life sciences.",
        },

        // ⚖️ LAW
        {
            title: "CLAT PG",
            description: "For LLM programs in National Law Universities.",
        },
        {
            title: "AIBE",
            description: "All India Bar Exam — required to practice law in India.",
        },

        // 🩺 MEDICAL (After Graduation)
        {
            title: "NEET PG",
            description: "For MD/MS admissions in India (after MBBS).",
        },
        {
            title: "FMGE",
            description: "Foreign Medical Graduates Exam — to practice in India after MBBS abroad.",
        },
        {
            title: "INI-CET",
            description: "Common entrance test for PG at AIIMS, PGIMER, NIMHANS, etc.",
        },

        // 👩‍🏫 TEACHING & EDUCATION
        {
            title: "CTET / TET",
            description: "For teacher eligibility in central and state government schools.",
        },
        {
            title: "KVS / NVS Recruitment",
            description: "Teaching posts in Kendriya Vidyalayas and Navodaya Schools.",
        },

        // ✈️ DEFENSE SERVICES
        {
            title: "CDS (Combined Defence Services)",
            description: "Join Indian Army, Navy, or Air Force after graduation.",
        },
        {
            title: "AFCAT",
            description: "Air Force Common Admission Test for technical and non-technical branches.",
        },
        {
            title: "INET",
            description: "Indian Navy Entrance Test for officer posts.",
        },

        // 🎨 DESIGN & MEDIA
        {
            title: "CEED",
            description: "For admission to M.Des in IITs, IISc, and other top institutes.",
        },
        {
            title: "NID PG",
            description: "For post-graduate design programs at National Institute of Design.",
        },
        {
            title: "IIMC Entrance",
            description: "For PG Diploma in Journalism and Mass Communication.",
        },

        // 🌾 AGRICULTURE & ENVIRONMENT
        {
            title: "ICAR AIEEA PG",
            description: "For M.Sc. in Agriculture, Horticulture, etc.",
        },
        {
            title: "IFS (Indian Forest Service - UPSC)",
            description: "For forest and environmental service roles via UPSC.",
        },

        // 🧰 VOCATIONAL & TECHNICAL
        {
            title: "Apprenticeship Exams (NPCIL, BHEL, IOCL)",
            description: "For engineering/diploma holders to join public sector via training.",
        },
        {
            title: "Skill India / PMKVY Certification",
            description: "Short-term certification exams in specific trades and skills.",
        }
    ],


    scholarshipsList : [
        // 🌍 INTERNATIONAL SCHOLARSHIPS
        {
            title: "DAAD Scholarship",
            description: "Support for Indian students pursuing higher education in Germany, especially for master's and PhD programs.",
        },
        {
            title: "Chevening Scholarship",
            description: "Prestigious UK government scholarship for Indian students pursuing one-year postgraduate programs in the UK.",
        },
        {
            title: "Fulbright-Nehru Fellowship",
            description: "Funding for Indian students and professionals for master’s programs and research in the U.S.",
        },
        {
            title: "Commonwealth Scholarship",
            description: "Offered by the UK for students from Commonwealth countries pursuing master's or PhD programs.",
        },
        {
            title: "Inlaks Shivdasani Scholarship",
            description: "Scholarship for exceptional Indian students to study full-time master’s programs at top global universities.",
        },
        {
            title: "Erasmus Mundus Joint Master Degrees",
            description: "Fully-funded scholarships for master’s programs in Europe offered jointly by multiple universities.",
        },
        {
            title: "Rhodes Scholarship",
            description: "Highly prestigious scholarship for outstanding Indian students to study at the University of Oxford.",
        },
        {
            title: "Tata Scholarship for Cornell University",
            description: "Financial aid for Indian undergraduate students admitted to Cornell University, USA.",
        },
        {
            title: "Australia Awards Scholarship",
            description: "Fully funded master's scholarships for Indian students to study in Australia.",
        },
        {
            title: "Orange Tulip Scholarship (Netherlands)",
            description: "Scholarship for Indian students for master’s programs in Dutch universities.",
        },

        // 🇮🇳 INDIAN SCHOLARSHIPS (Government + Private)
        {
            title: "AICTE Pragati & Saksham Scholarships",
            description: "Scholarships for girls and students with disabilities enrolled in technical education programs approved by AICTE.",
        },
        {
            title: "INSPIRE Scholarship",
            description: "Scholarship for top science students pursuing B.Sc. or M.Sc. programs under the Department of Science and Technology.",
        },
        {
            title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
            description: "Fellowship for students pursuing basic sciences and research careers, now merged into INSPIRE.",
        },
        {
            title: "National Scholarship Portal (NSP)",
            description: "A centralized portal providing access to multiple central and state government scholarships for students from various backgrounds.",
        },
        {
            title: "Post Matric Scholarship for SC/ST/OBC",
            description: "Government scholarship to support students from reserved categories for post-secondary and college education.",
        },
        {
            title: "Maulana Azad National Fellowship",
            description: "Scholarship for minority students pursuing M.Phil or PhD in India (recently discontinued but may resume or be replaced).",
        },
        {
            title: "Central Sector Scheme of Scholarships (CSSS)",
            description: "Scholarship for top-performing Class 12 students pursuing undergraduate or postgraduate studies.",
        },
        {
            title: "Aditya Birla Scholarship",
            description: "For students of top institutions like IITs, BITS, IIMs, and law colleges. Based on merit and performance.",
        },
        {
            title: "HDFC Educational Crisis Scholarship",
            description: "Support for students facing financial hardship due to family crises during their academic journey.",
        },
        {
            title: "ONGC Scholarship for Meritorious Students",
            description: "Scholarship for economically weaker students from SC/ST/OBC and general categories in engineering, MBBS, MBA, and more.",
        }
    ]

};

export default collegeStudentsData;
