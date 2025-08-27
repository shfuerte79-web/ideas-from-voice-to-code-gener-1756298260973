import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Driven Debugging Assistant",
    "one_liner": "Debug your code just by speaking to it.",
    "why_now": "With the rise of remote coding, hands-free tools have become essential.",
    "novel_mechanism": "Integrates voice recognition with code analysis to offer real-time solutions.",
    "ai_stack": [
      "Claude/GPT",
      "Speech",
      "Agents"
    ],
    "edge_use_cases": [
      "Create bug reports by dictating",
      "Ask for code reviews or optimizations verbally"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "speech recognition",
        "bug detection",
        "real-time feedback"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI",
        "Twilio"
      ],
      "data_bootstrap": [
        "public dataset of code errors",
        "synthetic error generation via LLM"
      ],
      "risk": [
        "accuracy of voice recognition",
        "limited programming language support"
      ],
      "mitigation": [
        "extensive testing with diverse voices",
        "focusing on popular languages first"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live coding sessions showcasing debugging",
        "Before/After coding performance"
      ],
      "channels": [
        "Hacker News",
        "Twitter",
        "Discord"
      ],
      "pricing": {
        "free": "Basic features with voice commands",
        "pro": "Advanced debugging features",
        "business": "Team collaboration tools"
      }
    },
    "moat": [
      "feedback loop from user prompts",
      "integrations with IDEs",
      "community-driven feature suggestions"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This idea leverages immediate voice input to solve a longstanding problem in coding, offering a fresh spin that existing products lack."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}