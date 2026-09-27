import Link from "next/link";
import { ArrowRight, Sparkles, Home as HomeIcon, Search, Handshake } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: HomeIcon,
    title: "Titip Jual Properti",
    description:
      "Pasarkan properti Anda kepada calon pembeli yang relevan melalui jaringan kami.",
  },
  {
    icon: Search,
    title: "Cari Properti",
    description:
      "Temukan rumah, villa, sawah, ruko, atau kontrakan sesuai kebutuhan dan anggaran Anda.",
  },
  {
    icon: Handshake,
    title: "Mediasi Transaksi",
    description:
      "Kami dampingi proses negosiasi hingga kesepakatan tercapai bagi kedua pihak.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-fade" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-blob absolute top-24 left-10 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="animate-blob absolute top-40 right-10 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px] [animation-delay:4s]" />

        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-foreground/5 px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="size-3.5" />
              Selamat Datang di Altura Property
            </div>

            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Menemukan Properti yang Tepat, Tanpa Ribet.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Altura Property membantu Anda menjual maupun mencari properti
              di wilayah Tasikmalaya dengan proses yang transparan.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 shadow-lg shadow-primary/20")}
              >
                Lihat Layanan
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6"
                )}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Apa yang Kami Kerjakan
          </h2>
          <p className="mt-3 text-muted-foreground">
            Layanan inti yang kami fokuskan, dikerjakan dengan baik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-foreground/[0.03] px-8 py-14 text-center">
          <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Punya Properti untuk Dijual?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Ceritakan properti Anda, dan kami bantu carikan pembeli yang
              tepat.
            </p>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 rounded-full px-6"
              )}
            >
              Hubungi Kami
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}