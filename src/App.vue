<template>
    <v-app>
        <!-- Scroll Progress Bar -->
        <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

        <!-- Page Loader -->
        <div class="page-loader" :class="{ hidden: !loading }">
            <v-progress-circular indeterminate color="white" size="64"></v-progress-circular>
        </div>

        <!-- Sticky Navigation -->
        <v-app-bar class="sticky-nav" :class="{ 'nav-scrolled': scrolled }" elevation="0" color="black">
            <v-container class="d-flex align-center">
                <v-app-bar-title class="text-white font-weight-bold">
                    <div class="d-flex flex-column">
                        <span>Code Turkey</span>
                        <small class="text-caption text-white-50 mt-n1" style="font-size:11px !important;">Creating
                            software for your business</small>
                    </div>
                </v-app-bar-title>
                <v-spacer></v-spacer>
                <!-- Desktop Menu -->
                <v-btn v-for="item in navItems" :key="item.title" :href="item.link" variant="text" color="white"
                    class="d-none d-md-inline-flex mx-1">
                    <span v-text="item.title"></span>
                </v-btn>
                <!-- Mobile Menu -->
                <v-app-bar-nav-icon class="d-md-none" color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
            </v-container>
        </v-app-bar>

        <!-- Mobile Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" location="right" temporary color="var(--sw-ocean-deep)">
            <v-list>
                <v-list-item v-for="item in navItems" :key="item.title" :href="item.link" @click="drawer = false">
                    <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main>
            <!-- Hero Section -->
            <section id="home" class="hero-section">
                <v-container>
                    <v-row justify="center">
                        <v-col class="text-center hero-content">
                            <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4 fade-in-up">
                                Creating software for your business
                            </h1>
                            <div class="text-white mb-6 fade-in-up delay-1" style="opacity: 0.95;">
                                We provide professional software development expertise with clear, transparent
                                pricing, to meet your business and technical needs
                            </div>

                            <div class="mb-8 fade-in-up delay-3">
                                <span class="location-badge">
                                    <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
                                    Dubai
                                </span>
                                <span class="location-badge">
                                    <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
                                    London
                                </span>
                                <span class="location-badge">
                                    <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
                                    Singapore
                                </span>
                            </div>

                            <v-btn href="#contact" size="x-large" color="var(--sw-sunset-coral)"
                                class="cta-button text-white font-weight-bold fade-in-up delay-4" rounded="lg">
                                <v-icon left class="mr-2">mdi-email-outline</v-icon>
                                Get Started
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Work/Services Section -->
            <section id="services" class="section-spacing">
                <v-container>
                    <v-row class="mb-12">
                        <v-col class="text-center">
                            <h2 class="text-h3 font-weight-bold mb-4" style="color: var(--sw-ocean-deep);">
                                Our Services
                            </h2>
                            <p class="text-h6 text-grey-darken-1">
                                We are committed to delivering excellence in craftsmanship on every project
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col v-for="(work, index) in works" :key="index" cols="12" sm="6" md="4" class="fade-in-up"
                            :class="'delay-' + (index + 1)">
                            <v-card class="work-card pa-6" elevation="4" rounded="lg">
                                <div class="work-card-content">
                                    <div class="text-center mb-4">
                                        <v-icon :color="work.color" class="work-icon">
                                            {{ work.icon }}
                                        </v-icon>
                                    </div>
                                    <h3 class="text-h5 font-weight-bold text-center mb-3"
                                        :style="{ color: work.color }">
                                        {{ work.title }}
                                    </h3>
                                    <p class="text-body-1 text-grey-darken-1 text-center mb-4">
                                        {{ work.description }}
                                    </p>
                                    <v-chip-group class="justify-center">
                                        <v-chip v-for="tag in work.tags" :key="tag" size="small" :color="work.color"
                                            variant="outlined">
                                            {{ tag }}
                                        </v-chip>
                                    </v-chip-group>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Features Section -->
            <section id="about" class="section-spacing"
                style="background: linear-gradient(135deg, #F5F5F5 0%, #E8F4F8 100%);">
                <v-container>
                    <v-row>
                        <v-col class="text-center">
                            <h2 class="text-h3 font-weight-bold mb-4" style="color: var(--sw-ocean-deep);">
                                Why Choose Us
                            </h2>
                            <p class="text-h6 text-grey-darken-1">
                                We approach software development with meticulous care and a relentless pursuit of
                                excellence, ensuring top-tier quality in every delivery
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" offset="3">
                            <v-row>
                                <v-col>
                                    <div v-for="(feature, index) in features.slice(0, 3)" :key="index"
                                        class="feature-item d-flex flex-column mb-6 align-center text-center">
                                        <v-icon size="40" color="var(--sw-maritime-blue)" class="feature-icon mb-2">
                                            {{ feature.icon }}
                                        </v-icon>
                                        <div class="text-left w-100">
                                            <h4 class="text-h6 font-weight-bold mb-2 text-center"
                                                style="color: var(--sw-ocean-deep);">
                                                {{ feature.title }}
                                            </h4>
                                            <p class="text-body-1 text-grey-darken-1">
                                                {{ feature.description }}
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col>
                                    <div v-for="(feature, index) in features.slice(3)" :key="index + 3"
                                        class="feature-item d-flex flex-column mb-6 align-center text-center">
                                        <v-icon size="40" color="var(--sw-harbour-green)" class="feature-icon mb-2">
                                            {{ feature.icon }}
                                        </v-icon>
                                        <div class="text-left w-100">
                                            <h4 class="text-h6 font-weight-bold mb-2 text-center"
                                                style="color: var(--sw-ocean-deep);">
                                                {{ feature.title }}
                                            </h4>
                                            <p class="text-body-1 text-grey-darken-1">
                                                {{ feature.description }}
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="section-spacing" style="background: var(--sw-ocean-deep);">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" md="8" class="text-center">
                            <h2 class="text-h3 font-weight-bold text-white mb-4">
                                Let's Build Something Amazing
                            </h2>
                            <p class="text-h6 text-white mb-8" style="opacity: 0.9;">
                                Ready to transform your business? Get in touch with us today.
                            </p>

                            <v-row justify="center" class="mb-8">
                                <v-col cols="12" sm="6" md="4">
                                    <v-card class="pa-4" rounded="lg">
                                        <v-icon color="var(--sw-maritime-blue)" size="40"
                                            class="mb-2">mdi-email</v-icon>
                                        <h4 class="font-weight-bold mb-2">Our Email</h4>
                                        <p class="text-body-2">hello@codeturkey.uk</p>
                                        <hr class="my-2" />
                                        <p class="text-caption text-left font-weight-bold">Note: This is our only
                                            official email correspondence. Communications from any other email address
                                            do not represent our team or <a class="text-primary" href="https://codeturkey.uk">Code
                                                Turkey</a>.</p>
                                    </v-card>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-card class="pa-4" rounded="lg">
                                        <h4 class="font-weight-bold mb-2">Our Location</h4>
                                        <iframe
                                            src="https://www.openstreetmap.org/export/embed.html?bbox=103.6,1.2,104.0,1.5&layer=mapnik&marker=1.4361,103.7868"
                                            width="100%" height="300" style="border: none;"></iframe>
                                        <p class="text-body-2">
                                            Main Office (North West, Singapore)
                                        </p>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-btn href="mailto:hello@codeturkey.uk" size="x-large" color="var(--sw-sunset-coral)"
                                class="cta-button text-white font-weight-bold" rounded="lg">
                                <v-icon left class="mr-2">mdi-send</v-icon>
                                Send Message
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Footer -->
            <v-footer class="pa-8" color="var(--sw-plymouth-navy)">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <p class="text-white mb-4">
                                <strong>Code Turkey</strong>
                            </p>
                            <p class="text-white" style="opacity: 0.8;">
                                &copy; 2019 &mdash; {{ new Date().getFullYear() }} Code Turkey. All rights reserved.
                            </p>
                            <div class="mt-4">
                                <v-btn v-for="social in socials" :key="social.name" :href="social.link" icon
                                    variant="text" color="white" class="mx-2">
                                    <v-icon>{{ social.icon }}</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-footer>
        </v-main>
    </v-app>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const loading = ref(true)
    const drawer = ref(false)
    const scrolled = ref(false)
    const scrollProgress = ref(0)

    const navItems = ref([
        { title: 'Home', link: '#home' },
        { title: 'Services', link: '#services' },
        { title: 'About', link: '#about' },
        { title: 'Contact', link: '#contact' }
    ])

    const works = ref([
        {
            title: 'Web and Application Development',
            icon: 'mdi-laptop',
            color: '#0A4D68',
            description: 'Bespoke websites and web applications built with modern technologies and best practices.',
            tags: ['Vue.js', 'React', 'Node.js']
        },
        {
            title: 'Cloud Solutions Integration',
            icon: 'mdi-cloud-outline',
            color: '#64748B',
            description: 'Integrating your IT solutions into scalable cloud infrastructure for optimal performance.',
            tags: ['AWS', 'Azure', 'DigitalOcean', 'Google Cloud', 'Vultr']
        },
        {
            title: 'Bespoke Enterprise Solutions',
            icon: 'mdi-briefcase',
            color: '#088395',
            description: 'Customised enterprise solutions to meet your requirements within your business budget.',
            tags: ['ERP', 'HRMS', 'CRMS']
        },
        {
            title: 'Solution Consulting',
            icon: 'mdi-account-tie',
            color: '#2C7A51',
            description: 'Strategic guidance on selecting and implementing tailored technology solutions to address your unique business challenges and drive growth.',
            tags: ['Strategy', 'Consulting', 'Business Analysis', 'Technology Roadmap']
        },
        {
            title: 'AI-ML Integration',
            icon: 'mdi-robot-excited',
            color: '#05BFDB',
            description: 'Integrate the power of AI into your business',
            tags: ['GPT-5', 'Qwen', 'Deepseek', 'Gemma', 'Mistral']
        },
        {
            title: 'Data Analytics',
            icon: 'mdi-chart-line',
            color: '#F97316',
            description: 'Strategic data analytic solutions to boost your revenue and business growth',
            tags: ['Data Analytics', 'OLAP', 'Big Data']
        }
    ])

    const features = ref([
        {
            title: 'Global Reach, Local Expertise',
            icon: 'mdi-map-marker-radius',
            description: 'Combining international best practices with deep understanding of local business culture and market dynamics.'
        },
        {
            title: 'Rapid Delivery',
            icon: 'mdi-rocket-launch',
            description: 'Agile development process ensuring quick turnaround without compromising quality.'
        },
        {
            title: 'Future-Proof Tech',
            icon: 'mdi-star-shooting',
            description: 'Cutting-edge technologies that scale with your business growth.'
        },
        {
            title: 'Dedicated Technical Support',
            icon: 'mdi-lifebuoy',
            description: 'Dedicated and knowledgeable technical support team to keep your systems running smoothly.'
        },
        {
            title: 'Transparent Pricing',
            icon: 'mdi-currency-usd',
            description: 'Clear, honest pricing with no hidden fees or surprise costs.'
        },
        {
            title: 'Results Driven',
            icon: 'mdi-target',
            description: 'Focused on delivering measurable results and achieving your business goals.'
        }
    ])

    const socials = ref([
        { name: 'GitHub', icon: 'mdi-github', link: 'https://github.com/codeturkeydeveloper' },
    ])

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        scrolled.value = scrollTop > 50

        // Calculate scroll progress
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        scrollProgress.value = (scrollTop / windowHeight) * 100
    }

    onMounted(() => {
        // Hide loader after content is ready
        setTimeout(() => {
            loading.value = false
        }, 1000)

        // Scroll event listeners
        window.addEventListener('scroll', handleScroll)
        handleScroll()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<style>
    :root {
        --sw-ocean-deep: #0A4D68;
        --sw-maritime-blue: #088395;
        --sw-coastal-teal: #05BFDB;
        --sw-harbour-green: #2C7A51;
        --sw-cliff-grey: #64748B;
        --sw-sand-beige: #F5E6D3;
        --sw-sunset-coral: #F97316;
        --sw-plymouth-navy: #1E3A5F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Source Sans 3', sans-serif;
    }

    /* Animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes wave {

        0%,
        100% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(-25px);
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }

    .fade-in {
        animation: fadeIn 1s ease-out forwards;
    }

    /* Stagger animation delays */
    .delay-1 {
        animation-delay: 0.1s;
    }

    .delay-2 {
        animation-delay: 0.2s;
    }

    .delay-3 {
        animation-delay: 0.3s;
    }

    .delay-4 {
        animation-delay: 0.4s;
    }

    .delay-5 {
        animation-delay: 0.5s;
    }

    .delay-6 {
        animation-delay: 0.6s;
    }

    /* Sticky Navbar Styles */
    .sticky-nav {
        position: sticky;
        top: 0;
        z-index: 1000;
        backdrop-filter: blur(10px);
        background-color: rgba(10, 77, 104, 0.95) !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .nav-scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    /* Hero Section */
    .hero-section {
        background: linear-gradient(135deg, rgba(19, 39, 48, 0.8) 0%, rgba(19, 19, 19, 0.8) 100%), url('/assets/img/banner.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:
            radial-gradient(circle at 20% 50%, rgba(5, 191, 219, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(44, 122, 81, 0.1) 0%, transparent 50%);
        animation: wave 20s ease-in-out infinite;
    }

    .hero-content {
        position: relative;
        z-index: 2;
    }

    /* Work Cards */
    .work-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .work-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, var(--sw-maritime-blue), var(--sw-coastal-teal));
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 1;
    }

    /* .work-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(8, 131, 149, 0.3) !important;
    }

    .work-card:hover::before {
        opacity: 0.1;
    } */

    .work-card-content {
        position: relative;
        z-index: 2;
    }

    .work-card:hover .work-icon {
        transform: scale(1.1) rotate(5deg);
        color: var(--sw-coastal-teal);
    }

    .work-icon {
        transition: all 0.3s ease;
        font-size: 48px !important;
    }

    /* Features Section */
    .feature-item {
        transition: all 0.3s ease;
    }

    /* .feature-item:hover {
        transform: translateX(10px);
    } */

    .feature-icon {
        transition: all 0.3s ease;
    }

    .feature-item:hover .feature-icon {
        color: var(--sw-coastal-teal) !important;
        transform: scale(1.2);
    }

    /* CTA Button */
    .cta-button {
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .cta-button::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
        z-index: -1;
    }

    .cta-button:hover::before {
        width: 300px;
        height: 300px;
    }

    /* Location Badges */
    .location-badge {
        background: linear-gradient(135deg, var(--sw-harbour-green), var(--sw-maritime-blue));
        padding: 8px 16px;
        border-radius: 20px;
        color: white;
        font-weight: 500;
        display: inline-block;
        margin: 4px;
        animation: fadeIn 1s ease-out;
    }

    /* Smooth Scroll */
    html {
        scroll-behavior: smooth;
    }

    /* Mobile Responsive */
    @media (max-width: 600px) {
        .work-icon {
            font-size: 36px !important;
        }

        .hero-section {
            min-height: auto;
            padding: 60px 0;
        }
    }

    /* Loading Animation */
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--sw-ocean-deep);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .page-loader.hidden {
        opacity: 0;
        visibility: hidden;
    }

    /* Scroll Progress Bar */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--sw-coastal-teal), var(--sw-sunset-coral));
        z-index: 1001;
        transition: width 0.1s ease;
    }

    .section-spacing {
        min-height: 380px;
        padding: 12rem 0px;
    }
</style>