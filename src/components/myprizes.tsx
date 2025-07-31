'use client'

import { useEffect, useState } from 'react'
import csses from '@/styles/main.module.css'

export function MyPrizes1() {
    const myPrizes = [
        "2023 대구 영남중학교 교내 소프트웨어 경진대회 2위",
        "2024 대구 미래채움 톤톤 페스티벌 해커톤 부문 최우수상",
        "디스코드 봇 개발 경력 3년",
        "Flask 기반 백엔드 웹사이트 개발 경력 4년",
        "Django 기반 백엔드 웹사이트 개발 경력 1년",
        "NodeJs 기반 프론트엔드 웹사이트 개발 경력 1년",
        "2025 대구 영남중학교 교내 소프트웨어 경진대회 2위",
        "2025 ICT 창업가 캠프 본선 진출(본선 진행 중)"
    ]

    const [prizeIndex, setPrizeIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [charIndex, setCharIndex] = useState(0)
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (typing && charIndex < myPrizes[prizeIndex].length) {
            const delay = Math.random() * 60 + 30
            timeout = setTimeout(() => {
                setDisplayedText(prev => prev + myPrizes[prizeIndex][charIndex])
                setCharIndex(prev => prev + 1)
            }, delay)
        } else if (typing && charIndex >= myPrizes[prizeIndex].length) {
            // 글자 다 치면 2초 대기 후 다음 문장으로 넘어감
            timeout = setTimeout(() => {
                const nextIndex = (prizeIndex + 1) % myPrizes.length
                setPrizeIndex(nextIndex)
                setDisplayedText('')
                setCharIndex(0)
            }, 2000)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, typing, prizeIndex, myPrizes])

    return (
        <h2 className={`${csses.floatanimate} font-semibold`}>
            {displayedText}
            <span className={`${csses.blink} inline-block w-[1px] bg-zinc-600 dark:bg-zinc-300 h-5 align-middle`} />
            <span className="mx-1 text-sm text-zinc-400 dark:text-zinc-500">|</span>
            <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">장성주</span>
        </h2>
    )
}
