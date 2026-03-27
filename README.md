# SevaLink

SevaLink is a modern, production-ready web application designed as a Mini Healthcare Support platform for NGOs. It streamlines patient assistance processing, volunteer onboarding, and general support communication.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Custom UI components inspired by shadcn/ui
- **Icons:** Lucide React (Clean, minimal, modern medical/system icons)
- **Backend/Logic:** Next.js Server Actions with mock in-memory persistence

## Features
- **Modern Landing Page:** Clean typography, glassmorphism, responsive design with whitespace-heavy premium layout.
- **Multi-Purpose Form System:** Tabbed interface for capturing Patient Support, Volunteer Registration, and General Contact.
- **Smart Summary Generator (AI/Automation Feature):** Form submissions generate a concise AI-like summary using server actions. Example: "Patient John from Kolkata requesting High - Urgent support..."
- **AI Chatbot (Rule-based):** A floating, animated chatbot interface providing predefined FAQ responses, guiding users to forms and emergency contacts instantly.

## AI & Automation
SevaLink includes automated workflow enhancements:
1. **Server-side Summarization:** A smart parser evaluates incoming structured queries and generates a summarized snapshot.
2. **Interactive Assistant:** The AI Chatbot provides immediate triage capabilities, reducing the human support load for basic inquiries.

## Project Structure
- `src/app/`: Core App Router pages and layouts.
- `src/components/ui/`: Reusable, accessible UI blocks (Buttons, Inputs, Cards).
- `src/components/forms/`: Complex interactive forms for different NGO use-cases.
- `src/components/chat/`: The floating AI Chatbot implementation.
- `src/actions/`: Server actions to handle backend validation and mock persistence.
- `src/lib/`: Utilities for style merging (`cn`).

## How to Run Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to witness the result.

## Constraints & Considerations
- Employs an in-memory queue for submissions (ideal for linking with Prisma/Postgres or external databases later).
- Built entirely with Tailwind v4 CSS variables.
- Uses `React 19` and Server Actions for lean, API-route-free logic.

---
*Built for modern healthcare NGOs.*
