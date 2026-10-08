"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

{/* NAVBAR */}
<header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

    {/* Logo */}
    <a
      href="#home"
      className="text-lg font-bold tracking-tight"
    >
      DEEPAK<span className="text-[#8f78ff]">.V</span>
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-7 md:flex">

      <a
        href="#about"
        className="text-sm text-white/60 transition hover:text-white"
      >
        About
      </a>

      <a
        href="#work"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Work
      </a>

      <a
        href="#experience"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Experience
      </a>

      <a
        href="#architecture"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Architecture
      </a>

      <a
        href="#skills"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Skills
      </a>

      <a
        href="#certifications"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Certifications
      </a>

      <a
        href="#contact"
        className="text-sm text-white/60 transition hover:text-white"
      >
        Contact
      </a>

    </nav>

    {/* Desktop CTA */}
    <a
      href="#contact"
      className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-purple-400/40 hover:bg-white/[0.04] md:block"
    >
      Let's Talk
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      aria-label="Open navigation menu"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/[0.05] md:hidden"
      onClick={() => {
        const menu = document.getElementById("mobile-menu");

        if (menu) {
          menu.classList.toggle("hidden");
        }
      }}
    >
      <span className="text-xl">
        ☰
      </span>
    </button>

  </div>

  {/* Mobile Navigation */}
  <div
    id="mobile-menu"
    className="hidden border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden"
  >

    <nav className="flex flex-col gap-5">

      <a
        href="#about"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        About
      </a>

      <a
        href="#work"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Work
      </a>

      <a
        href="#experience"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Experience
      </a>

      <a
        href="#architecture"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Architecture
      </a>

      <a
        href="#skills"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Skills
      </a>

      <a
        href="#certifications"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Certifications
      </a>

      <a
        href="#contact"
        className="text-sm text-white/70 transition hover:text-white"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Contact
      </a>

      <a
        href="#contact"
        className="mt-2 inline-flex w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm text-white transition hover:bg-purple-500/20"
        onClick={() =>
          document.getElementById("mobile-menu")?.classList.add("hidden")
        }
      >
        Let's Talk
      </a>

    </nav>

  </div>
</header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        {/* Background glow */}
        <div className="absolute left-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="absolute right-[-150px] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="mx-auto w-full max-w-6xl px-6 pt-20">

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-7 flex items-center gap-3 text-sm text-white/50">

                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                Available for opportunities

              </div>

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9b86ff]">
                Hello, I'm
              </p>

              <h1 className="max-w-full text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[76px] xl:text-[86px]">

                Deepak

                <br />

                <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Vishwakarma
                </span>

              </h1>

              <div className="mt-8 flex flex-wrap gap-3 text-xl text-white/70 md:text-2xl">

                <span>Cloud & DevOps Engineer</span>

                <span className="text-white/20">/</span>

                <span>Python Developer</span>

              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
                I build cloud-native applications, automate development
                workflows and turn ideas into reliable, production-ready
                software.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#work"
                  className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-purple-100"
                >
                  View My Work

                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm transition hover:bg-white/5"
                >
                  Let's Connect
                </a>

              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-10 flex gap-5">

                <a
                  href="https://github.com/Imdpkk"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/40 transition hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/40 transition hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>

                <a
                  href="mailto:deepvishwakarma.2114@gmail.com"
                  className="text-white/40 transition hover:text-white"
                >
                  <Mail size={20} />
                </a>

              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >

              <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">

                {/* Terminal header */}
                <div className="mb-8 flex items-center justify-between">

                  <div className="flex gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400/70" />

                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />

                    <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  </div>

                  <span className="font-mono text-xs text-white/30">
                    deepak@portfolio
                  </span>

                </div>

                {/* Terminal */}
                <div className="font-mono text-sm leading-8">

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">deepak</span> = {"{"}
                  </p>

                  <p className="pl-6">
                    <span className="text-white/40">role:</span>{" "}
                    <span className="text-green-300">
                      "Cloud Engineer"
                    </span>
                  </p>

                  <p className="pl-6">
                    <span className="text-white/40">focus:</span>{" "}
                    <span className="text-green-300">
                      "DevOps"
                    </span>
                  </p>

                  <p className="pl-6">
                    <span className="text-white/40">language:</span>{" "}
                    <span className="text-green-300">
                      "Python"
                    </span>
                  </p>

                  <p className="pl-6">
                    <span className="text-white/40">cloud:</span>{" "}
                    <span className="text-green-300">
                      "AWS"
                    </span>
                  </p>

                  <p className="pl-6">
                    <span className="text-white/40">status:</span>{" "}
                    <span className="text-green-300">
                      "Building"
                    </span>
                  </p>

                  <p>{"};"}</p>

                </div>

                {/* Skill cards */}
                <div className="mt-10 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-white/35">
                      Cloud
                    </p>

                    <p className="mt-1 font-semibold">
                      AWS
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-white/35">
                      Automation
                    </p>

                    <p className="mt-1 font-semibold">
                      CI/CD
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-white/35">
                      Backend
                    </p>

                    <p className="mt-1 font-semibold">
                      Python
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-white/35">
                      Containers
                    </p>

                    <p className="mt-1 font-semibold">
                      Docker
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



{/* ABOUT */}
<section
  id="about"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* HEADER */}
    <div className="max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        01 / About
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        Building with purpose.
      </h2>

    </div>

    {/* CONTENT */}
    <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

      {/* LEFT */}
      <div>

        <p className="text-xl leading-9 text-white/60">
          I'm a Computer Science graduate focused on Cloud,
          DevOps and Python development. I enjoy building
          cloud-native applications, automating deployment
          workflows and turning ideas into reliable software.
        </p>

        <p className="mt-6 text-lg leading-8 text-white/40">
          My experience includes working with AWS infrastructure,
          CI/CD pipelines, backend development and modern web
          technologies. I'm particularly interested in building
          scalable systems and improving the way software is
          developed and deployed.
        </p>

      </div>

      {/* RIGHT - QUICK FACTS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

        {/* EDUCATION */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Education
          </p>

          <p className="mt-3 font-semibold">
            B.Tech — Computer Science
          </p>

          <p className="mt-2 text-sm text-white/40">
            AKTU · 2022 — 2026
          </p>

        </div>

        {/* CGPA */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Academic
          </p>

          <p className="mt-3 text-3xl font-bold">
            8.04
            <span className="ml-2 text-sm font-normal text-white/30">
              / 10 CGPA
            </span>
          </p>

        </div>

        {/* FOCUS */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Focus
          </p>

          <p className="mt-3 font-semibold">
            Cloud · DevOps · Python
          </p>

        </div>

      </div>

    </div>

  </div>
</section>




{/* PROJECTS */}
<section
  id="work"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* SECTION HEADER */}
    <div className="mb-20 max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        02 / Selected Work
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
        Things I've built.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/45">
        A selection of projects where I combined software engineering,
        cloud infrastructure, automation and AI to build practical
        solutions.
      </p>

    </div>

    {/* PROJECT 01 */}
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] transition duration-500 hover:border-purple-400/30 hover:bg-white/[0.04]"
    >

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* PROJECT INFO */}
        <div className="flex flex-col justify-between p-8 md:p-12">

          <div>

            <div className="flex items-center justify-between">

              <span className="text-sm font-mono text-purple-400">
                01
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                Cloud / AWS
              </span>

            </div>

            <h3 className="mt-10 text-3xl font-bold md:text-4xl">
              Serverless Task Tracker
            </h3>

            <p className="mt-6 leading-8 text-white/45">
              A secure cloud-based task management application built
              using AWS serverless services with authentication,
              API integration, database storage and automated deployment.
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "AWS S3",
                "CloudFront",
                "Cognito",
                "API Gateway",
                "Lambda",
                "DynamoDB",
                "GitHub Actions",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://github.com/Imdpkk/cloud-task-tracker-aws"
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition"
            >
              GitHub
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
              />
            </a>

          </div>

        </div>

        {/* PROJECT VISUAL */}
        <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-60 transition duration-500 group-hover:opacity-100" />

          <div className="absolute inset-8 rounded-[24px] border border-white/10 bg-[#0c0c0c] p-6 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <span className="font-mono text-xs text-white/25">
                AWS / serverless
              </span>

            </div>

            <div className="space-y-4 font-mono text-sm">

              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <p className="text-xs text-white/30">
                  FRONTEND
                </p>
                <p className="mt-2 text-white/70">
                  S3 + CloudFront
                </p>
              </div>

              <div className="flex justify-center text-white/20">
                ↓
              </div>

              <div className="rounded-xl border border-purple-400/20 bg-purple-400/[0.04] p-4">
                <p className="text-xs text-purple-300/60">
                  API
                </p>
                <p className="mt-2 text-white/70">
                  API Gateway + Lambda
                </p>
              </div>

              <div className="flex justify-center text-white/20">
                ↓
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
                <p className="text-xs text-cyan-300/60">
                  DATABASE
                </p>
                <p className="mt-2 text-white/70">
                  DynamoDB
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.article>


{/* This whole section contains the project cards */}

    {/* PROJECT 02 */}
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.04]"
    >

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

        {/* VISUAL */}
        <div className="relative order-2 min-h-[420px] overflow-hidden border-t border-white/10 lg:order-1 lg:border-r lg:border-t-0">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-60 transition duration-500 group-hover:opacity-100" />

          <div className="absolute inset-8 rounded-[24px] border border-white/10 bg-[#0c0c0c] p-6">

            <div className="mb-8 flex items-center justify-between">

              <span className="font-mono text-xs text-white/25">
                support-crm
              </span>

              <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs text-green-300/70">
                AI Active
              </span>

            </div>

            <div className="space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs text-white/30">
                  TICKET
                </p>

                <p className="mt-2 font-semibold">
                  Payment issue with account
                </p>

                <div className="mt-4 flex gap-2">

                  <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                    Billing
                  </span>

                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">
                    High confidence
                  </span>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">
                    Backend
                  </p>
                  <p className="mt-2 font-semibold">
                    FastAPI
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">
                    Frontend
                  </p>
                  <p className="mt-2 font-semibold">
                    React
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* INFO */}
        <div className="order-1 flex flex-col justify-between p-8 md:p-12 lg:order-2">

          <div>

            <div className="flex items-center justify-between">

              <span className="text-sm font-mono text-cyan-400">
                02
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                AI / Full Stack
              </span>

            </div>

            <h3 className="mt-10 text-3xl font-bold md:text-4xl">
              AI Customer Support CRM
            </h3>

            <p className="mt-6 leading-8 text-white/45">
              A full-stack customer support platform with AI-powered
              ticket classification, REST APIs, database integration
              and a modern React dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "FastAPI",
                "React",
                "Python",
                "AI",
                "Docker",
                "SQLite",
                "Vercel",
                "Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-10">

            <a
              href="https://github.com/Imdpkk/support-crm"
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium"
            >
              GitHub

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
              />

            </a>

          </div>

        </div>

      </div>

    </motion.article>

    {/* PROJECT 03 + 04 */}
    <div className="grid gap-8 lg:grid-cols-2">

      {/* FACE RECOGNITION */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:border-purple-400/30 hover:bg-white/[0.04] md:p-10"
      >

        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-purple-400">
            03
          </span>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            Django / AWS
          </span>

        </div>

        <h3 className="mt-10 text-3xl font-bold">
          Face Recognition
          <br />
          Attendance
        </h3>

        <p className="mt-6 leading-8 text-white/45">
          A Django-based attendance system using face recognition
          with cloud deployment and AWS storage.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {[
            "Python",
            "Django",
            "OpenCV",
            "AWS EC2",
            "AWS S3",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
            >
              {tech}
            </span>
          ))}

        </div>

        <a
          href="https://github.com/Imdpkk/face-attendance-django"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm"
        >
          View Project
          <ArrowUpRight size={16} />
        </a>

      </motion.article>

      {/* VELORA */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.04] md:p-10"
      >

        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-cyan-400">
            04
          </span>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            AI / Web
          </span>

        </div>

        <h3 className="mt-10 text-3xl font-bold">
          Velora Style 14
        </h3>

        <p className="mt-6 leading-8 text-white/45">
          An AI-powered fashion experience combining product
          discovery, interactive UI and an AI personal stylist.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {[
            "Python",
            "Flask",
            "AI",
            "Gemini",
            "JavaScript",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-10 flex gap-5">

          <a
            href="https://velora-xi-woad.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm"
          >
            Live Website
            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://github.com/Imdpkk/Velora"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>

        </div>

      </motion.article>

    </div>

  </div>
</section>



{/* EXPERIENCE */}
<section
  id="experience"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* HEADER */}
    <div className="mb-20">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        03 / Experience
      </p>

      <h2 className="mt-6 text-5xl font-bold md:text-6xl">
        Where I've worked.
      </h2>

    </div>

    {/* EXPERIENCE CARD */}
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[30px] border border-white/10 bg-white/[0.025] p-8 md:p-12"
    >

      {/* TOP */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        <div>

          <p className="text-sm font-mono text-purple-400">
            Cloud Engineering Intern
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            HEPro.in
          </h3>

        </div>

        <div className="text-left md:text-right">

          <p className="text-sm text-white/50">
            Dec 2025 — Jan 2026
          </p>

          <p className="mt-2 text-sm text-white/30">
            Cloud / DevOps
          </p>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="my-10 h-px bg-white/10" />

      {/* DESCRIPTION */}
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

        <div>

          <p className="leading-8 text-white/50">
            Worked on cloud infrastructure and deployment automation
            while building and deploying a secure serverless Task
            Tracker application using AWS services.
          </p>

          {/* RESPONSIBILITIES */}
          <div className="mt-8 space-y-5">

            <div className="flex gap-4">

              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

              <p className="leading-7 text-white/55">
                Deployed a serverless Task Tracker using
                <span className="text-white/80">
                  {" "}S3, CloudFront, Cognito, API Gateway,
                  Lambda and DynamoDB.
                </span>
              </p>

            </div>

            <div className="flex gap-4">

              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

              <p className="leading-7 text-white/55">
                Configured secure authentication and API access
                using Amazon Cognito and API Gateway.
              </p>

            </div>

            <div className="flex gap-4">

              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

              <p className="leading-7 text-white/55">
                Built GitHub Actions CI/CD workflows to automate
                application deployment.
              </p>

            </div>

            <div className="flex gap-4">

              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

              <p className="leading-7 text-white/55">
                Worked with cloud-hosted frontend, backend APIs
                and managed database infrastructure.
              </p>

            </div>

          </div>

        </div>

        {/* TECHNOLOGY STACK */}
        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Technologies
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {[
              "AWS",
              "S3",
              "CloudFront",
              "Cognito",
              "API Gateway",
              "Lambda",
              "DynamoDB",
              "GitHub Actions",
              "CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/55"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* CLOUD STACK */}
          <div className="mt-10 rounded-2xl border border-purple-400/15 bg-purple-400/[0.03] p-6">

            <p className="text-xs uppercase tracking-[0.2em] text-purple-300/60">
              Cloud Stack
            </p>

            <p className="mt-4 font-mono text-sm leading-7 text-white/55">
              S3 → CloudFront
              <br />
              ↓
              <br />
              Cognito → API Gateway
              <br />
              ↓
              <br />
              Lambda → DynamoDB
            </p>

          </div>

        </div>

      </div>

    </motion.article>

  </div>
</section>






{/* CLOUD ARCHITECTURE */}
<section
  id="architecture"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* HEADER */}
    <div className="max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        04 / Cloud Architecture
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        From idea to cloud.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/45">
        A look at how I designed and deployed a secure serverless
        application using AWS managed services.
      </p>

    </div>

    {/* ARCHITECTURE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-6 md:p-10"
    >

      {/* TOP LABEL */}
      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="font-mono text-sm text-purple-400">
            SERVERLESS TASK TRACKER
          </p>

          <p className="mt-2 text-sm text-white/35">
            AWS Architecture
          </p>

        </div>

        <span className="rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-xs text-green-300/70">
          Production Architecture
        </span>

      </div>

      {/* ARCHITECTURE FLOW */}
      <div className="grid gap-4 md:grid-cols-5 md:items-center">

        {/* USER */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
            👤
          </div>

          <p className="mt-4 font-semibold">
            User
          </p>

          <p className="mt-2 text-xs text-white/30">
            Browser
          </p>

        </div>

        {/* ARROW */}
        <div className="hidden text-center text-white/20 md:block">
          →
        </div>

        {/* FRONTEND */}
        <div className="rounded-2xl border border-orange-400/20 bg-orange-400/[0.04] p-6 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
            ☁
          </div>

          <p className="mt-4 font-semibold">
            S3 + CloudFront
          </p>

          <p className="mt-2 text-xs text-white/30">
            Frontend & CDN
          </p>

        </div>

        {/* ARROW */}
        <div className="hidden text-center text-white/20 md:block">
          →
        </div>

        {/* API */}
        <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] p-6 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10">
            API
          </div>

          <p className="mt-4 font-semibold">
            API Gateway
          </p>

          <p className="mt-2 text-xs text-white/30">
            API Layer
          </p>

        </div>

      </div>

      {/* DOWN ARROW */}
      <div className="my-5 text-center text-white/20">
        ↓
      </div>

      {/* BACKEND */}
      <div className="grid gap-4 md:grid-cols-3">

        {/* COGNITO */}
        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-blue-300/60">
            Authentication
          </p>

          <h3 className="mt-3 font-semibold">
            Amazon Cognito
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/35">
            User authentication and secure access control.
          </p>

        </div>

        {/* LAMBDA */}
        <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/60">
            Compute
          </p>

          <h3 className="mt-3 font-semibold">
            AWS Lambda
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/35">
            Serverless backend functions handling application logic.
          </p>

        </div>

        {/* DYNAMODB */}
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">

          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
            Database
          </p>

          <h3 className="mt-3 font-semibold">
            DynamoDB
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/35">
            Managed NoSQL database for task storage.
          </p>

        </div>

      </div>

      {/* CI/CD */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Deployment
            </p>

            <h3 className="mt-2 font-semibold">
              GitHub Actions CI/CD
            </h3>

          </div>

          <div className="font-mono text-sm text-white/40">
            GitHub → Build → Deploy → AWS
          </div>

        </div>

      </div>

    </motion.div>

  </div>
</section>


{/* SECURITY & OPERATIONS */}
<div className="mt-6 grid gap-4 md:grid-cols-3">

  <div className="rounded-2xl border border-green-400/20 bg-green-400/[0.03] p-5">
    <p className="text-xs uppercase tracking-[0.2em] text-green-300/60">
      Security
    </p>

    <h3 className="mt-3 font-semibold">
      IAM & HTTPS
    </h3>

    <p className="mt-2 text-sm leading-6 text-white/35">
      Controlled AWS permissions and encrypted HTTPS traffic.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
      Delivery
    </p>

    <h3 className="mt-3 font-semibold">
      Automated Deployment
    </h3>

    <p className="mt-2 text-sm leading-6 text-white/35">
      GitHub Actions automates the application deployment workflow.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
      Architecture
    </p>

    <h3 className="mt-3 font-semibold">
      Serverless Design
    </h3>

    <p className="mt-2 text-sm leading-6 text-white/35">
      Managed AWS services reduce infrastructure management overhead.
    </p>
  </div>

</div>



{/* HOW I BUILD */}
<section
  id="process"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* HEADER */}
    <div className="max-w-3xl">

      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        05 / How I Build
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        From development to deployment.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/45">
        A practical engineering workflow focused on building reliable
        applications, automating delivery, and continuously improving
        the system.
      </p>

    </div>

    {/* PROCESS */}
    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {/* STEP 01 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-purple-400">
            01
          </span>

          <span className="text-xs text-white/20">
            PLAN
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Understand
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Break down requirements, identify constraints, and define
          the architecture before implementation.
        </p>

      </motion.div>

      {/* STEP 02 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-purple-400">
            02
          </span>

          <span className="text-xs text-white/20">
            BUILD
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Develop
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Build backend services, APIs, and applications using
          Python, FastAPI, Django, and modern web technologies.
        </p>

      </motion.div>

      {/* STEP 03 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-cyan-400">
            03
          </span>

          <span className="text-xs text-white/20">
            CONTAINERIZE
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Package
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Create reproducible application environments using
          Docker and keep application components isolated.
        </p>

      </motion.div>

      {/* STEP 04 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-purple-400">
            04
          </span>

          <span className="text-xs text-white/20">
            AUTOMATE
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Automate
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Use Git, GitHub Actions, and CI/CD pipelines to automate
          testing and application deployment workflows.
        </p>

      </motion.div>

      {/* STEP 05 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-cyan-400">
            05
          </span>

          <span className="text-xs text-white/20">
            DEPLOY
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Deliver
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Deploy applications using cloud and modern hosting
          platforms such as AWS, Vercel, and Render.
        </p>

      </motion.div>

      {/* STEP 06 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]"
      >
        <div className="flex items-center justify-between">

          <span className="font-mono text-sm text-purple-400">
            06
          </span>

          <span className="text-xs text-white/20">
            IMPROVE
          </span>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Iterate
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/40">
          Improve security, reliability, performance, and
          maintainability through continuous iteration.
        </p>

      </motion.div>

    </div>

    {/* ENGINEERING PRINCIPLES */}
    <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-7">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70">
            Engineering mindset
          </p>

          <p className="mt-3 text-xl font-semibold">
            Build → Automate → Deploy → Improve
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            I focus on practical solutions that are maintainable,
            secure, and ready to evolve as requirements change.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />

          <span className="text-xs text-white/40">
            Continuous improvement
          </span>
        </div>

      </div>

    </div>

  </div>
</section>



{/* SKILLS */}
<section
  id="skills"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Section Header */}
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        05 / Skills
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        The stack I work with.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/45">
        Technologies and tools I use to build applications, automate
        infrastructure, and deploy reliable cloud solutions.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="mt-16 grid gap-5 md:grid-cols-2">

      {/* CLOUD & DEVOPS */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Cloud & DevOps
          </h3>

          <span className="text-xs text-purple-400">
            01
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-white/40">
          Cloud infrastructure, deployment automation and CI/CD.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Linux",
            "GitHub Actions",
            "CI/CD",
            "CloudFront",
            "Lambda",
            "API Gateway",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:border-purple-400/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* PYTHON & DEVELOPMENT */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Development
          </h3>

          <span className="text-xs text-purple-400">
            02
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-white/40">
          Backend development, APIs and modern web applications.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Python",
            "Django",
            "FastAPI",
            "Flask",
            "C",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:border-purple-400/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* DATABASES */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Databases
          </h3>

          <span className="text-xs text-cyan-400">
            03
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-white/40">
          Relational, NoSQL and cloud-native data storage.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "MySQL",
            "DynamoDB",
            "SQL",
            "SQLAlchemy",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:border-cyan-400/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS & WORKFLOW */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Tools & Workflow
          </h3>

          <span className="text-xs text-purple-400">
            04
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-white/40">
          Development tools, collaboration and engineering workflow.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
            "Render",
            "REST APIs",
            "Agile",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:border-purple-400/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Highlight */}
    <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm font-medium text-purple-300">
            Current focus
          </p>

          <p className="mt-2 text-xl font-semibold">
            Cloud • DevOps • Python
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
            Building secure cloud infrastructure, automating deployment
            pipelines, and developing scalable backend applications.
          </p>
        </div>

        <div className="flex gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
          <span className="text-xs text-white/40">
            Always learning
          </span>
        </div>

      </div>
    </div>

  </div>
</section>



{/* CERTIFICATIONS */}
<section
  id="certifications"
  className="border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Header */}
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        06 / Certifications
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
        Learning beyond the classroom.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/45">
        Continuous learning across cloud computing, computer science,
        DevOps, and modern software engineering.
      </p>
    </div>

    {/* Certification Cards */}
    <div className="mt-16 grid gap-5 md:grid-cols-2">

      {/* CS50 */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
              Computer Science
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              CS50x — Introduction to Computer Science
            </h3>

            <p className="mt-3 text-sm text-white/40">
              Harvard University
            </p>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
            01
          </span>
        </div>

        <p className="mt-6 text-sm leading-7 text-white/45">
          Comprehensive introduction to computer science covering
          programming, algorithms, data structures, memory, databases,
          and web development.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "C",
            "Python",
            "SQL",
            "Algorithms",
            "Data Structures",
            "Web Development",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Google Cloud */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
              Cloud
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              Google Cloud Facilitator Program
            </h3>

            <p className="mt-3 text-sm text-white/40">
              Google Cloud
            </p>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
            02
          </span>
        </div>

        <p className="mt-6 text-sm leading-7 text-white/45">
          Hands-on exposure to Google Cloud technologies, cloud
          infrastructure, and practical cloud learning activities.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Google Cloud",
            "Cloud Computing",
            "GCP",
            "Infrastructure",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* OCI */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
              DevOps
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              OCI DevOps Professional
            </h3>

            <p className="mt-3 text-sm text-white/40">
              Oracle Cloud Infrastructure
            </p>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
            03
          </span>
        </div>

        <p className="mt-6 text-sm leading-7 text-white/45">
          Training focused on DevOps practices, CI/CD pipelines,
          automation, cloud infrastructure, and deployment workflows.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "OCI",
            "DevOps",
            "CI/CD",
            "Automation",
            "Cloud Infrastructure",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Cloud / Additional Learning */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
              Continuous Learning
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              Cloud & DevOps Learning
            </h3>

            <p className="mt-3 text-sm text-white/40">
              Hands-on technical development
            </p>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
            04
          </span>
        </div>

        <p className="mt-6 text-sm leading-7 text-white/45">
          Continuously developing practical skills in cloud platforms,
          infrastructure automation, containers, CI/CD, and
          production-oriented engineering.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
            "Linux",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>

  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="border-t border-white/10 py-15"
>
  <div className="mx-auto max-w-6xl px-6">

    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">

      {/* LEFT SIDE */}
      <div>

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          07 / Contact
        </p>

        {/* Heading */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Let's build something
          <span className="text-white/35"> meaningful.</span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
          I'm open to opportunities in Cloud, DevOps, Python development,
          and software engineering. If you're building something interesting,
          I'd love to hear from you.
        </p>

        {/* CONTACT DETAILS */}
        <div className="mt-10">

          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Contact Details
          </p>

          <div className="mt-5 flex flex-col gap-4">

            {/* Email */}
            <a
              href="mailto:deepvishwakarma.2114@gmail.com"
              className="inline-flex items-center gap-3 text-base text-white transition hover:text-purple-300"
            >
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              deepvishwakarma.2114@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+919076930585"
              className="inline-flex items-center gap-3 text-base text-white transition hover:text-purple-300"
            >
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              +91 9076930585
            </a>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="space-y-4">

        {/* GitHub */}
        <a
          href="https://github.com/Imdpkk"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
        >
          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Code
            </p>

            <p className="mt-2 text-lg font-medium">
              GitHub
            </p>

          </div>

          <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-purple-300">
            ↗
          </span>

        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
        >
          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Connect
            </p>

            <p className="mt-2 text-lg font-medium">
              LinkedIn
            </p>

          </div>

          <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-purple-300">
            ↗
          </span>

        </a>


        {/* Resume */}
        <a
          href="/DVR.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-6 transition duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.08]"
        >
          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">
              Resume
            </p>

            <p className="mt-2 text-lg font-medium">
              View my resume
            </p>

          </div>

          <span className="text-xl text-purple-300 transition group-hover:translate-x-1">
            ↗
          </span>

        </a>

      </div>

    </div>

  </div>
</section>

{/* FOOTER */}
{/* FOOTER */}
<footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

    {/* Copyright */}
    <p className="text-sm text-white/35">
      © 2026 Deepak Vishwakarma
    </p>

    {/* Credit */}
    <p className="text-sm text-white/35">
      Designed & built by{" "}
      <span className="text-white/60">
        Deepak Vishwakarma
      </span>
    </p>

  </div>
</footer>

    </main>
  );
}