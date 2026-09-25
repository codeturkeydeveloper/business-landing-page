<template>
    <div class="site">
        <!-- ============ NAV ============ -->
        <header class="nav" :class="{ 'is-scrolled': scrolled }">
            <a class="nav__brand" href="#home">
                <span class="nav__name">Code Turkey</span>
            </a>

            <nav class="nav__links" aria-label="Primary">
                <a v-for="item in nav" :key="item.id" :href="'#' + item.id" class="nav__link">
                    {{ item.label }}
                </a>
            </nav>

            <a href="#contact" class="nav__cta">Start a project</a>
        </header>

        <main>
            <!-- ============ HERO ============ -->
            <section id="home" class="hero">
                <div class="hero__grid" aria-hidden="true" />

                <div class="wrap hero__inner">
                    <div class="hero__copy">
                        <p class="eyebrow rise" style="animation-delay: 0.05s">
                            Boutique software engineering since 2017
                        </p>

                        <h1 class="hero__title display rise" style="animation-delay: 0.15s">
                            Describe the problem.<br />
                            We build the <em>answer</em>.
                        </h1>

                        <p class="lead rise text-justify" style="animation-delay: 0.28s">
                            We are a boutique software engineering team. You tell us what is in the way, be it a system
                            that nobody wants to maintain, a process held together by one person's memory and excel
                            spreadsheets, and we deliver the solution to you.
                        </p>

                        <div class="hero__actions rise" style="animation-delay: 0.4s">
                            <a href="mailto:hello@codeturkey.uk" class="btn btn--solid">
                                <span>hello@codeturkey.uk</span>
                                <span class="btn__arrow" aria-hidden="true">→</span>
                            </a>
                            <a href="#work" class="btn">
                                <span>See selected work</span>
                            </a>
                        </div>
                    </div>

                    <div class="hero__panel rise" style="animation-delay: 0.34s">
                        <NodeField />
                    </div>
                </div>

                <a href="#work" class="hero__scroll" aria-label="Scroll to selected work">
                    <span class="eyebrow">Scroll</span>
                    <span class="hero__scroll-line" />
                </a>
            </section>

            <!-- ============ CLIENT MARQUEE ============ -->
            <!-- <LogoMarquee /> -->

            <!-- ============ APPROACH ============ -->
            <section id="approach" class="section section--alt">
                <div class="wrap approach">
                    <header class="shead rv">
                        <h2 class="shead__title display">Our <em>Approach</em></h2>
                    </header>

                    <ol class="steps">
                        <li v-for="(s, i) in steps" :key="s.title" class="step rv"
                            :style="{ transitionDelay: i * 70 + 'ms' }">
                            <span class="step__idx" v-text="String(i + 1).padStart(2, '0')"></span>
                            <h3 class="step__title" v-text="s.title"></h3>
                            <p class="step__body" v-text="s.body"></p>
                        </li>
                    </ol>

                    <div class="approach__pair">
                        <blockquote class="quote rv">
                            <p class="quote__text">
                                &ldquo; They spent the first week shadowing our procurement team instead of writing
                                code. What we got is a human-centric solution in this age where everything is AI
                                generated. &rdquo;
                            </p>
                            <footer class="quote__by">
                                <span class="quote__name">Procurement Lead</span>
                                <span class="quote__org">Food Manufacturering Business</span>
                            </footer>
                        </blockquote>

                        <aside class="note rv" style="transition-delay: 90ms">
                            <p class="eyebrow">What we won't do</p>
                            <ul class="note__list">
                                <li v-for="n in limits" :key="n">
                                    <span class="note__mark" aria-hidden="true">::</span>{{ n }}
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            <section id="work" class="section">
                <div class="wrap">
                    <header class="shead rv">
                        <h2 class="shead__title display">Projects we <em>built</em></h2>
                    </header>
                    <ul class="work">
                        <li v-for="(p, i) in projects" :key="p.name" class="work__row rv"
                            :style="{ transitionDelay: i * 60 + 'ms' }">
                            <span class="work__idx">{{ String(i + 1).padStart(2, '0') }}</span>

                            <div class="work__main">
                                <h3 class="work__name">{{ p.name }}</h3>
                                <p class="work__desc">{{ p.desc }}</p>
                                <ul class="work__stack">
                                    <li v-for="s in p.stack" :key="s">{{ s }}</li>
                                </ul>
                            </div>

                            <div class="work__meta">
                                <span class="eyebrow">{{ p.sector }}</span>
                                <span class="work__year">{{ p.year }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- ============ CAPABILITIES ============ -->
            <section id="capabilities" class="section section--alt">
                <div class="wrap">
                    <header class="shead rv">
                        <h2 class="shead__title display">Our <em>strengths</em></h2>
                    </header>

                    <ul class="caps">
                        <li v-for="(c, i) in capabilities" :key="c.title" class="cap rv"
                            :style="{ transitionDelay: i * 50 + 'ms' }">
                            <span class="cap__num">{{ String(i + 1).padStart(2, '0') }}</span>
                            <h3 class="cap__title">{{ c.title }}</h3>
                            <p class="cap__body">{{ c.body }}</p>
                            <ul class="cap__tags">
                                <li v-for="t in c.tags" :key="t">{{ t }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- ============ STUDIO / PEOPLE ============ -->
            <section id="studio" class="section">
                <div class="wrap studio">
                    <header class="shead rv">
                        <h2 class="shead__title display">Our <em>Team</em></h2>
                    </header>

                    <div class="studio__grid">
                        <!-- Plan view of the studio floor. Building the scene as
                             SVG rather than a photograph keeps it specific to
                             this studio and avoids the stock-photo gloss. -->
                        <figure class="plan rv">
                            <div class="plan__head">
                                <span class="eyebrow">Singapore Office</span>
                                <span class="eyebrow">Not to scale</span>
                            </div>

                            <svg class="plan__svg" viewBox="0 0 640 400" role="img"
                                aria-label="Plan view of the studio floor showing desks, meeting table, plants and where each person sits.">
                                <!-- shell -->
                                <rect class="plan__wall" x="20" y="20" width="600" height="360" />

                                <!-- meeting table -->
                                <rect class="plan__furn" x="250" y="150" width="150" height="88" rx="2" />
                                <circle class="plan__furn-soft" cx="278" cy="194" r="9" />
                                <circle class="plan__furn-soft" cx="325" cy="194" r="9" />
                                <circle class="plan__furn-soft" cx="372" cy="194" r="9" />

                                <!-- desks -->
                                <g class="plan__desks">
                                    <rect x="70" y="70" width="120" height="56" />
                                    <rect x="70" y="270" width="120" height="56" />
                                    <rect x="440" y="70" width="130" height="56" />
                                    <rect x="440" y="270" width="130" height="56" />
                                </g>

                                <!-- plants -->
                                <g class="plan__plants">
                                    <circle cx="52" cy="200" r="11" />
                                    <circle cx="592" cy="60" r="11" />
                                    <circle cx="592" cy="336" r="11" />
                                </g>

                                <!-- occupied seats, labelled with initials -->
                                <g class="plan__seats">
                                    <template v-for="s in seats" :key="s.who">
                                        <circle class="plan__seat" :cx="s.x" :cy="s.y" r="11" />
                                        <text class="plan__initials" :x="s.x" :y="s.y + 3.8" text-anchor="middle">
                                            {{ s.initials }}
                                        </text>
                                        <text class="plan__who" :x="s.x" :y="s.ty" text-anchor="middle">
                                            {{ s.who }}
                                        </text>
                                    </template>
                                </g>
                            </svg>
                        </figure>

                        <div class="people">
                            <ul class="rv" style="transition-delay: 90ms">
                                <li v-for="p in people" :key="p.name" class="person">
                                    <span class="person__mono" aria-hidden="true">{{ p.initials }}</span>
                                    <div class="person__body">
                                        <h3 class="person__name">{{ p.name }}</h3>
                                        <p class="person__role">{{ p.role }}</p>
                                        <p class="person__note">{{ p.note }}</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-5 person__note">Want to join us? Contact us at <a
                                    href="mailto:hello@codeturkey.uk" class="foot__link">hello@codeturkey.uk</a></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="cta py-128" :style="{ '--cta-bg': `url(${sabiBg})` }">
                <div class="wrap cta__inner">
                    <h2 class="cta__title display rv">Tell us your <em>problems</em></h2>
                    <p class="lead rv" style="transition-delay: 80ms">
                        Email us your technical problems and we can work out a solution for you. If we're the wrong team
                        for it, we'll say so and point you somewhere better.
                    </p>

                    <div class="cta__actions rv" style="transition-delay: 160ms">
                        <a href="mailto:hello@codeturkey.uk" class="btn btn--solid btn--lg">
                            <span>hello@codeturkey.uk</span>
                            <span class="btn__arrow" aria-hidden="true">→</span>
                        </a>
                        <a href="https://github.com/codeturkeydeveloper" class="ulink cta__alt" target="_blank"
                            rel="noopener">GitHub</a>
                    </div>
                </div>
            </section>
        </main>

        <!-- ============ FOOTER ============ -->
        <footer class="foot">
            <div class="wrap foot__inner">
                <div class="foot__col">
                    <span class="foot__brand">Code Turkey</span>
                    <p class="foot__note">Boutique software engineering.<br />Singapore · London · Dubai</p>
                </div>

                <nav class="foot__col" aria-label="Footer">
                    <a v-for="item in nav" :key="item.id" :href="'#' + item.id" class="foot__link">
                        {{ item.label }}
                    </a>
                </nav>

                <div class="foot__col">
                    <p class="eyebrow">Direct</p>
                    <a href="mailto:hello@codeturkey.uk" class="foot__link">hello@codeturkey.uk</a>
                    <a href="https://github.com/codeturkeydeveloper" class="foot__link" target="_blank"
                        rel="noopener">GitHub</a>
                    <p class="foot__legal">
                        © 2017 — {{ year }} Code Turkey.<br />
                        hello@codeturkey.uk is our only official contact.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import NodeField from './components/NodeField.vue'
    import LogoMarquee from './components/LogoMarquee.vue'

    // Referenced as a plain URL, not imported.
    //
    // An import would route the file back through Rollup, which emits it as a
    // hashed asset that then competes with the singlefile plugin's output
    // naming. Referring to it by path instead keeps assets/img/* the single
    // convention: the build copies assets/ verbatim into docs/, so the same
    // relative path works in dev, in the preview server and in the deployed
    // single file. No base64, no hashed filename to chase.
    const sabiBg = 'assets/img/sabi.jpg'

    const year = new Date().getFullYear()
    const scrolled = ref(false)

    const nav = [
        { id: 'approach', label: 'Approach' },
        { id: 'work', label: 'Projects' },
        { id: 'capabilities', label: 'Strengths' },
        { id: 'studio', label: 'Team' },
        { id: 'contact', label: 'Contact' },
    ]

    const projects = [
        {
            name: 'Rental Management Solution',
            desc: 'Replaced a monthly spreadsheet-and-email process by a local landlord to track and manage their tenants rental payments.',
            stack: ['Vue', 'NodeJs', 'SQL', 'AWS'],
            sector: 'Property',
            year: '2017',
        },
        {
            name: 'Procurement Tracking Solution',
            desc: 'A dashboard for procurement team to track their orders and intra-warehouse transfers',
            stack: ['Vue', 'NodeJS', 'Redis', 'SQL'],
            sector: 'Manufacturing',
            year: '2020',
        },
        {
            name: 'AI Assistant solution',
            desc: 'An integrated AI assistant for a SME that wants to evaluate the benefits of AI in their business.',
            stack: ['OpenRouter', 'RAG', 'MCP', 'SQL'],
            sector: 'AI X Corporate',
            year: '2025',
        },
    ]

    const capabilities = [
        {
            title: 'Web & application engineering',
            body: 'Product-grade web applications and the APIs behind them. Long-lived codebases, not launch-and-forget builds.',
            tags: ['Vue', 'React', 'Node', '.NET', 'Go'],
        },
        {
            title: 'Cloud & infrastructure',
            body: 'Provisioning, CI/CD and cost control. Infrastructure that survives the person who built it leaving.',
            tags: ['AWS', 'Azure', 'GCP', 'Vercel'],
        },
        {
            title: 'Data & analytics',
            body: 'Warehousing, pipelines and reporting your team will actually open. Numbers with provenance attached.',
            tags: ['OLAP', 'Tableau', 'Databricks', 'PowerBI'],
        },
        {
            title: 'AI integration',
            body: 'Retrieval, harness and guardrails. We build around the AI ecosystem so you don\'t have to.',
            tags: ['MCP', 'RAG', 'Toolcalls', 'Jevai'],
        },
        {
            title: 'Enterprise systems',
            body: 'Enterprise level work that respects the process you already run instead of replacing it on day one.',
            tags: ['ERP', 'HRMS', 'CRMS', 'MRP'],
        },
        {
            title: 'Technical advisory',
            body: 'Architecture review, stack selection and roadmapping. Often the highest-leverage work we do.',
            tags: ['Consulting', 'Audit', 'Roadmap'],
        },
    ]

    const people = [
        {
            initials: 'CT',
            name: '小林 :: @codeturkeydeveloper',
            role: 'Founder',
            note: 'The driving force bethind the team',
        }
    ]

    /* Occupied seats on the floor plan, in SVG viewBox coordinates. */
    const seats = [
        { who: '@codeturkeydeveloper', initials: 'CT', x: 130, y: 98, ty: 148 },
    ]

    const steps = [
        {
            title: 'Requirements Gathering',
            body: 'A short free engagement to understand the domain and produce a scope you understand.',
        },
        {
            title: 'Fixed scope, transparent costs',
            body: 'We quote a defined piece of work with a date and a price. You see the estimate without hidden costs.',
        },
        {
            title: 'Clear Delivery',
            body: 'We give you a clear look at the project at our check-in every week so you see actual progress of our work.',
        },
        {
            title: 'Hand over properly',
            body: 'We include all our code, documentation and any design artifacts during our handover to your technical team. Alternatively, you can retain us for a fixed monthly fee.',
        },
    ]

    const limits = [
        'Take on work where we cannot name the person who would support it.',
        'Overpromise our deliverables. No overhyped promises.',
        'Bill you for "hours" spent on requirements gathering.',
    ]

    /* ---------- Behaviour: nav state + scroll reveals ---------- */
    let observer

    function onScroll() {
        scrolled.value = window.scrollY > 24
    }

    onMounted(() => {
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        // Reveal-on-enter. Anything already in view on load reveals immediately.
        const targets = document.querySelectorAll('.rv')
        if (!('IntersectionObserver' in window)) {
            targets.forEach((el) => el.classList.add('in'))
            return
        }

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        )

        targets.forEach((el) => observer.observe(el))
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScroll)
        observer?.disconnect()
    })
</script>

<style>

    /*
 * Wrapped in @layer components so it ranks below Tailwind's `utilities`
 * layer. Unlayered CSS outranks all layered CSS, so leaving this outside
 * a layer would make every rule below silently beat a utility class
 * applied to the same element. Keep the wrapper.
 */
    @layer components {

        /* ---- Nav ---- */
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 8000;
            display: flex;
            align-items: center;
            gap: 32px;
            padding: 20px var(--gutter);
            transition: background 0.4s var(--ease), border-color 0.4s var(--ease),
                padding 0.4s var(--ease);
            border-bottom: 1px solid transparent;
        }

        .nav.is-scrolled {
            background: rgba(12, 22, 34, 0.92);
            backdrop-filter: blur(14px);
            border-bottom-color: var(--hair);
            padding: 14px var(--gutter);
        }

        .nav__brand {
            display: flex;
            align-items: center;
            gap: 11px;
            margin-right: auto;
        }

        /* Rotated square: a hand-set mark rather than a default dot */
        .nav__mark {
            width: 9px;
            height: 9px;
            background: var(--brass);
            transform: rotate(45deg);
            transition: transform 0.5s var(--ease);
        }

        .nav__brand:hover .nav__mark {
            transform: rotate(135deg);
        }

        .nav__name {
            font-family: var(--ff-display);
            font-size: 17px;
            font-weight: 600;
            letter-spacing: -0.02em;
        }

        .nav__links {
            display: flex;
            gap: 30px;
        }

        .nav__link {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: var(--fog);
            padding-bottom: 3px;
            transition: color 0.3s var(--ease);
        }

        .nav__link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: var(--brass);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.45s var(--ease);
        }

        .nav__link:hover {
            color: var(--paper);
        }

        .nav__link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        .nav__cta {
            font-size: 14px;
            font-weight: 500;
            padding: 10px 20px;
            border: 1px solid var(--hair-strong);
            transition: all 0.35s var(--ease);
        }

        .nav__cta:hover {
            background: var(--brass);
            border-color: var(--brass);
            color: var(--ink);
        }

        /* ---- Hero ---- */
        .hero {
            position: relative;
            min-height: 100svh;
            display: flex;
            align-items: center;
            padding: 148px 0 116px;
            overflow: hidden;
        }

        .hero__grid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(var(--hair) 1px, transparent 1px),
                linear-gradient(90deg, var(--hair) 1px, transparent 1px);
            background-size: 92px 92px;
            mask-image: radial-gradient(85% 65% at 50% 38%, #000, transparent 78%);
            -webkit-mask-image: radial-gradient(85% 65% at 50% 38%, #000, transparent 78%);
            opacity: 0.45;
        }

        /* Copy on the left, instrument on the right — asymmetry is what keeps
   a two-column hero from reading as a template. */
        .hero__inner {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
            gap: clamp(40px, 5vw, 72px);
            align-items: center;
        }

        .hero__copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .hero__title {
            margin: 24px 0 28px;
            /* Sized so the two authored lines each fit on one line at desktop
       width, rather than wrapping into a four-line block. */
            font-size: clamp(38px, 4.6vw, 62px);
            max-width: 20ch;
        }

        .hero__actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 40px 0 0;
        }

        .hero__panel {
            position: relative;
        }

        .hero__scroll {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            z-index: 3;
        }

        .hero__scroll-line {
            width: 1px;
            height: 48px;
            background: linear-gradient(var(--brass), transparent);
            animation: drop 2.4s var(--ease) infinite;
        }

        @keyframes drop {

            0%,
            100% {
                transform: scaleY(0.4);
                transform-origin: top;
                opacity: 0.4;
            }

            50% {
                transform: scaleY(1);
                transform-origin: top;
                opacity: 1;
            }
        }

        /* ---- Work ---- */
        .work {
            list-style: none;
        }

        .work__row {
            display: grid;
            grid-template-columns: 60px 1fr 200px;
            gap: 32px;
            align-items: start;
            padding: 40px 0;
            border-top: 1px solid var(--hair);
            transition: opacity 0.9s var(--ease), transform 0.9s var(--ease),
                background 0.5s var(--ease), padding 0.5s var(--ease);
        }

        .work__row:last-child {
            border-bottom: 1px solid var(--hair);
        }

        .work__row:hover {
            background: rgba(227, 168, 87, 0.045);
            padding-left: 18px;
            padding-right: 18px;
        }

        .work__row:hover .work__name {
            color: var(--brass);
        }

        .work__idx {
            font-family: var(--ff-mono);
            font-size: 11px;
            letter-spacing: 0.14em;
            color: var(--fog);
            padding-top: 8px;
        }

        .work__name {
            font-size: clamp(22px, 2.7vw, 32px);
            font-weight: 400;
            letter-spacing: -0.025em;
            transition: color 0.4s var(--ease);
        }

        .work__desc {
            color: var(--fog);
            font-weight: 300;
            max-width: 58ch;
            margin: 12px 0 18px;
            font-size: 16px;
        }

        .work__stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            list-style: none;
        }

        .work__stack li {
            font-family: var(--ff-mono);
            font-size: 10px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--fog);
            border: 1px solid var(--hair);
            padding: 5px 10px;
        }

        .work__meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;
            text-align: right;
            padding-top: 8px;
        }

        .work__year {
            font-family: var(--ff-mono);
            font-size: 15px;
            color: var(--fog);
        }

        /* ---- Capabilities ---- */
        .caps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            list-style: none;
            border-top: 1px solid var(--hair);
            border-left: 1px solid var(--hair);
        }

        .cap {
            padding: 38px 32px 34px;
            border-right: 1px solid var(--hair);
            border-bottom: 1px solid var(--hair);
            transition: background 0.45s var(--ease), opacity 0.9s var(--ease),
                transform 0.9s var(--ease);
        }

        .cap:hover {
            background: rgba(227, 168, 87, 0.05);
        }

        .cap:hover .cap__num {
            color: var(--brass);
        }

        .cap__num {
            font-family: var(--ff-mono);
            font-size: 11px;
            letter-spacing: 0.14em;
            color: var(--fog);
            transition: color 0.4s var(--ease);
        }

        .cap__title {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: -0.02em;
            margin: 20px 0 14px;
        }

        .cap__body {
            color: var(--fog);
            font-weight: 300;
            font-size: 15.5px;
            margin-bottom: 20px;
        }

        .cap__tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            list-style: none;
        }

        .cap__tags li {
            font-family: var(--ff-mono);
            font-size: 9.5px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--fog);
            border: 1px solid var(--hair);
            padding: 4px 9px;
        }

        /* ---- Studio: floor plan + people ---- */
        .studio__grid {
            display: grid;
            grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap: clamp(36px, 5vw, 76px);
            align-items: start;
        }

        .plan {
            border: 1px solid var(--hair);
            background: var(--ink-2);
            margin: 0;
        }

        .plan__head,
        .plan__foot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 12px 16px;
            font-family: var(--ff-mono);
            font-size: 10px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--fog);
        }

        .plan__head {
            border-bottom: 1px solid var(--hair);
        }

        .plan__foot {
            border-top: 1px solid var(--hair);
            justify-content: flex-start;
            text-transform: none;
            letter-spacing: 0.04em;
            font-family: var(--ff-body);
            font-size: 13px;
            opacity: 0.8;
        }

        .plan__dot {
            width: 5px;
            height: 5px;
            background: var(--brass);
            flex: 0 0 auto;
            transform: rotate(45deg);
        }

        .plan__svg {
            width: 100%;
            height: auto;
            display: block;
            padding: 10px;
        }

        /* Line-work only: no fills, so it reads as a drawing rather than an image */
        .plan__wall {
            fill: none;
            stroke: var(--hair-strong);
            stroke-width: 1.5;
        }

        .plan__furn {
            fill: none;
            stroke: var(--hull);
            stroke-width: 1.5;
        }

        .plan__furn-soft {
            fill: none;
            stroke: var(--hull);
            stroke-width: 1;
        }

        .plan__desks rect {
            fill: none;
            stroke: var(--hull);
            stroke-width: 1.5;
        }

        .plan__plants circle {
            fill: none;
            stroke: var(--hull);
            stroke-width: 1.5;
        }

        .plan__seat {
            fill: var(--brass);
            opacity: 0.9;
        }

        /* Sized for a 640px-wide viewBox rendered at ~1:1, so the monogram stays
   legible rather than collapsing to a smudge. */
        .plan__initials {
            fill: var(--ink);
            font-family: var(--ff-body);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.01em;
        }

        .plan__who {
            fill: var(--fog);
            font-family: var(--ff-mono);
            font-size: 10.5px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .people {
            list-style: none;
            border-top: 1px solid var(--hair);
        }

        .person {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 20px;
            padding: 26px 0;
            border-bottom: 1px solid var(--hair);
            transition: background 0.4s var(--ease), padding 0.4s var(--ease);
        }

        .person:hover {
            background: rgba(227, 168, 87, 0.045);
        }

        /* Initials in a hairline square — a monogram, not an avatar stock photo */
        .person__mono {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border: 1px solid var(--hair-strong);
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.04em;
            color: var(--brass);
            transition: border-color 0.4s var(--ease);
        }

        .person:hover .person__mono {
            border-color: var(--brass);
        }

        .person__name {
            font-size: 19px;
            font-weight: 500;
            letter-spacing: -0.02em;
        }

        .person__role {
            font-family: var(--ff-mono);
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--fog);
            margin: 6px 0 10px;
        }

        .person__note {
            color: var(--fog);
            font-weight: 300;
            font-size: 15px;
            line-height: 1.65;
        }

        /* ---- Approach ---- */
        .approach {
            display: flex;
            flex-direction: column;
        }

        .steps {
            list-style: none;
            counter-reset: step;
        }

        .step {
            display: grid;
            grid-template-columns: 60px 1fr 1.15fr;
            gap: 32px;
            align-items: baseline;
            padding: 34px 0;
            border-top: 1px solid var(--hair);
            transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
        }

        .steps li:last-child {
            border-bottom: 1px solid var(--hair);
        }

        .step__idx {
            font-family: var(--ff-mono);
            font-size: 12px;
            letter-spacing: 0.14em;
            color: var(--brass);
        }

        .step__title {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: -0.02em;
        }

        .step__body {
            color: var(--fog);
            font-weight: 300;
            font-size: 16px;
        }

        /* ---- Quote ---- */
        /* Sits in a two-column band with the limits list, so the pull-quote can
   run to a readable measure instead of collapsing into a narrow ribbon. */
        .approach__pair {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
            gap: clamp(40px, 6vw, 88px);
            /* start-aligned so the card's top rule lines up with the quote's cap
       height rather than floating at an arbitrary offset */
            align-items: start;
            margin-top: clamp(64px, 8vw, 108px);
        }

        .quote {
            margin: 0;
            padding: 0;
        }

        .quote__text {
            font-size: clamp(22px, 2.5vw, 32px);
            font-weight: 300;
            line-height: 1.34;
            letter-spacing: -0.03em;
            max-width: 22ch;
        }

        .quote__by {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 26px;
            padding-top: 18px;
            border-top: 1px solid var(--hair);
            max-width: 300px;
        }

        .quote__name {
            font-size: 15px;
            font-weight: 500;
        }

        .quote__org {
            font-family: var(--ff-mono);
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--fog);
        }

        /* ---- What we won't do ---- */
        .note {
            margin: 0;
            padding: 34px 34px 32px;
            border: 1px solid var(--hair);
            border-left: 2px solid var(--brass);
            background: var(--ink);
        }

        .note__list {
            list-style: none;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .note__list li {
            display: flex;
            gap: 12px;
            color: var(--fog);
            font-weight: 300;
            font-size: 16px;
            line-height: 1.6;
        }

        .note__mark {
            color: var(--brass);
            flex: 0 0 auto;
        }

        /* ---- CTA ---- */
        .cta {
            position: relative;
            padding: clamp(90px, 13vw, 180px) 0;
            overflow: hidden;
            isolation: isolate;
        }

        /* The photograph sits on its own layer so the content above can be
           guaranteed contrast independently of how bright the frame is. */
        .cta::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -2;
            background-image: var(--cta-bg);
            background-size: cover;
            background-position: center 42%;
            background-repeat: no-repeat;
        }

        /* Scrim. Two stops rather than one flat wash: a dense ink panel on
           the left where the copy sits, easing to a lighter veil on the right
           so the room and the orange sofa still read. The headline is
           --color-paper on the darkest end, the body copy is --color-fog, and
           the solid brass button is the one thing that must stay saturated. */
        .cta::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            background:
                linear-gradient(100deg,
                    rgba(12, 22, 34, 0.96) 0%,
                    rgba(12, 22, 34, 0.93) 34%,
                    rgba(12, 22, 34, 0.74) 62%,
                    rgba(12, 22, 34, 0.52) 100%),
                linear-gradient(to bottom,
                    rgba(12, 22, 34, 0.55) 0%,
                    rgba(12, 22, 34, 0) 28%,
                    rgba(12, 22, 34, 0) 72%,
                    rgba(12, 22, 34, 0.62) 100%);
        }

        /* Slightly tighter tracking on the lead copy over photography: the
           lighter weight reads slightly loose against a busy image. */
        .cta .lead {
            color: #C3D0DA;
        }

        @media (max-width: 900px) {

            /* Single-column layout means copy spans the full width, so the
               directional gradient no longer protects it. Flatten to an even
               wash for anything narrower than the desktop split. */
            .cta::after {
                background: linear-gradient(to bottom,
                        rgba(12, 22, 34, 0.92) 0%,
                        rgba(12, 22, 34, 0.86) 100%);
            }
        }

        .cta__rule {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, var(--brass), transparent 60%);
        }

        .cta__inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .cta__title {
            font-size: clamp(42px, 7.4vw, 96px);
            margin: 24px 0 28px;
        }

        .cta__actions {
            display: flex;
            align-items: center;
            gap: 34px;
            margin-top: 44px;
            flex-wrap: wrap;
        }

        .cta__alt {
            font-size: 16px;
            font-weight: 500;
            color: var(--fog);
        }

        .cta__alt:hover {
            color: var(--brass);
        }

        .cta__status {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 40px;
            font-family: var(--ff-mono);
            font-size: 10.5px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--fog);
        }

        .cta__status-dot {
            width: 5px;
            height: 5px;
            background: var(--brass);
            transform: rotate(45deg);
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

        /* ---- Footer ---- */
        .foot {
            border-top: 1px solid var(--hair);
            background: var(--ink-2);
            padding: 60px 0 40px;
        }

        .foot__inner {
            display: grid;
            grid-template-columns: 1.6fr 1fr 1fr;
            gap: 48px;
        }

        .foot__col {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }

        .foot__brand {
            font-family: var(--font-display);
            font-size: 22px;
            font-weight: 600;
            letter-spacing: -0.02em;
            margin-bottom: 8px;
        }

        .foot__note,
        .foot__legal {
            color: var(--fog);
            font-size: 14px;
            font-weight: 300;
            line-height: 1.7;
        }

        .foot__legal {
            margin-top: 20px;
            padding-top: 18px;
            border-top: 1px solid var(--hair);
            font-size: 13px;
        }

        .foot__link {
            font-size: 15px;
            font-weight: 400;
            color: var(--fog);
            transition: color 0.3s var(--ease);
        }

        .foot__link:hover {
            color: var(--brass);
        }

        /* ---- Responsive ---- */
        @media (max-width: 1080px) {
            .hero__inner {
                grid-template-columns: 1fr;
                gap: 56px;
            }

            .hero__panel {
                max-width: 560px;
            }

            .studio__grid {
                grid-template-columns: 1fr;
            }

            .approach__pair {
                grid-template-columns: 1fr;
                gap: 48px;
            }

            .quote__text {
                max-width: 30ch;
            }

            .caps {
                grid-template-columns: repeat(2, 1fr);
            }

            .step {
                grid-template-columns: 50px 1fr;
            }

            .step__body {
                grid-column: 2;
            }
        }

        @media (max-width: 860px) {
            .nav__links {
                display: none;
            }

            .work__row {
                grid-template-columns: 1fr;
                gap: 14px;
            }

            .work__meta {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                text-align: left;
                padding-top: 0;
            }

            .foot__inner {
                grid-template-columns: 1fr;
                gap: 36px;
            }
        }

        @media (max-width: 640px) {
            body {
                font-size: 16px;
            }

            .caps {
                grid-template-columns: 1fr;
            }

            .hero {
                padding: 124px 0 88px;
            }

            .hero__scroll {
                display: none;
            }

            .note {
                padding: 30px 24px;
            }

            .note__list {
                grid-template-columns: 1fr;
            }

            .person {
                grid-template-columns: 40px 1fr;
                gap: 16px;
            }

            .person__mono {
                width: 40px;
                height: 40px;
                font-size: 12px;
            }
        }
    }

    /* end @layer components */
</style>
