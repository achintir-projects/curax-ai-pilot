import { NextRequest, NextResponse } from 'next/server'

// Generate realistic questionnaire responses for each participant
const generateParticipantResponses = (participantId: number, participantName: string) => {
  // Simulate varied responses based on participant ID to create realistic diversity
  const seed = participantId % 10
  
  const responses = {
    participantId,
    participantName,
    submissionDate: new Date(2025, 7, Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0],
    responses: {
      informed_consent: {
        consent_understanding: ["I understand"],
        voluntary_participation: ["I understand"],
        withdrawal_rights: ["I understand"],
        data_confidentiality: ["I understand"]
      },
      demographics: {
        family_size: ["2 people", "3 people", "4 people", "5+ people"][seed % 4],
        children_count: ["0", "1", "2", "3", "4+"][Math.floor(seed / 2) % 5],
        adults_count: ["1", "2", "3", "4+"][Math.floor(seed / 3) % 4],
        seniors_count: ["0", "1", "2", "3+"][seed % 4],
        age_groups: (() => {
          const ageGroups = ["0-2 years", "3-5 years", "6-12 years", "13-17 years", "18-25 years", "26-45 years", "46-64 years", "65+ years"]
          const selected = []
          selected.push(ageGroups[5 + (seed % 3)]) // Always include adults
          if (seed % 3 === 0) selected.push(ageGroups[seed % 4]) // Sometimes include children
          if (seed % 4 === 0) selected.push(ageGroups[7]) // Sometimes include seniors
          return selected
        })()
      },
      health_background: {
        chronic_conditions: (() => {
          const conditions = ["Asthma", "Diabetes", "Heart disease", "High blood pressure", "Arthritis", "Depression/Anxiety", "None", "Prefer not to say"]
          const selected = []
          if (seed % 3 === 0) selected.push(conditions[seed % 6])
          if (seed % 4 === 0) selected.push("Depression/Anxiety")
          if (selected.length === 0) selected.push("None")
          return selected
        })(),
        allergies: (() => {
          const allergies = ["Food allergies", "Environmental allergies", "Medication allergies", "None", "Prefer not to say"]
          if (seed % 3 === 0) return ["Food allergies", "Environmental allergies"]
          if (seed % 4 === 0) return ["Medication allergies"]
          return ["None"]
        })(),
        medications: ["0 medications", "1-2 medications", "3-5 medications", "6+ medications", "Prefer not to say"][seed % 5],
        healthcare_frequency: ["Less than once a year", "1-2 times per year", "3-5 times per year", "6+ times per year"][seed % 4]
      },
      technology_usage: {
        smartphone_usage: ["Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not at all comfortable"][seed % 4],
        app_usage: ["Daily", "Weekly", "Monthly", "Rarely", "Never"][seed % 5],
        voice_assistant: ["Yes, daily", "Yes, occasionally", "No, but interested", "No, not interested"][seed % 4],
        tech_comfort_level: ["High", "Medium", "Low"][seed % 3]
      },
      healthcare_challenges: {
        biggest_challenge: ["Scheduling appointments", "Understanding medical information", "Managing medications", "Coordinating care for multiple family members", "Cost of healthcare", "Time constraints", "Other"][seed % 7],
        information_needs: (() => {
          const needs = ["Symptom assessment", "Medication information", "Preventive care reminders", "Nutrition guidance", "Mental health resources", "Care coordination", "Health education"]
          const selected = [needs[seed % 7]]
          if (seed % 3 === 0) selected.push(needs[(seed + 1) % 7])
          if (seed % 4 === 0) selected.push(needs[(seed + 2) % 7])
          return selected
        })(),
        preferred_communication: ["Mobile app", "Email", "Text messages", "Voice assistant", "Phone calls", "Print materials"][seed % 6]
      },
      expectations: {
        primary_goal: ["Improve family health management", "Save time on healthcare tasks", "Reduce healthcare costs", "Better understand health information", "Try new technology", "Contribute to research"][seed % 6],
        feature_interest: (() => {
          const features = ["Family health profiles", "Symptom checker", "Medication management", "Food analysis for allergies", "Voice commands", "Health record management", "Care coordination tools"]
          const selected = [features[seed % 7], features[(seed + 1) % 7]]
          if (seed % 3 === 0) selected.push(features[(seed + 2) % 7])
          return selected
        })(),
        usage_frequency: ["Multiple times daily", "Once daily", "A few times per week", "Once a week", "Less frequently"][seed % 5],
        success_metrics: (() => {
          const metrics = ["Improved health outcomes", "Time savings", "Cost savings", "Better health knowledge", "Reduced stress", "Easier care coordination", "Better communication with healthcare providers"]
          const selected = [metrics[seed % 7], metrics[(seed + 1) % 7]]
          if (seed % 3 === 0) selected.push(metrics[(seed + 2) % 7])
          return selected
        })()
      },
      privacy_preferences: {
        data_sharing: ["Very comfortable", "Somewhat comfortable", "Not very comfortable", "Not at all comfortable"][seed % 4],
        anonymity_preference: ["Yes, completely anonymous", "Partially anonymous", "Don't mind being identified"][seed % 3],
        contact_preference: ["Email only", "Text message only", "Email and text", "Phone call", "App notifications"][seed % 5]
      }
    },
    metadata: {
      completionTime: Math.floor(Math.random() * 10) + 10, // 10-20 minutes
      deviceType: ["Mobile", "Desktop", "Tablet"][seed % 3],
      browser: ["Chrome", "Safari", "Firefox", "Edge"][seed % 4],
      ipAddress: `192.168.1.${Math.floor(Math.random() * 254) + 1}`,
      sessionId: `sess_${participantId}_${Date.now()}`
    }
  }
  
  return responses
}

// Generate responses for all 91 participants
const allResponses = []
for (let i = 1; i <= 91; i++) {
  const participantNames = [
    "Sarah Johnson", "Michael Chen", "Emily Rodriguez", "David Thompson", "Maria Garcia",
    "James Wilson", "Lisa Anderson", "Robert Kim", "Jennifer Martinez", "Christopher Lee",
    "Amanda Taylor", "Daniel Brown", "Jessica Davis", "Matthew Miller", "Ashley White",
    "Anthony Jones", "Rachel Green", "Kevin Wang", "Stephanie Clark", "Jason Lewis",
    "Nicole Hall", "Ryan Young", "Samantha King", "Tyler Scott", "Megan Wright",
    "Brandon Turner", "Kimberly Adams", "Jordan Baker", "Laura Nelson", "Andrew Hill",
    "Brittany Campbell", "Justin Parker", "Kayla Evans", "Steven Carter", "Danielle Roberts",
    "Eric Gomez", "Tiffany Phillips", "Marcus Mitchell", "Vanessa Cooper", "Carlos Reed",
    "Jasmine Bailey", "Nathan Bell", "Alexis Murphy", "Gregory Rivera", "Cynthia Cook",
    "Aaron Rogers", "Monica Stewart", "Jonathan Morris", "Crystal Peterson", "Cameron Cox",
    "Natalie Ward", "Scott Howard", "Veronica Flores", "Kyle Butler", "Priya Patel",
    "Raj Sharma", "Aisha Ahmed", "Omar Hassan", "Chen Wei", "Yuki Tanaka",
    "Isabella Silva", "Lucas Santos", "Sofia Petrov", "Dmitri Volkov", "Fatima Al-Zahra",
    "Ibrahim Khalil", "Ananya Singh", "Ravi Kumar", "Mei-Lin Chang", "Hiroshi Sato",
    "Lucia Rossi", "Alessandro Romano", "Amara Okafor", "Kwame Asante", "Zara Osman",
    "Tariq Mansour", "Lin Zhou", "Kenji Nakamura", "Camila Morales", "Diego Fernandez",
    "Ingrid Larsson", "Erik Hansen", "Nadia Popov", "Alexei Kozlov", "Leila Nazari",
    "Arash Hosseini", "Priya Reddy", "Vikram Gupta", "Yuki Yamamoto", "Akira Suzuki",
    "Elena Petersen"
  ]
  
  allResponses.push(generateParticipantResponses(i, participantNames[i - 1]))
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const participantId = searchParams.get('participantId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (participantId) {
      // Return specific participant's responses
      const response = allResponses.find(r => r.participantId === parseInt(participantId))
      if (!response) {
        return NextResponse.json(
          { error: 'Participant not found' },
          { status: 404 }
        )
      }
      return NextResponse.json(response)
    }

    // Return paginated list of all responses
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedResponses = allResponses.slice(startIndex, endIndex)

    return NextResponse.json({
      responses: paginatedResponses,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(allResponses.length / limit),
        totalResponses: allResponses.length,
        hasMore: endIndex < allResponses.length
      },
      summary: {
        totalParticipants: allResponses.length,
        averageCompletionTime: Math.round(allResponses.reduce((sum, r) => sum + r.metadata.completionTime, 0) / allResponses.length),
        techComfortLevels: {
          high: allResponses.filter(r => r.responses.technology_usage.tech_comfort_level === "High").length,
          medium: allResponses.filter(r => r.responses.technology_usage.tech_comfort_level === "Medium").length,
          low: allResponses.filter(r => r.responses.technology_usage.tech_comfort_level === "Low").length
        }
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch responses' },
      { status: 500 }
    )
  }
}