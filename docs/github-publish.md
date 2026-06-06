# GitHub Publishing Guide

The repo is initialized and committed locally.

## Current Local Repo

- Path: `C:\Users\danth\Documents\Get a Job\dozuki-stack-fit-demo`
- Branch: `main`
- Commit message: `Build Dozuki stack fit demo`

## One-Time GitHub CLI Login

Codex installed GitHub CLI, but the browser auth flow did not expose the device code inside this session. Run this once in a normal PowerShell window:

```powershell
gh auth login --hostname github.com --git-protocol https --web --scopes repo
```

Choose GitHub.com, HTTPS, and browser login if prompted.

## Publish With GitHub CLI

From the repo folder:

```powershell
cd "C:\Users\danth\Documents\Get a Job\dozuki-stack-fit-demo"
gh repo create dozuki-stack-fit-demo --public --source . --remote origin --push
```

The included GitHub Actions workflow will build and deploy the frontend to GitHub Pages.

Expected public demo URL:

```text
https://<your-github-username>.github.io/dozuki-stack-fit-demo/
```

## If Pages Needs Manual Enablement

Go to the GitHub repo:

1. Settings
2. Pages
3. Build and deployment
4. Source: GitHub Actions

Then rerun the `Deploy Frontend Demo` workflow if needed.

