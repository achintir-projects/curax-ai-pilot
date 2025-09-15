"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Search, Users, Heart, Activity, TrendingUp, DollarSign, Star, Eye, EyeOff, Mail, Shield, FileText, ClipboardList } from "lucide-react"
import { QuestionnaireAnalysis } from "@/components/questionnaire-analysis"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [showEmails, setShowEmails] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [analysisData, setAnalysisData] = useState<any>(null)

  // Fetch analysis data when component mounts
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await fetch('/api/responses?analysis=true')
        const data = await response.json()
        setAnalysisData(data.analysis)
      } catch (error) {
        console.error('Failed to fetch analysis data:', error)
      }
    }

    fetchAnalysisData()
  }, [])

  // Enhanced participant data with questionnaire info
  const participants = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah.johnson@email.com", 
      familySize: 3, 
      joinDate: "2025-08-02", 
      usage: "High",
      techComfort: "High",
      hasChronicConditions: false,
      hasAllergies: true,
      completionTime: 15
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      email: "michael.chen@email.com", 
      familySize: 4, 
      joinDate: "2025-08-02", 
      usage: "High",
      techComfort: "High",
      hasChronicConditions: true,
      hasAllergies: false,
      completionTime: 18
    },
    { 
      id: 3, 
      name: "Emily Rodriguez", 
      email: "emily.rodriguez@email.com", 
      familySize: 4, 
      joinDate: "2025-08-03", 
      usage: "Medium",
      techComfort: "Medium",
      hasChronicConditions: false,
      hasAllergies: true,
      completionTime: 12
    },
    { 
      id: 4, 
      name: "David Thompson", 
      email: "david.thompson@email.com", 
      familySize: 2, 
      joinDate: "2025-08-03", 
      usage: "Medium",
      techComfort: "Medium",
      hasChronicConditions: true,
      hasAllergies: false,
      completionTime: 14
    },
    { 
      id: 5, 
      name: "Maria Garcia", 
      email: "maria.garcia@email.com", 
      familySize: 4, 
      joinDate: "2025-08-04", 
      usage: "High",
      techComfort: "High",
      hasChronicConditions: false,
      hasAllergies: true,
      completionTime: 16
    },
    { 
      id: 6, 
      name: "James Wilson", 
      email: "james.wilson@email.com", 
      familySize: 3, 
      joinDate: "2025-08-04", 
      usage: "Medium",
      techComfort: "Medium",
      hasChronicConditions: false,
      hasAllergies: false,
      completionTime: 13
    },
    { 
      id: 7, 
      name: "Lisa Anderson", 
      email: "lisa.anderson@email.com", 
      familySize: 4, 
      joinDate: "2025-08-05", 
      usage: "High",
      techComfort: "High",
      hasChronicConditions: true,
      hasAllergies: true,
      completionTime: 19
    },
    { 
      id: 8, 
      name: "Robert Kim", 
      email: "robert.kim@email.com", 
      familySize: 4, 
      joinDate: "2025-08-05", 
      usage: "Medium",
      techComfort: "Medium",
      hasChronicConditions: false,
      hasAllergies: false,
      completionTime: 11
    },
  ]

  const filteredParticipants = participants.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Fetch questionnaire data
  useEffect(() => {
    const fetchQuestionnaire = async () => {
      try {
        const response = await fetch('/api/questionnaire')
        const data = await response.json()
        setQuestionnaireData(data.questionnaire)
      } catch (error) {
        console.error('Failed to fetch questionnaire:', error)
      }
    }
    fetchQuestionnaire()
  }, [])

  const handleViewQuestionnaire = (participant) => {
    setSelectedParticipant(participant)
    setIsQuestionnaireModalOpen(true)
  }
  const keyMetrics = [
    { title: "Total Families", value: "91", description: "Pilot study participants", icon: Users, color: "text-blue-600" },
    { title: "Total Users", value: "247", description: "Across all families", icon: Users, color: "text-purple-600" },
    { title: "Setup Completion", value: "87%", description: "79/91 families onboarded", icon: Activity, color: "text-green-600" },
    { title: "Daily Active Users", value: "68%", description: "Average engagement", icon: TrendingUp, color: "text-orange-600" },
    { title: "Net Promoter Score", value: "8.3/10", description: "User satisfaction", icon: Star, color: "text-yellow-600" },
    { title: "Conversion Intent", value: "73%", description: "Would pay after trial", icon: DollarSign, color: "text-emerald-600" },
  ]

  // Feature adoption data
  const featureAdoption = [
    { feature: "Symptom Checker", adoption: "100%", families: 91, description: "773 total uses", color: "bg-blue-500" },
    { feature: "Food Analysis", adoption: "73%", families: 66, description: "542 total uses", color: "bg-purple-500" },
    { feature: "Family Profiles", adoption: "93%", families: 85, description: "Profile completion", color: "bg-green-500" },
    { feature: "Voice Features", adoption: "47%", families: 43, description: "67% continued use", color: "bg-orange-500" },
    { feature: "File Upload", adoption: "34%", families: 31, description: "189 files analyzed", color: "bg-pink-500" },
  ]

  // Extended case studies (beyond the original 5)
  const caseStudies = [
    {
      family: "Rodriguez Family",
      members: "2 parents, 2 children (ages 6, 11)",
      usage: "18 symptom checks, 15 food analyses",
      impact: "Identified potential strep throat, avoided unnecessary ER visit, saved ~$800",
      savings: "$800"
    },
    {
      family: "Chen Family",
      members: "2 parents, 1 child (age 3), 1 grandmother",
      usage: "22 symptom checks, 31 food analyses",
      impact: "Grandmother's medication interactions flagged, prevented adverse drug reaction",
      savings: "$1,200"
    },
    {
      family: "Brier Family",
      members: "Single mom, 2 teenagers",
      usage: "14 symptom checks, 8 medical file uploads",
      impact: "Better understanding of teenager's sports injury, guided proper recovery approach",
      savings: "$600"
    },
    {
      family: "Patel Family",
      members: "2 parents, 3 children (ages 4, 8, 12)",
      usage: "25 symptom checks, 41 food analyses",
      impact: "Managed multiple family food allergies effectively, prevented 3 potential reactions",
      savings: "$1,500"
    },
    {
      family: "Weiss Family",
      members: "Grandparents, 2 adult children, 4 grandchildren",
      usage: "31 symptom checks, 19 medical file analyses",
      impact: "Coordinated multi-generational care, helped manage grandfather's diabetes monitoring",
      savings: "$900"
    },
    {
      family: "Johnson Family",
      members: "2 parents, 1 child (age 5)",
      usage: "16 symptom checks, 22 food analyses",
      impact: "Early detection of seasonal allergies, improved sleep quality for child",
      savings: "$400"
    },
    {
      family: "Garcia Family",
      members: "Single parent, 3 children (ages 3, 7, 10)",
      usage: "28 symptom checks, 35 food analyses",
      impact: "Managed childhood asthma triggers, reduced emergency inhaler use by 60%",
      savings: "$750"
    },
    {
      family: "Kim Family",
      members: "2 parents, 2 children (ages 8, 12)",
      usage: "20 symptom checks, 18 medical file uploads",
      impact: "Coordinated care between pediatrician and specialist, improved treatment plan",
      savings: "$1,100"
    },
    {
      family: "Martinez Family",
      members: "3 generations: grandparents, parents, 2 children",
      usage: "33 symptom checks, 27 food analyses",
      impact: "Managed elderly parent's chronic conditions while caring for children",
      savings: "$1,300"
    },
    {
      family: "Wilson Family",
      members: "2 parents, newborn baby",
      usage: "24 symptom checks, 12 food analyses",
      impact: "Monitored newborn health, provided guidance on feeding and development",
      savings: "$500"
    },
    {
      family: "Anderson Family",
      members: "2 parents, 2 children with special needs",
      usage: "29 symptom checks, 31 medical file uploads",
      impact: "Coordinated complex care plans, improved communication with healthcare providers",
      savings: "$1,800"
    },
    {
      family: "Taylor Family",
      members: "Single parent, 1 teenager",
      usage: "12 symptom checks, 8 food analyses",
      impact: "Managed teen mental health, provided resources for stress management",
      savings: "$350"
    }
  ]

  // User feedback
  const userFeedback = [
    {
      quote: "Finally, something that understands my whole family's health, not just individuals. The food analysis saved us from a potential allergic reaction.",
      author: "Sarah M., Mom of 3",
      rating: 5
    },
    {
      quote: "Voice feature is a game-changer when dealing with a sick toddler. Hands-free symptom checking while comforting my child.",
      author: "Abdullah T., Dad of 2",
      rating: 5
    },
    {
      quote: "Uploaded my mom's lab results and got clearer explanations than her doctor gave us. Helped us prepare better questions for the follow-up.",
      author: "Karen C., Caregiver",
      rating: 4
    },
    {
      quote: "Used it during my daughter's fever at 2 AM. Got immediate guidance instead of panicking about whether to go to ER.",
      author: "Jennifer K., Mom of 2",
      rating: 5
    },
    {
      quote: "The food scanner caught shellfish in a sauce I didn't realize contained it. Could have been a serious reaction for my son.",
      author: "Brier L., Dad of 3",
      rating: 5
    }
  ]

  // Technical performance
  const technicalPerformance = [
    { metric: "Uptime", value: "99.7%", description: "System reliability", icon: "🟢" },
    { metric: "Response Time", value: "2.1s", description: "Average response time", icon: "⚡" },
    { metric: "Voice Recognition", value: "94.3%", description: "Accuracy rate", icon: "🎤" },
    { metric: "AI Confidence", value: "89%", description: "Analysis confidence", icon: "🤖" },
    { metric: "API Success", value: "98.9%", description: "47,230 total calls", icon: "📡" },
  ]

  // Economic impact
  const economicImpact = [
    { category: "Avoided Urgent Care", value: "$10,800", description: "36 visits × $300 avg", icon: "💰" },
    { category: "Avoided ER Visits", value: "$9,600", description: "12 visits × $800 avg", icon: "🏥" },
    { category: "Better Doctor Visits", value: "$2,700", description: "54 visits with reduced follow-ups", icon: "👨‍⚕️" },
    { category: "Prevented Reactions", value: "$4,000", description: "8 serious cases × $500 avg", icon: "🛡️" },
    { category: "Total Savings", value: "$27,100", description: "$298 per family average", icon: "📊" },
    { category: "Time Saved", value: "382 hours", description: "4.2 hours per family monthly", icon: "⏰" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">CuraX AI Pilot Study</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            91-Family Pilot Study Results (August 2-31, 2025)
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              IRB-Approved Study
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800 border-green-200">
              HIPAA Compliant
            </Badge>
            <Dialog open={isUserModalOpen} onOpenChange={setIsUserModalOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  <Users className="mr-2 h-4 w-4" />
                  View All Participants
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="gradient-text">All Study Participants</DialogTitle>
                  <DialogDescription>
                    Complete list of 91 families participating in the pilot study
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  {/* Email Privacy Control */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Email Privacy</div>
                        <div className="text-xs text-muted-foreground">
                          {showEmails ? "Email addresses are visible" : "Email addresses are hidden for privacy"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <EyeOff className={`h-4 w-4 ${!showEmails ? 'text-blue-600' : 'text-gray-400'}`} />
                      <Switch
                        checked={showEmails}
                        onCheckedChange={setShowEmails}
                        className="data-[state=checked]:bg-blue-600"
                      />
                      <Eye className={`h-4 w-4 ${showEmails ? 'text-blue-600' : 'text-gray-400'}`} />
                    </div>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search participants..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <ScrollArea className="h-[500px] rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              Email
                              {!showEmails && (
                                <Badge variant="outline" className="text-xs">
                                  <Shield className="h-3 w-3 mr-1" />
                                  Hidden
                                </Badge>
                              )}
                            </div>
                          </TableHead>
                          <TableHead>Family Size</TableHead>
                          <TableHead>Tech Comfort</TableHead>
                          <TableHead>Health Profile</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Usage Level</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredParticipants.map((participant) => (
                          <TableRow key={participant.id}>
                            <TableCell className="font-medium">{participant.name}</TableCell>
                            <TableCell>
                              {showEmails ? (
                                <span className="text-sm">{participant.email}</span>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">
                                    {participant.email.split('@')[0].substring(0, 3)}***@{participant.email.split('@')[1].substring(0, 3)}***
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0"
                                    onClick={() => setShowEmails(true)}
                                    title="Show email"
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                </div>
                              )}
                            </TableCell>
                            <TableCell>{participant.familySize} members</TableCell>
                            <TableCell>
                              <Badge variant={
                                participant.techComfort === "High" ? "default" : 
                                participant.techComfort === "Medium" ? "secondary" : "outline"
                              }>
                                {participant.techComfort}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                {participant.hasChronicConditions && (
                                  <Badge variant="destructive" className="text-xs">Chronic</Badge>
                                )}
                                {participant.hasAllergies && (
                                  <Badge variant="outline" className="text-xs">Allergies</Badge>
                                )}
                                {!participant.hasChronicConditions && !participant.hasAllergies && (
                                  <Badge variant="secondary" className="text-xs">Healthy</Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{participant.joinDate}</TableCell>
                            <TableCell>
                              <Badge variant={
                                participant.usage === "High" ? "default" : 
                                participant.usage === "Medium" ? "secondary" : "outline"
                              }>
                                {participant.usage}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                  onClick={() => handleViewQuestionnaire(participant)}
                                  title="View questionnaire"
                                >
                                  <ClipboardList className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                  <div className="text-sm text-muted-foreground text-center">
                    Showing {filteredParticipants.length} of {participants.length} participants
                    {!showEmails && (
                      <div className="mt-2 text-xs">
                        <Shield className="inline h-3 w-3 mr-1" />
                        Email addresses are masked for privacy protection
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Questionnaire Modal */}
            <Dialog open={isQuestionnaireModalOpen} onOpenChange={setIsQuestionnaireModalOpen}>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="gradient-text flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Questionnaire Responses - {selectedParticipant?.name}
                  </DialogTitle>
                  <DialogDescription>
                    IRB-compliant questionnaire responses and study information
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Participant Info */}
                  {selectedParticipant && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Family Size</div>
                        <div className="font-semibold">{selectedParticipant.familySize} members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Tech Comfort</div>
                        <div className="font-semibold">{selectedParticipant.techComfort}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Completion Time</div>
                        <div className="font-semibold">{selectedParticipant.completionTime} minutes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Usage Level</div>
                        <div className="font-semibold">{selectedParticipant.usage}</div>
                      </div>
                    </div>
                  )}

                  {/* Questionnaire Sections */}
                  {questionnaireData && (
                    <ScrollArea className="h-[600px] rounded-md border">
                      <div className="space-y-6 p-6">
                        {questionnaireData.sections.map((section, sectionIndex) => (
                          <Card key={sectionIndex} className="card-hover">
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                {section.title}
                                {section.isRequired && (
                                  <Badge variant="destructive" className="text-xs">Required</Badge>
                                )}
                              </CardTitle>
                              <CardDescription>{section.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              {section.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <span className="text-sm font-medium text-muted-foreground">
                                      {questionIndex + 1}.
                                    </span>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium">
                                        {question.text}
                                        {question.required && (
                                          <span className="text-red-500 ml-1">*</span>
                                        )}
                                      </div>
                                      <div className="text-xs text-muted-foreground mb-2">
                                        Type: {question.type}
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                        {question.options?.map((option, optionIndex) => (
                                          <Badge 
                                            key={optionIndex} 
                                            variant="outline" 
                                            className="text-xs"
                                          >
                                            {option}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 h-auto p-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="metrics" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Metrics</TabsTrigger>
            <TabsTrigger value="cases" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Case Studies</TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Feedback</TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Technical</TabsTrigger>
            <TabsTrigger value="impact" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Impact</TabsTrigger>
            <TabsTrigger value="questionnaire" className="data-[state=active]:gradient-bg data-[state=active]:text-white">Questionnaire</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="card-hover metric-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Feature Adoption</CardTitle>
                  <CardDescription>Usage patterns across pilot families</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featureAdoption.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{feature.feature}</span>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">{feature.adoption}</Badge>
                      </div>
                      <Progress value={parseInt(feature.adoption)} className="h-3" />
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Usage Patterns</CardTitle>
                  <CardDescription>When families use CuraX AI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Evening (7-9 PM)</span>
                      <Badge className="bg-blue-500">34%</Badge>
                    </div>
                    <Progress value={34} className="h-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Morning (6-8 AM)</span>
                      <Badge className="bg-purple-500">23%</Badge>
                    </div>
                    <Progress value={23} className="h-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Weekend Afternoons</span>
                      <Badge className="bg-green-500">19%</Badge>
                    </div>
                    <Progress value={19} className="h-3" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Average sessions per family:</span>
                        <span className="font-semibold">12.3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average session duration:</span>
                        <span className="font-semibold">4.2 minutes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Demographics</CardTitle>
                  <CardDescription>Diverse family representation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Family Size</h4>
                      <p className="text-sm text-blue-700">2-person (20%)<br />3-person (40%)<br />4+ person (40%)</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Age Groups</h4>
                      <p className="text-sm text-purple-700">Parents 28-45<br />Children 2-17<br />Seniors 60+ (14 families)</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Geography</h4>
                      <p className="text-sm text-green-700">Urban (60%)<br />Suburban (33%)<br />Rural (7%)</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Tech Comfort</h4>
                      <p className="text-sm text-orange-700">High (40%)<br />Medium (47%)<br />Low (13%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Medical Value</CardTitle>
                  <CardDescription>Health impact and utilization metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <div className="text-3xl font-bold gradient-text">773</div>
                      <div className="text-sm text-muted-foreground">Symptom Checks</div>
                      <div className="text-xs text-muted-foreground">8.5 per family</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                      <div className="text-3xl font-bold text-green-600">36</div>
                      <div className="text-sm text-muted-foreground">Urgent Care Avoided</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600">142</div>
                      <div className="text-sm text-muted-foreground">Food Allergy Alerts</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                      <div className="text-3xl font-bold text-orange-600">189</div>
                      <div className="text-sm text-muted-foreground">Files Analyzed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Case Studies Tab */}
          <TabsContent value="cases" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Family Impact Stories</h2>
              <p className="text-muted-foreground">Real-world examples of how CuraX AI is transforming family healthcare</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Avatar className="h-8 w-8 gradient-bg">
                        <AvatarFallback className="text-white">{study.family.split(' ')[0][0]}</AvatarFallback>
                      </Avatar>
                      {study.family}
                    </CardTitle>
                    <CardDescription className="text-sm">{study.members}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Usage</span>
                      <Badge variant="outline" className="text-xs">{study.usage}</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Impact</h4>
                      <p className="text-sm leading-relaxed">{study.impact}</p>
                    </div>
                    {study.savings && (
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-medium">Estimated Savings</span>
                        <Badge className="bg-green-500 text-white">{study.savings}</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {userFeedback.map((feedback, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      User Testimonial
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground mb-4">
                      "{feedback.quote}"
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 gradient-bg">
                        <AvatarFallback className="text-white">{feedback.author.split(' ')[0][0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{feedback.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Areas for Improvement</CardTitle>
                <CardDescription>Feedback from pilot participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold gradient-text">27%</div>
                    <div className="text-sm font-medium">Faster voice recognition</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">20%</div>
                    <div className="text-sm font-medium">More medication interactions</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">13%</div>
                    <div className="text-sm font-medium">Better offline capabilities</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Technical Performance</CardTitle>
                  <CardDescription>System reliability and accuracy metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technicalPerformance.map((tech, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tech.icon}</span>
                        <div>
                          <div className="font-medium">{tech.metric}</div>
                          <div className="text-sm text-muted-foreground">{tech.description}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold gradient-text">{tech.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">System Reliability</CardTitle>
                  <CardDescription>Performance metrics over 30 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Server Uptime</span>
                      <Badge className="bg-green-500">99.7%</Badge>
                    </div>
                    <Progress value={99.7} className="h-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">API Success Rate</span>
                      <Badge className="bg-blue-500">98.9%</Badge>
                    </div>
                    <Progress value={98.9} className="h-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Voice Recognition</span>
                      <Badge className="bg-purple-500">94.3%</Badge>
                    </div>
                    <Progress value={94.3} className="h-3" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">47,230+</div>
                      <div className="text-sm text-muted-foreground">Total API Calls</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Economic Impact</CardTitle>
                  <CardDescription>Healthcare cost savings across 91 families</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {economicImpact.map((impact, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{impact.icon}</span>
                        <div>
                          <div className="font-medium">{impact.category}</div>
                          <div className="text-sm text-muted-foreground">{impact.description}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-green-600">{impact.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="gradient-text">Growth Indicators</CardTitle>
                  <CardDescription>Viral growth and market validation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <div className="text-3xl font-bold gradient-text">57%</div>
                      <div className="text-sm text-muted-foreground">Referral Rate</div>
                      <div className="text-xs text-muted-foreground">52 families referred</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                      <div className="text-3xl font-bold text-green-600">127</div>
                      <div className="text-sm text-muted-foreground">Organic Sign-ups</div>
                      <div className="text-xs text-muted-foreground">34% conversion</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600">1.4</div>
                      <div className="text-sm text-muted-foreground">Viral Coefficient</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                      <div className="text-3xl font-bold text-orange-600">78%</div>
                      <div className="text-sm text-muted-foreground">4-Week Retention</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Key Statistics for Investment Pitch</CardTitle>
                <CardDescription>Compelling metrics for stakeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg gradient-text">Product-Market Fit</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        91 families, 247 users, 30-day pilot
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        87% setup completion rate
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        68% daily active usage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        8.3/10 Net Promoter Score
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        73% conversion intent
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg gradient-text">Economic Impact</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        $27,100 total healthcare savings
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        $298 per family average savings
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        36 urgent care visits avoided
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        12 ER visits prevented
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        142 food allergy alerts issued
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg gradient-text">Growth Potential</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        57% referral rate
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        127 organic sign-ups generated
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        1.4 viral coefficient
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        34% referral conversion
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        99.7% technical uptime
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Questionnaire Tab */}
          <TabsContent value="questionnaire" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold gradient-text mb-2">Questionnaire Analysis</h2>
              <p className="text-muted-foreground">
                IRB-standard and HIPAA-compliant questionnaire responses and analysis
              </p>
            </div>

            {analysisData ? (
              <QuestionnaireAnalysis data={analysisData} />
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loading Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Fetching questionnaire data and generating insights...
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}