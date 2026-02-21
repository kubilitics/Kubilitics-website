# Kubilitics: Your Kubernetes Command Center ✦

[![GitHub Stars](https://img.shields.io/github/stars/kubilitics/kubilitics?style=social)](https://github.com/kubilitics/kubilitics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Kubilitics is the **Kubernetes Operating System** — a unified platform combining a beautiful Web UI, a native Desktop App (Tauri), and a powerful CLI (`kcli`) with AI-native diagnostics at its core.

This repository contains the source code for the official marketing website: [kubilitics.com](https://kubilitics.com).

## 🚀 Key Features

- **Topology-First Visualization**: Understand your cluster as an interactive relationship graph.
- **kcli — Unified CLI**: Replaces `kubectl`, `kubens`, `kubectx`, `k9s`, `stern`, and `helm` with one zero-dependency binary.
- **AI-Native Diagnostics**: Built-in AI troubleshooting with `kcli why` and automatic patching with `kcli fix`.
- **Cost & Security Visibility**: Namespace-level cost breakdown and security risk scoring integrated into your workflow.
- **Multi-Mode Deployment**: Run as a desktop app, in-cluster via Helm, or as a standalone CLI.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The website will be available at `http://localhost:5173`.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## 📂 Project Structure

```text
src/
├── components/   # Reusable UI components
├── lib/          # Utility functions and shared logic
├── pages/        # Main page components (e.g., WebsiteLanding.tsx)
├── App.tsx       # Root component
└── main.tsx      # Application entry point
```

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Built with ♥ by engineers for engineers. [Join our Discord](https://discord.gg/kubilitics) | [Follow us on X](https://x.com/kubilitics)
