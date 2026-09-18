"use client";

export default function Newsletter() {
  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Join The Circle</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Get 10% Off Your First Canvas
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-cream-dim">
          New drops, exclusive collections, and offers — straight to your inbox.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/60 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
