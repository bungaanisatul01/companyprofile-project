import { CheckCircle2 } from "lucide-react";

const values = [
  "Proses transaksi yang transparan dan efisien",
  "Komunikasi jelas dari awal hingga transaksi selesai",
  "Estimasi harga berbasis kondisi pasar terkini",
];

const stats = [
  { value: "5", label: "Kategori Properti" },
  { value: "2", label: "Wilayah Cakupan" },
  { value: "4", label: "Layanan Utama" },
  { value: "100%", label: "Terpercaya" },
];

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-primary">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Perantara Terpercaya untuk Jual-Beli Properti
          </h1>

          <p className="mt-4 max-w-md text-muted-foreground">
            Altura Property adalah penyedia jasa perantara jual-beli properti
          yang berfokus pada wilayah Tasikmalaya. Kami menjembatani pemilik
          properti dengan calon pembeli melalui proses yang transparan dan
          efisien.
          </p>

          <ul className="mt-8 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6"
            >
              <p className="text-3xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
