//add all the componets and export them.21:07
import background from './Intellify-bg.jpg'
import logo from './circle-favicon.png'
import usergroup from './user_group.png'
import { ClipboardPen } from 'lucide-react';
import { Hash } from 'lucide-react';
import { Image } from 'lucide-react';
import { PenLine } from 'lucide-react';
import demo from './demo.jpg'
export const assets=
{
  background,
  logo,
  usergroup,
}

export const AiToolData = [
  {
    title: 'AI Article Writer',
    description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
    Icon : ClipboardPen,
    bg: '#EACDD1',
    path: '/ai/write-article',
  },
  {
    title: 'Blog Title Generator',
    description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
    Icon : Hash,
    bg: '#C0CFE6',
    path: '/ai/write-blog-title',
  },
  {
    title: 'AI Image Generation',
    description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
    Icon : Image,
    bg: '#EACDD1',
    path: '/ai/image-generate',
  },
  {
    title: 'Resume Review',
    description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
    Icon :  PenLine,
    bg: '#C0CFE6',
    path: '/ai/resume-review',
  },
]

export const dummyTestamonialData = [
  {
    image: 'img/rate/starts',
    name: 'sona',
    title: 'Marketing Director, TechCorp',
    content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
    rate: 4
  },
  {
    image: 'img/rate/starts',
    name: 'dev',
    title: 'Marketing Director, TechCorp',
    content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
    rate: 4
  },
  {
    image: 'img/rate/starts',
    name: 'sona',
    title: 'Marketing Director, TechCorp',
    content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
    rate: 4
  },
]

export const dummyCreationData =[
  {
    id:1,
    length: 2,
    prompt : 'Navigating the Technological Frontier: Trends Shaping Our Future',
    type : 'article',
    createdAt : "2025-08-06",
    content:"kya bhai bedu what is up"
  },
  {
    id:2,
    length: 200,
    prompt : 'Background removed from an image.',
    type : 'image',
    createdAt : "2025-11-06",
    content: "./demp.jpg",
  }
]

export const dummyPublishedCreationData =[
  {
    id:1,
    likes: [101, 202, 303],
    prompt : 'Navigating the Technological Frontier: Trends Shaping Our Future',
    type : 'image',
    createdAt : "2025-08-06",
    content:demo,
  },
  {
    id:2,
    likes: [101, 202],
    prompt : 'Background removed from an image.',
    type : 'image',
    createdAt : "2025-11-06",
    content: demo,
  }
]