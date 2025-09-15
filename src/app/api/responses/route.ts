import { NextResponse } from 'next/server'
import { getAllResponses, analyzeResponses } from '@/lib/questionnaire-responses'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const participantId = searchParams.get('participantId')
    const analysis = searchParams.get('analysis') === 'true'

    if (participantId) {
      // Get specific participant's responses
      const participantIdNum = parseInt(participantId)
      const response = getAllResponses().find(r => r.participantId === participantIdNum)
      
      if (!response) {
        return NextResponse.json(
          { error: 'Participant responses not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        participantId: response.participantId,
        completionDate: response.completionDate,
        timeSpent: response.timeSpent,
        responses: response.responses,
        summary: {
          totalQuestions: response.responses.length,
          completionStatus: 'Completed'
        }
      })
    }

    if (analysis) {
      // Return aggregated analysis of all responses
      const analysisData = analyzeResponses()
      return NextResponse.json({
        analysis: analysisData,
        metadata: {
          totalParticipants: analysisData.totalParticipants,
          averageCompletionTime: Math.round(analysisData.averageCompletionTime),
          generatedAt: new Date().toISOString()
        }
      })
    }

    // Return all responses
    const allResponses = getAllResponses()
    return NextResponse.json({
      responses: allResponses,
      metadata: {
        totalParticipants: allResponses.length,
        averageCompletionTime: Math.round(allResponses.reduce((acc, resp) => acc + resp.timeSpent, 0) / allResponses.length),
        generatedAt: new Date().toISOString()
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch responses' },
      { status: 500 }
    )
  }
}