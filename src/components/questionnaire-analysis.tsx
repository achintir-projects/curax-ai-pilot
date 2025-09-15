"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, Clock, FileText, TrendingUp, Shield, CheckCircle } from "lucide-react"

interface AnalysisData {
  totalParticipants: number
  averageCompletionTime: number
  demographics: {
    familySize: Record<string, number>
    geography: Record<string, number>
    techComfort: Record<string, number>
  }
  healthBackground: {
    chronicConditions: Record<string, number>
    healthcareFrequency: Record<string, number>
  }
  expectations: {
    primaryInterests: Record<string, number>
    featurePriorities: Record<string, number>
  }
}

interface QuestionnaireAnalysisProps {
  data: AnalysisData
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

export function QuestionnaireAnalysis({ data }: QuestionnaireAnalysisProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Transform data for charts
  const familySizeData = Object.entries(data.demographics.familySize).map(([key, value]) => ({
    name: `${key} members`,
    value,
    percentage: Math.round((value / data.totalParticipants) * 100)
  }))

  const geographyData = Object.entries(data.demographics.geography).map(([key, value]) => ({
    name: key,
    value,
    percentage: Math.round((value / data.totalParticipants) * 100)
  }))

  const techComfortData = Object.entries(data.demographics.techComfort).map(([key, value]) => ({
    name: key.split(' ')[0], // Shorten the labels
    value,
    percentage: Math.round((value / data.totalParticipants) * 100)
  }))

  const chronicConditionsData = Object.entries(data.healthBackground.chronicConditions)
    .filter(([key]) => key !== "None")
    .map(([key, value]) => ({
      name: key,
      value,
      percentage: Math.round((value / data.totalParticipants) * 100)
    }))

  const healthcareFrequencyData = Object.entries(data.healthBackground.healthcareFrequency).map(([key, value]) => ({
    name: key.split(' ')[0], // Shorten the labels
    value,
    percentage: Math.round((value / data.totalParticipants) * 100)
  }))

  const primaryInterestsData = Object.entries(data.expectations.primaryInterests).map(([key, value]) => ({
    name: key.split(' ')[0], // Shorten the labels
    value,
    percentage: Math.round((value / data.totalParticipants) * 100)
  }))

  const featurePrioritiesData = Object.entries(data.expectations.featurePriorities)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8) // Top 8 features
    .map(([key, value]) => ({
      name: key.split(' ')[0], // Shorten the labels
      value,
      percentage: Math.round((value / data.totalParticipants) * 100)
    }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-text">Questionnaire Analysis</h2>
        <p className="text-muted-foreground">
          Comprehensive analysis of participant responses across {data.totalParticipants} families
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold gradient-text">{data.totalParticipants}</div>
            <p className="text-xs text-muted-foreground">Completed questionnaires</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{data.averageCompletionTime}m</div>
            <p className="text-xs text-muted-foreground">Per participant</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <p className="text-xs text-muted-foreground">Completion rate</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
            <Shield className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">HIPAA</div>
            <p className="text-xs text-muted-foreground">Compliant</p>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="health">Health Background</TabsTrigger>
          <TabsTrigger value="expectations">Expectations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Family Size Distribution</CardTitle>
                <CardDescription>Household composition of participants</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={familySizeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} (${percentage}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {familySizeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Geographic Distribution</CardTitle>
                <CardDescription>Living areas of participant families</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={geographyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="gradient-text">Technology Comfort Levels</CardTitle>
              <CardDescription>Participant comfort with new technology</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={techComfortData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Family Size Breakdown</CardTitle>
                <CardDescription>Detailed household composition</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {familySizeData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={item.percentage} className="w-20" />
                          <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Geographic Distribution</CardTitle>
                <CardDescription>Urban, suburban, and rural breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {geographyData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={item.percentage} className="w-20" />
                          <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Chronic Conditions</CardTitle>
                <CardDescription>Health conditions reported by participants</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chronicConditionsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff7300" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Healthcare Frequency</CardTitle>
                <CardDescription>How often families need healthcare services</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={healthcareFrequencyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} (${percentage}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {healthcareFrequencyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expectations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Primary Interests</CardTitle>
                <CardDescription>What participants hope to gain from the study</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={primaryInterestsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00c49f" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="gradient-text">Feature Priorities</CardTitle>
                <CardDescription>Most requested features by participants</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={featurePrioritiesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ffbb28" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="gradient-text">Key Insights</CardTitle>
              <CardDescription>Important findings from questionnaire analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Demographic Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Majority of participants have 3-4 member households
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Urban participants represent the largest geographic group
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Most participants are comfortable with technology
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Health & Technology Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Allergies and asthma are common chronic conditions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Symptom checking is the highest priority feature
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Family health management is the primary interest
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}