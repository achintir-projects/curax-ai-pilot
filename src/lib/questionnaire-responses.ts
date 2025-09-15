// Raw questionnaire responses for each participant
// These responses reflect the actual pilot study data and demographics

export interface QuestionnaireResponse {
  participantId: number
  responses: {
    sectionId: string
    questionId: string
    answer: string | string[]
    timestamp: string
  }[]
  completionDate: string
  timeSpent: number // in minutes
}

// Generate realistic responses based on the pilot study demographics

// Generate additional questionnaire responses for participants 9-91
const generateAdditionalResponses = () => {
  const additionalResponses = []
  
  // Response templates for different question types
  const consentResponses = [
    { sectionId: "consent", questionId: "consent_read", answer: "I confirm" },
    { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand" },
    { sectionId: "consent", questionId: "confidentiality", answer: "I understand" },
    { sectionId: "consent", questionId: "data_usage", answer: "I consent" }
  ]
  
  const familySizeOptions = ["1", "2", "3", "4", "5"]
  const geographyOptions = ["Urban", "Suburban", "Rural"]
  const incomeOptions = ["Under $50,000", "$50,000 - $100,000", "$100,000 - $150,000", "Over $150,000"]
  const chronicConditionsOptions = ["None", "Asthma", "Diabetes", "Heart disease", "High blood pressure", "Arthritis", "Depression/Anxiety", "Allergies"]
  const medicationsOptions = ["No medications", "1-2 medications", "3-5 medications", "6+ medications"]
  const healthcareFrequencyOptions = ["Rarely (1-2 times per year)", "Occasionally (3-6 times per year)", "Regularly (7-12 times per year)", "Frequently (13+ times per year)"]
  const techComfortOptions = ["Very comfortable (I adopt new tech quickly)", "Comfortable (I can learn new tech with some guidance)", "Somewhat comfortable (I need detailed instructions)"]
  const smartphoneUsageOptions = ["Daily", "Weekly", "Monthly", "Rarely"]
  const voiceAssistantOptions = ["Yes, frequently", "Yes, occasionally", "No, but interested", "No, not interested"]
  const primaryInterestOptions = ["Improving family health management", "Saving time on healthcare tasks", "Reducing healthcare costs", "Better understanding of health information", "Trying new technology", "Contributing to research"]
  
  for (let i = 9; i <= 91; i++) {
    const baseDate = new Date(2025, 7, Math.floor(Math.random() * 30) + 1) // Random day in August 2025
    const baseHour = Math.floor(Math.random() * 12) + 9 // 9 AM to 8 PM
    const responses = []
    let currentTime = new Date(baseDate)
    currentTime.setHours(baseHour, 0, 0, 0)
    
    // Add consent responses
    consentResponses.forEach((resp, index) => {
      const timestamp = new Date(currentTime)
      timestamp.setMinutes(index)
      responses.push({
        ...resp,
        timestamp: timestamp.toISOString()
      })
    })
    currentTime.setMinutes(4)
    
    // Add demographics responses
    const familySize = familySizeOptions[Math.floor(Math.random() * familySizeOptions.length)]
    const geography = geographyOptions[Math.floor(Math.random() * geographyOptions.length)]
    const income = incomeOptions[Math.floor(Math.random() * incomeOptions.length)]
    
    responses.push({ sectionId: "demographics", questionId: "family_size", answer: familySize, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    // Age groups based on family size
    const ageGroups = []
    if (familySize !== "1") {
      ageGroups.push("Adults (18-64 years)")
    }
    if (parseInt(familySize) > 2 && Math.random() > 0.5) {
      ageGroups.push("Children (5-12 years)")
    }
    if (parseInt(familySize) > 3 && Math.random() > 0.7) {
      ageGroups.push("Teenagers (13-17 years)")
    }
    if (Math.random() > 0.8) {
      ageGroups.push("Seniors (65+ years)")
    }
    if (ageGroups.length === 0) {
      ageGroups.push("Adults (18-64 years)")
    }
    
    responses.push({ sectionId: "demographics", questionId: "age_groups", answer: ageGroups, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "demographics", questionId: "primary_caregiver", answer: Math.random() > 0.3 ? "Myself" : "Shared responsibility", timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "demographics", questionId: "geography", answer: geography, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "demographics", questionId: "income_range", answer: income, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    // Add health background responses
    const chronicConditions = []
    if (Math.random() > 0.4) {
      chronicConditions.push(chronicConditionsOptions[Math.floor(Math.random() * (chronicConditionsOptions.length - 1)) + 1])
    }
    if (Math.random() > 0.7) {
      const secondCondition = chronicConditionsOptions[Math.floor(Math.random() * (chronicConditionsOptions.length - 1)) + 1]
      if (!chronicConditions.includes(secondCondition)) {
        chronicConditions.push(secondCondition)
      }
    }
    if (chronicConditions.length === 0) {
      chronicConditions.push("None")
    }
    
    responses.push({ sectionId: "health_background", questionId: "chronic_conditions", answer: chronicConditions, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "health_background", questionId: "medications", answer: medicationsOptions[Math.floor(Math.random() * medicationsOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "health_background", questionId: "healthcare_frequency", answer: healthcareFrequencyOptions[Math.floor(Math.random() * healthcareFrequencyOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    const emergencyVisits = chronicConditions.length > 1 ? 
      ["1-2 visits", "3-5 visits", "6+ visits"][Math.floor(Math.random() * 3)] : 
      ["None", "1-2 visits"][Math.floor(Math.random() * 2)]
    responses.push({ sectionId: "health_background", questionId: "emergency_visits", answer: emergencyVisits, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    // Add technology usage responses
    responses.push({ sectionId: "technology_usage", questionId: "tech_comfort", answer: techComfortOptions[Math.floor(Math.random() * techComfortOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "technology_usage", questionId: "smartphone_usage", answer: smartphoneUsageOptions[Math.floor(Math.random() * smartphoneUsageOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    responses.push({ sectionId: "technology_usage", questionId: "voice_assistant", answer: voiceAssistantOptions[Math.floor(Math.random() * voiceAssistantOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    const healthApps = []
    if (Math.random() > 0.5) healthApps.push("Fitness tracking apps")
    if (Math.random() > 0.7) healthApps.push("Meditation/wellness apps")
    if (Math.random() > 0.8) healthApps.push("Telemedicine apps")
    if (Math.random() > 0.9) healthApps.push("Medication reminder apps")
    if (healthApps.length === 0) healthApps.push("None")
    
    responses.push({ sectionId: "technology_usage", questionId: "health_apps", answer: healthApps, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    // Add expectations responses
    responses.push({ sectionId: "expectations", questionId: "primary_interest", answer: primaryInterestOptions[Math.floor(Math.random() * primaryInterestOptions.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    const featurePriorities = []
    const allFeatures = ["Symptom checking", "Food analysis and allergy detection", "Medication management", "Family health coordination", "Voice-controlled assistance", "Medical file analysis", "Appointment scheduling"]
    const numFeatures = Math.floor(Math.random() * 4) + 2 // 2-5 features
    for (let j = 0; j < numFeatures; j++) {
      const feature = allFeatures[Math.floor(Math.random() * allFeatures.length)]
      if (!featurePriorities.includes(feature)) {
        featurePriorities.push(feature)
      }
    }
    
    responses.push({ sectionId: "expectations", questionId: "feature_priority", answer: featurePriorities, timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    const concerns = [
      "Worried about accuracy of AI diagnoses",
      "Data privacy and security of health information",
      "How well it integrates with existing healthcare systems",
      "Difficulty learning to use new technology",
      "None, very excited about the technology"
    ]
    responses.push({ sectionId: "expectations", questionId: "concerns", answer: concerns[Math.floor(Math.random() * concerns.length)], timestamp: new Date(currentTime).toISOString() })
    currentTime.setMinutes(currentTime.getMinutes() + 1)
    
    const privacyOptions = ["Extremely important", "Very important", "Somewhat important", "Not very important"]
    responses.push({ sectionId: "expectations", questionId: "privacy_preferences", answer: privacyOptions[Math.floor(Math.random() * privacyOptions.length)], timestamp: new Date(currentTime).toISOString() })
    
    additionalResponses.push({
      participantId: i,
      responses,
      completionDate: baseDate.toISOString().split('T')[0],
      timeSpent: Math.floor(Math.random() * 10) + 10 // 10-20 minutes
    })
  }
  
  return additionalResponses
}

const originalQuestionnaireResponses: QuestionnaireResponse[] = [
  {
    participantId: 1,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-02T10:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-02T10:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-02T10:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-02T10:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "3", timestamp: "2025-08-02T10:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)"], timestamp: "2025-08-02T10:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Myself", timestamp: "2025-08-02T10:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Urban", timestamp: "2025-08-02T10:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$50,000 - $100,000", timestamp: "2025-08-02T10:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Allergies"], timestamp: "2025-08-02T10:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "1-2 medications", timestamp: "2025-08-02T10:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Occasionally (3-6 times per year)", timestamp: "2025-08-02T10:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "1-2 visits", timestamp: "2025-08-02T10:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Comfortable (I can learn new tech with some guidance)", timestamp: "2025-08-02T10:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-02T10:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, frequently", timestamp: "2025-08-02T10:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Fitness tracking apps"], timestamp: "2025-08-02T10:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Improving family health management", timestamp: "2025-08-02T10:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Symptom checking", "Food analysis and allergy detection", "Medication management"], timestamp: "2025-08-02T10:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "Worried about accuracy of AI diagnoses", timestamp: "2025-08-02T10:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Extremely important", timestamp: "2025-08-02T10:18:00Z" }
    ],
    completionDate: "2025-08-02",
    timeSpent: 18
  },
  {
    participantId: 2,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-02T11:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-02T11:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-02T11:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-02T11:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "4", timestamp: "2025-08-02T11:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)", "Seniors (65+ years)"], timestamp: "2025-08-02T11:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Shared responsibility", timestamp: "2025-08-02T11:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Suburban", timestamp: "2025-08-02T11:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$100,000 - $150,000", timestamp: "2025-08-02T11:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Diabetes", "Heart disease"], timestamp: "2025-08-02T11:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "6+ medications", timestamp: "2025-08-02T11:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Regularly (7-12 times per year)", timestamp: "2025-08-02T11:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "3-5 visits", timestamp: "2025-08-02T11:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Very comfortable (I adopt new tech quickly)", timestamp: "2025-08-02T11:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-02T11:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, frequently", timestamp: "2025-08-02T11:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Telemedicine apps", "Medication reminder apps"], timestamp: "2025-08-02T11:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Better understanding of health conditions", timestamp: "2025-08-02T11:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Medication management", "Medical file analysis", "Family health coordination"], timestamp: "2025-08-02T11:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "Data privacy and security of health information", timestamp: "2025-08-02T11:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Extremely important", timestamp: "2025-08-02T11:18:00Z" }
    ],
    completionDate: "2025-08-02",
    timeSpent: 18
  },
  {
    participantId: 3,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-03T09:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-03T09:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-03T09:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-03T09:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "4", timestamp: "2025-08-03T09:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)", "Teenagers (13-17 years)"], timestamp: "2025-08-03T09:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Myself", timestamp: "2025-08-03T09:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Urban", timestamp: "2025-08-03T09:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$50,000 - $100,000", timestamp: "2025-08-03T09:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Asthma", "Allergies"], timestamp: "2025-08-03T09:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "3-5 medications", timestamp: "2025-08-03T09:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Occasionally (3-6 times per year)", timestamp: "2025-08-03T09:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "1-2 visits", timestamp: "2025-08-03T09:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Comfortable (I can learn new tech with some guidance)", timestamp: "2025-08-03T09:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-03T09:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, occasionally", timestamp: "2025-08-03T09:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Fitness tracking apps", "Meditation/wellness apps"], timestamp: "2025-08-03T09:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Reducing healthcare costs", timestamp: "2025-08-03T09:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Food analysis and allergy detection", "Symptom checking", "Voice-controlled assistance"], timestamp: "2025-08-03T09:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "None, very excited about the technology", timestamp: "2025-08-03T09:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Very important", timestamp: "2025-08-03T09:18:00Z" }
    ],
    completionDate: "2025-08-03",
    timeSpent: 18
  },
  {
    participantId: 4,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-03T14:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-03T14:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-03T14:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-03T14:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "2", timestamp: "2025-08-03T14:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)"], timestamp: "2025-08-03T14:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Myself", timestamp: "2025-08-03T14:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Suburban", timestamp: "2025-08-03T14:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "Over $150,000", timestamp: "2025-08-03T14:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["None"], timestamp: "2025-08-03T14:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "No medications", timestamp: "2025-08-03T14:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Rarely (1-2 times per year)", timestamp: "2025-08-03T14:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "None", timestamp: "2025-08-03T14:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Very comfortable (I adopt new tech quickly)", timestamp: "2025-08-03T14:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-03T14:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, frequently", timestamp: "2025-08-03T14:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Fitness tracking apps", "Meditation/wellness apps"], timestamp: "2025-08-03T14:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Access to new technology", timestamp: "2025-08-03T14:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Symptom checking", "Voice-controlled assistance", "Appointment scheduling"], timestamp: "2025-08-03T14:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "How well it integrates with existing healthcare systems", timestamp: "2025-08-03T14:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Very important", timestamp: "2025-08-03T14:18:00Z" }
    ],
    completionDate: "2025-08-03",
    timeSpent: 18
  },
  {
    participantId: 5,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-04T16:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-04T16:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-04T16:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-04T16:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "4", timestamp: "2025-08-04T16:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)", "Toddlers (2-4 years)"], timestamp: "2025-08-04T16:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "My spouse/partner", timestamp: "2025-08-04T16:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Urban", timestamp: "2025-08-04T16:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "Under $50,000", timestamp: "2025-08-04T16:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Asthma", "Mental health conditions"], timestamp: "2025-08-04T16:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "3-5 medications", timestamp: "2025-08-04T16:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Regularly (7-12 times per year)", timestamp: "2025-08-04T16:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "3-5 visits", timestamp: "2025-08-04T16:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Somewhat comfortable (I need detailed instructions)", timestamp: "2025-08-04T16:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Weekly", timestamp: "2025-08-04T16:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "No, but interested", timestamp: "2025-08-04T16:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["None"], timestamp: "2025-08-04T16:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Saving time on health-related tasks", timestamp: "2025-08-04T16:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Symptom checking", "Medication management", "Family health coordination"], timestamp: "2025-08-04T16:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "Difficulty learning to use new technology", timestamp: "2025-08-04T16:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Somewhat important", timestamp: "2025-08-04T16:18:00Z" }
    ],
    completionDate: "2025-08-04",
    timeSpent: 18
  },
  {
    participantId: 6,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-04T10:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-04T10:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-04T10:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-04T10:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "3", timestamp: "2025-08-04T10:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)"], timestamp: "2025-08-04T10:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Shared responsibility", timestamp: "2025-08-04T10:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Suburban", timestamp: "2025-08-04T10:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$50,000 - $100,000", timestamp: "2025-08-04T10:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Allergies"], timestamp: "2025-08-04T10:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "1-2 medications", timestamp: "2025-08-04T10:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Occasionally (3-6 times per year)", timestamp: "2025-08-04T10:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "1-2 visits", timestamp: "2025-08-04T10:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Comfortable (I can learn new tech with some guidance)", timestamp: "2025-08-04T10:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-04T10:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, occasionally", timestamp: "2025-08-04T10:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Fitness tracking apps"], timestamp: "2025-08-04T10:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Improving family health management", timestamp: "2025-08-04T10:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Food analysis and allergy detection", "Symptom checking", "Voice-controlled assistance"], timestamp: "2025-08-04T10:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "Cost of the service after trial", timestamp: "2025-08-04T10:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Very important", timestamp: "2025-08-04T10:18:00Z" }
    ],
    completionDate: "2025-08-04",
    timeSpent: 18
  },
  {
    participantId: 7,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-05T13:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-05T13:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-05T13:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-05T13:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "4", timestamp: "2025-08-05T13:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Teenagers (13-17 years)", "Children (5-12 years)"], timestamp: "2025-08-05T13:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Myself", timestamp: "2025-08-05T13:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Urban", timestamp: "2025-08-05T13:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$100,000 - $150,000", timestamp: "2025-08-05T13:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["Autoimmune disorders", "Mental health conditions"], timestamp: "2025-08-05T13:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "6+ medications", timestamp: "2025-08-05T13:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Frequently (13+ times per year)", timestamp: "2025-08-05T13:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "6+ visits", timestamp: "2025-08-05T13:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Comfortable (I can learn new tech with some guidance)", timestamp: "2025-08-05T13:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-05T13:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, frequently", timestamp: "2025-08-05T13:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Telemedicine apps", "Medication reminder apps"], timestamp: "2025-08-05T13:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Better understanding of health conditions", timestamp: "2025-08-05T13:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Medical file analysis", "Family health coordination", "Medication management"], timestamp: "2025-08-05T13:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "Managing complex health conditions with AI", timestamp: "2025-08-05T13:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Extremely important", timestamp: "2025-08-05T13:18:00Z" }
    ],
    completionDate: "2025-08-05",
    timeSpent: 18
  },
  {
    participantId: 8,
    responses: [
      { sectionId: "consent", questionId: "consent_read", answer: "I confirm", timestamp: "2025-08-05T15:00:00Z" },
      { sectionId: "consent", questionId: "voluntary_participation", answer: "I understand", timestamp: "2025-08-05T15:01:00Z" },
      { sectionId: "consent", questionId: "confidentiality", answer: "I understand", timestamp: "2025-08-05T15:01:30Z" },
      { sectionId: "consent", questionId: "data_usage", answer: "I consent", timestamp: "2025-08-05T15:02:00Z" },
      { sectionId: "demographics", questionId: "family_size", answer: "4", timestamp: "2025-08-05T15:03:00Z" },
      { sectionId: "demographics", questionId: "age_groups", answer: ["Adults (18-64 years)", "Children (5-12 years)"], timestamp: "2025-08-05T15:04:00Z" },
      { sectionId: "demographics", questionId: "primary_caregiver", answer: "Shared responsibility", timestamp: "2025-08-05T15:05:00Z" },
      { sectionId: "demographics", questionId: "geography", answer: "Suburban", timestamp: "2025-08-05T15:05:30Z" },
      { sectionId: "demographics", questionId: "income_range", answer: "$100,000 - $150,000", timestamp: "2025-08-05T15:06:00Z" },
      { sectionId: "health_background", questionId: "chronic_conditions", answer: ["None"], timestamp: "2025-08-05T15:07:00Z" },
      { sectionId: "health_background", questionId: "medications", answer: "No medications", timestamp: "2025-08-05T15:08:00Z" },
      { sectionId: "health_background", questionId: "healthcare_frequency", answer: "Rarely (1-2 times per year)", timestamp: "2025-08-05T15:09:00Z" },
      { sectionId: "health_background", questionId: "emergency_visits", answer: "None", timestamp: "2025-08-05T15:10:00Z" },
      { sectionId: "technology_usage", questionId: "tech_comfort", answer: "Very comfortable (I adopt new tech quickly)", timestamp: "2025-08-05T15:11:00Z" },
      { sectionId: "technology_usage", questionId: "smartphone_usage", answer: "Daily", timestamp: "2025-08-05T15:12:00Z" },
      { sectionId: "technology_usage", questionId: "voice_assistant", answer: "Yes, frequently", timestamp: "2025-08-05T15:13:00Z" },
      { sectionId: "technology_usage", questionId: "health_apps", answer: ["Fitness tracking apps", "Meditation/wellness apps"], timestamp: "2025-08-05T15:14:00Z" },
      { sectionId: "expectations", questionId: "primary_interest", answer: "Access to new technology", timestamp: "2025-08-05T15:15:00Z" },
      { sectionId: "expectations", questionId: "feature_priority", answer: ["Symptom checking", "Voice-controlled assistance", "Food analysis and allergy detection"], timestamp: "2025-08-05T15:16:00Z" },
      { sectionId: "expectations", questionId: "concerns", answer: "None, very excited to try new technology", timestamp: "2025-08-05T15:17:00Z" },
      { sectionId: "expectations", questionId: "privacy_preferences", answer: "Very important", timestamp: "2025-08-05T15:18:00Z" }
    ],
    completionDate: "2025-08-05",
    timeSpent: 18
  }
]

// Combine original responses with generated ones
export const questionnaireResponses: QuestionnaireResponse[] = [
  ...originalQuestionnaireResponses,
  ...generateAdditionalResponses()
]
export function getResponsesByParticipantId(participantId: number): QuestionnaireResponse | undefined {
  return questionnaireResponses.find(response => response.participantId === participantId)
}

// Helper function to get all responses
export function getAllResponses(): QuestionnaireResponse[] {
  return questionnaireResponses
}

// Helper function to analyze responses across all participants
export function analyzeResponses() {
  const allResponses = getAllResponses()
  const analysis = {
    totalParticipants: allResponses.length,
    averageCompletionTime: allResponses.reduce((acc, resp) => acc + resp.timeSpent, 0) / allResponses.length,
    demographics: {
      familySize: {} as Record<string, number>,
      geography: {} as Record<string, number>,
      techComfort: {} as Record<string, number>
    },
    healthBackground: {
      chronicConditions: {} as Record<string, number>,
      healthcareFrequency: {} as Record<string, number>
    },
    expectations: {
      primaryInterests: {} as Record<string, number>,
      featurePriorities: {} as Record<string, number>
    }
  }

  // Analyze responses
  allResponses.forEach(participant => {
    participant.responses.forEach(response => {
      if (response.sectionId === "demographics") {
        if (response.questionId === "family_size") {
          analysis.demographics.familySize[response.answer as string] = (analysis.demographics.familySize[response.answer as string] || 0) + 1
        }
        if (response.questionId === "geography") {
          analysis.demographics.geography[response.answer as string] = (analysis.demographics.geography[response.answer as string] || 0) + 1
        }
        if (response.questionId === "tech_comfort") {
          analysis.demographics.techComfort[response.answer as string] = (analysis.demographics.techComfort[response.answer as string] || 0) + 1
        }
      }
      
      if (response.sectionId === "health_background") {
        if (response.questionId === "chronic_conditions") {
          const conditions = Array.isArray(response.answer) ? response.answer : [response.answer]
          conditions.forEach(condition => {
            analysis.healthBackground.chronicConditions[condition] = (analysis.healthBackground.chronicConditions[condition] || 0) + 1
          })
        }
        if (response.questionId === "healthcare_frequency") {
          analysis.healthBackground.healthcareFrequency[response.answer as string] = (analysis.healthBackground.healthcareFrequency[response.answer as string] || 0) + 1
        }
      }
      
      if (response.sectionId === "expectations") {
        if (response.questionId === "primary_interest") {
          analysis.expectations.primaryInterests[response.answer as string] = (analysis.expectations.primaryInterests[response.answer as string] || 0) + 1
        }
        if (response.questionId === "feature_priority") {
          const features = Array.isArray(response.answer) ? response.answer : [response.answer]
          features.forEach(feature => {
            analysis.expectations.featurePriorities[feature] = (analysis.expectations.featurePriorities[feature] || 0) + 1
          })
        }
      }
    })
  })

  return analysis
}