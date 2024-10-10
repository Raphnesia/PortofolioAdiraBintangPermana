"use client";
import React, { useState, useEffect, useId, useRef } from 'react';
import { FlipWords } from './flip-words';
import { BlurFade } from './MagicUI/blur-fade';
import { edu } from '@/data';
import { ResumeCard } from './resume-card';

const BLUR_FADE_DELAY = 0.07;

const EducationSec = () => {
  return (
    <section id="edu" className='mb-5 mt-14'>
      <div className="flex flex-wrap items-center justify-center p-2 gap-4 gap-x-12 gap-y-0 mb-5 ">
        <h1 className='heading font-bold sm:text-3xl mb-5'>
            Pendidikan
            <FlipWords
            className="text-center text-5xl font-bold mb-1 sm:text-3xl md:mb-0"
            words={[
              " / Education",
              " / 업무 경험",
              " / 実務経験",
              " / Aarbecht Erfahrung",
              " / İş deneyimi",
              " / خبرة في العمل",
              ]}
            />
        </h1>
      </div>
        <div className="flex min-h-0 flex-col gap-y-5 mt-6 mb-4">
          {edu.map((edu, id) => (
            <BlurFade
              key={edu.school}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={edu.school}
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                href={edu.href}
                period={`${edu.start} - ${edu.end ?? "Present"}`}
                location={edu.location}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default EducationSec
