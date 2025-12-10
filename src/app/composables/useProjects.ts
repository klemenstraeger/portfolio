import type { Project } from "~/types"

export function useProjects(): Project[] {
  const { t } = useI18n()
  return [
    {
      title: "Manufactum Shopping Bot",
      description: t("projects.entry0.text"),
      images: [
        "/img/mf_shopping.png",
        "/img/mf_shopping_2.png",

      ],
      usedTechnologies: [
        {
          name: "Python",
          icon: "logos:python",
          color: "border-blue-600",
        },
        {
          name: "FastAPI",
          icon: "devicon:fastapi",
          color: "border-blue-600",
        },
        {
          name: "Postgres with pgvector",
          icon: "devicon:postgresql",
          color: "border-emerald-600",
        },
        {
          name: "OpenAI",
          icon: "simple-icons:openai",
          color: "border-emerald-600",
        },
        {
          name: "Google Cloud Platform",
          icon: "logos:google-cloud",
          color: "border-emerald-600",
        },
        {
          name: "Terraform",
          icon: "devicon-plain:terraform",
          color: "border-emerald-600",
        },
        {
          name: "Redis",
          icon: "devicon:redis",
          color: "border-emerald-600",
        },
      ],
    },
    {
      title: t("projects.entry0.title"),
      description: t("projects.entry0.text"),
      images: [
        "img/login.png",
        "img/start-seite.png",
        "img/upload_done.png",
        "img/mapping_ergebnisse_done.png",
      ],
      usedTechnologies: [
        {
          name: "Python",
          icon: "logos:python",
          color: "border-blue-600",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          color: "border-blue-600",
        },
        {
          name: "Nuxt 3",
          icon: "logos:nuxt-icon",
          color: "border-pink-600",
        },
        {
          name: "TailwindCSS",
          icon: "logos:tailwindcss-icon",
          color: "border-pink-600",
        },
        {
          name: "Chart.js",
          icon: "file-icons:chartjs",
          color: "border-pink-600",
        },
        {
          name: "PrimeVue",
          icon: "prime:prime",
          color: "border-pink-600",
        },
        {
          name: "Nitro.js",
          icon: "unjs:nitro",
          color: "border-pink-600",
        },
        {
          name: "OpenAI",
          icon: "simple-icons:openai",
          color: "border-emerald-600",
        },
        {
          name: "Google Cloud",
          icon: "logos:google-cloud",
          color: "border-emerald-600",
        },
      ],
    },
    {
      title: t("projects.entry1.title"),
      description: t("projects.entry1.text"),
      repo: "https://github.com/htw-dresden-ps23/trommelhelden-web-frontend",
      images: [
        "/img/trommelhelden.png",
        "img/trommelhelden-create-data.png",
        "img/trommelhelden-dashboard.png",
        "img/trommelhelden-order-overview.png",
        "img/trommelhelden-master-data.png",
      ],
      usedTechnologies: [
        {
          name: "Vue.js",
          icon: "logos:vue",
          color: "border-pink-600",
        },
        {
          name: "TailwindCSS",
          icon: "logos:tailwindcss-icon",
          color: "border-pink-600",
        },
        {
          name: "Chart.js",
          icon: "file-icons:chartjs",
          color: "border-pink-600",
        },
        {
          name: "PrimeVue",
          icon: "prime:prime",
          color: "border-pink-600",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          color: "border-blue-600",
        },

        {
          name: "Prisma",
          icon: "logos:prisma",
          color: "border-blue-600",
        },
        {
          name: "MSSQL",
          icon: "simple-icons:microsoftsqlserver",
          color: "border-blue-600",
        },
        {
          name: "Express",
          icon: "simple-icons:express",
          color: "border-blue-600",
        },
        {
          name: "Docker",
          icon: "logos:docker-icon",
          color: "border-blue-600",
        },
        {
          name: "NGINX",
          icon: "logos:nginx",
          color: "border-blue-600",
        },
      ],
    },
    {
      title: t("projects.entry2.title"),
      description: t("projects.entry2.text"),
      images: [
        "/img/ewo-login.png",
        "/img/ewo-budgetmanager.png",
        "/img/ewo-link-traffic.png",
      ],

      usedTechnologies: [
        {
          name: "Nuxt 3",
          icon: "logos:nuxt-icon",
          color: "border-pink-600",
        },
        {
          name: "TailwindCSS",
          icon: "logos:tailwindcss-icon",
          color: "border-pink-600",
        },
        {
          name: "PrimeVue",
          icon: "prime:prime",
          color: "border-pink-600",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          color: "border-pink-600",
        },
        {
          name: "Prisma",
          icon: "logos:prisma",
          color: "border-blue-600",
        },
        {
          name: "Supabase",
          icon: "logos:supabase-icon",
          color: "border-blue-600",
        },
        {
          name: "Docker",
          icon: "logos:docker-icon",
          color: "border-blue-600",
        },
        {
          name: "Google Ads",
          icon: "logos:google-ads",
          color: "border-blue-600",
        },
        {
          name: "Bing Ads",
          icon: "logos:bing",
          color: "border-blue-600",
        },
        {
          name: "Google Cloud",
          icon: "logos:google-cloud",
          color: "border-emerald-600",
        },
      ],
    },
  ]
}
