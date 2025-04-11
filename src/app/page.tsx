"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { use, useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Terminal } from "lucide-react"
import styles from '@/styles/font.module.css'
import csses from '@/styles/main.module.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRef } from "react"
import SkillCarousel from "@/components/skillset"
import { MyPrizes1 } from "@/components/myprizes"

export default function Home() {

  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <Navbar />
      <div className={csses.floatanimate}>
        <div className="flex flex-col items-center justify-center gap-4 mt-20 animate-fade-in">
          <h1 className="text-4xl font-bold animate-fade-in">Hello, World!</h1>
          <div className="text-sm mt-5">
            <p>
              안녕하세요. 방문해 주셔서 감사합니다. 
              <br />
              대구 영남중학교에 재학 중인 장성주 라고 합니다.
              <br />
              백엔드 개발을 위주로 공부하고 있습니다.
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mt-5">Show Card</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                </AlertDialogTitle>
                <AlertDialogDescription>
                <Card className="">
                  <CardContent className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      장성주
                      <Badge variant="outline">SASAC</Badge>
                    </h2>
                    <p className="text-sm">
                      Hello World!
                    </p>
                    <div className="flex items-center gap-2">
                      <i className="devicon-python-plain"></i>
                      <i className="devicon-c-plain"></i>
                      <i className="devicon-javascript-plain"></i>
                      <i className="devicon-mysql-original"></i>
                      <i className="devicon-sqlite-plain"></i>
                      <i className="devicon-react-original"></i>
                      <i className="devicon-tailwindcss-plain"></i>
                      <i className="devicon-flask-original"></i>
                      <i className="devicon-typescript-plain"></i>
                    </div>
                  </CardContent>
                </Card>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="flex flex-col items-center justify-center gap-1 mt-1">
              {/* <div className="flex items-center gap-2 mt-10">
                <Terminal className="w-5 h-5" />
                <h2 className="text-xl font-bold">Skills</h2>
              </div> */}
              <SkillCarousel />
          </div>
          <div className="flex items-center justify-center gap-2 mt-10">
            <h2 className="text-xl font-bold">경력</h2>
          </div>
          <MyPrizes1 />
        </div>
      </div>
    </main>
  );
}
