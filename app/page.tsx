"use client"

import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic" // Import dynamic
import {
  Home,
  Package2,
  Search,
  TrendingUp,
  Mail,
  Percent,
  Briefcase,
  DollarSign,
  Calendar,
  Target,
  BookOpen,
  Award,
  ArrowUpRight,
  Bell,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

// Dummy data for charts and tables
const monthlySalesData = [
  { month: "1월", sales: 12000000 },
  { month: "2월", sales: 15000000 },
  { month: "3월", sales: 13000000 },
  { month: "4월", sales: 18000000 },
  { month: "5월", sales: 20000000 },
  { month: "6월", sales: 17000000 },
]

const leadConversionData = [
  { stage: "리드 제출", value: 1000 },
  { stage: "1차 회신", value: 600 },
  { stage: "미팅 전환", value: 250 },
  { stage: "계약 전환", value: 100 },
]

const blogRankingData = [
  { month: "1월", probability: 0.65 },
  { month: "2월", probability: 0.7 },
  { month: "3월", probability: 0.68 },
  { month: "4월", probability: 0.75 },
  { month: "5월", probability: 0.8 },
  { month: "6월", probability: 0.78 },
]

const advertisersData = [
  { id: "ADV001", name: "광고주 A", charge: "5,000,000원", employee: "김철수", representative: "이영희" },
  { id: "ADV002", name: "광고주 B", charge: "3,500,000원", employee: "박민준", representative: "김지영" },
  { id: "ADV003", name: "광고주 C", charge: "7,200,000원", employee: "김철수", representative: "박서준" },
  { id: "ADV004", name: "광고주 D", charge: "2,800,000원", employee: "최유리", representative: "최유리" },
  { id: "ADV005", name: "광고주 E", charge: "6,100,000원", employee: "박민준", representative: "이영희" },
]

const campaignSpendData = [
  {
    representative: "이영희",
    "1월": 1000000,
    "2월": 1200000,
    "3월": 1100000,
    "4월": 1300000,
    "5월": 1500000,
    "6월": 1400000,
  },
  {
    representative: "김지영",
    "1월": 800000,
    "2월": 900000,
    "3월": 850000,
    "4월": 1000000,
    "5월": 1100000,
    "6월": 1050000,
  },
  {
    representative: "박서준",
    "1월": 1500000,
    "2월": 1400000,
    "3월": 1600000,
    "4월": 1700000,
    "5월": 1800000,
    "6월": 1750000,
  },
  {
    representative: "최유리",
    "1월": 700000,
    "2월": 750000,
    "3월": 800000,
    "4월": 820000,
    "5월": 850000,
    "6월": 900000,
  },
]

// Dynamically import chart components
const DynamicMonthlySalesChart = dynamic(() => import("@/components/charts/monthly-sales-chart"), { ssr: false })
const DynamicCampaignSpendChart = dynamic(() => import("@/components/charts/campaign-spend-chart"), { ssr: false })
const DynamicLeadConversionChart = dynamic(() => import("@/components/charts/lead-conversion-chart"), { ssr: false })
const DynamicBlogRankingChart = dynamic(() => import("@/components/charts/blog-ranking-chart"), { ssr: false })

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">슈퍼차트 대시보드</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">알림 토글</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Button
                variant={activeSection === "overview" ? "secondary" : "ghost"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary justify-start"
                onClick={() => setActiveSection("overview")}
              >
                <Home className="h-4 w-4" />
                개요
              </Button>
              <Button
                variant={activeSection === "sales" ? "secondary" : "ghost"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary justify-start"
                onClick={() => setActiveSection("sales")}
              >
                <TrendingUp className="h-4 w-4" />
                세일즈 팀
              </Button>
              <Button
                variant={activeSection === "blog" ? "secondary" : "ghost"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary justify-start"
                onClick={() => setActiveSection("blog")}
              >
                <BookOpen className="h-4 w-4" />
                블로그 팀
              </Button>
              {/* Additional navigation items can be added here */}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">홈</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="대시보드 검색..."
                  className="w-full bg-background shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                <Image src="/placeholder-user.png" width="32" height="32" className="rounded-full" alt="아바타" />
                <span className="sr-only">사용자 메뉴 토글</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>내 계정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>설정</DropdownMenuItem>
              <DropdownMenuItem>지원</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {activeSection === "overview" && (
            <>
              <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">총 광고주 수</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{advertisersData.length}</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +5</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">총 충전 금액 (월)</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {monthlySalesData[monthlySalesData.length - 1]?.sales.toLocaleString()}원
                    </div>
                    <p className="text-xs text-muted-foreground">전월 대비 +10%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">평균 리드 전환율</CardTitle>
                    <Percent className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10%</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +1.5%p</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">블로그 상위노출 확률</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {(blogRankingData[blogRankingData.length - 1]?.probability * 100).toFixed(1)}%
                    </div>
                    <p className="text-xs text-muted-foreground">전월 대비 +0.5%p</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                  <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                      <CardTitle>광고주 목록</CardTitle>
                      <CardDescription>직원별 광고주 및 충전 금액, 담당자 정보</CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                      <Link href="#">
                        광고주 추가
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>광고주 ID</TableHead>
                          <TableHead>광고주명</TableHead>
                          <TableHead>충전 금액</TableHead>
                          <TableHead>배정 직원</TableHead>
                          <TableHead>업체 담당자</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {advertisersData.map((advertiser) => (
                          <TableRow key={advertiser.id}>
                            <TableCell className="font-medium">{advertiser.id}</TableCell>
                            <TableCell>{advertiser.name}</TableCell>
                            <TableCell>{advertiser.charge}</TableCell>
                            <TableCell>{advertiser.employee}</TableCell>
                            <TableCell>{advertiser.representative}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>월별 매출 그래프</CardTitle>
                    <CardDescription>전체 월별 매출 추이</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DynamicMonthlySalesChart data={monthlySalesData} />
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>담당자 월별 캠페인 금액 소진 금액</CardTitle>
                  <CardDescription>각 담당자별 월별 캠페인 소진 금액 추이</CardDescription>
                </CardHeader>
                <CardContent>
                  <DynamicCampaignSpendChart data={campaignSpendData} />
                </CardContent>
              </Card>
            </>
          )}

          {activeSection === "sales" && (
            <div className="grid gap-4 md:gap-8">
              <h2 className="text-2xl font-bold">세일즈 팀 대시보드</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">리드 전환율</CardTitle>
                    <Percent className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10%</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +1.5%p</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">1차 회신율</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">60%</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +5%p</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">미팅 전환율</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">25%</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +2%p</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>리드 전환 퍼널</CardTitle>
                  <CardDescription>리드 제출부터 계약 전환까지의 단계별 전환율</CardDescription>
                </CardHeader>
                <CardContent>
                  <DynamicLeadConversionChart data={leadConversionData} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>콜드메일 답변 업체 데이터</CardTitle>
                  <CardDescription>콜드메일 회신을 받은 업체 목록</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>업체명</TableHead>
                        <TableHead>회신일</TableHead>
                        <TableHead>미팅 여부</TableHead>
                        <TableHead>상태</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">ABC 솔루션</TableCell>
                        <TableCell>2024-06-10</TableCell>
                        <TableCell>예</TableCell>
                        <TableCell>
                          <Badge variant="outline">미팅 예정</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XYZ 테크</TableCell>
                        <TableCell>2024-06-08</TableCell>
                        <TableCell>아니오</TableCell>
                        <TableCell>
                          <Badge variant="outline">추가 팔로우업</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">가나다 마케팅</TableCell>
                        <TableCell>2024-06-05</TableCell>
                        <TableCell>예</TableCell>
                        <TableCell>
                          <Badge variant="outline">계약 진행 중</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "blog" && (
            <div className="grid gap-4 md:gap-8">
              <h2 className="text-2xl font-bold">블로그 팀 대시보드</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">블로그 상위노출 확률</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {(blogRankingData[blogRankingData.length - 1]?.probability * 100).toFixed(1)}%
                    </div>
                    <p className="text-xs text-muted-foreground">전월 대비 +0.5%p</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">팀 KPI 달성률</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">목표: 90%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">월별 포스팅 수</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">25</div>
                    <p className="text-xs text-muted-foreground">전월 대비 +3</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>블로그 상위노출 확률 추이</CardTitle>
                  <CardDescription>월별 블로그 상위노출 확률 변화</CardDescription>
                </CardHeader>
                <CardContent>
                  <DynamicBlogRankingChart data={blogRankingData} />
                </CardContent>
              </Card>
              {/* Placeholder for Team KPI details or other blog-specific tables */}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
