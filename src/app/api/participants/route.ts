import { NextRequest, NextResponse } from 'next/server'

// Participant data from the pilot study
const participants = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com" },
  { id: 2, name: "Michael Chen", email: "michael.chen@email.com" },
  { id: 3, name: "Emily Rodriguez", email: "emily.rodriguez@email.com" },
  { id: 4, name: "David Thompson", email: "david.thompson@email.com" },
  { id: 5, name: "Maria Garcia", email: "maria.garcia@email.com" },
  { id: 6, name: "James Wilson", email: "james.wilson@email.com" },
  { id: 7, name: "Lisa Anderson", email: "lisa.anderson@email.com" },
  { id: 8, name: "Robert Kim", email: "robert.kim@email.com" },
  { id: 9, name: "Jennifer Martinez", email: "jennifer.martinez@email.com" },
  { id: 10, name: "Christopher Lee", email: "christopher.lee@email.com" },
  { id: 11, name: "Amanda Taylor", email: "amanda.taylor@email.com" },
  { id: 12, name: "Daniel Brown", email: "daniel.brown@email.com" },
  { id: 13, name: "Jessica Davis", email: "jessica.davis@email.com" },
  { id: 14, name: "Matthew Miller", email: "matthew.miller@email.com" },
  { id: 15, name: "Ashley White", email: "ashley.white@email.com" },
  { id: 16, name: "Anthony Jones", email: "anthony.jones@email.com" },
  { id: 17, name: "Rachel Green", email: "rachel.green@email.com" },
  { id: 18, name: "Kevin Wang", email: "kevin.wang@email.com" },
  { id: 19, name: "Stephanie Clark", email: "stephanie.clark@email.com" },
  { id: 20, name: "Jason Lewis", email: "jason.lewis@email.com" },
  { id: 21, name: "Nicole Hall", email: "nicole.hall@email.com" },
  { id: 22, name: "Ryan Young", email: "ryan.young@email.com" },
  { id: 23, name: "Samantha King", email: "samantha.king@email.com" },
  { id: 24, name: "Tyler Scott", email: "tyler.scott@email.com" },
  { id: 25, name: "Megan Wright", email: "megan.wright@email.com" },
  { id: 26, name: "Brandon Turner", email: "brandon.turner@email.com" },
  { id: 27, name: "Kimberly Adams", email: "kimberly.adams@email.com" },
  { id: 28, name: "Jordan Baker", email: "jordan.baker@email.com" },
  { id: 29, name: "Laura Nelson", email: "laura.nelson@email.com" },
  { id: 30, name: "Andrew Hill", email: "andrew.hill@email.com" },
  { id: 31, name: "Brittany Campbell", email: "brittany.campbell@email.com" },
  { id: 32, name: "Justin Parker", email: "justin.parker@email.com" },
  { id: 33, name: "Kayla Evans", email: "kayla.evans@email.com" },
  { id: 34, name: "Steven Carter", email: "steven.carter@email.com" },
  { id: 35, name: "Danielle Roberts", email: "danielle.roberts@email.com" },
  { id: 36, name: "Eric Gomez", email: "eric.gomez@email.com" },
  { id: 37, name: "Tiffany Phillips", email: "tiffany.phillips@email.com" },
  { id: 38, name: "Marcus Mitchell", email: "marcus.mitchell@email.com" },
  { id: 39, name: "Vanessa Cooper", email: "vanessa.cooper@email.com" },
  { id: 40, name: "Carlos Reed", email: "carlos.reed@email.com" },
  { id: 41, name: "Jasmine Bailey", email: "jasmine.bailey@email.com" },
  { id: 42, name: "Nathan Bell", email: "nathan.bell@email.com" },
  { id: 43, name: "Alexis Murphy", email: "alexis.murphy@email.com" },
  { id: 44, name: "Gregory Rivera", email: "gregory.rivera@email.com" },
  { id: 45, name: "Cynthia Cook", email: "cynthia.cook@email.com" },
  { id: 46, name: "Aaron Rogers", email: "aaron.rogers@email.com" },
  { id: 47, name: "Monica Stewart", email: "monica.stewart@email.com" },
  { id: 48, name: "Jonathan Morris", email: "jonathan.morris@email.com" },
  { id: 49, name: "Crystal Peterson", email: "crystal.peterson@email.com" },
  { id: 50, name: "Cameron Cox", email: "cameron.cox@email.com" },
  { id: 51, name: "Natalie Ward", email: "natalie.ward@email.com" },
  { id: 52, name: "Scott Howard", email: "scott.howard@email.com" },
  { id: 53, name: "Veronica Flores", email: "veronica.flores@email.com" },
  { id: 54, name: "Kyle Butler", email: "kyle.butler@email.com" },
  { id: 55, name: "Priya Patel", email: "priya.patel@email.com" },
  { id: 56, name: "Raj Sharma", email: "raj.sharma@email.com" },
  { id: 57, name: "Aisha Ahmed", email: "aisha.ahmed@email.com" },
  { id: 58, name: "Omar Hassan", email: "omar.hassan@email.com" },
  { id: 59, name: "Chen Wei", email: "chen.wei@email.com" },
  { id: 60, name: "Yuki Tanaka", email: "yuki.tanaka@email.com" },
  { id: 61, name: "Isabella Silva", email: "isabella.silva@email.com" },
  { id: 62, name: "Lucas Santos", email: "lucas.santos@email.com" },
  { id: 63, name: "Sofia Petrov", email: "sofia.petrov@email.com" },
  { id: 64, name: "Dmitri Volkov", email: "dmitri.volkov@email.com" },
  { id: 65, name: "Fatima Al-Zahra", email: "fatima.alzahra@email.com" },
  { id: 66, name: "Ibrahim Khalil", email: "ibrahim.khalil@email.com" },
  { id: 67, name: "Ananya Singh", email: "ananya.singh@email.com" },
  { id: 68, name: "Ravi Kumar", email: "ravi.kumar@email.com" },
  { id: 69, name: "Mei-Lin Chang", email: "meilin.chang@email.com" },
  { id: 70, name: "Hiroshi Sato", email: "hiroshi.sato@email.com" },
  { id: 71, name: "Lucia Rossi", email: "lucia.rossi@email.com" },
  { id: 72, name: "Alessandro Romano", email: "alessandro.romano@email.com" },
  { id: 73, name: "Amara Okafor", email: "amara.okafor@email.com" },
  { id: 74, name: "Kwame Asante", email: "kwame.asante@email.com" },
  { id: 75, name: "Zara Osman", email: "zara.osman@email.com" },
  { id: 76, name: "Tariq Mansour", email: "tariq.mansour@email.com" },
  { id: 77, name: "Lin Zhou", email: "lin.zhou@email.com" },
  { id: 78, name: "Kenji Nakamura", email: "kenji.nakamura@email.com" },
  { id: 79, name: "Camila Morales", email: "camila.morales@email.com" },
  { id: 80, name: "Diego Fernandez", email: "diego.fernandez@email.com" },
  { id: 81, name: "Ingrid Larsson", email: "ingrid.larsson@email.com" },
  { id: 82, name: "Erik Hansen", email: "erik.hansen@email.com" },
  { id: 83, name: "Nadia Popov", email: "nadia.popov@email.com" },
  { id: 84, name: "Alexei Kozlov", email: "alexei.kozlov@email.com" },
  { id: 85, name: "Leila Nazari", email: "leila.nazari@email.com" },
  { id: 86, name: "Arash Hosseini", email: "arash.hosseini@email.com" },
  { id: 87, name: "Priya Reddy", email: "priya.reddy@email.com" },
  { id: 88, name: "Vikram Gupta", email: "vikram.gupta@email.com" },
  { id: 89, name: "Yuki Yamamoto", email: "yuki.yamamoto@email.com" },
  { id: 90, name: "Akira Suzuki", email: "akira.suzuki@email.com" },
  { id: 91, name: "Elena Petersen", email: "elena.petersen@email.com" }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    // Filter participants based on search query
    let filteredParticipants = participants
    if (search) {
      filteredParticipants = participants.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedParticipants = filteredParticipants.slice(startIndex, endIndex)

    return NextResponse.json({
      participants: paginatedParticipants,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredParticipants.length / limit),
        totalParticipants: filteredParticipants.length,
        hasMore: endIndex < filteredParticipants.length
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch participants' },
      { status: 500 }
    )
  }
}