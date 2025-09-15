import { NextResponse } from 'next/server'

// IRB-Standard and HIPAA-Compliant Questionnaire for CuraX AI Pilot Study

const questionnaire = {
  studyInfo: {
    title: "CuraX AI Family Health Assistant Pilot Study",
    version: "2.0",
    irbNumber: "IRB-2025-0428",
    hipaaCompliant: true,
    informedConsent: true,
    dataProtection: "All data collected will be de-identified and stored in accordance with HIPAA regulations"
  },
  
  sections: [
    {
      id: "informed_consent",
      title: "Informed Consent",
      description: "Please read and confirm your understanding of the study",
      isRequired: true,
      questions: [
        {
          id: "consent_understanding",
          type: "checkbox",
          text: "I have read and understand the purpose of this study",
          required: true,
          options: ["I understand"]
        },
        {
          id: "voluntary_participation",
          type: "checkbox", 
          text: "I understand that my participation is completely voluntary",
          required: true,
          options: ["I understand"]
        },
        {
          id: "withdrawal_rights",
          type: "checkbox",
          text: "I understand that I can withdraw from the study at any time without penalty",
          required: true,
          options: ["I understand"]
        },
        {
          id: "data_confidentiality",
          type: "checkbox",
          text: "I understand that my data will be kept confidential and used only for research purposes",
          required: true,
          options: ["I understand"]
        }
      ]
    },
    {
      id: "demographics",
      title: "Household Demographics",
      description: "Information about your family composition",
      isRequired: true,
      questions: [
        {
          id: "family_size",
          type: "select",
          text: "How many people live in your household?",
          required: true,
          options: ["1 person", "2 people", "3 people", "4 people", "5+ people"]
        },
        {
          id: "children_count",
          type: "select",
          text: "How many children under 18 live in your household?",
          required: true,
          options: ["0", "1", "2", "3", "4+"]
        },
        {
          id: "adults_count",
          type: "select",
          text: "How many adults (18+) live in your household?",
          required: true,
          options: ["1", "2", "3", "4+"]
        },
        {
          id: "seniors_count",
          type: "select",
          text: "How many seniors (65+) live in your household?",
          required: true,
          options: ["0", "1", "2", "3+"]
        },
        {
          id: "age_groups",
          type: "multiselect",
          text: "Which age groups are represented in your household? (Select all that apply)",
          required: true,
          options: ["0-2 years", "3-5 years", "6-12 years", "13-17 years", "18-25 years", "26-45 years", "46-64 years", "65+ years"]
        }
      ]
    },
    {
      id: "health_background",
      title: "Health Background",
      description: "Information about your family's health situation",
      isRequired: true,
      questions: [
        {
          id: "chronic_conditions",
          type: "multiselect",
          text: "Does anyone in your household have any of the following chronic conditions? (Select all that apply)",
          required: true,
          options: ["Asthma", "Diabetes", "Heart disease", "High blood pressure", "Arthritis", "Depression/Anxiety", "None", "Prefer not to say"]
        },
        {
          id: "allergies",
          type: "multiselect",
          text: "Does anyone in your household have any allergies? (Select all that apply)",
          required: true,
          options: ["Food allergies", "Environmental allergies", "Medication allergies", "None", "Prefer not to say"]
        },
        {
          id: "medications",
          type: "multiselect",
          text: "Is anyone in your household currently taking prescription medications? (Select all that apply)",
          required: true,
          options: ["0 medications", "1-2 medications", "3-5 medications", "6+ medications", "Prefer not to say"]
        },
        {
          id: "healthcare_frequency",
          type: "select",
          text: "How often does someone in your household typically visit a healthcare provider?",
          required: true,
          options: ["Less than once a year", "1-2 times per year", "3-5 times per year", "6+ times per year"]
        }
      ]
    },
    {
      id: "technology_usage",
      title: "Technology Usage",
      description: "Information about your household's technology comfort and usage",
      isRequired: true,
      questions: [
        {
          id: "smartphone_usage",
          type: "select",
          text: "How comfortable are household members using smartphones?",
          required: true,
          options: ["Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not at all comfortable"]
        },
        {
          id: "app_usage",
          type: "select",
          text: "How often does your household use mobile apps for health-related purposes?",
          required: true,
          options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"]
        },
        {
          id: "voice_assistant",
          type: "select",
          text: "Does your household use voice assistants (Siri, Alexa, Google Assistant)?",
          required: true,
          options: ["Yes, daily", "Yes, occasionally", "No, but interested", "No, not interested"]
        },
        {
          id: "tech_comfort_level",
          type: "select",
          text: "Overall, how would you rate your household's comfort with technology?",
          required: true,
          options: ["High", "Medium", "Low"]
        }
      ]
    },
    {
      id: "healthcare_challenges",
      title: "Healthcare Challenges",
      description: "Information about challenges your household faces in managing healthcare",
      isRequired: true,
      questions: [
        {
          id: "biggest_challenge",
          type: "select",
          text: "What is your household's biggest challenge in managing healthcare?",
          required: true,
          options: ["Scheduling appointments", "Understanding medical information", "Managing medications", "Coordinating care for multiple family members", "Cost of healthcare", "Time constraints", "Other"]
        },
        {
          id: "information_needs",
          type: "multiselect",
          text: "What type of health information would be most helpful for your household? (Select all that apply)",
          required: true,
          options: ["Symptom assessment", "Medication information", "Preventive care reminders", "Nutrition guidance", "Mental health resources", "Care coordination", "Health education"]
        },
        {
          id: "preferred_communication",
          type: "select",
          text: "How do you prefer to receive health information?",
          required: true,
          options: ["Mobile app", "Email", "Text messages", "Voice assistant", "Phone calls", "Print materials"]
        }
      ]
    },
    {
      id: "expectations",
      title: "Study Expectations",
      description: "Your expectations and goals for participating in this study",
      isRequired: true,
      questions: [
        {
          id: "primary_goal",
          type: "select",
          text: "What is your primary goal for participating in this study?",
          required: true,
          options: ["Improve family health management", "Save time on healthcare tasks", "Reduce healthcare costs", "Better understand health information", "Try new technology", "Contribute to research"]
        },
        {
          id: "feature_interest",
          type: "multiselect",
          text: "Which features are you most interested in trying? (Select all that apply)",
          required: true,
          options: ["Family health profiles", "Symptom checker", "Medication management", "Food analysis for allergies", "Voice commands", "Health record management", "Care coordination tools"]
        },
        {
          id: "usage_frequency",
          type: "select",
          text: "How often do you expect to use the CuraX AI system during the study?",
          required: true,
          options: ["Multiple times daily", "Once daily", "A few times per week", "Once a week", "Less frequently"]
        },
        {
          id: "success_metrics",
          type: "multiselect",
          text: "How would you define success for this study? (Select all that apply)",
          required: true,
          options: ["Improved health outcomes", "Time savings", "Cost savings", "Better health knowledge", "Reduced stress", "Easier care coordination", "Better communication with healthcare providers"]
        }
      ]
    },
    {
      id: "privacy_preferences",
      title: "Privacy Preferences",
      description: "Your preferences for data privacy and sharing",
      isRequired: true,
      questions: [
        {
          id: "data_sharing",
          type: "select",
          text: "How comfortable are you sharing health data for research purposes?",
          required: true,
          options: ["Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not at all comfortable"]
        },
        {
          id: "anonymity_preference",
          type: "select",
          text: "Do you prefer to remain anonymous in study results?",
          required: true,
          options: ["Yes, completely anonymous", "Partially anonymous", "Don't mind being identified"]
        },
        {
          id: "contact_preference",
          type: "select",
          text: "How would you like to be contacted during the study?",
          required: true,
          options: ["Email only", "Text message only", "Email and text", "Phone call", "App notifications"]
        }
      ]
    }
  ]
}

export async function GET() {
  try {
    return NextResponse.json({
      questionnaire,
      metadata: {
        totalQuestions: questionnaire.sections.reduce((total, section) => total + section.questions.length, 0),
        totalSections: questionnaire.sections.length,
        estimatedCompletionTime: "15-20 minutes",
        lastUpdated: "2025-08-01",
        compliantStandards: ["IRB", "HIPAA", "GDPR"]
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch questionnaire' },
      { status: 500 }
    )
  }
}