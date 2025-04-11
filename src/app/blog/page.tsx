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

export default function Blog() {

  const seriesfetchjson = {
    "operationName": "UserSeriesList",
    "variables": {
       "username": "sungjujjang"
     },
     "query": "query UserSeriesList($username: String!) {\n  user(username: $username) {\n    id\n    series_list {\n      id\n      name\n      description\n      url_slug\n      thumbnail\n      updated_at\n      posts_count\n      __typename\n    }\n    __typename\n  }\n}\n"
  }

  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false)
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch("/api/velog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seriesfetchjson),
    })
    .then((response) => response.json())
    .then((data) => {
      const seriesList = data.data.user.series_list.map((series: any) => ({
        id: series.id,
        name: series.name,
        description: series.description,
        url_slug: series.url_slug,
        thumbnail: series.thumbnail,
        updated_at: new Date(series.updated_at).toLocaleString(),
        posts_count: series.posts_count,
      }));
      setSeries(seriesList);
      setIsMounted(true);
      console.log("Fetched series:", seriesList);
    })
    .catch((error) => {
      console.error("Error fetching series:", error);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <Navbar />
      {isMounted && (
        <div className={`${csses.floatanimate} grid grid-cols-1 md:grid-cols-2 gap-4`}>
          {series.map((serie: any, index) => (
            <Card key={index} className="w-full max-w-sm mx-auto bg-white dark:bg-zinc-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle>{ serie.name }</CardTitle>
                <CardDescription>{ serie.posts_count }개 글</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="gap-5">
                  <p className="
                    text-sm text-gray-600 dark:text-gray-400
                  ">{ serie.updated_at } 에 최종 업데이트</p>
                  <br />
                  <a href={`https://velog.io/@sungjujjang/series/${serie.name}`} className="
                      text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300
                  ">글 목록 보기</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
