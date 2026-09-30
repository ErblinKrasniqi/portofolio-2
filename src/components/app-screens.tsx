import type { Dict } from "@/content/site";
import { screenDoctors } from "@/content/site";

// Recreations of the hospital app's screens, built in HTML so they stay sharp and translate.
// PLACEHOLDER until real screenshots or recordings are available.

type S = Dict["screens"];

const initials = (name: string) =>
  name
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("");

export function BookingScreen({ s }: { s: S }) {
  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00"];
  const taken = new Set(["09:00", "10:00", "12:00"]);
  return (
    <div className="grid gap-7 p-5 @2xl:grid-cols-[1fr_1.1fr] @2xl:gap-10 @2xl:p-9">
      <div>
        <h3 className="font-display text-2xl font-semibold @2xl:text-3xl">{s.booking.title}</h3>
        <p className="mt-5 text-sm text-pine-soft">{s.booking.serviceLabel}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {s.booking.services.map((x, i) => (
            <span
              key={x}
              className={`rounded-full px-3.5 py-1.5 text-sm ${i === 0 ? "bg-pine text-paper" : "ring-1 ring-pine/15"}`}
            >
              {x}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-pine-soft">{s.booking.doctorLabel}</p>
        <div className="mt-2 grid gap-2">
          {screenDoctors.map((d, i) => (
            <div
              key={d}
              className={`flex items-center gap-3 rounded-[1.1rem] px-3 py-2.5 ${i === 0 ? "bg-mist ring-2 ring-moss" : ""}`}
            >
              <span className="grid size-9 place-items-center rounded-full bg-sage text-sm font-bold text-moss">
                {initials(d)}
              </span>
              <span className="font-medium">{d}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-pine-soft">{s.booking.dayLabel}</p>
        <div className="mt-2 grid grid-cols-5 gap-1.5 @md:gap-2">
          {s.booking.days.map((d, i) => (
            <span
              key={d}
              className={`rounded-2xl py-2.5 text-center text-sm font-medium ${i === 1 ? "bg-moss text-paper" : "bg-mist"}`}
            >
              {d}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-pine-soft">{s.booking.timeLabel}</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5 @md:gap-2">
          {times.map((t) => (
            <span
              key={t}
              className={`rounded-full py-2 text-center text-sm tabular-nums ${
                t === "10:30"
                  ? "bg-marigold font-bold"
                  : taken.has(t)
                    ? "text-pine-soft/45 line-through ring-1 ring-pine/5"
                    : "ring-1 ring-pine/15"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-7 rounded-full bg-pine py-3.5 text-center font-medium text-paper">{s.booking.confirm}</div>
      </div>
    </div>
  );
}

export function DayScreen({ s }: { s: S }) {
  const chip = {
    done: "bg-sage text-pine-soft",
    in: "bg-moss text-paper",
    waiting: "bg-marigold-soft text-pine",
  } as const;
  return (
    <div className="p-5 @2xl:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold @2xl:text-3xl">{s.day.title}</h3>
        <span className="rounded-full bg-sage px-3.5 py-1 text-sm font-medium">{s.day.count}</span>
      </div>
      <ul className="mt-6 grid gap-2">
        {s.day.rows.map((r) => (
          <li
            key={r.time}
            className={`grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 rounded-[1.1rem] bg-mist px-4 py-3 @2xl:grid-cols-[4.5rem_1fr_1fr_auto] ${r.status === "in" ? "ring-2 ring-moss" : ""}`}
          >
            <span className="font-medium tabular-nums">{r.time}</span>
            <span className="min-w-0">
              <span className="block truncate font-medium">{r.name}</span>
              <span className="block truncate text-sm text-pine-soft @2xl:hidden">{r.reason}</span>
            </span>
            <span className="hidden text-pine-soft @2xl:block">{r.reason}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap @md:text-sm ${chip[r.status]}`}>
              {s.day.statuses[r.status]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FileScreen({ s }: { s: S }) {
  const f = s.file;
  const rx = [
    { eye: f.right, sph: "−1.25", cyl: "−0.50", axis: "180°" },
    { eye: f.left, sph: "−1.00", cyl: "−0.75", axis: "170°" },
  ];
  return (
    <div className="grid gap-7 p-5 @2xl:grid-cols-[1.3fr_1fr] @2xl:gap-10 @2xl:p-9">
      <div>
        <div className="flex items-center gap-4">
          <span className="grid size-14 place-items-center rounded-full bg-sage text-lg font-bold text-moss">
            {initials(f.name)}
          </span>
          <div>
            <h3 className="font-display text-2xl font-semibold @2xl:text-3xl">{f.name}</h3>
            <p className="text-sm text-pine-soft">{f.meta}</p>
          </div>
        </div>

        <p className="mt-7 font-medium">{f.rxTitle}</p>
        <div className="mt-2 overflow-hidden rounded-[1.1rem] ring-1 ring-pine/12">
          <table className="w-full text-left text-sm tabular-nums">
            <thead className="bg-sage/60">
              <tr>
                <th className="px-4 py-2.5 font-medium">{f.eye}</th>
                <th className="px-4 py-2.5 font-medium">SPH</th>
                <th className="px-4 py-2.5 font-medium">CYL</th>
                <th className="px-4 py-2.5 font-medium">AX</th>
              </tr>
            </thead>
            <tbody>
              {rx.map((r) => (
                <tr key={r.eye} className="border-t border-pine/8 bg-mist">
                  <td className="px-4 py-3 font-medium">{r.eye}</td>
                  <td className="px-4 py-3">{r.sph}</td>
                  <td className="px-4 py-3">{r.cyl}</td>
                  <td className="px-4 py-3">{r.axis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid content-start gap-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: f.pressure, r: "15", l: "16", unit: "mmHg" },
            { label: f.acuity, r: "6/6", l: "6/9", unit: "" },
          ].map((m) => (
            <div key={m.label} className="rounded-[1.1rem] bg-mist p-4">
              <p className="text-sm text-pine-soft">{m.label}</p>
              <p className="font-display mt-1 text-2xl font-semibold tabular-nums">
                {m.r}
                <span className="text-pine-soft/60"> / </span>
                {m.l}
              </p>
              {m.unit && <p className="text-xs text-pine-soft">{m.unit}</p>}
            </div>
          ))}
        </div>
        <div className="rounded-[1.1rem] bg-marigold-soft/70 p-4">
          <p className="font-medium">{f.notesTitle}</p>
          <p className="mt-1 text-sm leading-relaxed">{f.notes}</p>
        </div>
      </div>
    </div>
  );
}
