<template>
    <figure class="instrument" aria-hidden="true">
        <div class="instrument__head">
            <span class="instrument__label">Runtime topology</span>
            <span class="instrument__state">
                <i class="instrument__pulse" />
                <span>{{ nodes }} nodes · {{ links }} links</span>
            </span>
        </div>

        <div class="instrument__viewport">
            <canvas ref="canvas" />
            <div class="instrument__scan" />
        </div>

        <figcaption class="instrument__foot">
            <span>Solver: incremental</span>
            <span>Latency p95 · 12ms</span>
            <span>Uptime 99.98%</span>
        </figcaption>
    </figure>
</template>

<script setup>
/**
 * NodeField — the abstract computational system, presented as a piece of
 * instrumentation rather than a full-bleed background wash. Giving it a
 * frame, a live readout and a caption turns decoration into something
 * that looks like it is reporting on real work, which is the whole point
 * of the studio: the system is the product.
 *
 * The graph itself is a drifting constellation linked by proximity. Links
 * re-draw each frame with distance falloff so it breathes rather than
 * pulses, and the pointer acts as a soft lens that pushes nodes aside
 * and lights the ones it passes.
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
const nodes = ref(0)
const links = ref(0)

const PALETTE = {
    node: '227, 168, 87',   // brass
    link: '34, 56, 75',     // hull
    hot: '238, 242, 244'    // paper
}

const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

let ctx, raf, w, h
let pts = []

const pointer = { x: -9999, y: -9999, active: false, sx: 0, sy: 0 }

function seed() {
    // Density scales with area so large screens aren't sparse
    const count = Math.round(Math.min(140, Math.max(48, (w * h) / 21000)))
    pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.4 + 0.6,
    }))
    nodes.value = count
    // Approximate steady-state link count for the readout
    links.value = Math.round(count * 2.4)
}

function resize() {
    const el = canvas.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = rect.width
    h = rect.height
    el.width = Math.floor(w * dpr)
    el.height = Math.floor(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
    if (reduced) draw() // paint one static frame for reduced-motion users
}

function step() {
    for (const n of pts) {
        n.x += n.vx
        n.y += n.vy

        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20

        // Pointer lens: nodes are pushed out of the way rather than
        // attracted, so moving the cursor feels like parting the field.
        if (pointer.active) {
            const dx = n.x - pointer.x
            const dy = n.y - pointer.y
            const d2 = dx * dx + dy * dy
            if (d2 < 20000 && d2 > 0.01) {
                const d = Math.sqrt(d2)
                const force = (1 - d / 141) * 0.85
                n.x += (dx / d) * force
                n.y += (dy / d) * force
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, w, h)

    const maxDist = 124
    ctx.lineWidth = 1

    for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
            const b = pts[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d2 = dx * dx + dy * dy
            if (d2 < maxDist * maxDist) {
                // Links brighten as the pointer's halo passes over them
                const mx = (a.x + b.x) / 2 - pointer.sx
                const my = (a.y + b.y) / 2 - pointer.sy
                const halo = pointer.active ? Math.max(0, 1 - Math.hypot(mx, my) / 150) : 0
                const alpha = (1 - Math.sqrt(d2) / maxDist) * (0.42 + halo * 0.5)
                ctx.strokeStyle = `rgba(${PALETTE.link}, ${alpha})`
                ctx.beginPath()
                ctx.moveTo(a.x, a.y)
                ctx.lineTo(b.x, b.y)
                ctx.stroke()
            }
        }
    }

    for (const n of pts) {
        const near = pointer.active && Math.hypot(n.x - pointer.x, n.y - pointer.y) < 150
        ctx.fillStyle = near
            ? `rgba(${PALETTE.hot}, 0.95)`
            : `rgba(${PALETTE.node}, 0.5)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? n.r * 1.7 : n.r, 0, Math.PI * 2)
        ctx.fill()
    }
}

function loop() {
    step()
    draw()
    raf = requestAnimationFrame(loop)
}

function onPointerMove(e) {
    const rect = canvas.value?.getBoundingClientRect()
    if (!rect) return
    pointer.x = e.clientX - rect.left
    pointer.y = e.clientY - rect.top
    // Smoothed halo centre lags the cursor slightly, which reads as weight
    pointer.sx += (pointer.x - pointer.sx) * 0.12
    pointer.sy += (pointer.y - pointer.sy) * 0.12
    pointer.active = true
}

function onPointerLeave() {
    pointer.active = false
}

onMounted(() => {
    const el = canvas.value
    ctx = el.getContext('2d')
    pointer.sx = -9999
    pointer.sy = -9999
    resize()

    if (!reduced) {
        loop()
    }

    window.addEventListener('resize', resize)
    el.parentElement.addEventListener('pointermove', onPointerMove)
    el.parentElement.addEventListener('pointerleave', onPointerLeave)
})

onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    canvas.value?.parentElement?.removeEventListener('pointermove', onPointerMove)
    canvas.value?.parentElement?.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<style scoped>
/* Layered so Tailwind utilities applied to these elements still win.
   See the note in App.vue's style block. */
@layer components {
.instrument {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--hair);
    background:
        radial-gradient(120% 140% at 50% 0%, rgba(227, 168, 87, 0.06), transparent 58%),
        var(--ink-2);
}

/* --- Header rail ------------------------------------------------ */
.instrument__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--hair);
    font-family: var(--ff-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--fog);
}

.instrument__label {
    color: var(--fog);
}

.instrument__state {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--fog);
}

.instrument__pulse {
    width: 5px;
    height: 5px;
    background: var(--brass);
    animation: beat 2.6s var(--ease) infinite;
}

@keyframes beat {

    0%,
    100% {
        opacity: 0.25;
    }

    50% {
        opacity: 1;
    }
}

/* --- Viewport --------------------------------------------------- */
.instrument__viewport {
    position: relative;
    aspect-ratio: 4 / 3;
    min-height: 260px;
    overflow: hidden;
}

.instrument__viewport canvas {
    width: 100%;
    height: 100%;
}

/* A single slow scanline sweep — the detail that makes the panel read as
   a display rather than a canvas. Kept faint enough to ignore if you
   are not looking for it. */
.instrument__scan {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(238, 242, 244, 0.05) 50%,
        transparent 100%
    );
    height: 34%;
    animation: scan 7.5s linear infinite;
}

@keyframes scan {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(320%);
    }
}

/* --- Footer rail ------------------------------------------------ */
.instrument__foot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px 20px;
    padding: 12px 16px;
    border-top: 1px solid var(--hair);
    font-family: var(--ff-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--fog);
    opacity: 0.75;
}

@media (prefers-reduced-motion: reduce) {

    .instrument__scan,
    .instrument__pulse {
        animation: none;
    }
}
} /* end @layer components */
</style>
