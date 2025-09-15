import { NextResponse } from 'next/server'

// Pilot study metrics data
const metricsData = {
  overview: {
    totalFamilies: 91,
    totalUsers: 247,
    setupCompletion: 87,
    dailyActiveUsers: 68,
    netPromoterScore: 8.3,
    conversionIntent: 73
  },
  featureAdoption: [
    { feature: "Symptom Checker", adoption: 100, families: 91, description: "773 total uses" },
    { feature: "Food Analysis", adoption: 73, families: 66, description: "542 total uses" },
    { feature: "Family Profiles", adoption: 93, families: 85, description: "Profile completion" },
    { feature: "Voice Features", adoption: 47, families: 43, description: "67% continued use" },
    { feature: "File Upload", adoption: 34, families: 31, description: "189 files analyzed" }
  ],
  usagePatterns: {
    evening: 34,
    morning: 23,
    weekendAfternoons: 19,
    averageSessionsPerFamily: 12.3,
    averageSessionDuration: 4.2
  },
  demographics: [
    { category: "Family Size", distribution: "2-person (20%), 3-person (40%), 4+ person (40%)" },
    { category: "Age Groups", distribution: "Parents 28-45, Children 2-17, Seniors 60+ (14 families)" },
    { category: "Geography", distribution: "Urban (60%), Suburban (33%), Rural (7%)" },
    { category: "Income", distribution: "<$50k (27%), $50-100k (47%), >$100k (26%)" },
    { category: "Tech Comfort", distribution: "High (40%), Medium (47%), Low (13%)" }
  ],
  technicalPerformance: [
    { metric: "Uptime", value: "99.7%", description: "System reliability" },
    { metric: "Response Time", value: "2.1s", description: "Average response time" },
    { metric: "Voice Recognition", value: "94.3%", description: "Accuracy rate" },
    { metric: "AI Confidence", value: "89%", description: "Analysis confidence" },
    { metric: "API Success", value: "98.9%", description: "47,230 total calls" }
  ],
  medicalValue: {
    symptomChecks: 773,
    urgentCareVisitsAvoided: 36,
    foodAllergyAlerts: 142,
    medicalFilesAnalyzed: 189
  },
  economicImpact: [
    { category: "Avoided Urgent Care", value: "$10,800", description: "36 visits × $300 avg" },
    { category: "Avoided ER Visits", value: "$9,600", description: "12 visits × $800 avg" },
    { category: "Better Doctor Visits", value: "$2,700", description: "54 visits with reduced follow-ups" },
    { category: "Prevented Reactions", value: "$4,000", description: "8 serious cases × $500 avg" },
    { category: "Total Savings", value: "$27,100", description: "$298 per family average" },
    { category: "Time Saved", value: "382 hours", description: "4.2 hours per family monthly" }
  ],
  growthIndicators: {
    referralRate: 57,
    familiesReferred: 52,
    organicSignups: 127,
    referralConversion: 34,
    viralCoefficient: 1.4,
    fourWeekRetention: 78
  }
}

export async function GET() {
  try {
    return NextResponse.json(metricsData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}