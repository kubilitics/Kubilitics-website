# PRD-10: kubilitics.com — Marketing Website

**Version:** 1.0
**Date:** February 2026
**Owner:** Kubilitics Product & Design
**Status:** Active — Ready for Designer + Developer Execution
**URL Target:** https://kubilitics.com

---

## 0. One-Page Brief

Kubilitics is the Kubernetes Operating System — a unified platform combining a beautiful Web UI, a Desktop App (Tauri), and a powerful CLI (kcli) with AI at the core. The website's job is to make an experienced Kubernetes engineer land on kubilitics.com and within 15 seconds think: "this is the tool I've been waiting for."

The website must do three things:
1. **Communicate the platform clearly** — not as "another Kubernetes dashboard" but as a complete operating environment that replaces the fragmented stack they currently maintain
2. **Create desire** — through beautiful design, compelling screenshots, and honest competitive positioning
3. **Convert** — to a download, a Star on GitHub, or a sign-up

This document is a complete brief that a senior frontend developer and designer can execute without further clarification.

---

## 1. Brand Identity & Voice

### 1.1 Brand Positioning

**Category:** Kubernetes Operating System
**Primary audience:** Senior engineers, SREs, Platform engineers, DevOps leads
**Secondary audience:** Engineering managers who choose tools for their team
**Tertiary audience:** CTOs/VPs at companies evaluating K8s tooling

**The positioning statement (internal):**
"Kubilitics is the Kubernetes Operating System for engineers who are tired of running 7 separate tools. It gives you the visibility of Lens, the CLI power of kubectl, the stream logging of stern, and the intelligence of an AI platform engineer — in one unified product."

### 1.2 Tagline Options

Three candidates. Pick one for launch, A/B test the others:

**Option A (Bold, identity):**
> "Your Kubernetes Command Center"

**Option B (Value, replacement):**
> "kubectl, k9s, stern, helm — All in One. Plus AI."

**Option C (Premium, aspiration):**
> "The Last Kubernetes Tool You'll Ever Need"

Recommendation: Launch with **Option A** as the primary tagline, use **Option B** as the hero subheadline, use **Option C** on the /kcli dedicated page.

### 1.3 Voice & Tone

| Attribute | What it means | Example right | Example wrong |
|-----------|--------------|---------------|---------------|
| Confident | Know what we are. Don't hedge. | "Kubilitics replaces five tools." | "Kubilitics might be able to help..." |
| Engineering-first | Talk like a senior engineer | "Zero-dep binary, client-go direct" | "Leverage our robust platform synergies" |
| Premium without arrogance | Peer-to-peer respect | "Built for engineers who care." | "Enterprise-grade best-in-class solution" |
| Direct | Cut the adjective stack | "One binary. No dependencies." | "A highly optimized, cutting-edge, seamless experience" |
| Honest | Acknowledge the competition exists | "Unlike k9s, we also have a web UI." | "The only Kubernetes tool you'll ever need" (without context) |

### 1.4 Color System

```
Primary Blue:     #326CE5    (Kubernetes blue — intentional homage)
Dark Background:  hsl(221, 39%, 8%)    ≈ #0D1526
Accent Emerald:   hsl(142, 76%, 73%)   ≈ #6EF09E
Surface Dark:     hsl(221, 35%, 12%)   ≈ #14213D
Border Subtle:    hsl(221, 30%, 20%)   ≈ #243352
Text Primary:     hsl(210, 40%, 96%)   ≈ #F1F5FB
Text Muted:       hsl(215, 20%, 65%)   ≈ #93A1BC
Success:          #22C55E
Warning:          #F59E0B
Error:            #EF4444
```

**Gradients:**
```css
/* Hero gradient */
background: linear-gradient(135deg, hsl(221,39%,8%) 0%, hsl(230,45%,12%) 50%, hsl(221,39%,8%) 100%);

/* Blue accent glow */
background: radial-gradient(ellipse at center, rgba(50,108,229,0.15) 0%, transparent 70%);

/* Emerald accent glow */
background: radial-gradient(ellipse at center, rgba(110,240,158,0.10) 0%, transparent 70%);
```

**Glass morphism cards:**
```css
background: rgba(20, 33, 61, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
```

### 1.5 Typography

```
Headlines:     Inter (700, 800) — or Geist (preferred for tech feel)
Body:          Inter (400, 500)
Code/Terminal: JetBrains Mono, Fira Code, or Geist Mono
```

**Type scale:**
```
h1:   72px / 80px line-height / -2px tracking (desktop hero)
h1m:  40px / 48px (mobile hero)
h2:   48px / 56px / -1px tracking (section headers)
h3:   32px / 40px (feature headers)
h4:   20px / 28px (card titles)
body: 18px / 28px (main body)
sm:   15px / 24px (secondary text)
code: 14px / 22px (terminal blocks)
```

### 1.6 Logo Usage

- Primary: Kubilitics wordmark with the Kubernetes wheel integrated into the K
- Secondary: K-mark icon only (favicon, app icon, small placements)
- Colors: White on dark, #326CE5 blue on white
- Clear space: 1× logo height on all sides
- Never: rotate, distort, use on similar hues to background without sufficient contrast

---

## 2. Site Architecture

```
kubilitics.com/                   # Homepage
kubilitics.com/features           # Full feature breakdown
kubilitics.com/kcli               # kcli dedicated CLI page
kubilitics.com/pricing            # Pricing (Free / Pro / Team / Enterprise)
kubilitics.com/docs               # Documentation (or docs.kubilitics.com)
kubilitics.com/blog               # Blog / content
kubilitics.com/changelog          # Public changelog
kubilitics.com/about              # About / team / mission
kubilitics.com/security           # Security policy, responsible disclosure
kubilitics.com/open-source        # Open source commitment, license, CLA
kubilitics.com/vs/lens            # Comparison: Kubilitics vs Lens
kubilitics.com/vs/k9s             # Comparison: Kubilitics vs k9s
kubilitics.com/vs/headlamp        # Comparison: Kubilitics vs Headlamp
```

### 2.1 Navigation

**Primary Navigation (top bar, dark, sticky):**
```
[Kubilitics Logo]   Features   kcli   Pricing   Docs   Blog
                                              [GitHub ★ 4.2k]  [Download Free →]
```

**Mobile Navigation:**
- Hamburger menu
- Full-screen dark overlay with same links
- Download CTA pinned to bottom of mobile nav

**Footer Navigation:**
```
Product          Resources        Company          Community
─────────        ─────────        ───────          ─────────
Features         Documentation    About            GitHub
kcli CLI         API Reference    Blog             Discord
Desktop App      Changelog        Security         Twitter/X
Pricing          Open Source      Privacy          YouTube
                                  Terms
```

---

## 3. Homepage — Complete Section Specification

### 3.1 Navigation Bar

**Specs:**
- Height: 64px
- Background: `rgba(13, 21, 38, 0.85)` with `backdrop-filter: blur(20px)`
- Sticky with scroll detection (add border-bottom on scroll)
- Border bottom: `1px solid rgba(255,255,255,0.06)` (appears after scroll)

**Logo:** Left-aligned, Kubilitics wordmark, 32px height

**Nav links:** Features | kcli | Pricing | Docs | Blog
- Color: `hsl(215, 20%, 65%)` default
- Hover: `hsl(210, 40%, 96%)` with subtle underline
- Font: 15px / 500 weight

**Right side:**
- GitHub Star button (with live count via GitHub API)
  - Icon: GitHub mark
  - Text: "★ Star" + count
  - Style: Ghost button with border
- "Download Free" CTA button
  - Background: #326CE5
  - Hover: #2558D9
  - Arrow icon right

---

### 3.2 Hero Section

**Layout:** Full viewport height (100vh), centered content, dark gradient background with subtle animated mesh/grid

**Animated background:**
- Option A: Dark mesh gradient with slow drift animation (CSS @keyframes)
- Option B: Particle grid — faint blue dots on dark background
- Option C: Screenshot of product behind a dark veil (blurred, fades to content on scroll)

Recommendation: **Option A** for performance and elegance.

**Badge (above headline):**
```
[✦ Kubernetes Operating System]
```
Style: Pill badge, `#326CE5` border with `rgba(50,108,229,0.12)` background, 12px font, uppercase tracking

**Headline (h1):**

Three variants for A/B testing:

**Variant A (Identity-focused):**
```
Your Kubernetes
Command Center.
```

**Variant B (Replacement narrative):**
```
One Platform.
Seven Tools. Zero Compromise.
```

**Variant C (Action-oriented):**
```
Stop Managing
Kubernetes Tools.
Start Managing Kubernetes.
```

**Recommended: Variant A** for launch. Cleaner, more confident.

**Subheadline:**
```
kubectl · kubens · kubectx · k9s · stern · AI · dashboard.
All in one unified platform. Free and open source.
```

Style: 20px, weight 400, color: text-muted, `max-width: 560px`, centered

**Hero CTA buttons:**
```
[→ Download Free]          [View on GitHub ★]
```

Primary: Solid #326CE5, 48px height, "→ Download Free"
Secondary: Ghost with white border, "View on GitHub" with GitHub icon

**Micro copy under CTAs:**
```
macOS · Linux · Windows  ·  No account required
```
Style: 13px, muted, centered

**Hero visual (below or beside CTAs):**

A large terminal/app screenshot showing:
```
┌─────────────────────────────────────────────────────────────────────┐
│  kubilitics  ●  prod-us-east  /  payments-prod                      │
│─────────────────────────────────────────────────────────────────────│
│  [Dashboard] [Resources] [Topology] [Logs] [Terminal] [AI]          │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  Cluster Health: 98/100  ●  23 Pods  ●  5 Deployments  ●  2 Svcs  │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ CPU Usage        │  │ Memory           │  │ Network          │  │
│  │ ██████░░ 63%     │  │ █████░░░ 52%     │  │ 847 MB/s in     │  │
│  │ 12.6 / 20 cores  │  │ 42 / 80 Gi       │  │ 234 MB/s out    │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│  PODS                                        kcli Terminal          │
│  ● payment-api-7d9f    Running    2/2        $ kcli why pod/payment │
│  ● payment-api-8k2p    Running    2/2        ▶ AI: OOMKilled due to │
│  ● fraud-detector-92k  Running    1/1          JVM heap exceeding   │
│  ⚠ legacy-api-4xp9    Pending    0/1          container limits...   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

Style: Dark glass card with subtle shadow, slight upward tilt (CSS perspective transform), floating with soft glow underneath

**Hero social proof strip (below visual):**
```
Trusted by engineers at:
[Company logos or placeholder avatars]
4,200+ engineers  ·  120+ companies  ·  ★ 8.2k GitHub stars
```

---

### 3.3 "The Problem" Section

**Purpose:** Validate the pain before selling the solution. Engineers recognize themselves immediately.

**Headline:**
```
The Kubernetes Toolchain Tax
```

**Body:**
```
Every Kubernetes engineer maintains the same set of 7+ tools.
Each with its own config, its own auth, its own way of showing you
the same cluster.
```

**The tool stack visual (animated):**

Show the typical Kubernetes engineer's setup as overlapping logos with arrows:

```
   kubectl ──┐
   kubectx ──┤
   kubens  ──┤
   k9s     ──┤──→ [Your brain] ──→ [What's happening?]
   stern   ──┤
   helm    ──┤
   Lens    ──┤
   Grafana ─┘
```

Then: **→ Replace all of it with Kubilitics**

```
   Kubilitics ──→ [Everything] ──→ [You know what's happening]
```

**Stats row:**
```
7 tools replaced    ·    48 minutes saved daily    ·    1 install
```

---

### 3.4 Feature Grid Section

**Headline:**
```
Everything. Unified.
```

**Subheadline:**
```
The complete Kubernetes operating environment — not another dashboard.
```

**6-card feature grid (2×3 on desktop, 1-col mobile):**

Card 1: Visual Intelligence
```
Icon: topology/network graph icon
Title: Topology First
Body: See your entire cluster as an interactive relationship graph.
      Click any node to inspect it. Understand service dependencies
      in seconds, not hours.
Highlight: [Watch Demo]
```

Card 2: Terminal Power
```
Icon: terminal icon
Title: kcli — The Last CLI You'll Need
Body: 89+ commands. kubectl parity + context switching, streaming
      logs, AI diagnosis, Helm, GitOps — one binary. Zero dependencies.
Highlight: [Learn More →]
```

Card 3: AI Native
```
Icon: sparkle/AI icon
Title: AI at the Core
Body: kcli why pod/crashed tells you why. kcli fix writes the patch.
      5 AI providers — OpenAI, Anthropic, Ollama, Azure, custom.
      AI is optional. The CLI works fine without it.
```

Card 4: Cost Visibility
```
Icon: currency/trending chart icon
Title: Know What You're Spending
Body: Namespace-level cost breakdown. Idle resource detection.
      Optimization recommendations with one command.
      kcli cost overview.
Badge: [Pro Feature]
```

Card 5: Security Posture
```
Icon: shield icon
Title: Security Scanning Built In
Body: CVE detection, RBAC analysis, privilege escalation risks.
      kcli security scan shows your risk score in under 10 seconds.
Badge: [Pro Feature]
```

Card 6: Multi-Mode
```
Icon: layers/stack icon
Title: Web · Desktop · CLI · Embedded
Body: Run as a web app in-cluster, a native desktop app via Tauri,
      a standalone CLI, or embedded in your existing dashboard.
      Same data. Every mode.
```

---

### 3.5 Comparison Table Section

**Headline:**
```
Built for Engineers Who've Tried Everything Else
```

**Subheadline:**
```
We've used Lens, k9s, kubectl, and Headlamp too.
Here's what Kubilitics does that they don't.
```

**Comparison table:**

| Feature | kubectl | k9s | Headlamp | Lens | Kubilitics |
|---------|---------|-----|----------|------|-----------|
| Web UI / Dashboard | ✗ | ✗ | ✓ | ✓ | ✓ |
| Desktop App | ✗ | ✗ | ✗ | ✓ | ✓ |
| CLI (first-class) | ✓ | ✗ | ✗ | limited | ✓ |
| AI built-in | ✗ | ✗ | ✗ | Add-on ($$$) | ✓ Core |
| Topology Graph | ✗ | ✗ | Plugin | ✗ | ✓ |
| Cost Visibility | ✗ | ✗ | ✗ | ✗ | ✓ |
| Security Scanning | ✗ | ✗ | ✗ | ✗ | ✓ |
| Multi-pod Logs | ✗ | ✓ | ✗ | ✗ | ✓ |
| GitOps Status | ✗ | ✗ | Plugin | Plugin | ✓ |
| Open Source Core | ✓ | ✓ | ✓ | Closed | ✓ |
| Fully Free | ✓ | ✓ | ✓ | Restricted | ✓ Core |

Style: Dark table, header row with #326CE5 background, checkmarks in emerald green (#6EF09E), X marks in muted red, Kubilitics column highlighted with subtle blue left border

**Note under table:**
```
Kubilitics column shows free tier. Lens "AI" requires Lens Pro ($XX/month).
Comparison accurate as of February 2026.
```

---

### 3.6 Live Demo / Terminal Animation Section

**Headline:**
```
See it in 60 seconds.
```

**Option A: Animated terminal (Typewriter effect)**
Auto-playing terminal window showing real command sequences:

```bash
# Sequence 1: basic usage
$ kcli ctx
  > prod-us-east  (active)
    staging-us-west
    dev-local
$ kcli ns payments-prod
  Switched to namespace: payments-prod

# Sequence 2: something breaks
$ kcli health
  Cluster Health: 94/100  ⚠ 1 issue detected
  ⚠ payment-processor: CrashLoopBackOff (3 restarts in 5m)

# Sequence 3: AI diagnosis
$ kcli why pod/payment-processor-7k9p
  Analyzing with claude-sonnet-4-6...
  Root cause: OOMKilled — JVM heap (3g) exceeds memory limit (2Gi)
  Fix: update JAVA_OPTS=-Xmx1g and increase memory limit to 4Gi
  Run: kcli fix deployment/payment-processor

# Sequence 4: fix it
$ kcli fix deployment/payment-processor
  Proposed: memory limit 2Gi → 4Gi, JAVA_OPTS=-Xmx3g
  Apply? [Y/n] y
  Applied. Rolling update in progress...
  ✅ payment-processor: Running (2/2 replicas ready)
```

**Option B: Interactive demo embed**
If engineering bandwidth allows: a live embedded demo environment using a read-only sample cluster.

Recommendation: **Option A** for launch (zero infrastructure, maximum reliability). Add Option B in V2.

---

### 3.7 Deployment Modes Section

**Headline:**
```
Run It Your Way
```

**Three-tab component:**

Tab 1: Desktop App
```
[Download for Mac]  [Download for Windows]  [Download AppImage (Linux)]

Description:
Native Tauri app. Uses your kubeconfig. Works offline.
Memory: ~50MB. Bundle: ~5MB. Instant startup.
No account required. No telemetry without consent.
```

Tab 2: In-Cluster (Helm)
```
helm repo add kubilitics https://charts.kubilitics.com
helm install kubilitics kubilitics/kubilitics \
  --namespace kubilitics-system \
  --create-namespace

Access at: http://localhost:8080 (port-forward) or via Ingress
Team-friendly: share one URL, everyone uses the same cluster view
```

Tab 3: kcli Binary
```
# macOS / Linux
brew install kubilitics/tap/kcli
# or
curl -sSL https://get.kubilitics.com/kcli | sh

# Windows
winget install kubilitics.kcli

kcli version   # verify
kcli ctx       # start using
```

---

### 3.8 Social Proof / Testimonials Section

**Headline:**
```
Engineers Who've Made the Switch
```

**Testimonial cards (placeholder personas — to be replaced with real quotes at launch):**

Card 1:
```
"I uninstalled k9s, kubectx, kubens, and Lens on the same day.
kcli does everything they did and then the AI commands changed
how I debug production issues."

— Marcus Chen
  Senior SRE, Series B startup (240 engineers)
  ★★★★★
```

Card 2:
```
"The topology view finally helped my team understand why
our microservices kept failing. One diagram replaced three
hours of documentation. I sent the link to everyone."

— Priya Nair
  Platform Engineer
  ★★★★★
```

Card 3:
```
"kcli cost overview showed we were burning $800/month on
idle resources. Paid for kcli Pro for the next 2 years
in that one command."

— James O'Sullivan
  Engineering Manager
  ★★★★★
```

Card 4:
```
"We self-host with Helm. 12 engineers use the same
Kubilitics instance for our 4 clusters. The audit log
alone is worth the subscription."

— Yuki Tanaka
  DevOps Lead
  ★★★★★
```

Style: Dark glass cards, large quotation mark in muted blue, name + role in smaller muted text, star rating in amber/gold

---

### 3.9 GitHub / Open Source Section

**Headline:**
```
Open Source. For Real.
```

**Body:**
```
The core of Kubilitics — the CLI, the UI engine, the AI layer —
is MIT licensed. Always. No feature gating of core operations.
No telemetry without explicit consent.

Pro features are cost analysis, security scanning, and team
collaboration. Everything you need to run Kubernetes is free.
```

**Stats (live via GitHub API):**
```
[★ 8.2k Stars]  [🍴 420 Forks]  [❤ 120 Contributors]
```

**CTA:**
```
[View on GitHub →]       [Read the License]
```

---

### 3.10 Final CTA Section

**Headline:**
```
Start in 30 seconds.
```

**Three parallel CTA paths:**

```
┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│   Download the     │  │   Install kcli     │  │  Deploy in-cluster │
│   Desktop App      │  │   binary           │  │  with Helm         │
│                    │  │                    │  │                    │
│  macOS · Win · Lin │  │  brew install kcli │  │  helm install      │
│                    │  │  curl | sh         │  │  kubilitics/...    │
│  [Download Free →] │  │  [Install Guide →] │  │  [Helm Docs →]     │
└────────────────────┘  └────────────────────┘  └────────────────────┘
```

**Under the cards:**
```
All three modes share your kubeconfig and cluster credentials.
Switch between them freely — your data follows you.
```

---

### 3.11 Footer

**Structure:**

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Kubilitics logo]                                                    │
│ The Kubernetes Operating System.                                     │
│ Open source. Engineer-first.                                         │
│                                                                      │
│ [GitHub]  [Discord]  [Twitter/X]  [YouTube]                        │
│──────────────────────────────────────────────────────────────────────│
│ Product       Resources      Company         Community               │
│ ────────      ─────────      ───────         ─────────               │
│ Features      Docs           About           GitHub                  │
│ kcli          API Ref        Blog            Discord                 │
│ Desktop App   Changelog      Security        Twitter/X               │
│ Pricing       Open Source    Privacy         YouTube                 │
│               Roadmap        Terms                                   │
│──────────────────────────────────────────────────────────────────────│
│ © 2026 Kubilitics. MIT Licensed.  ·  Made with ♥ by engineers       │
│ Status: ● All systems operational (links to status.kubilitics.com)    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. Page Specifications

### 4.1 /features — Full Feature Breakdown

**Headline:**
```
Everything a Kubernetes Engineer Needs
```

**Structure:**

Section 1: Core Platform
- Multi-cluster management
- Resource browser (50+ resource types)
- Real-time events and alerts
- Topology graph
- Search across all namespaces

Section 2: Terminal & CLI
- kcli integration (embedded terminal)
- WebSocket PTY streaming
- Full kubectl parity
- Shell completions
- Plugin system

Section 3: AI Layer
- Natural language queries
- Root cause analysis (kcli why)
- Auto-fix generation (kcli fix)
- Log analysis with AI
- 5 provider support

Section 4: Observability
- Health scoring
- Metrics and top
- Restart analysis
- Instability detection
- Prometheus query integration (Pro)

Section 5: Cost & Security (Pro/Enterprise)
- Cost per namespace/workload
- Optimization recommendations
- CVE scanning
- RBAC analysis
- Compliance reports

Section 6: Team & Enterprise
- Audit trail
- Shared contexts
- Policy enforcement
- Incident escalation (Slack/PagerDuty)
- SSO/SAML

**Each feature section format:**
- Left: Text description with command examples
- Right: Screenshot or terminal animation
- Alternates left-right for visual rhythm

---

### 4.2 /kcli — CLI Dedicated Page

**Purpose:** Dedicated landing for the CLI product. Engineers who find kcli via GitHub should land here. Needs to be self-contained.

**Headline:**
```
The Last Kubernetes CLI You'll Ever Need
```

**Subheadline:**
```
7-in-1: kubectl · kubens · kubectx · k9s · stern · helm · AI
One binary. Zero dependencies. Free and open source.
```

**Install command (prominent, copyable):**
```bash
brew install kubilitics/tap/kcli
# or
curl -sSL https://get.kubilitics.com/kcli | sh
```

**"What it replaces" table:**
| You used to need | kcli command |
|-----------------|-------------|
| kubectl get pods | kcli get pods |
| kubectx prod | kcli ctx prod |
| kubens payments | kcli ns payments |
| k9s | kcli ui |
| stern -n payments | kcli logs -n payments |
| helm list | kcli helm list |
| ChatGPT tab-switching | kcli why pod/x |

**Command showcase (animated):**
6 terminal windows showing the most compelling commands:
1. `kcli ctx` — fuzzy context switcher
2. `kcli health` — cluster health with score
3. `kcli why pod/crashed` — AI root cause analysis
4. `kcli cost overview` — cost breakdown
5. `kcli security scan` — security score
6. `kcli ui` — Bubble Tea TUI

**Safety model section:**
```
Safe by Default

Every mutating command asks for confirmation.
kcli delete pod/x → "Are you sure? [y/N]"
Add --force to skip. Set KCLI_CI=true for automation.
Your production cluster is not a playground.
```

**Pricing on /kcli:**
- Minimal pricing table (Free vs Pro vs Team)
- Large "Download Free" CTA
- "Compare plans" links to /pricing

---

### 4.3 /pricing — Pricing Page

**Headline:**
```
Simple, Honest Pricing
```

**Subheadline:**
```
The CLI and UI are free. Pay for what saves you money.
```

**Pricing cards (3 visible, Enterprise on right or via "Contact"):**

**Free**
```
$0 / forever
────────────
✓ kcli CLI — all 89+ commands
✓ kubectl, ctx, ns, helm, gitops
✓ AI commands (bring your own key)
✓ Bubble Tea TUI
✓ Plugin system
✓ Web UI + Desktop App (core)
✓ Multi-cluster support
✓ Basic cost overview

[Download Free →]
No account required
```

**Pro**
```
$29 / user / month
$290/year (save 17%)
────────────────────
Everything in Free, plus:
✓ Cost intelligence (optimize, history, export)
✓ Security scanning (CVE, RBAC analysis)
✓ Prometheus/Loki native queries
✓ Predictive analytics (kcli predict)
✓ Priority support (48h SLA)

[Start Free Trial →]
14-day trial, no credit card
```
Badge: "Most Popular"

**Team**
```
$99 / month (5 seats)
$79/month billed annually
────────────────────────
Everything in Pro, plus:
✓ Audit trail (365-day retention)
✓ Shared team contexts
✓ Policy enforcement
✓ Multi-cluster cost aggregation
✓ Slack audit notifications
✓ Team admin dashboard
✓ 24h support SLA

[Start Team Trial →]
```

**Enterprise**
```
$599 / cluster / month
Volume pricing available
────────────────────────
Everything in Team, plus:
✓ Self-healing automation (kcli autoheal)
✓ Incident escalation (PagerDuty, Jira)
✓ Compliance reports (SOC2, PCI-DSS, CIS)
✓ GPU resource management
✓ SSO/SAML integration
✓ Air-gapped deployment
✓ Dedicated Slack channel
✓ 4h support SLA

[Contact Sales →]
```

**FAQ section (collapsible):**
- "Is the CLI really free forever?"
- "What happens when my trial ends?"
- "Can I use my own AI API keys on the free tier?"
- "How does cluster pricing work for Enterprise?"
- "Do you offer academic/non-profit discounts?"
- "Is there a self-hosted option for Pro/Team?"

---

### 4.4 /docs — Documentation

**Structure:**
```
docs.kubilitics.com (or kubilitics.com/docs)
├── Getting Started
│   ├── Installation (Desktop, Helm, kcli binary)
│   ├── Your first cluster connection
│   ├── kcli quick start
│   └── Migrating from kubectl/k9s/Lens
├── kcli Reference
│   ├── Command Index (all 89+ commands)
│   ├── Configuration (kcli config)
│   ├── AI providers setup
│   ├── Plugin system
│   └── CI/CD integration
├── Web UI / Desktop
│   ├── Overview
│   ├── Resource browser
│   ├── Topology view
│   ├── Logs viewer
│   └── Settings
├── AI Features
│   ├── Why/Fix/Suggest commands
│   ├── Provider configuration
│   ├── AI cost tracking
│   └── Custom AI endpoints
├── Pro Features
│   ├── Cost intelligence
│   ├── Security scanning
│   ├── Predictive analytics
│   └── Prometheus integration
├── Team/Enterprise
│   ├── Audit trail setup
│   ├── SSO configuration
│   ├── Policy enforcement
│   └── Incident escalation
└── API Reference
    ├── REST API
    ├── WebSocket streams
    └── Plugin development
```

**Doc site tech:** Recommend **Docusaurus 3** (open source, React-based, excellent search with Algolia DocSearch). Alternatively **Starlight** (Astro-based, newer, faster).

---

### 4.5 /blog — Content Hub

**Purpose:** SEO, authority, community. Engineers search for Kubernetes problems — blog posts pull them in.

**Blog structure:**
- Categories: Tutorials, Engineering, Deep Dives, Releases, Community
- Author bylines with photos
- Reading time estimate
- Social sharing

**Launch blog posts (write before launch):**

1. **"Why we built Kubilitics"** (Founder story)
   - The tool fragmentation problem
   - Why a "Kubernetes OS" vs another dashboard
   - What open source means to us

2. **"kcli: The kubectl replacement that does AI too"** (Tutorial)
   - Install guide
   - 10 commands that replace 4 tools
   - The safety model explained

3. **"We analyzed 1,000 Kubernetes clusters. Here's what we found."** (Research)
   - Average resource utilization: 23% (massive waste)
   - Most common failure modes
   - Cost savings opportunity data

4. **"Why the Kubernetes Dashboard was deprecated (and what to use instead)"** (SEO)
   - Targets searches for "kubernetes dashboard deprecated"
   - Positions Kubilitics as the obvious alternative

5. **"Kubernetes cost optimization in 2026: What actually works"** (SEO)
   - Targets searches for "kubernetes cost optimization"
   - Positions kcli cost commands

6. **"Building a Kubernetes tool in Go: lessons from 89 commands"** (Engineering)
   - Technical deep dive into kcli architecture
   - Attracts contributors, engineers

7. **"Bubble Tea TUI in production: building kcli ui"** (Engineering)
   - Technical post on the terminal UI
   - Attracts Go engineers, potential contributors

---

## 5. Content Strategy

### 5.1 Hero Copy — Final Options

**Headline Option A:**
```
Your Kubernetes Command Center
```
Subheadline:
```
kubectl · kubens · kubectx · k9s · stern · AI · dashboard.
One platform. Free and open source.
```

**Headline Option B:**
```
One Platform.
Seven Tools. Zero Compromise.
```
Subheadline:
```
Kubilitics replaces your fragmented Kubernetes toolchain
with a unified operating environment — CLI, UI, and AI.
```

**Headline Option C:**
```
Kubernetes is complex.
Your tooling shouldn't be.
```
Subheadline:
```
One binary replaces kubectl, kubectx, kubens, k9s, and stern.
One app replaces every Kubernetes dashboard you've tried.
```

**Recommendation:** Option A for the primary test. Run Option C against it 30 days post-launch.

### 5.2 Feature Section Copy

**Section header:** "Everything. Unified."
**Section intro:** "Not a dashboard. Not a CLI wrapper. A complete Kubernetes operating environment with a web UI, desktop app, CLI, and AI layer — all sharing the same data, all working together."

**Individual feature copy:**

"Topology First"
> "See your cluster as a living relationship graph. Pods, services, deployments, ingresses — connected, colored by health status, searchable. The visual your architecture diagram never was."

"kcli — The Last CLI You'll Need"
> "89+ commands. Zero dependencies. The ergonomics kubectl should have had. Add AI and you have a senior SRE in your terminal."

"AI at the Core"
> "kcli why tells you the root cause. kcli fix writes the patch. kcli suggest finds the waste. AI works with your existing providers — OpenAI, Anthropic, Ollama, or your own endpoint."

"Cost Intelligence"
> "Kubecost charges $199/month for what kcli cost overview gives you in one command. Know exactly what you're spending, per namespace, per workload, today."

"Security Scanning"
> "CVE detection. RBAC analysis. Privilege escalation risks. A security score from 1-100. kcli security scan in under 10 seconds — no separate Wiz account required."

### 5.3 CTA Copy Strategy

| Page Section | Primary CTA | Secondary CTA |
|-------------|------------|--------------|
| Hero | "Download Free →" | "View on GitHub ★" |
| Feature grid | "See All Features →" | — |
| Comparison table | "Switch to Kubilitics →" | "See Pricing" |
| Terminal demo | "Try it yourself →" | — |
| Deployment modes | "Download for macOS" | "Linux / Windows" |
| Pricing | "Start Free Trial →" | "Contact Sales" |
| /kcli page | "brew install kcli" (copyable) | "Read Docs →" |
| Blog posts | "Try kcli Free →" | "Star on GitHub" |

---

## 6. Visual Design System

### 6.1 Component Specifications

**Glass Card:**
```css
.glass-card {
  background: rgba(20, 33, 61, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(50, 108, 229, 0.25);
  box-shadow: 0 8px 32px rgba(50, 108, 229, 0.12);
  transform: translateY(-2px);
}
```

**Terminal Window:**
```css
.terminal {
  background: #0A0F1E;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  padding: 24px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.4),
              0 0 0 1px rgba(255,255,255,0.05);
}
/* Traffic lights */
.terminal::before {
  content: '● ● ●';
  color: transparent;
  text-shadow:
    -24px 0 0 #FF5F56,
     0px  0 0 #FFBD2E,
     24px 0 0 #27C93F;
}
```

**Primary Button:**
```css
.btn-primary {
  background: #326CE5;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: #2558D9;
  box-shadow: 0 8px 20px rgba(50, 108, 229, 0.35);
  transform: translateY(-1px);
}
```

**Badge:**
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid rgba(50, 108, 229, 0.4);
  background: rgba(50, 108, 229, 0.10);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #93B4F5;
}
```

**Comparison Table:**
```css
.comparison-table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
}
.comparison-table th.kubilitics-col {
  background: rgba(50, 108, 229, 0.15);
  border-left: 2px solid #326CE5;
  border-right: 2px solid #326CE5;
}
.comparison-table td.check {
  color: #6EF09E;  /* emerald */
  font-size: 18px;
}
.comparison-table td.cross {
  color: rgba(255,255,255,0.25);
  font-size: 18px;
}
```

### 6.2 Animations

**Scroll entrance:**
```javascript
// Use Framer Motion or Intersection Observer
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
```

**Staggered grid entrance:**
```javascript
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}
```

**Terminal typewriter:**
```javascript
// Implement with a typed.js-style hook or custom useEffect
// Sequence: type command → show output → pause → next command
// Speed: ~50ms per character for commands, instant for output
// Cursor: blinking block cursor
```

**Hero background mesh:**
```css
@keyframes meshDrift {
  0%   { background-position: 0% 0%; }
  50%  { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
.hero-bg {
  background: radial-gradient(ellipse at 20% 50%, rgba(50,108,229,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(110,240,158,0.06) 0%, transparent 50%),
              hsl(221, 39%, 8%);
  animation: meshDrift 20s ease infinite;
}
```

### 6.3 Screenshots / Assets to Create

These are the key visual assets that must be created for launch. Prioritized by impact:

**Priority 1 (Hero):**
1. Hero product screenshot — full platform view (cluster dashboard + terminal panel)
2. kcli terminal animation — recorded asciinema or CSS animation
3. Topology graph screenshot — showing service mesh of 15+ services

**Priority 2 (Feature sections):**
4. Cost overview screenshot — kcli cost overview output
5. Security scan screenshot — kcli security scan with score
6. RBAC analysis screenshot — kcli rbac analyze output
7. Comparison table visual — designed version of the text table
8. Deployment modes visual — three icons for web/desktop/CLI

**Priority 3 (Social proof / conversion):**
9. Testimonial card design — 4 cards with persona photos (use realistic placeholder avatars)
10. GitHub stats live widget — stars/forks/contributors
11. Download stats badge — "X engineers already using kcli"

**Asset format requirements:**
- All screenshots: 2x/Retina PNG, dark background, maximum 200KB optimized
- Animated demos: WebP animated or MP4 with autoplay/muted (not GIF)
- SVG icons: all feature icons as SVGs, consistent 24px grid

---

## 7. Technical Implementation

### 7.1 Recommended Stack

**Framework:** Next.js 14+ (App Router)

**Why Next.js over Astro:**
- Dynamic content (GitHub star count, pricing display, blog)
- Server components for performance without client JS
- Image optimization built-in
- Vercel deployment for zero-config CI/CD
- API routes for contact forms, newsletter signup
- Strong ecosystem for shadcn/ui + Tailwind

**Core dependencies:**
```json
{
  "next": "14.x",
  "react": "18.x",
  "tailwindcss": "3.x",
  "@shadcn/ui": "latest",
  "framer-motion": "11.x",
  "next-mdx-remote": "^5",
  "shiki": "^1",        // code highlighting in docs/blog
  "gray-matter": "^4"   // frontmatter parsing for blog
}
```

**Component library:** shadcn/ui (already used in kubilitics-frontend — consistency)

**Deployment:** Vercel (recommended) or self-hosted via Docker + Nginx

**Analytics:** Plausible (privacy-first, no cookie banner needed for GDPR) or Fathom

**Blog:** MDX files in `/content/blog/` — deploy is a git push

### 7.2 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | >95 | Chrome DevTools |
| Core Web Vitals LCP | <2.5s | PageSpeed Insights |
| Core Web Vitals CLS | <0.1 | PageSpeed Insights |
| Core Web Vitals FID/INP | <200ms | PageSpeed Insights |
| Total JS bundle (homepage) | <120KB gzip | next build |
| Time to Interactive | <3s on 3G | WebPageTest |
| First Contentful Paint | <1.5s | PageSpeed Insights |

### 7.3 Project Structure

```
kubilitics-website/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Homepage
│   │   ├── features/page.tsx
│   │   ├── kcli/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── about/page.tsx
│   │   └── vs/
│   │       ├── lens/page.tsx
│   │       └── k9s/page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Blog post
│   ├── docs/
│   │   └── [[...slug]]/page.tsx  # Docs (or redirect to docs.kubilitics.com)
│   ├── layout.tsx                # Root layout with nav + footer
│   └── globals.css
├── components/
│   ├── nav/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Comparison.tsx
│   │   ├── Terminal.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── ui/                       # shadcn components
│   └── Terminal/
│       ├── TerminalWindow.tsx
│       └── useTypewriter.ts
├── content/
│   └── blog/
│       ├── why-we-built-kubilitics.mdx
│       └── kcli-the-last-kubernetes-cli.mdx
├── public/
│   ├── images/
│   ├── og/                       # Open Graph images
│   └── downloads/                # Binary download redirects
└── lib/
    ├── github.ts                 # GitHub star count API
    └── analytics.ts
```

---

## 8. SEO Strategy

### 8.1 Target Keywords

**Primary (high intent, high volume):**
| Keyword | Search Volume | Difficulty | Landing Page |
|---------|-------------|------------|-------------|
| kubernetes dashboard | 40K/mo | High | Homepage |
| kubectl alternative | 12K/mo | Medium | /kcli |
| kubernetes cli tool | 8K/mo | Medium | /kcli |
| kubernetes monitoring | 25K/mo | High | /features |
| kubernetes cost optimization | 6K/mo | Medium | /features#cost |

**Secondary (lower volume, higher conversion):**
| Keyword | Search Volume | Difficulty | Landing Page |
|---------|-------------|------------|-------------|
| kubernetes dashboard deprecated | 3K/mo | Low | /blog/... |
| kubectx alternative | 2K/mo | Low | /kcli |
| k9s alternative | 1.5K/mo | Low | /vs/k9s |
| lens kubernetes alternative | 1K/mo | Low | /vs/lens |
| kubernetes rbac analysis tool | 800/mo | Low | /features#security |
| kubernetes cost visibility | 600/mo | Low | /features#cost |

**Long-tail (blog SEO targets):**
- "why kubernetes pod crashloopbackoff" → blog post + kcli why command
- "kubernetes OOMKilled fix" → blog post + kcli fix command
- "kubernetes resource limits best practices" → blog post + kcli security scan
- "kubernetes context switching" → kcli ctx documentation

### 8.2 On-Page SEO Requirements

**Homepage:**
```html
<title>Kubilitics — The Kubernetes Operating System</title>
<meta name="description" content="Kubilitics replaces kubectl, k9s, kubectx,
kubens, stern, and Lens with one unified platform. CLI + Web UI + AI.
Free and open source." />
```

**Open Graph (critical for Twitter/LinkedIn sharing):**
```html
<meta property="og:title" content="Kubilitics — Your Kubernetes Command Center" />
<meta property="og:description" content="One platform for every Kubernetes workflow.
CLI, web UI, desktop app, and AI — unified." />
<meta property="og:image" content="https://kubilitics.com/og/home.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="twitter:card" content="summary_large_image" />
```

**Structured data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Kubilitics",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "macOS, Linux, Windows",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Kubernetes Operating System — CLI, web UI, and AI unified"
}
```

### 8.3 Technical SEO

- sitemap.xml: auto-generated by Next.js
- robots.txt: allow all, disallow /api/
- Canonical URLs on all pages
- Hreflang tags if/when i18n is added
- 301 redirects: kubilitics.com → www.kubilitics.com (or reverse, consistent)
- Core Web Vitals green across all pages
- Image alt text on all images
- Structured heading hierarchy (one H1 per page)

---

## 9. Launch Checklist

### 9.1 Pre-Launch (2 weeks before)

**Content:**
- [ ] All 7 page designs approved by stakeholders
- [ ] All copywriting finalized (all sections, all pages)
- [ ] 3 blog posts written, edited, formatted
- [ ] Hero product screenshots created and optimized
- [ ] Terminal animation recorded or coded
- [ ] Comparison table data verified (check competitor sites)
- [ ] Testimonials collected (or placeholder cards designed)
- [ ] FAQ content written for /pricing page

**Technical:**
- [ ] Domain kubilitics.com configured (DNS, SSL)
- [ ] Vercel project connected to repository
- [ ] Environment variables set (GitHub API token for star count)
- [ ] Analytics (Plausible) configured
- [ ] Error tracking (Sentry) configured
- [ ] Contact form/email routing working
- [ ] Newsletter signup connected (ConvertKit, Resend, etc.)
- [ ] Download links verified (all 3 platforms)
- [ ] GitHub Star button live count working

**SEO:**
- [ ] Meta titles/descriptions on every page
- [ ] Open Graph images created (1200×630) for all main pages
- [ ] sitemap.xml generated and submitted to Google Search Console
- [ ] robots.txt correct
- [ ] Structured data validated (schema.org)
- [ ] Core Web Vitals green (run PageSpeed Insights)

**Legal:**
- [ ] Privacy policy page
- [ ] Terms of service page
- [ ] Cookie policy (if using any tracking beyond Plausible)
- [ ] Open source license page

### 9.2 Launch Day

- [ ] Deploy to production (Vercel promote from preview)
- [ ] Verify all pages render correctly on mobile + desktop
- [ ] Verify all CTA buttons work (downloads, GitHub, docs)
- [ ] Post to Hacker News (Show HN: Kubilitics — Kubernetes OS, free and open source)
- [ ] Post to Reddit (r/kubernetes, r/devops, r/sre)
- [ ] Post to Twitter/X with product demo video
- [ ] Post to LinkedIn
- [ ] Email existing GitHub watchers/stargazers (if email list exists)
- [ ] Submit to product directories: Product Hunt, DevHunt, Untools

### 9.3 Post-Launch (Week 1)

- [ ] Monitor analytics — which pages get traffic, bounce rates
- [ ] Monitor GitHub issues for website bugs
- [ ] Read every piece of social feedback
- [ ] A/B test hero headline variant B
- [ ] Fix any Core Web Vitals issues flagged
- [ ] Submit remaining blog posts (1/week cadence)

---

## 10. Competitive Site Analysis

### What We're Beating

**lens.app:**
- Strength: Clean dark design, strong brand recognition, IDE framing
- Weakness: Enterprise-heavy, hard to understand pricing quickly, AI requires paid plan
- What we do better: Clearer CLI story, open source commitment, cost/security features in free/pro

**headlamp.dev:**
- Strength: CNCF-backed credibility, clean minimal UI
- Weakness: Very developer/contributor-focused, not engineer-workflow-focused
- What we do better: Complete platform story, CLI + UI + AI vs just UI

**k9scli.io:**
- Strength: Minimal, focused, loved by terminal users
- Weakness: No web UI, no team features, no AI, one audience only
- What we do better: Everything k9s does + GUI + AI + team features

**kubectx.dev (GitHub page):**
- No marketing site, just a GitHub README
- We win on first impression alone

**Key design decisions driven by competitive analysis:**
1. Dark mode first (like Lens, k9s) — engineers prefer dark
2. Screenshot-heavy (like Lens) — engineers need to see the product before installing
3. One-liner install in the hero (like k9s) — reduce friction to zero
4. Honest comparison table — engineers respect brands that are direct about trade-offs
5. Open source commitment visible immediately — key differentiator vs Lens's shift to closed

---

## Appendix: Page Copy Reference Card

### Navigation Copy
```
Features | kcli | Pricing | Docs | Blog
[GitHub ★ {count}]  [Download Free →]
```

### Hero Copy (Selected)
```
Headline:    Your Kubernetes Command Center
Sub:         kubectl · kubens · kubectx · k9s · stern · AI · dashboard.
             All in one unified platform. Free and open source.
CTA1:        Download Free →
CTA2:        View on GitHub ★
Micro-copy:  macOS · Linux · Windows  ·  No account required
```

### Section Headers
```
The Problem:       The Kubernetes Toolchain Tax
Features:          Everything. Unified.
Comparison:        Built for Engineers Who've Tried Everything Else
Demo:              See it in 60 seconds.
Deploy Modes:      Run It Your Way
Testimonials:      Engineers Who've Made the Switch
Open Source:       Open Source. For Real.
Final CTA:         Start in 30 seconds.
```

### Pricing Page
```
Headline:     Simple, Honest Pricing
Sub:          The CLI and UI are free. Pay for what saves you money.
Tiers:        Free · Pro ($29/mo) · Team ($99/5 seats) · Enterprise ($599/cluster)
```

### /kcli Page
```
Headline:     The Last Kubernetes CLI You'll Ever Need
Sub:          7-in-1: kubectl · kubens · kubectx · k9s · stern · helm · AI
Install:      brew install kubilitics/tap/kcli
```

### Footer Tagline
```
The Kubernetes Operating System.
Open source. Engineer-first.
```

---

*This document is the complete brief for kubilitics.com. A senior frontend developer + designer can execute this without additional clarification. All copy, structure, component specs, tech stack, SEO, and launch checklist are specified above. Update quarterly as the product evolves.*
