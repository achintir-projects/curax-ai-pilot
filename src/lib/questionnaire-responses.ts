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
export const questionnaireResponses: QuestionnaireResponse[] = [
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

// Helper function to get responses by participant ID
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