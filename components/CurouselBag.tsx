"use client";
import React, { useState, useEffect, useId, useRef } from 'react';
import { FlipWords } from './flip-words';
import { work } from '@/data';
import { ResumeCard } from './resume-card';
import { AnimatedList } from './ui/animated-list';


const CurouselBag = () => {
  return (
    <section id="work" className='mb-5 mt-14'>
      <div className="flex flex-wrap items-center justify-center p-2 gap-4 gap-x-12 gap-y-0 mb-5 ">
        <h1 className='heading font-bold sm:text-3xl mb-5'>
            Pengalaman Kerja
            <FlipWords
            className="text-center text-5xl font-bold mb-1 sm:text-3xl md:mb-0"
            words={[
              " / Work Experience",
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
          <AnimatedList>
            {work.map((work, id) => (
              
            
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            
          ))}
          </AnimatedList>
          
        </div>
      </section>
      
    

  )
}

export default CurouselBag;