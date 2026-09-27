import { Home, Search, Calculator, Handshake } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Penitipan & Pemasaran Properti",
    description:
      "Properti Anda kami pasarkan kepada calon pembeli yang relevan, dengan strategi yang disesuaikan jenis dan lokasi properti.",
  },
  {
    icon: Search,
    title: "Pencarian Properti",
    description:
      "Bantu menyaring pilihan properti sesuai kriteria dan anggaran Anda — rumah, villa, sawah, ruko, atau kontrakan.",
  },
  {
    icon: Calculator,
    title: "Estimasi Nilai Pasar",
    description:
      "Diskusi kisaran harga wajar berdasarkan lokasi, kondisi, dan tren pasar properti terkini.",
  },
  {
    icon: Handshake,
    title: "Mediasi Negosiasi",
    description:
      "Menjembatani komunikasi antara penjual dan pembeli hingga tercapai kesepakatan yang saling menguntungkan.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Services</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground">
            Rangkaian layanan untuk membantu Anda menjual maupun mencari
            properti dengan proses yang jelas dan efisien.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group relative overflow-hidden border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
