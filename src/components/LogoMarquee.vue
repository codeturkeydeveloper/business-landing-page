<template>
    <section class="band" aria-label="Selected clients">
        <div class="wrap band__inner">
            <p class="eyebrow band__label">Working with teams at</p>

            <div class="marquee">
                <div class="marquee__track" :style="{ animationDuration: duration }">
                    <div v-for="n in 2" :key="n" class="marquee__set" :aria-hidden="n === 2 ? 'true' : null">
                        <div v-for="c in clients" :key="c.name" class="logo">
                            <span class="logo__mark" v-html="c.mark" />
                            <span class="logo__name">{{ c.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
/**
 * LogoMarquee — infinite client strip.
 *
 * Marks are inline SVG using `currentColor`, so a single colour rule
 * drives the whole greyscale-to-brass transition with no per-logo
 * styling and no network requests.
 *
 * The track pauses on hover rather than only on individual logos:
 * a logo that is still sliding while you try to read it defeats the
 * purpose, and pausing the whole band keeps the strip's motion
 * legible as one system.
 */
const duration = '64s'

const svg = (inner) =>
    `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`

const clients = [
    // { name: 'Northwind', mark: svg('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z"/>') },
    // { name: 'Halverson', mark: svg('<path d="M3 18a9 9 0 0 1 18 0"/><path d="M7.5 18a4.5 4.5 0 0 1 9 0"/>') },
    // { name: 'Pemberton', mark: svg('<path d="M5 19V9M12 19V5M19 19v-7"/>') },
    // { name: 'Ardent Labs', mark: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17"/>') },
    // { name: 'Kestrel', mark: svg('<path d="M6 7l6 5 6-5"/><path d="M6 13l6 5 6-5"/>') },
    // { name: 'Vantage', mark: svg('<rect x="4" y="4" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/><path d="M13 4h7M4 13h7"/>') },
    // { name: 'Loom & Co', mark: svg('<path d="M12 4v16M4 12h16"/>') },
    // { name: 'Fairmont', mark: svg('<path d="M12 4 21 19H3z"/>') },
]
</script>

<style scoped>
/* Layered so Tailwind utilities applied to these elements still win.
   See the note in App.vue's style block. */
@layer components {
.band {
    border-top: 1px solid var(--hair);
    border-bottom: 1px solid var(--hair);
    background: var(--ink-2);
    padding: 34px 0 38px;
}

.band__inner {
    display: flex;
    flex-direction: column;
    gap: 26px;
}

.band__label {
    text-align: center;
}

/* Fade the strip into the page at both ends so the loop is never a
   hard cut and the logos appear to continue past the frame. */
.marquee {
    mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.marquee__track {
    display: flex;
    width: max-content;
    animation-name: scroll;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    cursor: default;
}

/* The whole band halts under the pointer, so a hovered logo holds
   still long enough to actually be read. */
.marquee__track:hover {
    animation-play-state: paused;
}

.marquee__set {
    display: flex;
    align-items: center;
}

@keyframes scroll {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(-50%, 0, 0);
    }
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 34px;
    color: var(--fog);
    opacity: 0.38;
    filter: grayscale(1);
    white-space: nowrap;
    transition: opacity 0.4s var(--ease), color 0.4s var(--ease),
        filter 0.4s var(--ease), transform 0.4s var(--ease);
}

.logo:hover {
    opacity: 1;
    color: var(--brass);
    filter: none;
    transform: translateY(-1px);
}

.logo__mark {
    display: flex;
    flex: 0 0 auto;
    opacity: 0.9;
}

.logo__name {
    font-family: var(--ff-body);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.01em;
}

@media (max-width: 640px) {
    .logo {
        padding: 6px 22px;
    }

    .logo__name {
        font-size: 14px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .marquee__track {
        animation: none;
    }
}
} /* end @layer components */
</style>
