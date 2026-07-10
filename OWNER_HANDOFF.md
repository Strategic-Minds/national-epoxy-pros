# OWNER HANDOFF DOCUMENT: FLOORING SYSTEMS SUITE
**Prepared for:** Jeremy Bensen, Strategic Minds  
**Date:** July 10, 2026  
**Status:** Production Ready / Active Handoff  

This document serves as the comprehensive technical handoff for the two production flooring applications developed for Strategic Minds:
1. **National Epoxy Pros Website:** A consumer-facing quote funnel and Progressive Web App (PWA).
2. **NCP+XPS Commercial/Government Flooring Intelligence System:** A B2B bid intelligence, takeoff, estimating, and proposal platform.

Both systems leverage a shared, unified database architecture hosted on a single Supabase instance, but operate on completely decoupled frontend architectures optimized for their respective user segments (B2C vs. B2B).

---

## SYSTEM 1: National Epoxy Pros Website

### 1.1 System Overview
The National Epoxy Pros Website is a consumer-facing, highly performant web application and Progressive Web App (PWA) designed to capture residential and commercial epoxy flooring leads. It features a fully responsive design, custom interactive visualizer tools, and an intuitive 5-step interactive Quote Wizard that guides users from initial material selection to booking/lead submission. The app is fully optimized for mobile installation as a PWA, enabling offline page caching, fast loading times, and native-like app behaviors.

### 1.2 Live URLs & Access
- **Production URL:** [https://nationalepoxypros.com](https://nationalepoxypros.com) (Hosted on Vercel)
- **Deployment Platform:** Vercel Dashboard (Strategic Minds Team account)
- **SSL Status:** Managed automatically by Vercel (Let's Encrypt SSL)
- **Administrative Access:** Login to Vercel via GitHub Single Sign-On (SSO) using the Strategic Minds organization credentials.

### 1.3 GitHub Repository & Local Setup
- **GitHub Repository:** `Strategic-Minds/national-epoxy-pros` (Private)
- **Primary Branch:** `main`

#### Local Development Installation Steps
To clone, install dependencies, and run the National Epoxy Pros website locally:

```bash
# 1. Clone the repository
git clone git@github.com:Strategic-Minds/national-epoxy-pros.git
cd national-epoxy-pros

# 2. Install dependencies (Node.js v18+ recommended)
npm install

# 3. Set up local environment variables
cp .env.example .env.local
# (Edit .env.local with the secrets detailed in Section 1.4)

# 4. Run the development server
npm run dev
```
The local server will run at `http://localhost:3000`.

### 1.4 Environment Variables
Configure these variables in your Vercel project settings and local `.env.local` file:

| Variable Name | Description | Source / How to Obtain |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | The public API gateway URL for the Supabase instance. | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public API key used for client-side queries and authentication. | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret high-privilege key to bypass Row-Level Security (RLS) in server routes. | Supabase Dashboard → Settings → API (Keep secret) |
| `RESEND_API_KEY` | API key to authorize transactional email dispatching via Resend. | Resend Console → API Keys |

### 1.5 Supabase Infrastructure
- **Supabase Project Ref:** `azajysheebfhyzoyplpf`
- **Database URL:** `azajysheebfhyzoyplpf.supabase.co`
- **Primary Leads Table:** `public.leads`

```sql
-- Schema Reference: public.leads
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    address TEXT,
    city TEXT,
    zip_code TEXT,
    project_type TEXT, -- Residential, Commercial, Industrial, etc.
    floor_system TEXT, -- Flake, Metallic, Solid Color, Quartz, Polished Concrete
    square_footage NUMERIC,
    timeline TEXT,
    comments TEXT,
    status TEXT DEFAULT 'New'::text NOT NULL
);
```
- **Access Protocol:** Use the Supabase Web Console with your Strategic Minds administrator credentials. Client-side inserts into `public.leads` are strictly governed by Postgres Row-Level Security (RLS) policies allowing public write but restricted read access.

### 1.6 Core Workflow (B2C Lead Capture)
1. **User Visit & PWA Installation:** The consumer visits `nationalepoxypros.com`. A browser prompt invites them to install the site as a Progressive Web App (PWA) to their home screen. The PWA caches core assets (`manifest.json` and service worker) for offline resilience.
2. **Education & Selection:** The customer navigates through the static systems pages to view floor properties (Flake, Metallic, Solid Color, Quartz, Polished Concrete) or uses the interactive Visualizer tool to overlay textures.
3. **Quote Wizard Funnel:** The user launches the 5-step Quote Wizard:
   - **Step 1:** Select Project Type (Residential vs. Commercial).
   - **Step 2:** Select Floor System (Flake, Metallic, etc.).
   - **Step 3:** Enter Estimated Square Footage.
   - **Step 4:** Provide Project Address and Timeline.
   - **Step 5:** Complete Contact Details (Name, Email, Phone, Comments) and click Submit.
4. **Data Persistence:** The Next.js serverless route executes an insert operation to the `public.leads` table on Supabase.
5. **Notification:** A backend handler catches the database write or API submission and dispatches a detailed structured email via Resend to `leads@nationalepoxypros.com` containing all form parameters for direct sales follow-up.

### 1.7 Content Management & Customization
- **Static Pages:** Copy writing, marketing descriptions, and SEO metadata for pages (Home, Commercial, Government, About, Contact) reside under the `/app` directory in standard Next.js Page router or App router convention components.
- **Floor Systems & Visualizer Textures:** Floor system data, specs, and visualizer textures are stored in `/constants/floorSystems.ts`. Editing this file updates both individual system pages and the Quote Wizard selection.
- **PWA Configuration:** Edit public assets under the `/public` folder (icons, `manifest.json`) and the service worker declaration inside `next.config.js` or standard compiler configuration files to update application shell caching.

### 1.8 Gaps & Next Steps
- **Analytics Mapping:** Integrate GA4 or Mixpanel tracking into the 5-step wizard to track drop-off metrics per step.
- **CRM Integration:** Write a webhook receiver to sync Supabase `public.leads` automatically with HubSpot, Salesforce, or a local service business CRM (e.g., Jobber).

### 1.9 Contact Information
- **Lead Developer:** dev-team@strategicminds.com
- **Hosting / Vercel Owner Account:** admin@strategicminds.com
- **Supabase Account Admin:** database-admin@strategicminds.com

---

## SYSTEM 2: NCP+XPS Commercial/Government Flooring Intelligence System

### 2.1 System Overview
The NCP+XPS Commercial/Government Flooring Intelligence System is an enterprise B2B bid management portal designed to streamline the workflow for tracking, calculating, and bidding commercial and government contracts. The system processes project opportunities, manages complex material/labor calculations via an integrated Price Book, runs digital takeoffs, generates multi-page proposals, and enforces rigorous administrative approval gates before bids are released to clients.

### 2.2 Live URLs & Access
- **Production URL:** [https://autobuilderos.com](https://autobuilderos.com) (Hosted on Vercel)
- **Deployment Platform:** Vercel Dashboard (Strategic Minds Enterprise account)
- **Access Authorization:** Restricted to verified email domains or manually whitelisted accounts in Supabase Auth.

### 2.3 GitHub Repository & Local Setup
- **GitHub Repository:** `Strategic-Minds/AUTOBUILDER-2.0` (Private)
- **Primary Branch:** `main`

#### Local Development Installation Steps
To clone, install dependencies, and run the B2B platform locally:

```bash
# 1. Clone the repository
git clone git@github.com:Strategic-Minds/AUTOBUILDER-2.0.git
cd AUTOBUILDER-2.0

# 2. Check out the primary production branch
git checkout main

# 3. Install project dependencies (React 19 / Next.js 15 compatible)
npm install --legacy-peer-deps

# 4. Configure local environment file
cp .env.example .env.local
# (Edit .env.local with credentials detailed in Section 2.4)

# 5. Spin up the development server
npm run dev
```
The local server will run at `http://localhost:3000`.

### 2.4 Environment Variables
Configure these variables in your Vercel project settings and local `.env.local` file:

| Variable Name | Description | Source / How to Obtain |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Endpoint of your Supabase project (Shared with System 1). | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public key used for frontend routing and client authentication. | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin bypass key utilized inside API routes to process audit logs and manage cross-table relations. | Supabase Dashboard → Settings → API (Keep secret) |
| `CRON_SECRET` | Secret token to authenticate the automated heartbeat endpoint request. | Set custom key (UUID v4 recommended) |

### 2.5 Supabase Infrastructure
- **Supabase Project Ref:** `azajysheebfhyzoyplpf` (Same instance as System 1, segregated tables)
- **Data Protection:** Row-Level Security (RLS) is enabled and strictly enforced on all 10 custom tables under the `public` schema.

#### Database Architecture Table Manifest
The following 10 custom tables govern the platform's state machine:

1. `ncp_organizations`: Stores B2B customer accounts, bidding agencies, and internal departments.
2. `ncp_opportunities`: Bid tracking repository containing government solicitations, scope details, timelines, and status.
3. `ncp_documents`: Stores system file metadata, PDF proposal documents, blueprints, and uploaded project takeoffs.
4. `ncp_takeoffs`: Quantitative calculation records detailing linear footage, area measurements, and floor material types.
5. `ncp_price_book`: Storage of material, tooling, auxiliary, and labor costs per floor system.
6. `ncp_estimates`: Compiled cost calculations deriving exact figures by joining takeoff quantities against price book values.
7. `ncp_proposals`: Customer-facing bid details, legal riders, payment terms, and status variables.
8. `ncp_leads`: Internal agency tracking records detailing inbound opportunities awaiting conversion.
9. `ncp_audit_events`: Security logging of administrative actions, price book changes, or status approvals.
10. `ncp_agent_runs`: Logs recording automated script evaluations, web scrapers, and background job metrics.

#### Seeded Price Book Data
The price book contains 6 primary commercial systems configured for automatic estimate computations:

| Flooring System | Key Code | Material Cost / SqFt | Labor Cost / SqFt | Combined Base Cost |
| :--- | :--- | :--- | :--- | :--- |
| **Flake** | `flake` | $1.85 | $2.40 | $4.25 |
| **Metallic** | `metallic` | $3.20 | $3.50 | $6.70 |
| **Solid Color** | `solid_color` | $1.40 | $2.10 | $3.50 |
| **Quartz** | `quartz` | $2.60 | $2.80 | $5.40 |
| **Polished Concrete** | `polished_concrete` | $1.20 | $3.80 | $5.00 |
| **Urethane Cement** | `urethane_cement` | $4.10 | $4.20 | $8.30 |

### 2.6 Core Workflow (B2B Bid Lifecycle)
The B2B business process operates through an integrated, automated state machine:

```
[Opportunity Discovered]
           │
           ▼
 [Documents Uploaded] (Blueprints, RFPs)
           │
           ▼
  [Takeoff Measured] (Calculate Areas/Systems)
           │
           ▼
 [Estimate Calculated] (Auto-calculated via Seeded Price Book)
           │
           ▼
 [Proposal Generated] (Drafting terms and conditions)
           │
           ▼
  [Approval Gated] (Internal validation workflow)
           │
           ▼
     [Sent to Client]
```

1. **Discovery & Input:** Lead tracking is initiated in `/opportunities` or parsed from external bid feeds.
2. **Asset Organization:** Blueprints, contract specifications, and design sheets are uploaded to `/api/opportunities` and mapped directly into `ncp_documents`.
3. **Takeoff Specification:** Estimators enter actual surface area measurements, sub-base requirements, and flooring profiles in `/takeoff` (mapped directly to `ncp_takeoffs`).
4. **Automated Cost Compilation:** The system connects the takeoff dimensions with the master table `ncp_price_book`. The database layer or backend endpoint `/api/estimates` auto-calculates total material, labor, markup, and auxiliary fees, outputting an estimate itemized in `ncp_estimates`.
5. **Proposal Compilation:** Customer-facing proposals are compiled from the approved estimates under `/proposals`.
6. **Approval Gate:** Prior to delivery, proposals enter a "Pending Review" status. The database/app level enforces a strict gate requiring an administrator override to transition the proposal to "Approved" state.
7. **B2B Delivery:** Once cleared, the proposal is generated as a secure print-ready format or interactive web-view, then delivered to the client.

### 2.7 API Architecture & Automation
The platform uses the following secure endpoints under the `/api` routing structure:

- `/api/opportunities`: Handles CRUD commands and metadata storage for bids.
- `/api/takeoffs`: Processes architectural measurements.
- `/api/estimates`: Evaluates cost algorithms mapping takeoff specs against the Price Book.
- `/api/proposals`: Compiles, formats, and transitions B2B documents.
- `/api/price-book`: Restricts modifications of base pricing structures.
- `/api/ncp-stats`: Generates real-time financial reporting metrics for dashboard view.
- `/api/ncp-leads`: Converts incoming agency raw leads to structured bidding streams.
- `/api/cron/ncp-heartbeat`: Secure cron entrypoint invoked via Vercel Cron.
  - **Schedule:** Run every 5 minutes (`*/5 * * * *`).
  - **Purpose:** Verifies backend connectivity, triggers queue processors, updates pricing tickers, and registers audit heartbeat intervals.
  - **Security:** Requires authorization verification by passing `Authorization: Bearer <CRON_SECRET>` in headers.

### 2.8 Content Management & Cost Tuning
- **Updating Costs (Price Book):** If supplier costs shift, navigate to the `/api/price-book` management views or update the records within the `ncp_price_book` table in the Supabase console. Modifying values dynamically changes all *new* estimates.
- **Workflow State Management:** State transitions (e.g., Draft → Estimating → Estimating Complete → Awaiting Approval → Sent → Won) are managed in standard Next.js layout structures utilizing React state and standard Supabase client mutations.

### 2.9 Gaps & Next Steps (Urgent Implementations Needed)
To finalize the application suite, 4 dynamic detail pages must be developed:
1. `/opportunities/[id]`: Detail view showing RFP specifications, deadlines, associated documents, and communication logs.
2. `/takeoff/[id]`: Interactive page for inputting room-by-room area figures, material selections, and floor system assignments.
3. `/estimates/[id]`: Granular pricing sheet with field overrides, markup adjustments, dynamic profit-margin widgets, and labor-rate multipliers.
4. `/proposals/[id]`: Executive layout builder to view, print, or email custom client contracts, payment terms, and PDF outputs.

---

## CONTACT DIRECTORY & ESCALATION

| Domain Area | Contact Entity | Email | Role |
| :--- | :--- | :--- | :--- |
| **System Owner** | Jeremy Bensen | bensen@strategicminds.com | Principal stakeholder and project director. |
| **Sales Leads** | National Epoxy Pros | leads@nationalepoxypros.com | Target mailbox for B2C quote submissions. |
| **Engineering** | Strategic Minds Dev | dev-team@strategicminds.com | Maintainers of Next.js repos, APIs, and deployments. |
| **DB Administration** | Supabase Support | support@supabase.com | Infrastructure host for SQL, storage, and schemas. |

---

## COMBINED DAY 1 CHECKLIST FOR THE OWNER
To seamlessly take full administrative and technical ownership of the flooring platforms, execute the following steps in sequence:

- [ ] **1. Secure Shared Supabase Access**
  Access the Supabase console at [supabase.com](https://supabase.com). Confirm you can log into project `azajysheebfhyzoyplpf`. Verify that you can view both System 1 data (`public.leads`) and System 2 data (the 10 `ncp_` prefixed tables).
- [ ] **2. Map Vercel Environments**
  Log into Vercel and verify access to the two active deployment workspaces:
  - `nationalepoxypros.com`
  - `autobuilderos.com`
  Confirm that all required environment variables outlined in sections 1.4 and 2.4 are correctly set in Vercel’s Production environments.
- [ ] **3. Access GitHub Repositories**
  Log into your GitHub account and verify you have Admin/Owner access to:
  - `Strategic-Minds/national-epoxy-pros`
  - `Strategic-Minds/AUTOBUILDER-2.0`
- [ ] **4. Test Local Clone & Builds**
  Clone both repositories locally on your development system using the instructions in 1.3 and 2.3. Run `npm run build` on both directories to ensure that they build cleanly without TypeScript or React compilation errors.
- [ ] **5. Validate B2C Email Delivery Loop**
  Go to [nationalepoxypros.com](https://nationalepoxypros.com), navigate to the Quote Wizard, and complete a test submission. Verify that:
  - The record appears instantly in the Supabase `public.leads` table.
  - A notification email with all lead details is successfully delivered to `leads@nationalepoxypros.com` via Resend.
- [ ] **6. Audit the Seeded Price Book**
  Log into the Supabase DB console, open the Table Editor, and review the pricing records in `ncp_price_book`. Ensure that the 6 standard flooring profiles (Flake, Metallic, Solid Color, Quartz, Polished Concrete, Urethane Cement) match your current regional pricing benchmarks.
- [ ] **7. Verify the Cron Heartbeat Job**
  Send a test POST request to `https://autobuilderos.com/api/cron/ncp-heartbeat` using a tool like Postman or curl, passing your `CRON_SECRET` as a Bearer token in the Authorization header. Check the Vercel or Supabase log outputs to confirm that the cron successfully executed without errors.
- [ ] **8. Prioritize the 4 Detail Page Routes**
  Coordinate with the engineering team to schedule the development of the 4 missing dynamic detail layouts:
  - `/opportunities/[id]`
  - `/takeoff/[id]`
  - `/estimates/[id]`
  - `/proposals/[id]`
