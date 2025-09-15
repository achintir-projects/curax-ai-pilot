import { NextRequest, NextResponse } from 'next/server'
import { getResponsesByParticipantId } from '@/lib/questionnaire-responses'

// Participant data from the pilot study
const participants = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com", familySize: 3, joinDate: "2025-08-02", usage: "High" },
  { id: 2, name: "Michael Chen", email: "michael.chen@email.com", familySize: 4, joinDate: "2025-08-02", usage: "High" },
  { id: 3, name: "Emily Rodriguez", email: "emily.rodriguez@email.com", familySize: 4, joinDate: "2025-08-03", usage: "Medium" },
  { id: 4, name: "David Thompson", email: "david.thompson@email.com", familySize: 2, joinDate: "2025-08-03", usage: "Medium" },
  { id: 5, name: "Maria Garcia", email: "maria.garcia@email.com", familySize: 4, joinDate: "2025-08-04", usage: "High" },
  { id: 6, name: "James Wilson", email: "james.wilson@email.com", familySize: 3, joinDate: "2025-08-04", usage: "Medium" },
  { id: 7, name: "Lisa Anderson", email: "lisa.anderson@email.com", familySize: 4, joinDate: "2025-08-05", usage: "High" },
  { id: 8, name: "Robert Kim", email: "robert.kim@email.com", familySize: 4, joinDate: "2025-08-05", usage: "Medium" },
  { id: 9, name: "Jennifer Martinez", email: "jennifer.martinez@email.com", familySize: 3, joinDate: "2025-08-06", usage: "Medium" },
  { id: 10, name: "Christopher Lee", email: "christopher.lee@email.com", familySize: 2, joinDate: "2025-08-06", usage: "Low" },
  { id: 11, name: "Amanda Taylor", email: "amanda.taylor@email.com", familySize: 3, joinDate: "2025-08-07", usage: "High" },
  { id: 12, name: "Daniel Brown", email: "daniel.brown@email.com", familySize: 4, joinDate: "2025-08-07", usage: "Medium" },
  { id: 13, name: "Jessica Davis", email: "jessica.davis@email.com", familySize: 3, joinDate: "2025-08-08", usage: "High" },
  { id: 14, name: "Matthew Miller", email: "matthew.miller@email.com", familySize: 2, joinDate: "2025-08-08", usage: "Medium" },
  { id: 15, name: "Ashley White", email: "ashley.white@email.com", familySize: 4, joinDate: "2025-08-09", usage: "High" },
  { id: 16, name: "Anthony Jones", email: "anthony.jones@email.com", familySize: 3, joinDate: "2025-08-09", usage: "Medium" },
  { id: 17, name: "Rachel Green", email: "rachel.green@email.com", familySize: 2, joinDate: "2025-08-10", usage: "Low" },
  { id: 18, name: "Kevin Wang", email: "kevin.wang@email.com", familySize: 4, joinDate: "2025-08-10", usage: "High" },
  { id: 19, name: "Stephanie Clark", email: "stephanie.clark@email.com", familySize: 3, joinDate: "2025-08-11", usage: "Medium" },
  { id: 20, name: "Jason Lewis", email: "jason.lewis@email.com", familySize: 4, joinDate: "2025-08-11", usage: "High" },
  { id: 21, name: "Nicole Hall", email: "nicole.hall@email.com", familySize: 3, joinDate: "2025-08-12", usage: "Medium" },
  { id: 22, name: "Ryan Young", email: "ryan.young@email.com", familySize: 2, joinDate: "2025-08-12", usage: "Low" },
  { id: 23, name: "Samantha King", email: "samantha.king@email.com", familySize: 4, joinDate: "2025-08-13", usage: "High" },
  { id: 24, name: "Tyler Scott", email: "tyler.scott@email.com", familySize: 3, joinDate: "2025-08-13", usage: "Medium" },
  { id: 25, name: "Megan Wright", email: "megan.wright@email.com", familySize: 2, joinDate: "2025-08-14", usage: "Low" },
  { id: 26, name: "Brandon Turner", email: "brandon.turner@email.com", familySize: 4, joinDate: "2025-08-14", usage: "High" },
  { id: 27, name: "Kimberly Adams", email: "kimberly.adams@email.com", familySize: 3, joinDate: "2025-08-15", usage: "Medium" },
  { id: 28, name: "Jordan Baker", email: "jordan.baker@email.com", familySize: 4, joinDate: "2025-08-15", usage: "High" },
  { id: 29, name: "Laura Nelson", email: "laura.nelson@email.com", familySize: 2, joinDate: "2025-08-16", usage: "Medium" },
  { id: 30, name: "Andrew Hill", email: "andrew.hill@email.com", familySize: 3, joinDate: "2025-08-16", usage: "High" },
  { id: 31, name: "Brittany Campbell", email: "brittany.campbell@email.com", familySize: 4, joinDate: "2025-08-17", usage: "Medium" },
  { id: 32, name: "Justin Parker", email: "justin.parker@email.com", familySize: 3, joinDate: "2025-08-17", usage: "Low" },
  { id: 33, name: "Kayla Evans", email: "kayla.evans@email.com", familySize: 2, joinDate: "2025-08-18", usage: "Medium" },
  { id: 34, name: "Steven Carter", email: "steven.carter@email.com", familySize: 4, joinDate: "2025-08-18", usage: "High" },
  { id: 35, name: "Danielle Roberts", email: "danielle.roberts@email.com", familySize: 3, joinDate: "2025-08-19", usage: "Medium" },
  { id: 36, name: "Eric Gomez", email: "eric.gomez@email.com", familySize: 4, joinDate: "2025-08-19", usage: "High" },
  { id: 37, name: "Tiffany Phillips", email: "tiffany.phillips@email.com", familySize: 2, joinDate: "2025-08-20", usage: "Low" },
  { id: 38, name: "Marcus Mitchell", email: "marcus.mitchell@email.com", familySize: 3, joinDate: "2025-08-20", usage: "Medium" },
  { id: 39, name: "Vanessa Cooper", email: "vanessa.cooper@email.com", familySize: 4, joinDate: "2025-08-21", usage: "High" },
  { id: 40, name: "Carlos Reed", email: "carlos.reed@email.com", familySize: 3, joinDate: "2025-08-21", usage: "Medium" },
  { id: 41, name: "Jasmine Bailey", email: "jasmine.bailey@email.com", familySize: 2, joinDate: "2025-08-22", usage: "Low" },
  { id: 42, name: "Nathan Bell", email: "nathan.bell@email.com", familySize: 4, joinDate: "2025-08-22", usage: "High" },
  { id: 43, name: "Alexis Murphy", email: "alexis.murphy@email.com", familySize: 3, joinDate: "2025-08-23", usage: "Medium" },
  { id: 44, name: "Gregory Rivera", email: "gregory.rivera@email.com", familySize: 4, joinDate: "2025-08-23", usage: "High" },
  { id: 45, name: "Cynthia Cook", email: "cynthia.cook@email.com", familySize: 2, joinDate: "2025-08-24", usage: "Medium" },
  { id: 46, name: "Aaron Rogers", email: "aaron.rogers@email.com", familySize: 3, joinDate: "2025-08-24", usage: "Low" },
  { id: 47, name: "Monica Stewart", email: "monica.stewart@email.com", familySize: 4, joinDate: "2025-08-25", usage: "High" },
  { id: 48, name: "Jonathan Morris", email: "jonathan.morris@email.com", familySize: 3, joinDate: "2025-08-25", usage: "Medium" },
  { id: 49, name: "Crystal Peterson", email: "crystal.peterson@email.com", familySize: 2, joinDate: "2025-08-26", usage: "Low" },
  { id: 50, name: "Cameron Cox", email: "cameron.cox@email.com", familySize: 4, joinDate: "2025-08-26", usage: "High" },
  { id: 51, name: "Natalie Ward", email: "natalie.ward@email.com", familySize: 3, joinDate: "2025-08-27", usage: "Medium" },
  { id: 52, name: "Scott Howard", email: "scott.howard@email.com", familySize: 4, joinDate: "2025-08-27", usage: "High" },
  { id: 53, name: "Veronica Flores", email: "veronica.flores@email.com", familySize: 2, joinDate: "2025-08-28", usage: "Low" },
  { id: 54, name: "Kyle Butler", email: "kyle.butler@email.com", familySize: 3, joinDate: "2025-08-28", usage: "Medium" },
  { id: 55, name: "Priya Patel", email: "priya.patel@email.com", familySize: 4, joinDate: "2025-08-29", usage: "High" },
  { id: 56, name: "Raj Sharma", email: "raj.sharma@email.com", familySize: 3, joinDate: "2025-08-29", usage: "Medium" },
  { id: 57, name: "Aisha Ahmed", email: "aisha.ahmed@email.com", familySize: 2, joinDate: "2025-08-30", usage: "Low" },
  { id: 58, name: "Omar Hassan", email: "omar.hassan@email.com", familySize: 4, joinDate: "2025-08-30", usage: "High" },
  { id: 59, name: "Chen Wei", email: "chen.wei@email.com", familySize: 3, joinDate: "2025-08-31", usage: "Medium" },
  { id: 60, name: "Yuki Tanaka", email: "yuki.tanaka@email.com", familySize: 4, joinDate: "2025-08-31", usage: "High" },
  { id: 61, name: "Isabella Silva", email: "isabella.silva@email.com", familySize: 2, joinDate: "2025-09-01", usage: "Medium" },
  { id: 62, name: "Lucas Santos", email: "lucas.santos@email.com", familySize: 3, joinDate: "2025-09-01", usage: "Low" },
  { id: 63, name: "Sofia Petrov", email: "sofia.petrov@email.com", familySize: 4, joinDate: "2025-09-02", usage: "High" },
  { id: 64, name: "Dmitri Volkov", email: "dmitri.volkov@email.com", familySize: 3, joinDate: "2025-09-02", usage: "Medium" },
  { id: 65, name: "Fatima Al-Zahra", email: "fatima.alzahra@email.com", familySize: 2, joinDate: "2025-09-03", usage: "Low" },
  { id: 66, name: "Ibrahim Khalil", email: "ibrahim.khalil@email.com", familySize: 4, joinDate: "2025-09-03", usage: "High" },
  { id: 67, name: "Ananya Singh", email: "ananya.singh@email.com", familySize: 3, joinDate: "2025-09-04", usage: "Medium" },
  { id: 68, name: "Ravi Kumar", email: "ravi.kumar@email.com", familySize: 4, joinDate: "2025-09-04", usage: "High" },
  { id: 69, name: "Mei-Lin Chang", email: "meilin.chang@email.com", familySize: 2, joinDate: "2025-09-05", usage: "Medium" },
  { id: 70, name: "Hiroshi Sato", email: "hiroshi.sato@email.com", familySize: 3, joinDate: "2025-09-05", usage: "Low" },
  { id: 71, name: "Lucia Rossi", email: "lucia.rossi@email.com", familySize: 4, joinDate: "2025-09-06", usage: "High" },
  { id: 72, name: "Alessandro Romano", email: "alessandro.romano@email.com", familySize: 3, joinDate: "2025-09-06", usage: "Medium" },
  { id: 73, name: "Amara Okafor", email: "amara.okafor@email.com", familySize: 2, joinDate: "2025-09-07", usage: "Low" },
  { id: 74, name: "Kwame Asante", email: "kwame.asante@email.com", familySize: 4, joinDate: "2025-09-07", usage: "High" },
  { id: 75, name: "Zara Osman", email: "zara.osman@email.com", familySize: 3, joinDate: "2025-09-08", usage: "Medium" },
  { id: 76, name: "Tariq Mansour", email: "tariq.mansour@email.com", familySize: 4, joinDate: "2025-09-08", usage: "High" },
  { id: 77, name: "Lin Zhou", email: "lin.zhou@email.com", familySize: 2, joinDate: "2025-09-09", usage: "Medium" },
  { id: 78, name: "Kenji Nakamura", email: "kenji.nakamura@email.com", familySize: 3, joinDate: "2025-09-09", usage: "Low" },
  { id: 79, name: "Camila Morales", email: "camila.morales@email.com", familySize: 4, joinDate: "2025-09-10", usage: "High" },
  { id: 80, name: "Diego Fernandez", email: "diego.fernandez@email.com", familySize: 3, joinDate: "2025-09-10", usage: "Medium" },
  { id: 81, name: "Ingrid Larsson", email: "ingrid.larsson@email.com", familySize: 2, joinDate: "2025-09-11", usage: "Low" },
  { id: 82, name: "Erik Hansen", email: "erik.hansen@email.com", familySize: 4, joinDate: "2025-09-11", usage: "High" },
  { id: 83, name: "Nadia Popov", email: "nadia.popov@email.com", familySize: 3, joinDate: "2025-09-12", usage: "Medium" },
  { id: 84, name: "Alexei Kozlov", email: "alexei.kozlov@email.com", familySize: 4, joinDate: "2025-09-12", usage: "High" },
  { id: 85, name: "Leila Nazari", email: "leila.nazari@email.com", familySize: 2, joinDate: "2025-09-13", usage: "Medium" },
  { id: 86, name: "Arash Hosseini", email: "arash.hosseini@email.com", familySize: 3, joinDate: "2025-09-13", usage: "Low" },
  { id: 87, name: "Priya Reddy", email: "priya.reddy@email.com", familySize: 4, joinDate: "2025-09-14", usage: "High" },
  { id: 88, name: "Vikram Gupta", email: "vikram.gupta@email.com", familySize: 3, joinDate: "2025-09-14", usage: "Medium" },
  { id: 89, name: "Yuki Yamamoto", email: "yuki.yamamoto@email.com", familySize: 2, joinDate: "2025-09-15", usage: "Low" },
  { id: 90, name: "Akira Suzuki", email: "akira.suzuki@email.com", familySize: 4, joinDate: "2025-09-15", usage: "High" },
  { id: 91, name: "Elena Petersen", email: "elena.petersen@email.com", familySize: 3, joinDate: "2025-09-16", usage: "Medium" }
]

// Enhanced email masking function that also masks domain
function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@')
  const visibleLocalPart = localPart.substring(0, 3)
  const visibleDomain = domain.substring(0, 3)
  return `${visibleLocalPart}***@${visibleDomain}***`
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const showEmails = searchParams.get('showEmails') === 'true'
    const includeQuestionnaire = searchParams.get('includeQuestionnaire') === 'true'

    // Filter participants based on search query
    let filteredParticipants = participants
    if (search) {
      filteredParticipants = participants.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Apply email privacy setting and include questionnaire data if requested
    const participantsWithPrivacy = filteredParticipants.map(p => {
      const participantData: any = {
        ...p,
        email: showEmails ? p.email : maskEmail(p.email),
        fullEmail: showEmails ? p.email : undefined
      }

      // Include questionnaire responses if requested
      if (includeQuestionnaire) {
        const questionnaireData = getResponsesByParticipantId(p.id)
        if (questionnaireData) {
          participantData.questionnaire = {
            completionDate: questionnaireData.completionDate,
            timeSpent: questionnaireData.timeSpent,
            responses: questionnaireData.responses
          }
        }
      }

      return participantData
    })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedParticipants = participantsWithPrivacy.slice(startIndex, endIndex)

    return NextResponse.json({
      participants: paginatedParticipants,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredParticipants.length / limit),
        totalParticipants: filteredParticipants.length,
        hasMore: endIndex < filteredParticipants.length
      },
      privacy: {
        emailsVisible: showEmails,
        maskedCount: showEmails ? 0 : filteredParticipants.length,
        domainMasking: !showEmails
      },
      features: {
        questionnaireIncluded: includeQuestionnaire,
        questionnaireAvailable: filteredParticipants.some(p => getResponsesByParticipantId(p.id))
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch participants' },
      { status: 500 }
    )
  }
}