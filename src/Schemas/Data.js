import { findByTestId } from "@testing-library/react";

export const Data = {
  profile: {
    name: "Dr. Balsam Mohammed",
    ocupation: "General Practitioner | DOH - HAAD license | Permanent Registeration Sudan Council | AHA accredited BLS | Golden Visa Holder",
    location: "United Arab  Emirates, Abu Dhabi",
    email: "balsamdisougi@gmail.com",
    telephone: "+971 552392024",
    image: "images/pp.jpeg",
    date: "    08. feb. 1987"
  },
  aboutMe: {
    label: "Profile",
    description:
      "Qualified medical practitioner with over 6 years of experience and a significant amount of background working in emergency departments as well as family medicine practices. I have great expectations of obtaining a position as a General Practitioner in a health institution, which will allow me to both improve the quality of care that I deliver to patients and increase the revenue that the institution brings in.",
  },
  skills: {
    technicalLabel: "Medical licenses",
    softLabel: "Skills",
    technicalSkills: [
      "Department of Health Abu Dhabi DOH / HAAD registration (HPPRF-2020-001209) (active)",
      "Permenant registration Sudan Medical Council No. 48593 | Jun. 2016",
     ],
    softSkills: [
      "Communication & interpersonal skills",
      "professionalism & humanism",
      "Attentive to details",
      "Skillfull negotiation of the healthcare system",
      "Critical Thinkning",
      "Scholary approch to clinical practice",
    ],
  },
  socialMedia: {
    label: "Languages",
    social: [
      {
        label: "Arabic - Mother tongue ",
        // name: "linkedin",
        // url: "https://www.linkedin.com/in/mohammed-disougi-9427a9135/",
        // className: "bxl-linkedin-square",
      },
      {
        label: "English - Fluent",
        // name: "Gmail",
        // url: "https://mohammedaldisougi@gmail.com/",
        // className: "bxl-gmail",
      },
    ],
  },

  experience: {
    works: [
      {
        title: "Somerian Health care | UAE, Abu Dhabi",
        period: "Sep. 2020 - Dec. 2022",
        company: "General Practitioner",
        description: [
          "a member of the first-response team for COVID, emergency, and patient isolation"
         ],
      },
      {
        title: "Almehwar Modren Medical Complex | Sudan",
        period: "Sep. 2018 - Dec. 2019 ",
        company: "General Practitioner",
        description: [
          "Designed healthcare treatment programs and treatments, conducted patient examinations, and diagnostic testing.",
          "Referred the patient to a specialist as needed.",
          "Advised patients on self-care, dietary, and lifestyle adjustments to encourage good health and a quality lifestyle.",
          "Prescription medications and medical care are utilized to treat diagnoses and diseases with documentation."
        ],
      },
      {
        title: "Omdurman teaching Hospital | Sudan",
        period: "Sep. 2016 - Aug. 2018 ",
        company: "General Practitioner",
        description: [
          "All patients in the emergency room are evaluated by collecting a thorough medical history, performing an examination, and requesting the appropriate diagnostic tests.",
          "Individual patient's treatment strategy is decided upon."
        ],
      },
  
      {
        title: "Federal Minsitry of Health | Sudan",
        period: "jan. 2014 - feb. 2016 ",
        company: "House Officer",
        description: [
          "Three months each are devoted to medicine, pediatrics, surgery, and obstetrics and gynecology."
        ],
      },
     
     
    ],
    academic: [
      {
        career: "Master degree in family medicine | Egypt ",
        date: "Apr. 2021 - ongoing (1st year finsihed)",
        institution: "Bani Suef University",
      },
      {
        career: "Medicine and bachelor of Surgery (MBBS) | Sudan",
        date: "Jun. 2014",
        institution: "University of Gezira Faculty of Medicine",
      },

    ],
    proyects: [
      {
        name: "BLS",
        company: "Cleveland Hospital | UAE, Abu Dhabi",
        period: "sep. 2021",
        description: [
          "",
        ],
      },
      {
        name: "Emergency & Trauma",
        company: "SKMC Hospital | UAE, Abu Dhabi",
        period: "Aug. 2016",
        description: [
          "",
        ],
      },
      {
        name: "Emergency & Trauma",
        company: "Ibrahim Malik Hospital | Sudan, Khartoum",
        period: "Dec. 2014",
        description: [
          "",
        ],
      },
      
    ],
    proyects1: [
      {
        name: "BLS",
        company: "Cleveland Hospital | UAE, Abu Dhabi",
        period: "sep. 2021",
        description: [
          "",
        ],
      },
    ]
  },
};
