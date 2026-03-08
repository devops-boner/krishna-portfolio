import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return;

        const paths = svgRef.current.querySelectorAll('path, line, rect');

        // Set initial state
        gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            onEnter: () => {
                gsap.to(paths, {
                    strokeDashoffset: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'power2.inOut',
                    stagger: 0.1
                });
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="section" style={{ minHeight: '100vh', padding: 'var(--pad-page) 0' }}>
            <div style={{ padding: '0 var(--pad-page)', marginBottom: '4rem' }}>
                <h2 className="text-small">03 / EXPERIENCE</h2>
            </div>

            <div className="grid-layout" style={{ padding: '0 var(--pad-page)', alignItems: 'center' }}>

                {/* Text Content */}
                <div style={{ gridColumn: '1 / 6' }}>
                    <h3 className="text-large" style={{ marginBottom: '1rem' }}>RELIANCE INDUSTRIES PVT</h3>
                    <div className="text-medium" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Vocational Trainee <br />
                        <span className="text-small">MAY 2024 – JUNE 2024 · JAMNAGAR, GUJARAT</span>
                    </div>

                    <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.8 }}>
                        <li style={{ position: 'relative', paddingLeft: '2rem' }}>
                            <span style={{ position: 'absolute', left: 0, top: '10px', width: '10px', height: '1px', backgroundColor: 'var(--accent)' }}></span>
                            Containerized applications using Docker, streamlining deployment and environment consistency.
                        </li>
                        <li style={{ position: 'relative', paddingLeft: '2rem' }}>
                            <span style={{ position: 'absolute', left: 0, top: '10px', width: '10px', height: '1px', backgroundColor: 'var(--accent)' }}></span>
                            Implemented Docker Swarm to manage and scale multi-container applications efficiently.
                        </li>
                        <li style={{ position: 'relative', paddingLeft: '2rem' }}>
                            <span style={{ position: 'absolute', left: 0, top: '10px', width: '10px', height: '1px', backgroundColor: 'var(--accent)' }}></span>
                            Deployed and orchestrated applications using Kubernetes, handling pod scaling, services, and rollouts.
                        </li>
                        <li style={{ position: 'relative', paddingLeft: '2rem' }}>
                            <span style={{ position: 'absolute', left: 0, top: '10px', width: '10px', height: '1px', backgroundColor: 'var(--accent)' }}></span>
                            Wrote and optimized Dockerfiles and Kubernetes YAML files to automate deployment pipelines.
                        </li>
                    </ul>
                </div>

                {/* 3-Tier Architecture Visualization */}
                <div style={{ gridColumn: '7 / 13', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg
                        ref={svgRef}
                        viewBox="0 0 500 500"
                        style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))' }}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                    >
                        {/* Container Orchestration Visualization */}
                        <rect x="10" y="10" width="480" height="480" strokeDasharray="5,5" strokeOpacity="0.3" />
                        <text x="20" y="30" fill="var(--text-muted)" stroke="none" fontSize="12" fontFamily="var(--font-sans)">DOCKER & KUBERNETES</text>

                        {/* Docker Swarm / Kubernetes Cluster */}
                        <rect x="50" y="60" width="400" height="80" strokeOpacity="0.6" />
                        <text x="60" y="80" fill="var(--text-muted)" stroke="none" fontSize="10">DOCKER SWARM</text>
                        <rect x="100" y="75" width="80" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="140" y="100" fill="var(--accent)" stroke="none" fontSize="12" textAnchor="middle">CONTAINER</text>
                        <rect x="200" y="75" width="80" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="240" y="100" fill="var(--accent)" stroke="none" fontSize="12" textAnchor="middle">CONTAINER</text>
                        <rect x="300" y="75" width="80" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="340" y="100" fill="var(--accent)" stroke="none" fontSize="12" textAnchor="middle">CONTAINER</text>

                        {/* Kubernetes Pods */}
                        <rect x="50" y="200" width="400" height="120" strokeOpacity="0.6" />
                        <text x="60" y="220" fill="var(--text-muted)" stroke="none" fontSize="10">KUBERNETES CLUSTER</text>
                        <rect x="100" y="240" width="60" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="130" y="265" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">POD</text>
                        <rect x="180" y="240" width="60" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="210" y="265" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">POD</text>
                        <rect x="260" y="240" width="60" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="290" y="265" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">POD</text>
                        <rect x="340" y="240" width="60" height="40" fill="rgba(255,255,255,0.05)" />
                        <text x="370" y="265" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">POD</text>

                        {/* Services */}
                        <rect x="50" y="360" width="400" height="100" strokeOpacity="0.6" />
                        <text x="60" y="380" fill="var(--text-muted)" stroke="none" fontSize="10">SERVICES & INGRESS</text>
                        <circle cx="150" cy="420" r="25" fill="rgba(255,255,255,0.05)" />
                        <text x="150" y="430" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">SVC</text>
                        <circle cx="250" cy="420" r="25" fill="rgba(255,255,255,0.05)" />
                        <text x="250" y="430" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">INGRESS</text>
                        <circle cx="350" cy="420" r="25" fill="rgba(255,255,255,0.05)" />
                        <text x="350" y="430" fill="var(--accent)" stroke="none" fontSize="10" textAnchor="middle">SVC</text>

                        {/* Connections */}
                        {/* Swarm to K8s */}
                        <path d="M250 140 L 250 200" strokeWidth="1" strokeDasharray="2,2" />
                        <circle cx="250" cy="200" r="3" fill="var(--accent)" />

                        {/* Pods to Services */}
                        <path d="M130 280 L 130 320 L 150 320 L 150 360" strokeWidth="1" />
                        <circle cx="150" cy="360" r="3" fill="var(--accent)" />
                        <path d="M210 280 L 210 320 L 250 320 L 250 360" strokeWidth="1" />
                        <circle cx="250" cy="360" r="3" fill="var(--accent)" />
                        <path d="M290 280 L 290 320 L 350 320 L 350 360" strokeWidth="1" />
                        <circle cx="350" cy="360" r="3" fill="var(--accent)" />
                    </svg>
                </div>
            </div>
        </section>
    );
};
