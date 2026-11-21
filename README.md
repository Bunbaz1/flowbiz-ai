# FLOWBIZ AI

FLOWBIZ AI is an early-stage SaaS product for academies and training businesses. The first product direction brings enquiries, lead management, courses, students, enrolments and payment visibility into one workspace.

## Current implementation

- Responsive marketing website with product positioning, workflow, solutions and indicative pricing.
- Interactive dashboard prototype with lead search, lead creation and status updates.
- Next.js 15, React 19 and TypeScript.
- Supabase client scaffold for a future backend connection.
- GitHub Actions workflow configured to install dependencies, lint and build on pushes and pull requests.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Current limitations

This is a prototype, not a production SaaS. Dashboard records are illustrative and browser-session state only. The early-access form does not send or store email addresses. Authentication, persistent database storage, team permissions, real payment processing, AI responses, WhatsApp/email integrations and production deployment are not yet implemented.

Do not enter real customer or student information.

## Roadmap

1. Verify automated lint and production build.
2. Configure Supabase project, authentication, schema and row-level security.
3. Replace demo data with tenant-isolated persistent records.
4. Implement courses, cohorts, students, enrolments and payment workflows.
5. Add secure email/WhatsApp messaging and approved knowledge-grounded AI.
6. Add billing, audit logs, backups, monitoring and privacy controls.
7. Pilot with a small number of academies before general release.
