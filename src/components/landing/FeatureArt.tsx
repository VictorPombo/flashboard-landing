export type ArtVariant = "tv" | "kanban" | "realtime" | "goals" | "reports";

// Ilustrações abstratas da UI em CSS puro (sem assets externos),
// no mesmo vocabulário visual do painel dark.
export function FeatureArt({ variant }: { variant: ArtVariant }) {
  return (
    <div className="flex h-full max-h-[370px] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-[420px] rounded-2xl border border-line bg-ink p-5 shadow-[0_16px_50px_rgba(0,0,0,0.4)]">
        {variant === "tv" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-line" />
              <div className="h-2 w-2 rounded-full bg-green" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["bg-brand", "bg-bar-3", "bg-accent"].map((c, i) => (
                <div key={i} className="space-y-2 rounded-lg bg-card p-3">
                  <div className={`h-1.5 w-8 rounded ${c}`} />
                  <div className="h-2 rounded bg-line" />
                  <div className="h-2 w-3/4 rounded bg-line" />
                </div>
              ))}
            </div>
            <div className="mx-auto h-2 w-16 rounded-b bg-line" />
          </div>
        )}

        {variant === "kanban" && (
          <div className="grid grid-cols-3 gap-3">
            {[3, 2, 2].map((cards, col) => (
              <div key={col} className="space-y-2">
                <div className="h-2 w-12 rounded bg-fg-muted" />
                {Array.from({ length: cards }).map((_, i) => (
                  <div key={i} className="space-y-1.5 rounded-lg bg-card p-2.5">
                    <div className="h-1.5 rounded bg-line" />
                    <div
                      className={`h-1.5 w-2/3 rounded ${
                        col === 2 && i === 0 ? "bg-accent" : "bg-line"
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {variant === "realtime" && (
          <div className="space-y-3">
            {[
              { w: "w-[85%]", c: "bg-brand" },
              { w: "w-[60%]", c: "bg-bar-3" },
              { w: "w-[95%]", c: "bg-accent" },
            ].map((bar, i) => (
              <div key={i} className="rounded-lg bg-card p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-1.5 w-20 rounded bg-line" />
                  <div className="anim-live-dot h-1.5 w-1.5 rounded-full bg-green" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-line">
                  <div className={`h-full ${bar.w} rounded-full ${bar.c}`} />
                </div>
              </div>
            ))}
          </div>
        )}

        {variant === "goals" && (
          <div className="flex items-end justify-center gap-4 px-4 pb-2 pt-6">
            {[
              { h: "h-16", c: "bg-line" },
              { h: "h-24", c: "bg-brand" },
              { h: "h-20", c: "bg-bar-3" },
              { h: "h-32", c: "bg-accent" },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-8 rounded-t-lg ${bar.h} ${bar.c}`} />
                <div className="h-1.5 w-8 rounded bg-line" />
              </div>
            ))}
          </div>
        )}

        {variant === "reports" && (
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-8 border-brand border-r-accent border-b-bar-3">
                <div className="h-2 w-8 rounded bg-line" />
              </div>
              <div className="flex-1 space-y-2 pt-2">
                {["bg-brand", "bg-accent", "bg-bar-3"].map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${c}`} />
                    <div className="h-1.5 flex-1 rounded bg-line" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-card p-3">
              <div className="h-1.5 w-1/2 rounded bg-line" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
